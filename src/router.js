
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Channelselection from './views/Channelselection.vue'
import About from './views/About.vue'
import categories from './views/categories.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
 
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Channelselection',
      name: 'channelselection',
      component: Channelselection
    },
    {
      path: '/About',
      name: 'about',
      component: About
    }, {
      path: '/categories',
      name: 'categories',
      component: categories
    }

  ]
})


