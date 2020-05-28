export default {
  getTotalQuestions(state) {
    return state.currentQuizz.questions.length;
  },
  getTotalErrors(state) {
    return state.quizzTrack.errors;
  }
};
