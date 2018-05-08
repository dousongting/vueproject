import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import demo from '@/components/demo'
import todo from '../components/todo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: ' Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    }
  ]
})
