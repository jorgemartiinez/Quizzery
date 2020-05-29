<template>
  <div>
    <div v-if="currentForm == 0">
      <FormQuizzBasic @next="nextIndex" />
    </div>
    <div v-if="currentForm == 1">
      <FormQuizzQuestion @prev="prevIndex" />
    </div>
  </div>
</template>

<script>
import FormQuizzQuestion from './FormQuizzQuestion.vue';
import FormQuizzBasic from './FormQuizzBasic.vue';
export default {
  data() {
    return {
      currentForm: 1 // ! CAMBIAR DESPUES
    };
  },
  components: {
    FormQuizzBasic,
    FormQuizzQuestion
  },
  methods: {
    nextIndex() {
      this.currentForm += 1;
    },
    prevIndex() {
      this.currentForm -= 1;
    }
  }
};
</script>
