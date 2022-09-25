import Vue from 'vue'
import VueRouter from 'vue-router'
import CheckoutOne from'../views/CheckoutOne.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shop',
    redirect: "/checkout/1",
  },
  {
    path: '/checkout',
    name: 'checkout',
    redirect: '/checkout/1'
  },
  {
    path: '/checkout/1',
    name: 'checkout-1',
    component: CheckoutOne
  },
  {
    path: '/checkout/2',
    name: 'checkout-2',
    component:() => import('../views/CheckoutTwo.vue')
  },
  {
    path: '/checkout/3',
    name: 'checkout-3',
    component: () => import('../views/CheckoutThree.vue')
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
]

const router = new VueRouter({
  routes
})

export default router
