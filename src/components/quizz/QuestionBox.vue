<template>
  <div>
    <div class="questionBox">
      <h1>{{ question.question }}</h1>
      <div class="questionBox__stats">
        <span>{{ questionsAnswered }}/{{ totalQuestions }} total answered</span>
      </div>
      <ListAnswers />
      <QuestionSolution
        v-if="corrected !== null"
        :question="question"
        :selectedAnswer="selectedAnswer"
      />
      <button
        class="btn"
        @click="nextIndex"
        :disabled="
          selectedAnswer == null ||
            (currentIndex == totalQuestions - 1 && corrected !== null)
        "
        :title="
          selectedAnswer == null ? 'You must answer before continue' : 'Go next'
        "
      >
        Correct and Go to Next Question
      </button>
      <button
        class="btn"
        v-if="currentIndex == totalQuestions - 1 && corrected !== null"
        @click="send"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script>
import QuestionSolution from './QuestionSolution.vue';
import ListAnswers from './ListAnswers.vue';
export default {
  components: {
    ListAnswers,
    QuestionSolution
  },
  computed: {
    question() {
      return this.$store.state.currentQuizz.questions[
        this.$store.state.quizzTrack.currentIndex
      ];
    },

    // * KEEP TRACK DATA
    totalQuestions() {
      return this.$store.getters.getTotalQuestions;
    },
    corrected() {
      return this.$store.state.quizzTrack.corrected;
    },
    selectedAnswer() {
      return this.$store.state.quizzTrack.selectedAnswer;
    },
    currentIndex() {
      return this.$store.state.quizzTrack.currentIndex;
    },
    questionsAnswered() {
      return this.$store.state.quizzTrack.questionsAnswered;
    }
  },
  methods: {
    nextIndex() {
      if (this.corrected == null) {
        const isCorrect = this.question.answers[this.selectedAnswer].correct;
        isCorrect
          ? this.$store.dispatch('correctAnswer', this.selectedAnswer)
          : this.$store.dispatch('incorrectAnswer', this.selectedAnswer);
      } else {
        this.$store.dispatch('resetAnswers');
        this.$store.dispatch('nextQuizz');
      }
    },
    send() {
      this.$router.push(`/quizz/${this.$route.params.id}/end`);
    }
  }
};
</script>
