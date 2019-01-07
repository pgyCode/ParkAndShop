import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/Login'
import Index from '@/components/common/Index'
import Search from '@/components/common/Search'
import Ads from '@/components/common/Ads'
import Register from '@/components/common/Register'
import Customer from '@/components/customer/Customer'
import CustomerOwner from '@/components/customer/Owner'
import CustomerFavourite from '@/components/customer/Favourite'
import CustomerOrder from '@/components/customer/Order'
import CustomerCart from '@/components/customer/Cart'
import CustomerInfo from '@/components/customer/Info'
import CustomerShop from '@/components/customer/Shop'
import CustomerGood from '@/components/customer/Good'
import CustomerPay from '@/components/customer/Pay'

// import Saler from '@/components/seller/Saler'
// import SalerOwner from '@/components/seller/Owner'

// 主页--管理员
import ManagerSeller from '@/components/manager/Seller'
import ManagerCustomer from '@/components/manager/Customer'
import ManagerOwner from '@/components/manager/Owner'
import ManagerAds from '@/components/manager/Ads'

// 主页--管理员--商家
import ManagerSellerRequest from '@/components/manager/SellerRequest'
import ManagerSellerBlacklist from '@/components/manager/SellerBlacklist'
import ManagerSellerSearch from '@/components/manager/SellerSearch'

// 主页--管理员--买家
import ManagerCustomerBlack from '@/components/manager/CustomerBlack'
import ManagerCustomerSearch from '@/components/manager/CustomerSearch'

// 主页--管理员--订单
import ManagerOwnerHistory from '@/components/manager/OwneHistory'
import ManagerOwnerIncome from '@/components/manager/OwneIncome'
import ManagerOwnerSearch from '@/components/manager/OwneSearch'

// 主页--管理员--广告
import ManagerAdsRequest from '@/components/manager/AdsRequest'
import ManagerTop5 from '@/components/manager/AdsTop5'
import ManagerTop10 from '@/components/manager/AdsTop10'
import ManagerAdsSearch from '@/components/manager/AdsSearch'
import ManagerAdminGood from '@/components/manager/AdminGood'
import ManagerAdminShop from '@/components/manager/AdminShop'
// 主页--商家
import Seller from '@/components/seller/Seller'
import SellerShop from '@/components/seller/Shop'
import SellerGood from '@/components/seller/Good'
import SellerAddGood from '@/components/seller/AddGood'
import SellerInfo from '@/components/seller/Info'
import SellerOrder from '@/components/seller/Order'
import SellerGoodInformation from '@/components/seller/Good_info'
import SellerOrderInformation from '@/components/seller/Order_info'
import SellerProfit from '@/components/seller/Profit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {path: '/', component: Ads},
        {path: '/search', component: Search},
        {path: '/register', component: Register},
        {path: '/customer/order', component: CustomerOrder},
        {path: '/customer/favourite', component: CustomerFavourite},
        {path: '/customer/cart', component: CustomerCart},
        {path: '/customer/info', component: CustomerInfo},
        {
          path: '/customer/pay',
          name: 'customer_pay',
          component: CustomerPay,
          meta: {
            keepAlive: false
          }
        },

        {
          path: '/customer/good',
          name: 'customer_good',
          component: CustomerGood
        },
        {
          path: '/customer/shop',
          name: 'customer_shop',
          component: CustomerShop
        },
        {
          path: '/manager/sellers',
          component: ManagerSeller,
          children: [
            {
              path: '/',
              component: ManagerSellerRequest
            },
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

        {
          path: '/manager/customer',
          component: ManagerCustomer,
          children: [
            {
              path: '/manager/customer/blacklist',
              component: ManagerCustomerBlack
            },
            {
              path: '/manager/customer/search',
              component: ManagerCustomerSearch
            },
            {
              path: '/',
              component: ManagerCustomerSearch
            }
          ]},
        {
          path: '/manager/owner',
          component: ManagerOwner,
          children: [
            {
              path: '/',
              component: ManagerOwnerHistory
            },
            {
              path: '/manager/owner/history',
              component: ManagerOwnerHistory
            },
            {
              path: '/manager/owner/search',
              component: ManagerOwnerSearch
            },
            {
              path: '/manager/owner/income',
              component: ManagerOwnerIncome
            },
            {
              path: '/',
              component: ManagerOwnerHistory
            }
          ]},
        {
          path: '/manager/ads',
          component: ManagerAds,
          children: [
            {
              path: '/',
              component: ManagerAdsRequest
            },
            {
              path: '/manager/ads/request',
              component: ManagerAdsRequest
            },
            {
              path: '/manager/ads/search',
              component: ManagerAdsSearch
            },
            {
              path: '/manager/ads/top5',
              component: ManagerTop5
            },
            {
              path: '/manager/ads/top10',
              component: ManagerTop10
            },
            {
              path: '/manager/ads/search/good',
              name: 'admin_good',
              component: ManagerAdminGood
            },
            {
              path: '/manager/ads/search/shop',
              name: 'admin_shop',
              component: ManagerAdminShop
            },
            {
              path: '/',
              component: ManagerAdsSearch
            }
          ]

        },

        {path: '/manager/ads', component: ManagerSeller},
        {path: '/manager/system', component: ManagerOwner},
        {path: '/seller',
          component: Seller,
          children: [
            {
              path: '/seller/good',
              name: 'seller_good',
              component: SellerGood
            }
          ]},

        {path: '/seller/addGood', component: SellerAddGood},
        {
          path: '/seller/Good_info',
          name: 'seller_good_info',
          component: SellerGoodInformation
        },
        {
          path: '/seller/info', component: SellerInfo
        },
        {
          path: '/seller/order', component: SellerOrder},
        {
          path: '/seller/shop',
          name: 'seller_shop',
          component: SellerShop
        },
        {
          path: '/seller/profit',
          name: 'seller_profit',
          component: SellerProfit
        }
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
    },
    {
      path: '/seller/Order_info',
      name: 'seller_order_info',
      component: SellerOrderInformation}
  ],

  mode: 'history'
})
