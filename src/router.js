import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddPlace from './views/AddPlace.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-place',
      name: 'cmp-addPlace',
      component: AddPlace
    }
  ]
})
