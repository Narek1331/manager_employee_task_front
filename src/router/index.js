import Vue from 'vue'
import VueRouter from 'vue-router'
 
Vue.use(VueRouter)
 
  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/RegisterComponent.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/LoginComponent.vue')
  },
  {
    path: '/manager_profile',
    name: 'manager_profile',
    component: () => import('../components/ManagerProfileComponent.vue')
  },
  {
    path: '/employee_profile',
    name: 'employee_profile',
    component: () => import('../components/EmployeeProfileComponent.vue')
  },
  {
    path: '/create_task',
    name: 'create_task',
    component: () => import('../components/CreateTaskComponent.vue')
  }
]
 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 
export default router