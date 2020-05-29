<template>
  <nav class="nav">
    <h1 class="heading-title pointer" @click="goToQuizzes">Quizzery [Demo]</h1>
    <div class="nav__links">
      <a class="nav__link" @click="logout" v-if="isLoggedIn" title="log out">
        Logout
      </a>
    </div>
  </nav>
</template>

<script>
import Firebase from '@/firebase';
export default {
  data() {
    return { isLoggedIn: false };
  },
  created() {
    Firebase.isLoggedIn().then(user => {
      if (user) {
        this.isLoggedIn = true;
      }
    });
  },
  methods: {
    async logout() {
      Firebase.logout().then(result => this.$router.push('/'));
    },
    goToQuizzes() {
      this.$router.push('/quizzes');
    }
  }
};
</script>
