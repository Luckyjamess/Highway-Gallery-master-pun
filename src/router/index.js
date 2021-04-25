import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Video from '../views/Video.vue'

Vue.use(VueRouter)

const routes = [
 {
  path: '/',
  name: 'Home',
  component: Home
 },
 {
  path: '/photos',
  name: 'Search',
  component: Search
 },
 {
  path: '/video',
  name: 'Video',
  component: Video
 },
 {
  path: '/signup',
  name: 'Signup',
  component: Signup
 },
 {
  path: '/login',
  name: 'Login',
  component: Login
 }
]

const router = new VueRouter({
  routes
})

export default router
