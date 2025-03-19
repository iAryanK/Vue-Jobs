<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
  <Hero title="Become a Vue Dev" subtitle="Find the Vue job that fits your skills and needs" />
  <HomeCards />
  <JobListings showButton />
</template>
