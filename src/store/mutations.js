export default {
  // * QUIZZ DATABASE ACTIONS
  SET_QUIZZIES(state, quizzies) {
    state.quizzes = [...quizzies];
  },
  ADD_QUIZZ(state, quizz) {
    state.quizzes.push(quizz);
  },
  SET_QUIZZ(state, quizz) {
    state.currentQuizz = { ...quizz };
  },

  DEL_QUIZZ(state, id) {
    state.quizzes = state.quizzes.filter(quizz => quizz.id !== id);
  },
  // * TRACK
  NEXT_INDEX(state) {
    state.quizzTrack.currentIndex++;
  },

  RESET_ACTUAL_QUIZZ(state) {
    state.currentQuizz = {};
    state.quizzTrack = {
      currentIndex: 0,
      errors: 0,
      questionsAnswered: 0,
      corrected: null,
      selectedAnswer: null
    };
  },

  // * ANSWERS
  RESET_ANSWERS(state) {
    state.quizzTrack.corrected = null;
    state.quizzTrack.selectedAnswer = null;
  },
  SELECT_ANSWER(state, index) {
    console.log('SELECT');
    state.quizzTrack.selectedAnswer = index;
  },
  CORRECT_ANSWER(state) {
    state.quizzTrack.corrected = true;
    state.quizzTrack.questionsAnswered++;
  },
  INCORRECT_ANSWER(state) {
    state.quizzTrack.corrected = false;
    state.quizzTrack.errors++;
    state.quizzTrack.questionsAnswered++;
  }
};
