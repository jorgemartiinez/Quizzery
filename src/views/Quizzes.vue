<template>
  <div class="container">
    <TheNav />
    <br /><br /><br />
    <button class="btn" @click="goToCreate()">Create new</button>
    <div v-if="quizzes.length > 0">
      <div v-for="quizz in quizzes" :key="quizz.id">
        <p>
          <router-link :to="{ path: '/quizz/' + quizz.id }">{{
            quizz.name
          }}</router-link>
        </p>
        <p>Created by {{ quizz.user }} - user id</p>
        <hr />
      </div>
    </div>
    <br /><br /><br /><br /><br />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheNav from '../components/TheNav.vue';

export default {
  // data() {
  //   //
  // },
  created() {
    // * action get quizzies
    // this.$store.dispatch('addQuizz');
    this.$store.dispatch('fetchQuizzies');
  },
  computed: {
    quizzes() {
      return this.$store.state.quizzes;
    }
  },
  components: {
    TheNav,
    TheFooter
  },
  methods: {
    goToCreate() {
      this.$router.push('/quizzes/create');
    }
  }
};
</script>
