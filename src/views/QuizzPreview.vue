<template>
  <div>
    <h1>Let's preview your quizz</h1>
    {{ newQuizz }}
    <button>Create</button>
  </div>
</template>

<script>
export default {
  computed: {
    newQuizz() {
      return this.$store.state.newQuizz;
    }
  }
};
</script>

<style></style>
