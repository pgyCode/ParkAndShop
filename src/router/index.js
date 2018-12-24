import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/Login'
import Index from '@/components/common/Index'
import Search from '@/components/common/Search'
import Register from '@/components/common/Register'
import Customer from '@/components/customer/Customer'
import CustomerOwner from '@/components/customer/Owner'
import CustomerFavourite from '@/components/customer/Favourite'
import CustomerOrder from '@/components/customer/Order'
import CustomerCart from '@/components/customer/Cart'

// import Saler from '@/components/seller/Saler'
// import SalerOwner from '@/components/seller/Owner'

// 主页--管理员
import ManagerSeller from '@/components/manager/Seller'
import ManagerCustomer from '@/components/manager/Customer'
import ManagerOwner from '@/components/manager/Owner'

// 主页--管理员--商家
import ManagerSellerRequest from '@/components/manager/SellerRequest'
import ManagerSellerBlacklist from '@/components/manager/SellerBlacklist'
import ManagerSellerSearch from '@/components/manager/SellerSearch'

// 主页--商家
import Seller from '@/components/seller/Seller'
import SellerShop from '@/components/seller/Shop'
import SellerGood from '@/components/seller/Good'
import SellerAddGood from '@/components/seller/AddGood'
import SellerInfo from '@/components/seller/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {path: '/', component: Search},
        {path: '/search', component: Search},
        {path: '/register', component: Register},
        {path: '/customer/order', component: CustomerOrder},
        {path: '/customer/favourite', component: CustomerFavourite},
        {path: '/customer/cart', component: CustomerCart},
        {
          path: '/manager/sellers',
          component: ManagerSeller,
          children: [
            {
              path: '/manager/sellers/request',
              component: ManagerSellerRequest
            },
            {
              path: '/manager/sellers/blacklist',
              component: ManagerSellerBlacklist
            },
            {
              path: '/manager/sellers/search',
              component: ManagerSellerSearch
            }
          ]},
        {path: '/manager/customers', component: ManagerCustomer},
        {path: '/manager/ads', component: ManagerSeller},
        {path: '/manager/system', component: ManagerOwner},
        {path: '/seller',
          component: Seller,
          children: [
            {
              path: '/',
              component: SellerShop
            },
            {
              path: '/seller/shop',
              name: 'seller_shop',
              component: SellerShop
            },
            {
              path: '/seller/good',
              name: 'seller_good',
              component: SellerGood
            }
          ]},
        {path: '/seller/addGood', component: SellerAddGood},
        {path: '/seller/info', component: SellerInfo}
      ]
    },
    {
      path: '/login',
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
