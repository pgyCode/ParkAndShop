<template>
  <div>
    <div style="height: 30px; width: 400px; margin: 10px auto" >
      <img src="../../assets/previous.png" style="float:left; width: 30px; height: 30px;  background: #dbd7d0;  color: rgb(255,255,255)" id="previous" v-on:click="onClickPrevious()"/>
      <div style="width: 200px; height: 30px; margin-top: 5px; margin-left: 70px; float: left">{{ outputDate(date)}}</div>
      <img src="../../assets/next.png" style="float:right; width: 30px; height: 30px; background: #dbd7d0;  color: rgb(255,255,255)" id="next" v-on:click="onClickNext()"/>
    </div>
    <div>
   </div>
  <div style="height: 42px; width: 1000px; margin: 10px auto;background: #094fa4; border: 1px solid #094fa4;">
    <p style="float: left; width: 250px;text-align: center;color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Good</p>
    <p style="float: left; width: 80px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Price</p>
    <p style="float: left; width: 150px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Number</p>
    <p style="float: left; width: 150px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Information</p>
    <p style="float: left; width: 150px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Time</p>
    <p style="float: left; width: 130px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Trading Status</p>
  </div>
  <div id="containerBody">
    <ul>
      <li v-bind:key="order" v-for="order in orders" style="border:1px solid gray;width: 1000px" >
        <div style="height: 42px;background: rgb(241, 241, 241); border-bottom: none;border-color: black; solid: #dfdfdf">
          <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 1000px; font-weight: 700; line-height: 42px ">&nbsp;&nbsp;&nbsp;OrderID: &nbsp;&nbsp;&nbsp;&nbsp;{{ order.orderID}}</p>
        </div>
        <div style="height: 108px; width: 1000px;">
          <img v-bind:src="order.portraitURL" style="float: left; width: 105px; height: 108px; border:none;"  v-on:click="goOrder(order)"/>
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
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'

export default {
  components: {Loading},
  data () {
    var now = new Date().getTime()
    var nowtime = now - (now - 1546185600152) % (24 * 60 * 60 * 1000)
    return {
      orders: [],
      isLoad: false,
      value: '',
      currentTab: 0,
      date: nowtime
    }
  },
  created: function () {
    this.initLoad()
  },
  methods: {
    initLoad: function () {
      this.isLoad = true
      var start = this.date
      switch (this.currentTab) {
        case 0:
          start -= 1000 * 60 * 60 * 24
          break
        case 1:
          start -= 1000 * 60 * 60 * 24 * 7
          break
        case 2:
          start -= 1000 * 60 * 60 * 24 * 30
          break
        case 3:
          start -= 1000 * 60 * 60 * 24 * 365
          break
      }
      this.$http.get(this.URL + 'b/order/history/search?sId=' +
        this.getCookie('userId') +
        '&start=' +
        start +
        '&end=' +
        this.date)
        .then((data) => {
          console.log(data)
          this.orders = data.body.data.an_order
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
    onCheckTab: function (poi) {
      this.date = new Date().getTime()
      this.currentTab = poi
      this.initLoad()
    },

    outputDate: function (value) {
      let date = new Date(value)
      switch (this.currentTab) {
        case 0:
          return this.formatDate(date - 1000 * 60 * 60 * 24) + ' ~ ' + this.formatDate(date)
        case 1:
          return this.formatDate(date - 1000 * 60 * 60 * 24 * 7) + '  ~  ' + this.formatDate(date)
        case 2:
          return this.formatDate(date - 1000 * 60 * 60 * 24 * 30) + '  ~  ' + this.formatDate(date)
        case 3:
          return this.formatDate(date - 1000 * 60 * 60 * 24 * 365) + '  ~  ' + this.formatDate(date)
      }
    },

    formatDate: function (value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      return y + '-' + MM + '-' + d
    },

    onClickPrevious: function () {
      switch (this.currentTab) {
        case 0:
          this.date -= 1000 * 60 * 60 * 24
          break
        case 1:
          this.date -= 1000 * 60 * 60 * 24 * 7
          break
        case 2:
          this.date -= 1000 * 60 * 60 * 24 * 30
          break
        case 3:
          this.date -= 1000 * 60 * 60 * 24 * 365
          break
      }
      this.initLoad()
    },

    onClickNext: function () {
      switch (this.currentTab) {
        case 0:
          this.date += 1000 * 60 * 60 * 24
          break
        case 1:
          this.date += 1000 * 60 * 60 * 24 * 7
          break
        case 2:
          this.date += 1000 * 60 * 60 * 24 * 30
          break
        case 3:
          this.date += 1000 * 60 * 60 * 24 * 365
          break
      }
      this.initLoad()
    }
  },
  filters: {
    formatDate: function (value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ('0' + m) : m
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    display: block;
  }

  #containerSearch{
    margin: 0px auto;
    width: 540px;
    height: 34px;
    padding-top: 0px;
    text-align: center;
    /*padding: 15px 0px;*/
  }
  #inputSearch{
    width: 400px;
    height: 30px;
    color: #000000;
    font-weight: 500;
    font-size: 14px;
    display: block;
    float: left;
    padding-left: 10px;
    border: 2px solid #094fa4;
    outline: none;
  }

  #btnSearch{
    color: #000000;
    font-weight: 500;
    width: 120px;
    display:block;
    float: left;
    font-size: 16px;
    height: 34px;
    border: none;
    color: #fff;
    background: #094fa4;
    outline: none;
  }

  #containerShop{
    width: 866px;
    min-width: 866px;
    margin: 0px auto;
    clear: both;
  }
  .inContainerOrder {
    display: block;
    width: 866px;
    height: 60px;
    margin-left:  65px;
    margin-right:  auto;
    margin-bottom: 20px;
    border: 1px solid #dfdfdf;
  }

  ul{
    list-style-type: none;
    display: inline-block;
  }

  li{
    width: 866px;
    height: 150px;
    display: block;
    margin-top: 5px;
    border: 1px solid #dfdfdf;
  }

</style>
