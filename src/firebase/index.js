import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
firebase.initializeApp(config);

export default {
  auth: firebase.auth(),
  db: firebase.firestore(),
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
    // .then(function(result) {
    //   console.log(result);
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = result.credential.accessToken;
    //   var user = result.user;
    //   console.log('Your token', token);
    //   console.log('Your user', user);
    // })
    // .catch(function(error) {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   const email = error.email;
    //   const credential = error.credential;
    //   console.log(errorCode, errorMessage, email, credential);
    // });
  },
  logout() {
    return firebase.auth().signOut();
  },
  isLoggedIn() {
    return new Promise(resolve => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  }
};
