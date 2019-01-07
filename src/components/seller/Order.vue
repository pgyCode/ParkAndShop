<template>
  <div>
    <div id="containerHistory">
      <div style="clear: both">
        <div style="clear: both; height: 36px; width: 500px; margin: 20px auto;">
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             v-on:click="onClickDaily()">Day</p>
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             v-on:click="onClickWeekly()">Week</p>
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             v-on:click="onClickMonthly()">Month</p>
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             v-on:click="onClickYearly()">Year</p>
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             v-on:click="initLoad()">All</p>
        </div>
      </div>
    </div>
    <div style="height: 42px; width: 1000px; margin: 10px auto;background: dodgerblue; border: 1px solid dodgerblue;">
      <p style="float: left; width: 250px;text-align: center;color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Good</p>
      <p style="float: left; width: 80px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Price</p>
      <p style="float: left; width: 150px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Number</p>
      <p style="float: left; width: 150px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Information</p>
      <p style="float: left; width: 150px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Time</p>
      <p style="float: left; width: 130px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Trading Status</p>
    </div>
    <div id="containerBody">
      <ul>
        <li v-bind:key="order" v-for="order in orders" style="border:1px solid gray;" >
          <div style="height: 42px;background: rgb(241, 241, 241); border-bottom: none;border-color: black; solid: #dfdfdf">
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 1000px; font-weight: 700; line-height: 42px ">&nbsp;&nbsp;&nbsp;OrderID: &nbsp;&nbsp;&nbsp;&nbsp;{{ order.orderID}}
             </p>
          </div>
            <div style="height: 108px; width: 1000px;">
             <img v-bind:src="order.portraitURL"
               style="float: left; width: 105px; height: 108px; border:none;"  v-on:click="goOrder(order)"/>

          <div style="width: 880px;height: 108px;margin: 0px auto;">
             <div style="width: 800px;height: 108px;margin: 0px auto;float: left" v-on:click="goOrder(order)">
              <p style="float: left; width: 100px;height: 110px;text-align:center;color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height:50px">{{ order.pName }}</p>
            <p style="float: left; width: 160px;text-align:center;color: rgb(60, 60, 60); font-size: 12px; font-weight: 700; line-height: 96px">¥{{ order.orderPrice }}</p>
            <p style="float: left; width: 80px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 700; line-height: 96px">{{  order.amount }}</p>
            <div style="float: left; width: 220px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 50px">
              <p>{{ order.username}}</p>
              <p>{{order.address}}</p>
            </div>
            <div style="float: left; width: 80px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 50px">
              <p>{{ order.Date}}</p>
            </div >
               <div style="float: left; width: 160px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 50px">
                <p v-if="order.isFinish === 1" style="float: left; width: 160px;text-align: center; color: dodgerblue; font-size: 12px; font-weight: 600; line-height: 96px">&nbsp;&nbsp;&nbsp;&nbsp;Unshipped</p>
                <p v-else-if="order.isFinish ===3" style="float: left; width: 160px;text-align: center; color: forestgreen; font-size: 12px; font-weight: 600; line-height: 96px">&nbsp;&nbsp;&nbsp;&nbsp;Sending</p>
                 <p v-else-if="order.isFinish ===0" style="float: left; width: 160px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 96px">&nbsp;&nbsp;&nbsp;&nbsp;Failed</p>
                 <p v-else-if="order.isFinish ===2" style="float: left; width: 160px;text-align: center; color: red; font-size: 12px; font-weight: 600; line-height: 96px">&nbsp;&nbsp;&nbsp;&nbsp;Succeed</p>
               </div>
             </div>
           </div>
    </div>
        </li>
      </ul>
    </div>

    <Loading v-show="isLoad"/>
  </div>
</template>

<script>
/* eslint-disable no-trailing-spaces,indent */
import Loading from '@/components/common/Loading'
export default {
  components: {Loading},
  data () {
    return {
      isLoad: false,
      currentPage: 1,
      orders: []
    }
  },

  methods: {
    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/all?id=' + this.getCookie('userId'))
        .then((data) => {
          console.log(data)
          this.orders = data.body.data.order
          this.isLoad = false
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    goOrder: function (order) {
       console.log(order)
      this.$router.push({name: 'seller_order_info', params: {data: order}})
    },

    onClickDaily: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/history?sId=' +
        this.getCookie('userId') +
        '&date=' +
        1)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.orders = response.data.history
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    onClickWeekly: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/history?sId=' +
        this.getCookie('userId') +
        '&date=' +
        7)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.orders = response.data.history
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    onClickMonthly: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/history?sId=' +
        this.getCookie('userId') +
        '&date=' +
        30)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.orders = response.data.history
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    onClickYearly: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/history?sId=' +
        this.getCookie('userId') +
        '&date=' +
        365)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.orders = response.data.history
        })
        .catch(() => {
          this.isLoad = false
        })
    }
  },

  created: function () {
    this.initLoad()
  }
}

</script>

<style scoped>

  *{
    margin: 0px;
    padding: 0px;
    display: block;
  }

  #containerBody{
    width: 1000px;
    margin: 0px ;
    clear: both;
  }

  ul{
    list-style-type: none;
  }

  li{
    width: 1000px;
    height: 150px;
    margin-top: 5px;
    display: block;
    border: 1px solid #dfdfdf;
  }

  .basicTab{
    /*background: antiquewhite;*/
    background: rgb(241, 241, 241);
  }

  .checkTab{
    color: #fff;
    background: #f40;
  }

</style>
