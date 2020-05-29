<template>
  <div class="login">
    <TheNav />
    <LoginButtons />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheNav from '../components/TheNav.vue';
import LoginButtons from '../components/login/LoginButtons.vue';
export default {
  components: { LoginButtons, TheNav, TheNav, TheFooter }
};
</script>
