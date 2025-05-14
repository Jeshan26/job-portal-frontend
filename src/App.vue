<script setup>
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Hero.vue';
  import HomeCards from './components/HomeCards.vue';
  import JobLIstings from './components/JobLIstings.vue';
</script>
<template>
  <Navbar/>
  <Hero title="Test title" subtitle="Test Subtitle"/>
  <HomeCards/>
  <JobLIstings :limit="3" :show-btn="true"/>
</template>