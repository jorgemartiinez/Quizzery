export default {
  getTotalQuestions(state) {
    if (state.currentQuizz) {
      return state.currentQuizz.questions.length;
    } else {
      return 0;
    }
  },
  getTotalErrors(state) {
    return state.quizzTrack.errors;
  }
};
