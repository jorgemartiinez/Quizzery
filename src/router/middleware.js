// * LOGIN MIDDLEWARES
import Firebase from '@/firebase';

const isLoggedIn = (to, from, next) => {
  Firebase.isLoggedIn().then(user => {
    if (user) {
      return next();
    } else {
      return next({ name: 'login' });
    }
  });
};

const isNotLoggedIn = (to, from, next) => {
  Firebase.isLoggedIn().then(user => {
    if (user) {
      return next('/quizzes');
    } else {
      return next();
    }
  });
};

export { isLoggedIn, isNotLoggedIn };
