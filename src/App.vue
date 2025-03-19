<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Hero from './components/Hero.vue'
import HomeCards from './components/HomeCards.vue'
import JobListings from './components/JobListings.vue'
</script>

<template>
  <header>
    <Navbar />
    <Hero title="Become a Vue Dev" subtitle="Find the Vue job that fits your skills and needs" />
    <HomeCards />
    <JobListings showButton />
  </header>
</template>
