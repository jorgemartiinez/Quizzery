import firebase from 'firebase/app';
import 'firebase/firestore';

// Get a Firestore instance
console.log(process.env);
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_apiKey,
  authDomain: process.env.VUE_APP_FIREBASE_authDomain,
  databaseURL: process.env.VUE_APP_FIREBASE_databaseURL,
  projectId: process.env.VUE_APP_FIREBASE_projectId,
  storageBucket: process.env.VUE_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.VUE_APP_FIREBASE_messagingSenderId,
  appId: process.env.VUE_APP_FIREBASE_appId,
  measurementId: process.env.VUE_APP_FIREBASE_measurementId
};

export const db = firebase.initializeApp(config).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
