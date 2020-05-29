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
    console.log('fetch Quizzies', firebase.auth().currentUser.uid);
    try {
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
    } catch (err) {
      console.log('error ocurred', err);
    }
  },

  // * GET SINGLE QUIZZ

  async fetchQuizz({ commit }, quizzId) {
    try {
      const doc = await Firebase.db
        .collection(QUIZZIES_COLLECTION)
        .doc(quizzId)
        .get();

      if (doc.exists) {
        console.log('The document exists');
        console.log('data recieved', doc.data());
        commit('SET_QUIZZ', doc.data());
      } else {
        console.log('document doesnt exist boooooi');
      }
    } catch (e) {
      console.log(e);
    }
  },

  // * ADD A QUIZZ RECIEVING AND OBJECT
  async addQuizz({ commit }, quizz) {
    try {
      const addDoc = await Firebase.db
        .collection(QUIZZIES_COLLECTION)
        .add(quizz);
      commit('ADD_QUIZZ', newQuizz);
      console.log(addDoc);
    } catch (err) {
      console.log('error ocurred', err);
    }
  },

  // * DELETE A QUIZZ

  async delQuizz({ commit }, id) {
    const removeDoc = await Firebase.db
      .collection(QUIZZIES_COLLECTION)
      .doc(id)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!');
        commit('DEL_QUIZZ', id);
      })
      .catch(function(error) {
        console.error('Error removing document: ', error);
      });
  },

  // * UPDATE A QUIZZ RECIEVING A FULL QUIZZ OBJECT
  async updateQuizz({ commit }, updatedQuizz) {
    try {
      const updatedDoc = await Firebase.db
        .collection(QUIZZIES_COLLECTION)
        .doc(updatedQuizz.id)
        .add(updatedQuizz);
      commit('UPDATE_QUIZZ', updatedQuizz);
      console.log(updatedDoc);
    } catch (err) {
      console.log('error ocurred', err);
    }
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

  fillBasicInfo({ commit }, info) {
    commit('FILL_BASIC_QUIZZ_INFO', info);
  },
  fillQuestions({ commit }, questions) {
    questions.map(question => (question.id = uniqid()));
    commit('FILL_QUESTIONS', questions);
  }
};
