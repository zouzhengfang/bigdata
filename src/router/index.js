import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/page/main'
import home from '@/page/home/home'
import guang from '@/page/guang'
import about from '@/page/about'
import order from '@/page/order'
import recent from '@/page/recent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: main,
      children: [
        {
          path: '/',
          redirect:'/home',
          component: home
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/guang',
          name: 'guang',
          component: guang
        },
        {
          path: '/about',
          name: 'about',
          component: about
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/recent',
          name: 'recent',
          component: recent
        }
      ]
    }
  ]
})
