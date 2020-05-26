import { db } from '../firebase/db';

export default {
  async fetchQuizzies({ commit }) {
    console.log('fetch Quizzies');
    try {
      const snapshot = await db.collection('quizzes').onSnapshot();
      const quizzes = snapshot.docs.map(doc => doc.data());
      commit('SET_QUIZZIES', quizzes);
    } catch (err) {
      console.log('error ocurred', err);
    }
  }
};
