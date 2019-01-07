<!--<template>-->
  <!--<div>-->

    <!--<div id="containerHistory">-->
      <!--<div style="clear: both">-->
        <!--<div style="clear: both; height: 36px; width: 400px; margin: 20px auto;">-->
          <!--<p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"-->
             <!--class="basicTab"-->
             <!--:class="{checkTab:currentTab == 0}"-->
             <!--v-on:click="onCheckTab(0)">Day</p>-->
          <!--<p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"-->
             <!--class="basicTab"-->
             <!--:class="{checkTab:currentTab == 1}"-->
             <!--v-on:click="onCheckTab(1)">Week</p>-->
          <!--<p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"-->
             <!--class="basicTab"-->
             <!--:class="{checkTab:currentTab == 2}"-->
             <!--v-on:click="onCheckTab(2)">Month</p>-->
          <!--<p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"-->
             <!--class="basicTab"-->
             <!--:class="{checkTab:currentTab == 3}"-->
             <!--v-on:click="onCheckTab(3)">Year</p>-->
        <!--</div>-->
        <!--<div style="height: 30px; width: 400px; margin: 10px auto" >-->
          <!--<img src="../../assets/previous.png" style="float:left; width: 30px; height: 30px;  background: #dbd7d0;  color: rgb(255,255,255)" id="previous" v-on:click="onClickPrevious()"/>-->
          <!--&lt;!&ndash;<button style="float:left; width: 30px; height: 30px; margin-top: 5px; background: #dbd7d0; color: rgb(255,255,255)" id="previous" v-on:click="onClickPrevious()"></button>&ndash;&gt;-->
          <!--<div style="width: 200px; height: 30px; margin-top: 5px; margin-left: 75px; float: left">{{ outputDate(date)}}</div>-->
          <!--<img src="../../assets/next.png" style="float:right; width: 30px; height: 30px; background: #dbd7d0;  color: rgb(255,255,255)" id="next" v-on:click="onClickNext()"/>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div id="incomeShow" style="width: 866px; height: 500px; background: rgb(241, 241, 241); margin-left: 68px; margin-bottom: 80px; margin-top: 20px">-->
      <!--<h2 align="center" style="padding: 40px">Your income is:</h2>-->
      <!--<h2 align="center" style="padding: 40px">￥{{sum}}</h2>-->
      <!--<h2 align="left" style=" padding: 40px; margin-left: 50px">The current commission rate is :{{value}}</h2>-->
      <!--<h2 align="left" style=" padding: 10px; padding-left: 40px; margin-left: 50px">If you want to change rate, please input:</h2>-->
      <!--<input id="inputSearch" v-model="value"/>-->
      <!--<button id="btnSearch" v-on:click="onClickChangeProfit()">Submit</button>-->
    <!--</div>-->
    <!--<loading v-show="isLoad"/>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import Loading from '@/components/common/Loading'-->

<!--export default {-->
  <!--name: 'OwneIncome',-->
  <!--components: {Loading},-->
  <!--data () {-->
    <!--return {-->
      <!--orders: [],-->
      <!--isLoad: false,-->
      <!--value: '',-->
      <!--currentTab: 0,-->
      <!--date: new Date().getTime(),-->
      <!--sum: 0,-->
      <!--profit: 0-->
    <!--}-->
  <!--},-->
  <!--created () {-->
  <!--},-->
  <!--methods: {-->
    <!--initLoad: function () {-->
      <!--this.isLoad = true-->
      <!--var start = this.date-->
      <!--switch (this.currentTab) {-->
        <!--case 0:-->
          <!--start -= 1000 * 60 * 60 * 24-->
          <!--break-->
        <!--case 1:-->
          <!--start -= 1000 * 60 * 60 * 24 * 7-->
          <!--break-->
        <!--case 2:-->
          <!--start -= 1000 * 60 * 60 * 24 * 30-->
          <!--break-->
        <!--case 3:-->
          <!--start -= 1000 * 60 * 60 * 24 * 365-->
          <!--break-->
      <!--}-->
      <!--this.$http.get(this.URL + 'm/search_order_by_time?start=' +-->
        <!--start + '&end=' + this.date)-->
        <!--.then((data) => {-->
          <!--this.isLoad = false-->
          <!--this.orders = data.body.data.array-->
          <!--var count = 0-->
          <!--this.orders.forEach(item => {-->
            <!--count += item.adminProfit-->
          <!--})-->
          <!--this.sum = count-->
        <!--})-->
        <!--.catch(() => {-->
          <!--this.isLoad = false-->
        <!--})-->
    <!--},-->
    <!--onCheckTab: function (poi) {-->
      <!--this.date = new Date().getTime()-->
      <!--this.currentTab = poi-->
      <!--this.initLoad()-->
    <!--},-->

    <!--outputDate: function (value) {-->
      <!--let date = new Date(value)-->
      <!--switch (this.currentTab) {-->
        <!--case 0:-->
          <!--return this.formatDate(date - 1000 * 60 * 60 * 24) + ' ~ ' + this.formatDate(date)-->
        <!--case 1:-->
          <!--return this.formatDate(date - 1000 * 60 * 60 * 24 * 7) + '  ~  ' + this.formatDate(date)-->
        <!--case 2:-->
          <!--return this.formatDate(date - 1000 * 60 * 60 * 24 * 30) + '  ~  ' + this.formatDate(date)-->
        <!--case 3:-->
          <!--return this.formatDate(date - 1000 * 60 * 60 * 24 * 365) + '  ~  ' + this.formatDate(date)-->
      <!--}-->
    <!--},-->

    <!--formatDate: function (value) {-->
      <!--let date = new Date(value)-->
      <!--let y = date.getFullYear()-->
      <!--let MM = date.getMonth() + 1-->
      <!--MM = MM < 10 ? ('0' + MM) : MM-->
      <!--let d = date.getDate()-->
      <!--d = d < 10 ? ('0' + d) : d-->
      <!--return y + '-' + MM + '-' + d-->
    <!--},-->
    <!--onClickPrevious: function () {-->
      <!--switch (this.currentTab) {-->
        <!--case 0:-->
          <!--this.date -= 1000 * 60 * 60 * 24-->
          <!--break-->
        <!--case 1:-->
          <!--this.date -= 1000 * 60 * 60 * 24 * 7-->
          <!--break-->
        <!--case 2:-->
          <!--this.date -= 1000 * 60 * 60 * 24 * 30-->
          <!--break-->
        <!--case 3:-->
          <!--this.date -= 1000 * 60 * 60 * 24 * 365-->
          <!--break-->
      <!--}-->
      <!--this.initLoad()-->
    <!--},-->
    <!--onClickNext: function () {-->
      <!--switch (this.currentTab) {-->
        <!--case 0:-->
          <!--this.date += 1000 * 60 * 60 * 24-->
          <!--break-->
        <!--case 1:-->
          <!--this.date += 1000 * 60 * 60 * 24 * 7-->
          <!--break-->
        <!--case 2:-->
          <!--this.date += 1000 * 60 * 60 * 24 * 30-->
          <!--break-->
        <!--case 3:-->
          <!--this.date += 1000 * 60 * 60 * 24 * 365-->
          <!--break-->
      <!--}-->
      <!--this.initLoad()-->
    <!--},-->

    <!--onClickChangeProfit: function () {-->
      <!--this.initLoad()-->
      <!--this.isLoad = true-->
      <!--this.$http.get(this.URL + 'm/change_profit_rate?rate=' + this.value)-->
        <!--.then((data) => {-->
          <!--this.isLoad = false-->
          <!--alert('Modify Succeed!')-->
        <!--})-->
        <!--.catch(() => {-->
          <!--this.isLoad = false-->
        <!--})-->
    <!--}-->
  <!--},-->

  <!--filters: {-->
    <!--formatDate: function (value) {-->
      <!--let date = new Date(value)-->
      <!--let y = date.getFullYear()-->
      <!--let MM = date.getMonth() + 1-->
      <!--MM = MM < 10 ? ('0' + MM) : MM-->
      <!--let d = date.getDate()-->
      <!--d = d < 10 ? ('0' + d) : d-->
      <!--return y + '-' + MM + '-' + d-->
    <!--}-->
  <!--},-->

  <!--mounted () {-->
    <!--this.initLoad()-->
    <!--this.isLoad = true-->
    <!--this.$http.get(this.URL + 'm/profit_rate')-->
      <!--.then((data) => {-->
        <!--this.isLoad = false-->
        <!--this.value = data.body.data.array-->
      <!--})-->
      <!--.catch(() => {-->
        <!--this.isLoad = false-->
      <!--})-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--*{-->
    <!--margin: 0px;-->
    <!--padding: 0px;-->
    <!--display: block;-->
  <!--}-->

  <!--#containerSearch{-->
    <!--margin: 0px auto;-->
    <!--width: 560px;-->
    <!--height: 34px;-->
    <!--padding-top: 20px;-->
    <!--text-align: center;-->
    <!--/*padding: 15px 0px;*/-->
  <!--}-->
  <!--#inputSearch{-->
    <!--width: 200px;-->
    <!--height: 40px;-->
    <!--color: #000000;-->
    <!--font-weight: 500;-->
    <!--font-size: 25px;-->
    <!--display: block;-->
    <!--float: left;-->
    <!--margin-left: 300px;-->
    <!--margin-top: 20px;-->
    <!--border: 2px solid #dddddf;-->
    <!--outline: none;-->
  <!--}-->

  <!--#btnSearch{-->
    <!--color: #000000;-->
    <!--font-weight: 500;-->
    <!--width: 70px;-->
    <!--margin-top: 20px;-->
    <!--display:block;-->
    <!--float: left;-->
    <!--font-size: 16px;-->
    <!--height: 42px;-->
    <!--border: none;-->
    <!--color: #fff;-->
    <!--background: #a7a8a2;-->
    <!--outline: none;-->
  <!--}-->

  <!--#containerShop{-->
    <!--width: 866px;-->
    <!--min-width: 866px;-->
    <!--margin: 0px auto;-->
    <!--clear: both;-->
  <!--}-->
  <!--.inContainerOrder {-->
    <!--display: block;-->
    <!--width: 866px;-->
    <!--height: 60px;-->
    <!--margin-left:  65px;-->
    <!--margin-right:  auto;-->
    <!--margin-bottom: 20px;-->
    <!--border: 1px solid #dfdfdf;-->
  <!--}-->

  <!--ul{-->
    <!--list-style-type: none;-->
    <!--display: inline-block;-->
  <!--}-->

  <!--.basicTab{-->
    <!--/*background: antiquewhite;*/-->
    <!--background: rgb(241, 241, 241);-->
  <!--}-->

  <!--.checkTab{-->
    <!--color: #fff;-->
    <!--background: #f40;-->
  <!--}-->

  <!--li{-->
    <!--width: 866px;-->
    <!--height: 150px;-->
    <!--display: block;-->
    <!--margin-top: 10px;-->
    <!--border: 1px solid #dfdfdf;-->
  <!--}-->

<!--</style>-->

<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div style="width: 866px; margin: 0px auto;">

    <p style="clear: both;font-size:12px; margin-top:20px;text-align:left; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">PROFIT</p>

    <div style="height: 330px;width: 800px; margin-left: 33px; margin-top:50px;float: left">
      <div id="myChart_day" :style="{width: '866px', height: '300px'}"></div>
    </div>
    <div style="height: 330px;width: 800px; margin-left: 33px;float: left">
      <div id="myChart_week" :style="{width: '866px', height: '300px'}"></div>
    </div>
    <div style="height: 330px;width: 800px; margin-left: 33px;float: left">
      <div id="myChart_month" :style="{width: '866px', height: '300px'}"></div>
    </div>
    <div style="height: 330px;width: 800px; margin-left: 33px;float: left">
      <div id="myChart_year" :style="{width: '866px', height: '300px'}"></div>
    </div>

    <div id="containInfo">
      <ul>
        <li v-bind:key="income" v-for="income in incomes">
          <div style="height: 130px; margin-left: 40px">
            <p style="height: 30px; float: left;text-align:left; line-height: 130px; vertical-align: center; font-weight: 600; font-size: 20px; color: black;"> Profit ( ￥ ) : &nbsp;&nbsp;&nbsp;&nbsp; </p>
            <p style="height: 30px; float: left;text-align:left; line-height: 130px; vertical-align: center; font-weight: 700; font-size: 30px; color: red;"> {{ income.income_all }} </p>
          </div>
        </li>
      </ul>
    </div>

    <div style="clear:both; margin: 50px auto; width: 700px; background: rgb(237, 237, 237); height: 150px;">
      <h3 align="left" style="padding-left:40px;line-height: 75px">The current commission rate is :{{value}}</h3>
      <h3 align="left" style="padding-left:40px;float:left;line-height: 75px">Change:</h3>
      <input style="float: left; height: 35px; margin-top: 20px; border: 1px solid rgb(237, 237, 237);margin-left: 20px; border-radius: 5px; outline: none;" id="inputSearch" v-model="value"/>
      <p style="float:left;line-height: 35px; margin-top: 20px; background: red; color: white; width: 100px; margin-left: 20px; border-radius: 5px; text-align: center" id="btnSearch" v-on:click="onClickChangeProfit()">Submit</p>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'

export default {
  components: {
    Loading
  },

  data () {
    return {
      intent: {},
      isLoad: false,
      info: {},
      incomes: []
    }
  },

  methods: {
    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'm/income/all')
        .then((data) => {
          console.log(data)
          this.incomes = data.body.data.income
          this.isLoad = false
          this.myChart1 = this.$echarts.init(document.getElementById('myChart_day'))
          this.myChart2 = this.$echarts.init(document.getElementById('myChart_week'))
          this.myChart3 = this.$echarts.init(document.getElementById('myChart_month'))
          this.myChart4 = this.$echarts.init(document.getElementById('myChart_year'))
          this.drawLine_day(this.incomes[0].day_Date, this.incomes[0].this_day_income)
          this.drawLine_week(this.incomes[0].this_week_income)
          this.drawLine_month(this.incomes[0].month_Date, this.incomes[0].this_month_income)
          this.drawLine_year(this.incomes[0].year_Date, this.incomes[0].this_year_income)
        })
        .catch((error) => {
          console.log(error)
          this.isLoad = false
        })
    },
    initInfo: function () {
      this.isLoad = true
    },
    drawLine_day (xData, yData) {
      this.myChart1.setOption({
        title: { text: 'Daily Sales( ￥ )' },
        tooltip: {},
        xAxis: {
          axisPointer: {
            lineStyle: {
              opacity: 0.2,
              width: 1
            },
            label: {
              show: true
            },
            handle: {
              show: true
            }
          },
          data: xData
        },
        yAxis: {},
        series: [{
          name: '￥',
          type: 'bar',
          data: yData,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'top'
              }
            }
          }
        }]
      })
    },
    drawLine_week (yData) {
      this.myChart2.setOption({
        title: { text: 'Weekly Sales( ￥ )' },
        tooltip: {},
        xAxis: {
          axisPointer: {
            lineStyle: {
              opacity: 0.2,
              width: 1
            },
            label: {
              show: true
            },
            handle: {
              show: true
            }
          },
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
            '13', '14', '15', '16', '17', '18', '19', '20' ]
        },
        yAxis: {},
        series: [{
          name: '￥',
          type: 'bar',
          smooth: true,
          data: yData,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'top'
              }
            }
          }
        }]
      })
    },
    drawLine_month (xData, yData) {
      this.myChart3.setOption({
        title: { text: 'Monthly Sales( ￥ )' },
        tooltip: {},
        xAxis: {
          axisPointer: {
            lineStyle: {
              opacity: 0.2,
              width: 1
            },
            label: {
              show: true
            },
            handle: {
              show: true
            }
          },
          data: xData
          /* data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] */
        },
        yAxis: {},
        series: [{
          name: '￥',
          type: 'bar',
          data: yData,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'top'
              }
            }
          }
        }]
      })
    },
    drawLine_year (xData, yData) {
      this.myChart4.setOption({
        title: { text: 'Yearly Sales( ￥ )' },
        tooltip: {},
        xAxis: {
          axisPointer: {
            lineStyle: {
              opacity: 0.2,
              width: 1
            },
            label: {
              show: true
            },
            handle: {
              show: true
            }
          },
          data: xData
        },
        yAxis: {},
        series: [{
          name: '￥',
          type: 'bar',
          data: yData,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'top'
              }
            }
          }
        }]
      })
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

  mounted () {
    /* if (this.$route.params.data !== undefined) {
        this.id = this.$route.params.data
        this.$emit('childByValue', this.id)

      } */
    this.initInfo()
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
    margin: 0;
    padding: 0;
    display: block;
  }

  ul{
    margin: 0 auto;
  }

  li{
    width: 700px;
    margin:10px auto;
    height: 130px;
    float: left;
    display: block;
    background: rgb(237, 237, 237);
  }
  #containInfo{
    width: 700px;
    margin: 0 auto;
    clear: both;
  }
</style>
