<template>
  <div>
    <h1>Results</h1>
    <h2>Errors: {{ errors }}</h2>
    <h2>Correct Answers: {{ totalQuestions - errors }}</h2>
    <h2>Total questions {{ totalQuestions }}</h2>
    <h2>
      Percentage {{ ((totalQuestions - errors) / 2) * 100 }} % of correct
      answers. Espabila tio...
    </h2>
  </div>
</template>

<script>
export default {
  // * KEEP TRACK DATA
  computed: {
    totalQuestions() {
      return this.$store.getters.getTotalQuestions;
    },
    errors() {
      return this.$store.getters.getTotalErrors;
    }
  }
};
</script>
