<template>
  <div class="container">
    {{ $route.params.id }} {{ $route.params.quizz }}
    <div v-if="Object.keys(quizz).length > 0">
      {{ selectedAnswers.length }}/{{ totalQuestions }} answered
      <br />
      <div v-if="submit">{{ correct }} correct {{ errors }} errors</div>
      <h1>{{ quizz.name }}</h1>
      <div v-for="question in quizz.questions" :key="question.id">
        {{ question.question }}
        <div
          v-for="(answer, answerIndex) in question.answers"
          :key="answer.answer"
        >
          <p
            @click="selectAnswer(question.id, answerIndex)"
            :class="answerClass(question.id, answerIndex)"
          >
            {{ answer.answer }}
          </p>
          <br />
        </div>
        <p v-if="submit">{{ checkAndShow(question.id) }}</p>
      </div>

      <button
        @click="sendQuizz"
        id="submit-btn"
        :disabled="selectedAnswers.length < totalQuestions"
      >
        Submit
      </button>
      <button @click="resetQuizz" id="reset-btn">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchQuizz', this.id);
  },
  data() {
    return {
      selectedAnswers: [],
      errors: 0,
      correct: 0,
      submit: false
    };
  },
  computed: {
    quizz() {
      return this.$store.state.currentQuizz;
    },
    totalQuestions() {
      return this.$store.state.currentQuizz.questions.length;
    },
    id() {
      return this.$route.params.id;
    }
  },

  methods: {
    // * Al seleccionar una respuesta
    selectAnswer(questionId, answerIndex) {
      // * BUSCAMOS SI LA PREGUNTA YA TIENE ALGUNA RESPUESTA GUARDADA
      const find = this.selectedAnswers.find(
        answer => answer.question == questionId
      );

      if (find) {
        // * ESTA PREGUNTA YA TIENE UNA RESPUESTA, CAMBIALA A LA NUEVA SELECCIONADA
        find.answer = answerIndex;
      } else {
        // * LA PREGUNTA TIENE NINGUNA RESPUESTA, AÑADE UNA NUEVA
        this.selectedAnswers.push({
          question: questionId,
          answer: answerIndex.toString()
        });
      }
    },
    // * Al enviar un quizz
    sendQuizz() {
      //TODO preguntar si esta seguro de querer enviarlo
      this.submit = true;
      for (let question of this.quizz.questions) {
        // * loop en las preguntas del quizz
        for (let answer of this.selectedAnswers) {
          // * loop en las respuestas guardadas (tienen que tener la misma length las dos array)
          if (question.id == answer.question) {
            // * si la pregunta tiene el mismo id que la pregunta guardada en respuestas
            const isCorrect = question.answers[answer.answer].correct; // * comprobamos si la respuesta es correcta
            if (isCorrect) {
              console.log(
                `La pregunta ${question.question} está bien resuelta ${
                  question.answers[answer.answer].answer
                }`
              );
              this.correct++;
            } else {
              console.log(
                `La pregunta ${question.question} está mal resuelta ${
                  question.answers[answer.answer].answer
                }`
              );
              this.errors++;
            }
          }
        }
      }
      console.log(
        'Correct questions',
        this.correct,
        'wrong questions',
        this.errors
      );
    },
    // * TOGGLE STYLE CLASS TO EACH LINE
    answerClass(questionId, answerIndex) {
      if (!this.submit) {
        const find = this.selectedAnswers.find(
          answer =>
            answer.question == questionId && answer.answer == answerIndex
        );
        if (find) {
          return 'selected';
        }
      } else {
        for (let question of this.quizz.questions) {
          if (question.answers[answerIndex]) {
            const isCorrect = question.answers[answerIndex].correct;
            if (isCorrect) {
              return 'correct';
            } else {
              return 'incorrect';
            }
          }
        }
      }
    },

    checkAndShow(questionId) {
      const answerSelected = this.selectedAnswers.find(
        answer => answer.question == questionId
      );
      for (let question of this.quizz.questions) {
        const isCorrect = question.answers[answerSelected.answer].correct;
        if (isCorrect) {
          return 'Respuesta correcta';
        }
        if (question.id == questionId) {
          const whichWas = question.answers.find(answer => answer.correct);
          console.log(
            `Respuesta incorrecta, la correcta respuesta era ${whichWas.answer}`
          );
          return `Respuesta incorrecta, la correcta respuesta era ${whichWas.answer}`;
        }
      }
    },

    // * RESET QUIZZ
    resetQuizz() {
      this.selectedAnswers = [];
      this.submit = false;
      this.errors = 0;
      this.correct = 0;
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: lightgray;
}
.correct {
  background-color: lightgreen;
}
.incorrect {
  background-color: red;
}
</style>
