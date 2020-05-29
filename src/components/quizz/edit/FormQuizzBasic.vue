<template>
  <div>
    <form @submit.prevent="nextForm">
      <br />
      <label>Quizz name</label>
      <input
        type="text"
        name="quizz-name"
        v-model="info.name"
        minlength="3"
        required
      />
      <br />
      <label>Quizz description</label>
      <input
        type="text"
        name="quizz-description"
        v-model="info.description"
        minlength="3"
        required
      />
      <br />
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    };
  },
  mounted() {
    if (Object.keys(this.newQuizz).length > 0) {
      this.info = { ...this.newQuizz };
    }
  },
  computed: {
    newQuizz() {
      return this.$store.state.newQuizz;
    }
  },
  props: {
    currentForm: Number
  },
  methods: {
    nextForm() {
      // * SI EL FORM ES VALIDO
      this.$store.dispatch('fillBasicInfo', this.info);
      this.info = {};
      this.$emit('next', this.currentForm + 1);
    }
  }
};
</script>

<style></style>
