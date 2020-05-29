<template>
  <div>
    <TheNav />
    <div class="container">
      <h1>Create new Quizz</h1>
      <EditQuizz />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheNav from '../components/TheNav.vue';
import EditQuizz from '../components/quizz/edit/EditQuizz.vue';
export default {
  components: {
    EditQuizz,
    TheNav,
    TheFooter
  }
};
</script>

<style></style>
