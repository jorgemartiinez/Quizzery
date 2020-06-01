import Firebase from '@/firebase';
import uniqid from 'uniqid';
import * as firebase from 'firebase';

// data for trial
const newQuizz = {
  name: 'Mi primer Quizz',
  created: new Date(),
  questions: [
    {
      id: uniqid(),
      question: '¿Cuantos son 2 más 2?',
      answers: [
        {
          answer: '4',
          correct: true
        },
        {
          answer: '5',
          correct: false
        }
      ]
    },
    {
      id: uniqid(),
      question: '¿Cuantas vidas tiene un gato?',
      answers: [
        {
          answer: '7',
          correct: true
        },
        {
          answer: '8',
          correct: false
        },
        {
          answer: '9',
          correct: false
        }
      ]
    }
  ]
};

// Collection names
const QUIZZIES_COLLECTION = 'quizzes';

export default {
  // * GET THE QUIZZIES ON START
  async fetchQuizzies({ commit }) {
    const snapshot = await Firebase.db
      .collection(QUIZZIES_COLLECTION)
      .where('user', '==', firebase.auth().currentUser.uid)
      .get();
    const quizzes = snapshot.docs.map(doc => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    }, []);
    commit('SET_QUIZZIES', quizzes);
  },

  // * GET SINGLE QUIZZ

  async fetchQuizz({ commit }, quizzId) {
    const doc = await Firebase.db
      .collection(QUIZZIES_COLLECTION)
      .doc(quizzId)
      .get();
    if (doc.exists) {
      console.log('The document exists');
      commit('SET_QUIZZ', doc.data());
    }
  },
  // * ADD A QUIZZ RECIEVING AND OBJECT
  async addQuizz({ commit }, quizz) {
    quizz.user = await firebase.auth().currentUser.uid;
    quizz.questions.map(question => {
      question.id = uniqid();
    });
    await Firebase.db.collection(QUIZZIES_COLLECTION).add(quizz);
    commit('ADD_QUIZZ', newQuizz);
  },

  // * DELETE A QUIZZ

  async delQuizz({ commit }, id) {
    await Firebase.db
      .collection(QUIZZIES_COLLECTION)
      .doc(id)
      .delete()
      .then(() => {
        commit('DEL_QUIZZ', id);
      });
  },

  // * UPDATE A QUIZZ RECIEVING A FULL QUIZZ OBJECT
  async updateQuizz({ commit }, updatedQuizz) {
    await Firebase.db
      .collection(QUIZZIES_COLLECTION)
      .doc(updatedQuizz.id)
      .add(updatedQuizz);
    commit('UPDATE_QUIZZ', updatedQuizz);
  },

  // * TRACK QUIZZ ON EXECUTION

  nextQuizz({ commit }) {
    commit('NEXT_INDEX');
  },

  resetActualQuizz({ commit }) {
    commit('RESET_ACTUAL_QUIZZ');
  },

  // * ANSWER ACTIONS

  resetAnswers({ commit }) {
    commit('RESET_ANSWERS');
  },

  selectAnswer({ commit }, index) {
    commit('SELECT_ANSWER', index);
  },

  correctAnswer({ commit }) {
    commit('CORRECT_ANSWER');
  },

  incorrectAnswer({ commit }) {
    commit('INCORRECT_ANSWER');
  },

  // * CREATE QUIZZ ACTIONS

  FILL_QUIZZ({ commit }, quizz) {
    quizz.questions.map(question => (question.id = uniqid()));
    commit('FILL_QUIZZ', quizz);
  }
};
