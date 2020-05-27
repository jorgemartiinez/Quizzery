export default {
  SET_QUIZZIES(state, quizzies) {
    state.quizzes = [...quizzies];
  },
  ADD_QUIZZ(state, quizz) {
    state.quizzies = [...state.quizzies, quizz];
  }
};
