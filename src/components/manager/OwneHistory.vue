<template>
  <div>

    <div id="containerHistory">
      <div style="clear: both">
        <div style="clear: both; height: 36px; width: 400px; margin: 20px auto;">
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             :class="{checkTab:currentTab == 0}"
             v-on:click="onCheckTab(0)">Day</p>
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             :class="{checkTab:currentTab == 1}"
             v-on:click="onCheckTab(1)">Week</p>
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             :class="{checkTab:currentTab == 2}"
             v-on:click="onCheckTab(2)">Month</p>
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             :class="{checkTab:currentTab == 3}"
             v-on:click="onCheckTab(3)">Year</p>
        </div>
        <div style="height: 30px; width: 400px; margin: 10px auto" >
          <img src="../../assets/previous.png" style="float:left; width: 30px; height: 30px;  background: #dbd7d0;  color: rgb(255,255,255)" id="previous" v-on:click="onClickPrevious()"/>
          <!--<button style="float:left; width: 30px; height: 30px; margin-top: 5px; background: #dbd7d0; color: rgb(255,255,255)" id="previous" v-on:click="onClickPrevious()"></button>-->
          <div style="width: 200px; height: 30px; margin-top: 5px; margin-left: 75px; float: left">{{ outputDate(date)}}</div>
          <img src="../../assets/next.png" style="float:right; width: 30px; height: 30px; background: #dbd7d0;  color: rgb(255,255,255)" id="next" v-on:click="onClickNext()"/>
        </div>
      </div>
    </div>

    <!--<div style="clear: both; height: 42px; width: 866px; margin-left:65px; margin-bottom:20px; background: rgb(241, 241, 241); border: 1px solid #dfdfdf;">-->
      <!--<p style="float:left; width: 60px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">State</p>-->
      <!--<p style="float:left; width: 180px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">GoodsName</p>-->
      <!--<p style="float:left; width: 170px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Seller</p>-->
      <!--<p style="float:left; width: 170px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Customer</p>-->
      <!--<p style="float:left; width: 170px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Money</p>-->
      <!--<p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Income</p>-->
    <!--</div>-->

    <div style="clear: both;height: 42px; width: 866px; margin: 20px auto;background: rgb(241, 241, 241); border: 1px solid #dfdfdf;">
      <p style="float:left;width: 300px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">GoodsInfo</p>
      <p style="float:left;width: 95px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Seller</p>
      <p style="float:left;width: 95px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Customer</p>
      <p style="float:left;width: 95px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Money</p>
      <p style="float:left;width: 95px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Income</p>
      <p style="float:left;width: 95px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Amount</p>
      <p style="float:left;width: 90px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">State</p>
    </div>

    <div id="containerOrder" style="margin: 0px auto; width: 866px;">

      <li v-bind:key="order" v-for="order in orders">
        <div style="height: 42px;background: rgb(241, 241, 241); border-bottom: 1px solid #dfdfdf">
          <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 160px; text-align: center; font-weight: 800; line-height: 42px ">{{ order.createTime | formatDate }}</p>
          <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 130px; text-align: center; font-weight: 400; line-height: 42px ">OrderID: {{ order.orderID}}</p>
          <p style="float: right; color: rgb(60, 60, 60); font-size: 12px; width: 90px; text-align: center; font-weight: 400; line-height: 42px ">{{ order.shopName }}</p>
        </div>
        <div style="padding: 15px; clear: both;">
          <img style="float: left; width: 80px; height: 80px; padding-right: 15px" v-bind:src="order.portraitURL"/>
          <div style="width: 220px; float: left; height: 80px;">
            <p style=" color: rgb(60, 60, 60); font-size: 13px; font-weight: 500; line-height: 25px; height: 55px; ">{{ order.pName }}</p>
            <span style="clear:both; width: 100px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>
          </div>
          <p style="float: left; width: 100px; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">{{ order.sellerName }}</p>
          <p style="float: left; width: 100px; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">{{ order.cName }}</p>
          <p style="float: left; width: 90px; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">¥{{ order.orderPrice }}</p>
          <p style="float: left; width: 90px; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">¥{{ order.adminProfit }}</p>
          <p style="float: left; width: 75px; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px; margin-left: 10px">{{ order.amount }}</p>
          <p style="float: left; width: 40px; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px; text-align: center">{{ getState(order.isFinish) }}</p>
          <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px"></p>
        </div>
      </li>
<!--      <ul>
      <li class="inContainerOrder" v-bind:key="order.orderID" v-for="order in orders">
      <div>
      <div style="float: left; width: 500px; height: 160px;">
      <div style="float: left; width: 250px;  height: 120px; margin-top: 20px">
      <div style="float: left; width: 50px; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ order.isFinish }}</div>
      <div style="float: left; width: 50px; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ order.cID }}</div>
      <div style="float: left; width: 50px; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ order.orderPrice }}</div>
      <div style="float: left; width: 50px; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ order.adminProfit }}</div>
      </div>
      </div>
      </div>
      </li>
      </ul>-->
    </div>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'

export default {
  name: 'OwneSearch',
  components: {Loading},
  data () {
    return {
      orders: [],
      isLoad: false,
      value: '',
      currentTab: 0,
      date: new Date().getTime()
    }
  },
  created () {
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
      this.$http.get(this.URL + 'm/search_order_by_time?start=' +
        start + '&end=' + this.date)
        .then((data) => {
          this.isLoad = false
          this.orders = data.body.data.array
        })
        .catch(() => {
          this.isLoad = false
        })
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
    },

    getState: function (info) {
      switch (info) {
        case 0:
          return 'Failed'
        case 1:
          return 'Sending'
        case 2:
          return 'Finished'
        case 3:
          return 'Receiving'
      }
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
  },

  activated () {
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

  #containerSearch{
    margin: 0px auto;
    width: 560px;
    height: 34px;
    padding-top: 20px;
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
    border: 2px solid #f40;
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
    background: #f40;
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

  .basicTab{
    /*background: antiquewhite;*/
    background: rgb(241, 241, 241);
  }

  .checkTab{
    color: #fff;
    background: #f40;
  }

  li{
    width: 866px;
    height: 150px;
    display: block;
    margin-top: 10px;
    border: 1px solid #dfdfdf;
  }

</style>
