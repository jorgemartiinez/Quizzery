import firebase from 'firebase/app';
import 'firebase/firestore';

// Get a Firestore instance

const config = {
  apiKey: 'AIzaSyAX_TuqYh2G-ELEzkqDAQ_e9HOY1XEXMfc',
  authDomain: 'quizzery-6abfb.firebaseapp.com',
  databaseURL: 'https://quizzery-6abfb.firebaseio.com',
  projectId: 'quizzery-6abfb',
  storageBucket: 'quizzery-6abfb.appspot.com',
  messagingSenderId: '635279619787',
  appId: '1:635279619787:web:d2a477889a915dc6f80d4e',
  measurementId: 'G-XZTYFKF79E'
};

export const db = firebase.initializeApp(config).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
