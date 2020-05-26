<template>
  <div class="home">
    <header class="header">
      <TheNav />
      <HeroSection />
    </header>
    <TheFooter />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import TheFooter from '../components/TheFooter.vue';
import TheNav from './../components/TheNav';

export default {
  name: 'home',
  components: {
    TheNav,
    TheFooter,
    HeroSection
  }
};
</script>
