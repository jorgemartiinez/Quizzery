<template>
  <div class="container">
    <h1>{{ quizz.name }}</h1>
    <hr />
    <QuestionBox v-if="Object.keys(quizz).length > 0" />
  </div>
</template>

<script>
import QuestionBox from '../components/quizz/QuestionBox.vue';
export default {
  components: {
    QuestionBox
  },
  created() {
    this.$store.dispatch('fetchQuizz', this.id);
  },
  computed: {
    quizz() {
      return this.$store.state.currentQuizz;
    },
    id() {
      return this.$route.params.id;
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
