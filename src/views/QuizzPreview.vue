<template>
  <div>
    <h1>Let's preview your quizz</h1>
    {{ newQuizz }}
    <button @click="createQuizz">Create</button>
  </div>
</template>

<script>
export default {
  computed: {
    newQuizz() {
      return this.$store.state.newQuizz;
    }
  },
  methods: {
    createQuizz() {
      if (
        window.confirm(
          'Are you sure that you want to create a quizz with this data?'
        )
      ) {
        this.$store.dispatch('addQuizz', this.newQuizz);
        this.$router.push('/quizzes');
      }
    }
  }
};
</script>

<style></style>
