<template>
  <div>
    <p
      class="questionBox__answer"
      :class="answerClass()"
      @click="selectedAnswer(index)"
    >
      {{ answer.answer }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    answer: Object,
    index: Number
  },
  computed: {
    selected() {
      return this.$store.state.quizzTrack.selectedAnswer;
    },
    corrected() {
      return this.$store.state.quizzTrack.corrected;
    }
  },
  methods: {
    selectedAnswer(index) {
      if (this.corrected == null) {
        this.$store.dispatch('selectAnswer', index);
      }
    },
    answerClass() {
      console.log(this.index, this.selected);
      if (this.index == this.selected && this.corrected == null) {
        return 'selected';
      } else if (this.corrected !== null) {
        if (this.answer.correct) {
          return 'success-bg';
        }
        return 'danger-bg';
      }
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: lightblue;
}
</style>
