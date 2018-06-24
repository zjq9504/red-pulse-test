import Vue from 'vue'
import Router from 'vue-router'
import Input from '@/components/Input'
import Display from '@/components/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Input',
      component: Input,
      alias: '/input'
    },
    {
      path: '/display',
      name: 'Display',
      component: Display
    }
  ]
})
