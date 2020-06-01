<template>
  <div>
    <QuestionSingleAnswer
      v-for="(answer, index) in answers"
      :key="answer.id"
      :answer="answer"
      :index="index"
      @click="selectedAnswer(index)"
    />
  </div>
</template>

<script>
import QuestionSingleAnswer from './QuestionSingleAnswer.vue';
export default {
  components: {
    QuestionSingleAnswer
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
