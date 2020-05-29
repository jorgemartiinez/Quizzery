export default {
  quizzes: [],
  quizzTrack: {
    currentIndex: 0,
    errors: 0,
    questionsAnswered: 0,
    corrected: null, // * POR DEFECTO AL ESTAR NULL SABREMOS QUE LA PREGUNTA NO HA SIDO RESPONDIDA
    selectedAnswer: null
  },
  newQuizz: {},
  currentQuizz: {}
};
