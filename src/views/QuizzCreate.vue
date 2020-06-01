<template>
  <div class="quizz-create">
    <TheNav />
    <div class="container">
      <GoBackButton />
      <h1 class="heading-secondary">Create new Quizz</h1>
      <EditQuizzForm />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import GoBackButton from '@/components/shared/GoBackButton.vue';
import EditQuizzForm from '@/components/quizz/edit/EditQuizzForm.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import TheNav from '@/components/layout/TheNav.vue';
export default {
  components: {
    TheNav,
    TheFooter,
    EditQuizzForm,
    GoBackButton
  }
};
</script>

<style></style>
