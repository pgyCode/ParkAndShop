<link href="../../assets/logo.ico" rel="SHORTCUT ICON" />
<template>
  <div>
    <div id="containerHeader">
      <span style="float: left; padding-left: 20px; color: #f40; line-height:35px; font-weight: 600; font-size: 12px;"
            v-on:click="goLogin()">{{ welcomeMsg }}</span>
      <span v-show="this.getCookie('userName') !== ''" style="float: left; color: grey; line-height:35px; font-weight: 600; font-size: 12px; padding-left: 20px"
            v-on:click="logout()">Logout</span>
      <router-link style="float: left; margin-left: 10px" class='subTitle' v-show="this.getCookie('userName') == ''" to="/register">Register</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '1'" to="/seller/info">Info</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '1'" to="/seller/addGood">Add Goods</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '1'" to="/seller/order">Order</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '1'" to="/seller/shop">Shop</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '2'" to="/manager/system">System</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '2'" to="/manager/ads">Ads</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '2'" to="/manager/customers">Customers</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '2'" to="/manager/sellers">Sellers</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '0'" to="/customer/order">Info</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '0'"  to="/customer/cart">Cart</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '0'"  to="/customer/favourite">Favorite</router-link>
      <router-link class='subTitle' v-show="this.getCookie('userType') == '0'"  to="/customer/order">Order</router-link>
      <router-link class='subTitle' to="/search">Index</router-link>

    </div>

    <router-view style="width: 1000px; margin: 0px auto;"/>

    <!--<div id="containerFooter">-->
      <!--<span id="copyright">©copyright group_nine 2018</span>-->
    <!--</div>-->
    <!--<div id="frameDiv" style="clear: both; width: 1000px; margin: 0px auto;">-->
      <!--<iframe id="frame" src="/customer/order" style="width: 1000px; height: 10000px;"></iframe>-->
    <!--</div>-->
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {

  components: {Loading},
  data () {
    return {
      isLoad: false,
      currentPage: 1,
      name: 'sds',
      datas: [],
      shops: [],
      poiMouseEnter: -1,
      welcomeMsg: '',
      poiSearch: 0
    }
  },

  methods: {

    /**
     * 初始化
     */
    init: function () {
      if (this.getCookie('userName') === '' ||
            this.getCookie('userId') === '' ||
            this.getCookie('userType') === '') {
        this.welcomeMsg = 'Dear,Please Login'
      } else {
        if (this.getCookie('userType') === '2') {
          this.welcomeMsg = 'Manager:' + this.getCookie('userName')
        } else if (this.getCookie('userType') === '0') {
          this.welcomeMsg = 'Customer:' + this.getCookie('userName')
        } else if (this.getCookie('userType') === '1') {
          this.welcomeMsg = 'Seller:' + this.getCookie('userName')
        }
      }
    },

    checkPoiSearch: function (poi) {
      this.poiSearch = poi
    },

    changgeiFrame: function (goal) {
      this.setHtml('frameDiv', 'wqewqe')
    },

    goLogin: function () {
      if (this.getCookie('userName') === '') {
        this.$router.push('/login')
      } else {

      }
    },

    logout: function () {
      this.clearCookie('userName')
      this.clearCookie('userType')
      this.clearCookie('userId')
      this.$router.push('/login')
    }
  },

  updated () {
    this.init()
  },

  mounted () {
    console.log(this.getCookie('userName'))
    this.init()
  }
}
</script>

<style scoped>

  *{
    padding: 0px;
    margin: 0px;
    border: 0px;
    outline:none;
    cursor: pointer;
    display: block;
  }

  #containerHeader {
    height: 35px;
    background: #f5f5f5;
    border-bottom: 1px solid #dfdfdf;
  }

  ul{
    list-style-type: none;
    display: inline-block;
  }

  .subTitle{
    display: block;
    float: right;
    padding-right: 30px;
    line-height: 35px;
    text-decoration: none;
    color: #6c6c6c;
    font-size: 13px;
  }

  #containerFooter{
    border-top: 1px solid #b6b6b6;
    background: #f5f5f5;
    clear: both;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  #copyright{
    font-size: 12px;
    font-weight: 400;
    color: #666;
    text-align: center;
  }
</style>
