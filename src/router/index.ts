import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: 'editor',
          name: 'Editor',
          component: () => import('@/views/EditorView.vue'),
          meta: { requiresAuth: false },
        },
      ],
    },
  ],
})

export default router
