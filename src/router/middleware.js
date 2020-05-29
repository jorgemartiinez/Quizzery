// * LOGIN MIDDLEWARES

import Firebase from '@/firebase';

const isLoggedIn = (to, from, next) => {
  console.log('check if this shit works');
  Firebase.isLoggedIn().then(user => {
    if (user) {
      console.log('loggedin', user);
      return next();
    } else {
      // ! SHOW NOT LOGGED IN MESSAGE
      console.log('not logged in');
      return next({ name: 'login' });
    }
  });
};

const isNotLoggedIn = (to, from, next) => {
  Firebase.isLoggedIn().then(user => {
    if (user) {
      console.log('loggedin', user);
      return next('/quizzes');
    } else {
      // ! SHOW ALREADY LOGGED IN MESSAGE
      console.log('not logged in');
      return next();
    }
  });
};

export { isLoggedIn, isNotLoggedIn };
