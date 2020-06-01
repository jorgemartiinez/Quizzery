<template>
  <div>
    <form @submit.prevent="saveQuizz" class="form">
      <h3 class="heading-tertiary">Quizz info</h3>
      <label class="label">Quizz name</label>
      <input
        type="text"
        name="quizz-name"
        v-model="quizz.name"
        class="input"
        minlength="3"
        required
      />
      <br />
      <label class="label">Quizz description</label>
      <input
        type="text"
        name="quizz-description"
        v-model="quizz.description"
        class="input"
        minlength="3"
        required
      />
      <h3 class="heading-tertiary">Questions</h3>
      <div v-for="(question, i) in quizz.questions" :key="i">
        <label class="label">Question {{ i + 1 }}</label>
        <input
          type="text"
          required
          minlength="3"
          class="input"
          v-model="quizz.questions[i].question"
          :name="`question-${i}[question]`"
        />
        <button
          class="form-action-button"
          v-if="i !== 0"
          @click="deleteQuestion(i)"
          title="Delete this question"
        >
          <span>X</span>
        </button>
        <br />
        <br />
        <label style="margin-left: 10rem;" class="label">
          <strong>Answers</strong>
        </label>
        <div
          v-for="(answer, k) in quizz.questions[i].answers"
          :key="k"
          style="margin-left: 10rem;"
        >
          <label class="label">Answer {{ k + 1 }}</label>
          <input
            type="text"
            :name="`question-${i}-answer-${k}[name]`"
            class="input"
            v-model="quizz.questions[i].answers[k].answer"
            required
          />
          <button
            class="form-action-button"
            v-if="k !== 0 && k !== 1"
            @click="deleteAnswer(i, k)"
            title="Delete this answer"
          >
            <span>X</span>
          </button>
          <button
            class="form-action-button"
            title="Mark this answer as correct"
            @click="markCorrectAnswer(i, k)"
            v-if="answer.correct == false"
          >
            <span> &#10004; </span>
          </button>
          <span
            v-if="quizz.questions[i].answers[k].correct"
            class="form-correct success-bg"
          >
            Marked as the correct one
          </span>
        </div>
        <button
          class="btn btn--outline"
          style="margin-left: 10rem; margin-bottom: 3rem"
          @click="addNewAnswer(i)"
        >
          Add new Answer
        </button>
        <br />
        <button
          class="btn btn--outline"
          @click.prevent="addNewQuestion"
          style="margin-bottom: 3rem"
        >
          Add New Question
        </button>
        <br />
      </div>
      <button class="btn btn--full" type="submit">Create Quizz</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizz: { ...this.initialData() }
    };
  },
  methods: {
    initialData() {
      return {
        created: new Date(),
        name: '',
        questions: [
          {
            question: '',
            answers: [
              {
                answer: '',
                correct: false
              },
              {
                answer: '',
                correct: true
              }
            ]
          }
        ],
        user: ''
      };
    },

    // * QUESTIONS METHODS
    async saveQuizz() {
      this.$swal({
        title: 'Are you sure?',
        text: 'Your quizz will be saved',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, save it!'
      }).then(async ({ isConfirmed }) => {
        if (isConfirmed) {
          try {
            await this.$store.dispatch('addQuizz', this.quizz);
            this.$swal({
              title: 'Your quizz has been saved.',
              icon: 'success'
            });
            this.$router.push('/quizzes');
          } catch (err) {
            console.log(err);
            this.$swal({
              title: 'Error ocurred saving your quizz. Please try again.',
              icon: 'error'
            });
          }
        }
      });
    },
    addNewQuestion() {
      this.quizz.questions.push(this.initialData().questions[0]);
    },
    deleteQuestion(indexQuestion) {
      this.quizz.questions.splice(indexQuestion, 1);
    },
    // * ANSWER METHODS
    addNewAnswer(indexQuestion) {
      this.quizz.questions[indexQuestion].answers.push(
        this.initialData().questions[0].answers[0]
      );
    },
    deleteAnswer(indexQuestion, indexAnswer) {
      this.quizz.questions[indexQuestion].answers.splice(indexAnswer, 1);
    },
    markCorrectAnswer(indexQuestion, indexAnswer) {
      const answers = this.quizz.questions[indexQuestion].answers;
      // * PONER TODAS LAS RESPUESTAS DE LA PREGUNTA A FALSE
      answers.map(answer => (answer.correct = false));
      answers[indexAnswer].correct = true;
    }
  }
};
</script>

<style></style>
