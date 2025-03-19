<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import JobListing from './JobListing.vue'
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
// @ts-expect-error - vue-spinner doesn't support typescript
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})

export interface JobType {
  id: number
  title: string
  type: string
  location: string
  salary: string
  description: string
  company: {
    name: string
    description: string
    contactEmail: string
    contactPhone: string
  }
}

const state = reactive({
  jobs: [] as JobType[],
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await fetch('/api/jobs')
    state.jobs = await response.json()
  } catch (error) {
    console.error('[ERROR FETCHING JOB]', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>

      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      v-if="showButton"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Jobs
    </RouterLink>
  </section>
</template>
