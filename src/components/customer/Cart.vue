
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
        <li v-bind:key="order" v-for="order in orders">
          <div style="padding: 15px; clear: both;">
            <img style="float: left; width: 80px; height: 80px; padding-right: 15px" v-bind:src="order.portraitURL"/>
            <div style="width: 220px; float: left; height: 80px;">
              <p style=" color: rgb(60, 60, 60); font-size: 13px; font-weight: 500; line-height: 25px; height: 55px; ">{{ order.pName }}</p>
              <span style="clear:both; width: 100px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>
            </div>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">{{ order.shopName }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">¥{{ order.price }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">{{ a = 1 }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">¥{{ order.price }}</p>
            <div style="float: right; width: 50px">
              <button style="width: 50px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 50px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 5px; cursor: pointer" v-on:click="onClickBuy(order.pID)">Buy</button>
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
      orders: []
    }
  },

  methods: {
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

    onClickBuy: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'c/makeOrder?cID=' + this.getCookie('userId') + '&pID=' + id + '&amount=' + 1)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.initLoad()
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

    goGood: function (info) {
      this.$router.push({name: 'seller_good', params: {data: info}})
    }
  },

  created: function () {
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
