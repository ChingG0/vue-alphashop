import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shop',
    component: Shop
  },
]

const router = new VueRouter({
  routes
})

export default router
