import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ProfilePage from "@/views/ProfilePage.vue";
import PostPage from "@/views/PostPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/Post/:id/:userId',
    name: 'Post',
    component: PostPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
