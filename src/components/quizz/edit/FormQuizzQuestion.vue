<template>
  <div>
    <h2>Create your question dude</h2>
    <button class="btn btn--outline" @click="goBack">Go Back</button>
    <form @submit.prevent="saveQuestions">
      <div v-for="(question, i) in questions" :key="i">
        <label class="label">Question</label>
        <input
          type="text"
          required
          minlength="3"
          class="input"
          v-model="questions[i].question"
          :name="`question-${i}[question]`"
        />
        <br />
        <br />
        <label style="margin-left: 120px;"><strong>Answers</strong></label>
        <div
          v-for="(answer, k) in questions[i].answers"
          :key="k"
          style="margin-left: 120px;"
        >
          <label>Answer {{ k + 1 }}</label>
          <input
            type="text"
            :name="`question-${i}-answer-${k}[name]`"
            v-model="questions[i].answers[k].answer"
            required
          />
          <p v-if="questions[i].answers[k].correct">
            Marked as the correct one
          </p>
          <button
            class="btn"
            v-if="k !== 0 && k !== 1"
            @click="deleteAnswer(i, k)"
          >
            X
          </button>
          <button
            title="Mark this answer as correct"
            @click="markCorrectAnswer(i, k)"
            v-if="answer.correct == false"
          >
            &#10004;
          </button>
        </div>
        <button
          class="btn btn--outline"
          style="margin-left: 120px;"
          @click="addNewAnswer(i)"
        >
          Add new Answer
        </button>
        <br />
        <button class="btn btn--full" @click="addNewQuestion">
          Add New Question
        </button>
      </div>
      <button class="btn btn--full" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [this.initialData()]
    };
  },
  methods: {
    goBack() {
      this.$emit('prev');
    },
    initialData() {
      return {
        id: '',
        question: '',
        answers: [
          {
            answer: '',
            correct: false
          },
          {
            answer: '',
            correct: false
          }
        ]
      };
    },

    // * QUESTIONS METHODS
    saveQuestions() {
      // ! COMPROBAR QUE CADA PREGUNTA TENGA UNA RESPUESTA CORRECTA
      this.$store.dispatch('fillQuestions', this.questions);
      this.$router.push('/quizzes/create/preview');
    },
    addNewQuestion() {
      this.questions.push(this.initialData());
    },

    // * ANSWER METHODS
    addNewAnswer(indexQuestion) {
      this.questions[indexQuestion].answers.push(this.initialData().answers[0]);
    },
    deleteAnswer(indexQuestion, indexAnswer) {
      this.questions[indexQuestion].answers.splice(indexAnswer, 1);
    },
    markCorrectAnswer(indexQuestion, indexAnswer) {
      const answers = this.questions[indexQuestion].answers;
      // * PONER TODAS LAS RESPUESTAS DE LA PREGUNTA A FALSE
      answers.map(answer => (answer.correct = false));
      answers[indexAnswer].correct = true;
    }
  }
};
</script>

<style></style>
