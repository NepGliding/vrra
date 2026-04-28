import { createRouter, createWebHistory } from 'vue-router'
import ResourcesPage from '@/Views/ResourcesPage.vue'
// import ArticlePage from '@/Views/ArticlePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'resources', component: ResourcesPage },
    // { path: '/resources', name: 'resources', component: ResourcesPage },
    { path: '/article', name: 'article', component: () => import('@/Views/ArticlePage.vue') },
    // { path: '/', name: 'article', component: ArticlePage },
    { path: '/other', name: 'other', component: () => import('@/Views/OtherPage.vue') },
  ],
})

export default router
