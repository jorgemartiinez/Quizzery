<template>
  <div class="quizzes">
    <TheNav />
    <TableQuizz :quizzes="quizzes" />
    <br /><br /><br /><br /><br />
    <TheFooter />
  </div>
</template>

<script>
import TableQuizz from '../components/quizz/TableQuizz.vue';
import TheFooter from '../components/TheFooter.vue';
import TheNav from '../components/TheNav.vue';

export default {
  created() {
    this.$store.dispatch('fetchQuizzies');
  },
  computed: {
    quizzes() {
      return this.$store.state.quizzes || [];
    }
  },
  components: {
    TheNav,
    TheFooter,
    TableQuizz
  }
};
</script>
