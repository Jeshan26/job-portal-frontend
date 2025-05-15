<script setup>
 import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/HomeCards.vue';
  import JobLIstings from '@/components/JobLIstings.vue';
</script>


<template>

  <Hero title="Become a Web Dev" subtitle="Find the Job that fits your skills and needs"/>
  <HomeCards/>
  <JobLIstings :limit="3" :show-btn="true"/>
</template>