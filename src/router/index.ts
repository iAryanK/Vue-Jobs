import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('@/views/JobsView.vue'),
    },
    {
      path: '/job/:id',
      name: 'job',
      component: () => import('../views/JobView.vue'),
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: () => import('../views/AddJobView.vue'),
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: () => import('../views/EditView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
