<template>
  <div>
    <div v-for="question in quizz.questions" :key="question.id">
      {{ question.question }}
      <p v-if="submit">{{ checkAndShow(question.id) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  computed: {
    questions() {
      return this.$store.currentQuizz.questions;
    }
  }
};
</script>
