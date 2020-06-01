<template>
  <div class="container">
    <h1 class="heading-secondary u-mt-md u-mb-m">
      Here you can manage your quizzes.
    </h1>
    <p class="paragraph"></p>
    <button class="btn btn--full" @click="goToCreate()">Create new</button>
    <table class="table-quizz u-mt-sm">
      <thead class="table-quizz__head" border="1">
        <td class="table-quizz__heading">Name</td>
        <td class="table-quizz__heading">Description</td>
        <td class="table-quizz__heading">Created at</td>
        <td class="table-quizz__heading">Actions</td>
      </thead>
      <tbody class="table-quiz__body" v-if="quizzes.length > 0">
        <tr class="table-quizz__row" v-for="quizz in quizzes" :key="quizz.id">
          <td class="table-quizz__data-col" @click="goToQuizz(quizz.id)">
            {{ quizz.name }}
          </td>
          <td class="table-quizz__data-col">
            {{ quizz.description | short }}
          </td>
          <td class="table-quizz__data-col">
            {{ quizz.created | toDate }}
          </td>
          <td class="table-quizz__data-col">
            <img
              src="@/assets/img/trash-icon.svg"
              width="30"
              title="Delete Quizz"
              @click="delQuizz(quizz.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <p class="paragraph u-mt-md" v-if="quizzes.length == 0">
      You don't have any quizzes created. Create your first one by clicking the
      'Create new' button.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    quizzes: Array
  },
  filters: {
    toDate(date) {
      return date.toDate().toLocaleDateString();
    },
    short(input) {
      return input.length > 10 ? `${input.substring(0, 5)}...` : input;
    }
  },
  methods: {
    goToCreate() {
      this.$router.push('/quizzes/create');
    },
    goToQuizz(id) {
      this.$router.push(`/quizz/${id}`);
    },
    delQuizz(id) {
      this.$swal({
        title: 'Are you sure that you want to delete this quizz?',
        text: 'Data will be lost',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
      }).then(async ({ isConfirmed }) => {
        if (isConfirmed) {
          try {
            await this.$store.dispatch('delQuizz', id);
            this.$swal({
              title: 'Your quizz has been deleted.',
              icon: 'success'
            });
          } catch (err) {
            this.$swal({
              title: 'Error ocurred deleting your quizz. Please try again.',
              icon: 'error'
            });
          }
          this.$router.push('/quizzes');
        }
      });
    }
  }
};
</script>

<style></style>
