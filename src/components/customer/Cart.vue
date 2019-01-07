
<template>
  <div>

    <div style="height: 48px; width: 866px; margin: 0px auto;">
      <p style="height: 48px; width: 100%; line-height: 48px; border-bottom: 2px solid #f40; color: #f40; font-weight: 600">All Cart</p>
    </div>

    <div style="height: 42px; width: 866px; margin: 20px auto;background: rgb(241, 241, 241); border: 1px solid #dfdfdf;">
      <p style="float: left; width: 330px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Good</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Shop</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Price</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Number</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Sum</p>
      <p style="float: right; width: 80px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Operate</p>
    </div>

    <div id="containerBody">
      <ul>
        <li v-bind:key="order.pID" v-for="order in orders">
          <div style="padding: 15px; clear: both;">
            <img style="float: left; width: 80px; height: 80px; padding-right: 15px" v-bind:src="order.portraitURL" v-on:click="goGood(order)"/>
            <div style="width: 220px; float: left; height: 80px;" v-on:click="goGood(order)">
              <p style=" color: rgb(60, 60, 60); font-size: 13px; font-weight: 500; line-height: 25px; height: 55px; ">{{ order.pName }}</p>
              <span style="clear:both; width: 100px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>
            </div>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">{{ order.shopName }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">¥{{ order.price }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px"><button style="width: 10px;margin: 2px" v-on:click ="sub(order)">-</button>{{ order.number }}<button style="width: 10px;margin: 2px" v-on:click ="add(order)">+</button></p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">¥{{ order.price*order.number }}</p>
            <div style="float: right; width: 50px">
              <button style="width: 50px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 50px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 5px; cursor: pointer" v-on:click="onClickBuy(order)">Buy</button>
              <button style="width: 50px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 50px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 15px; cursor: pointer" v-on:click="onClickCancel(order.pID)">Cancel</button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <Loading v-show="isLoad"/>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'

import Loading from '@/components/common/Loading'
export default {
  components: {Loading},
  data: function () {
    return {
      isLoad: false,
      currentPage: 1,
      name: 'sds',

      users: [],
      datas: [],
      orders: [],
      qrcode: ''
    }
  },

  methods: {
    qrcodee: function (info) {
      let qrcode = new QRCode('qrcode', {
        width: 100,
        height: 100, // 高度
        text: info
      })
      console.log(qrcode)
    },

    onClickCancel: function (id) {
      this.isLoad = true
      console.log(this.URL + 'c/removeFromCart?cID=' + this.getCookie('userId') + '&pID=' + id)
      this.$http.get(this.URL + 'c/removeFromCart?cID=' + this.getCookie('userId') + '&pID=' + id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    onClickBuy: function (order) {
      this.isLoad = true
      this.$http.get(this.URL + 'c/makeOrder?cID=' + this.getCookie('userId') + '&pID=' + order.pID + '&amount=' + order.number)
        .then((data) => {
          console.log(data)
          this.$router.push({name: 'customer_pay', params: {data: data.body.data.orderID, info: order}})
          // this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'c/lookupCart?cID=' + this.getCookie('userId'))
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.orders = response.data.pArray
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    add: function (order) {
      order.number++
    },
    sub: function (order) {
      if (order.number > 1) {
        order.number--
      }
    },

    goGood: function (info) {
      this.$router.push({name: 'customer_good', params: {data: info}})
    }
  },

  activated: function () {
    this.initLoad()
  }
}
</script>

<style scoped>

  #containerBody{
    width: 100%;
    clear: both;
  }

  ul{
    list-style-type: none;
  }

  li{
    width: 866px;
    height: 110px;
    display: block;
    margin-top: 10px;
    border: 1px solid #dfdfdf;
    margin-left: auto;
    margin-right: auto;
  }

</style>
