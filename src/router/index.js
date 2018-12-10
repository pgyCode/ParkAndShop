import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/Login'
import Customer from '@/components/customer/Customer'
import Owner from '@/components/customer/Owner'
import Favourite from '@/components/customer/Favourite'
import Order from '@/components/customer/Order'
import Cart from '@/components/customer/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/customer/main',
      component: Customer
    },
    {
      path: '/customer/owner',
      component: Owner
    },
    {
      path: '/customer/favourite',
      component: Favourite
    },
    {
      path: '/customer/order',
      component: Order
    },
    {
      path: '/customer/Cart',
      component: Cart
    }
  ],

  mode: 'history'
})
