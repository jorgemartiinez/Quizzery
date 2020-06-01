<template>
  <div class="quizzes">
    <TheNav />
    <div class="container">
      <TableQuizz :quizzes="quizzes" />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TableQuizz from '../components/quizz/TableQuizz.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import TheNav from '@/components/layout/TheNav.vue';

export default {
  created() {
    try {
      this.$store.dispatch('fetchQuizzies');
      this.$store.dispatch('resetActualQuizz');
    } catch (err) {
      this.$swal({ title: 'Error ocurred fetching quizzes', icon: 'error' });
    }
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
