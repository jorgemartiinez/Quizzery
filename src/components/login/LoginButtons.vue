<template>
  <div class="login-buttons container">
    <h1 class="heading-primary">Login</h1>
    <h2 class="heading-secondary">
      We missed you! It's nice to have you back.
    </h2>
    <p class="paragraph u-mb-m">
      You can log in which whatever of the options below.
    </p>
    <button @click="login" class="btn btn--outline">
      <img
        src="@/assets/img/google-icon.svg"
        alt="Log in with google"
        title="Login with Google"
        width="20"
      />Login with Google
    </button>
  </div>
</template>

<script>
import Firebase from '@/firebase';

export default {
  methods: {
    async login() {
      Firebase.login()
        .then(result => {
          console.log(result);
          this.$router.push('/quizzes');
        })
        .catch(err => console.log('err on login', err));
    }
  }
};
</script>

<style></style>
