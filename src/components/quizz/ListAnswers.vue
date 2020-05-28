<template>
  <div>
    <SingleAnswer
      v-for="(answer, index) in answers"
      :key="answer.id"
      :answer="answer"
      :index="index"
      @click="selectedAnswer(index)"
    />
  </div>
</template>

<script>
import SingleAnswer from './SingleAnswer.vue';
export default {
  components: {
    SingleAnswer
  },
  computed: {
    answers() {
      return this.$store.state.currentQuizz.questions[
        this.$store.state.quizzTrack.currentIndex
      ].answers;
    }
  },
  methods: {}
};
</script>
