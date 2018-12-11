import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/Login'
import Customer from '@/components/customer/Customer'
import CustomerOwner from '@/components/customer/Owner'
import CustomerFavourite from '@/components/customer/Favourite'
import CustomerOrder from '@/components/customer/Order'
import CustomerCart from '@/components/customer/Cart'

import Manager from '@/components/manager/Manager'
import ManagerSaler from '@/components/manager/Saler'
import ManagerCustomer from '@/components/manager/Customer'
import ManagerOwner from '@/components/manager/Owner'

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
      component: CustomerOwner
    },
    {
      path: '/customer/favourite',
      component: CustomerFavourite
    },
    {
      path: '/customer/order',
      component: CustomerOrder
    },
    {
      path: '/customer/Cart',
      component: CustomerCart
    },
    {
      path: '/manager/main',
      component: Manager
    },
    {
      path: '/manager/saler',
      component: ManagerSaler
    },
    {
      path: '/manager/customer',
      component: ManagerCustomer
    },
    {
      path: '/manager/owner',
      component: ManagerOwner
    }
  ],

  mode: 'history'
})
