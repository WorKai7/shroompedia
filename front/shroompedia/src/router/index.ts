import { createRouter, createWebHistory } from 'vue-router'
import ShroomPage from '@/pages/Shroom.page.vue'
import HomePage from '@/pages/Home.page.vue'
import LoginPage from '@/pages/Login.page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomePage},
    {path: "/login", component: LoginPage},
    {path: "/shrooms", component: ShroomPage}
  ],
})

export default router
