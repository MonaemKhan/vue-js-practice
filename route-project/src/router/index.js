import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact/Contact.vue'
import ContactView from '../views/Contact/ContactView.vue'
import NotFound from '../components/NotFound.vue'
import UserExpried from '../views/UserExpried.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/Contact_title',
    name:'Contact',
    component: Contact
  },
  {
    path: '/Contact_title/:id/:userId',
    name: 'ContactView',
    component: ContactView,
    props:true
  },
  // redirect
  {
    path:'/all-list',
    redirect: '/Contact_title'
  },
  // catch all the other path name other than list6ed
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
