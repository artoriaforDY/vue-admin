import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
	meta:{
		title:'登录'
	}
  },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
    children: [{
      path: '/table',
      name: 'table',
      component:  () => import(/* webpackChunkName: "table" */ '@/views/table/index.vue'),
	  meta:{
	  	title:'表格页面'
	  }
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
