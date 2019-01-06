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
    <div id="incomeShow" style="width: 866px; height: 500px; background: rgb(241, 241, 241); margin-left: 68px; margin-bottom: 80px; margin-top: 20px">
      <h2 align="center" style="padding: 40px">Your income is:</h2>
      <h2 align="center" style="padding: 40px">￥{{sum}}</h2>
      <h2 align="left" style=" padding: 40px; margin-left: 50px">The current commission rate is :{{value}}</h2>
      <h2 align="left" style=" padding: 10px; padding-left: 40px; margin-left: 50px">If you want to change rate, please input:</h2>
      <input id="inputSearch" v-model="value"/>
      <button id="btnSearch" v-on:click="onClickChangeProfit()">Submit</button>
    </div>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'

export default {
  name: 'OwneIncome',
  components: {Loading},
  data () {
    return {
      orders: [],
      isLoad: false,
      value: '',
      currentTab: 0,
      date: new Date().getTime(),
      sum: 0,
      profit: 0
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
          var count = 0
          this.orders.forEach(item => {
            count += item.adminProfit
          })
          this.sum = count
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

    onClickChangeProfit: function () {
      this.initLoad()
      this.isLoad = true
      this.$http.get(this.URL + 'm/change_profit_rate?rate=' + this.value)
        .then((data) => {
          this.isLoad = false
          alert('Modify Succeed!')
        })
        .catch(() => {
          this.isLoad = false
        })
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
      return y + '-' + MM + '-' + d
    }
  },

  mounted () {
    this.initLoad()
    this.isLoad = true
    this.$http.get(this.URL + 'm/profit_rate')
      .then((data) => {
        this.isLoad = false
        this.value = data.body.data.array
      })
      .catch(() => {
        this.isLoad = false
      })
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
    width: 200px;
    height: 40px;
    color: #000000;
    font-weight: 500;
    font-size: 25px;
    display: block;
    float: left;
    margin-left: 300px;
    margin-top: 20px;
    border: 2px solid #dddddf;
    outline: none;
  }

  #btnSearch{
    color: #000000;
    font-weight: 500;
    width: 70px;
    margin-top: 20px;
    display:block;
    float: left;
    font-size: 16px;
    height: 42px;
    border: none;
    color: #fff;
    background: #a7a8a2;
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
