<template>
  <div class="quizz">
    <TheNav />
    <div class="container">
      <h1 class="heading-quizz u-mt-md">
        Current Quizz <br />{{ quizz.name }}
      </h1>
      <QuestionBox v-if="Object.keys(quizz).length > 0" />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNav from '../components/TheNav.vue';
import TheFooter from '../components/TheFooter.vue';
import QuestionBox from '../components/quizz/QuestionBox.vue';
export default {
  components: {
    QuestionBox,
    TheFooter,
    TheNav
  },
  created() {
    this.$store.dispatch('fetchQuizz', this.id);
    // this.$store.dispatch('resetActualQuizz');
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
