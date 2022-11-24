import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import catalog from '@/pages/catalog-list.vue'
import auth from '@/pages/auth-form.vue'
import orders from '@/pages/orders-list.vue'
import basket from '@/pages/basket-list.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'catalog',
    component: catalog
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  },
  {
    path: '/orders',
    name: 'orders',
    component: orders
  },
  {
    path: '/basket',
    name: 'basket',
    component: basket
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
