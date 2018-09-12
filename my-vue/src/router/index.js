import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Good from '@/components/Goods'
import Ratings from '@/components/Ratings'
import Sell from '@/components/Sell'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Good
    },
    {
      path: '/goods',
      name: 'goods',
      component: Good
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/sell',
      name: 'sell',
      component: Sell
    }
  ]
})
