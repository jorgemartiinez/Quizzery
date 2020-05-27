import { db } from '../firebase/db';
import _ from 'lodash';

// data for trial
const newQuizz = {
  name: 'Mi primer Quizz',
  created: new Date(),
  questions: [
    {
      id: _.uniqueId(),
      question: '¿Cuantos son 2 más 2?',
      correct_answer: '4',
      incorrect_answers: ['Tu padre', '5']
    },
    {
      id: _.uniqueId(),
      question: '¿Cuantas vidas tiene un gato?',
      correct_answer: '7',
      incorrect_answers: ['5', '8']
    }
  ]
};

// Collection names
const QUIZZIES_COLLECTION = 'quizzes';

export default {
  // * GET THE QUIZZIES ON START
  async fetchQuizzies({ commit }) {
    console.log('fetch Quizzies');
    try {
      const snapshot = await db.collection(QUIZZIES_COLLECTION).get();
      const quizzes = snapshot.docs.map(doc => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      commit('SET_QUIZZIES', quizzes);
    } catch (err) {
      console.log('error ocurred', err);
    }
  },

  async addQuizz({ commit }) {
    try {
      const addDoc = await db.collection(QUIZZIES_COLLECTION).add(newQuizz);
      commit('ADD_QUIZZ', newQuizz);
      console.log(addDoc);
    } catch (err) {
      console.log('error ocurred', err);
    }
  },

  async updateQuizz({ commit }, updatedQuizz) {
    try {
      const updatedDoc = await db
        .collection(QUIZZIES_COLLECTION)
        .doc(updatedQuizz.id)
        .add(updatedQuizz);
      commit('UPDATE_QUIZZ', updatedQuizz);
      console.log(updatedDoc);
    } catch (err) {
      console.log('error ocurred', err);
    }
  }
};
