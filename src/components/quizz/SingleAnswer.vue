<template>
  <div>
    <p :class="answerClass()" @click="selectedAnswer(index)">
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
      this.$store.dispatch('selectAnswer', index);
    },
    answerClass() {
      console.log(this.index, this.selected);
      if (this.index == this.selected && this.corrected == null) {
        return 'selected';
      } else if (this.corrected !== null) {
        if (this.answer.correct) {
          return 'success';
        }
        return 'wrong';
      }
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: lightblue;
}

.success {
  background-color: lightgreen;
}

.wrong {
  background-color: red;
}
</style>
