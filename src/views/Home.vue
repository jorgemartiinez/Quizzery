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
import HeroSection from '@/components/layout/HeroSection.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import TheNav from '@/components/layout/TheNav';

export default {
  name: 'home',
  components: {
    TheNav,
    TheFooter,
    HeroSection
  }
};
</script>
