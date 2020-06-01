<template>
  <div class="quizz">
    <TheNav />
    <GoBackButton />
    <div class="container">
      <h1 class="heading-quizz u-mt-md">
        {{ quizz.name }}
      </h1>
      <p class="paragraph">{{ quizz.description }}</p>
      <QuestionBox v-if="Object.keys(quizz).length > 0" />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import GoBackButton from '@/components/shared/GoBackButton.vue';
import TheNav from '@/components/layout/TheNav.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import QuestionBox from '../components/quizz/QuestionBox.vue';
export default {
  components: {
    QuestionBox,
    TheFooter,
    TheNav,
    GoBackButton
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
