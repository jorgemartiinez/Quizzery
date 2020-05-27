<template>
  <div class="container">
    <TheNav />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div v-if="quizzes.length > 0">
      <p v-for="quizz in quizzes" :key="quizz.id">{{ quizz }}</p>
    </div>
    <br /><br /><br /><br /><br /><br /><br />
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
    // this.$store.dispatch('fetchQuizzies');
    // this.$store.dispatch('addQuizz');
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
  methods: {}
};
</script>
