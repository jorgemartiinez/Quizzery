<template>
  <div>
    <TheNav />
    <div class="container" style="padding-top: 10rem; padding-bottom: 10rem">
      <h1 class="heading-primary">Results</h1>
      <h2 class="heading-errors danger">Errors: {{ errors }}</h2>
      <h2 class="heading-errors success">
        Correct Answers: {{ totalQuestions - errors }}
      </h2>
      <h2 class="heading-secondary">Total questions {{ totalQuestions }}</h2>
      <h2>
        Percentage {{ ((totalQuestions - errors) / 2) * 100 }} % of correct
        answers.
      </h2>
      <br />
      <button class="btn" @click="goToQuizzes">Go to my Quizzes</button>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/layout/TheFooter.vue';
import TheNav from '@/components/layout/TheNav.vue';
export default {
  components: { TheNav, TheFooter },
  // * KEEP TRACK DATA
  computed: {
    totalQuestions() {
      return this.$store.getters.getTotalQuestions;
    },
    errors() {
      return this.$store.getters.getTotalErrors;
    }
  },

  methods: {
    goToQuizzes() {
      this.$store.dispatch('resetActualQuizz');
      this.$router.push('/quizzes');
    }
  }
};
</script>
