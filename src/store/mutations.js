export default {
  // * QUIZZ DATABASE ACTIONS
  SET_QUIZZIES(state, quizzies) {
    state.quizzes = [...quizzies];
  },
  ADD_QUIZZ(state, quizz) {
    state.quizzies = [...state.quizzies, quizz];
  },
  SET_QUIZZ(state, quizz) {
    state.currentQuizz = { ...quizz };
  },

  // * TRACK
  NEXT_INDEX(state) {
    state.quizzTrack.currentIndex++;
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
