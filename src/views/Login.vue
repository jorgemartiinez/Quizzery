<template>
  <div class="login">
    <TheNav />
    <LoginButtons />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/layout/TheFooter.vue';
import TheNav from '@/components/layout/TheNav.vue';
import LoginButtons from '@/components/login/LoginButtons.vue';
export default {
  components: { LoginButtons, TheNav, TheFooter }
};
</script>
