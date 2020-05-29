<template>
  <div>
    <p class="questionBox__solution">{{ solution }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correct: this.question.answers[this.selectedAnswer].correct
    };
  },
  computed: {
    solution() {
      if (this.question.answers[this.selectedAnswer].correct) {
        return `Your answer is correct. Well done!`;
      }
      const correctAnswer = this.question.answers.find(
        answer => answer.correct
      );
      console.log(correctAnswer);
      return `Oops! The correct answer was '${correctAnswer.answer}'. Keep trying.`;
    }
  },
  props: {
    question: Object,
    selectedAnswer: Number
  }
};
</script>
