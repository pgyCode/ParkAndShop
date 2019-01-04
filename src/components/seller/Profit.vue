<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div style="width: 1000px; margin: 0px auto;">

    <div style="width: 1000px; min-width: 1000px; margin: 0px auto;">

      <div style="width: 1000px; height: 83px; padding: 0px 0px; margin: 0px auto;">
        <img src="../../assets/logo.png" style="float: left;" height="83px" width='210px'/>
        <p style="float: left; color: rgb(60, 60, 60); line-height: 83px; font-size: 22px; font-weight: 700; margin-left: 20px">Profit</p>
      </div>
      <div style=" width: 1000px;height: 19px; padding: 6px 0px; border-bottom: 2px solid #f40">
        <p style="float: left;font-size: 13px; font-weight: 500; color: rgb(60, 60, 60);">Shop Name:&nbsp;&nbsp; {{ info.shopName }}</p>
        <p style="float:left; text-align:center; margin-left:10px;font-size: 13px; font-weight: 500; color: #fff; width: 70px; height: 19px; border-radius: 3px; background: #f40;">SHOP</p>
      </div>

      <div style="height: 120px; width: 1000px;">
        <img v-bind:src="info.url"
             style="float: left; width: 118px; height: 118px; border: 1px solid rgb(212,215,220)"/>
        <p src="../../assets/logo.png" style="float:left; width: 880px; height: 120px; font-size: 30px; line-height: 120px; text-align: center; color: rgb(63,127,206);">{{ info.shopName }}</p>
      </div>
    </div>

    <p style="clear: both;font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)"> Profit </p>

    <div style="height: 450px;width: 800px;float: left">
      <div id="myChart_day" :style="{width: '900px', height: '300px'}"></div>
    </div>
    <div style="height: 400px;width: 800px;float: left">
      <div id="myChart_week" :style="{width: '900px', height: '300px'}"></div>
    </div>
    <div style="height: 400px;width: 800px;float: left">
      <div id="myChart_month" :style="{width: '900px', height: '300px'}"></div>
    </div>

      <div id="containInfo">
        <ul>
          <li v-bind:key="income" v-for="income in incomes">
            <div style="height: 300px;border-bottom: 1px solid #dfdfdf">
              <p style="width: 200px;height: 38px; margin: 5px 5px 5px;float: left;text-align: left; vertical-align: center; line-height: 100px; font-weight: 500; font-size: 18px; color: black;"> Daily sales:     {{ income.income_1 }} </p>
              <p style="width: 200px;height: 38px; margin: 10px 5px 5px;float: left;text-align: left; vertical-align: center; line-height: 100px; font-weight: 500; font-size: 18px; color: black;"> Weekly sales:     {{ income.income_7 }} </p>
              <p style="width: 200px;height: 38px; margin: 10px 5px 5px;float: left;text-align: left; vertical-align: center; line-height: 100px; font-weight: 500; font-size: 18px; color: black;"> Monthly sales:     {{ income.income_30 }} </p>
              <p style="width: 200px;height: 38px; margin: 10px 5px 5px;float: left;text-align: left; vertical-align: center; line-height: 100px; font-weight: 500; font-size: 18px; color: black;"> Yearly sales:     {{ income.income_365 }} </p>
              <p style="width: 500px;height: 30px; margin: 25px 5px 5px;float: left;text-align:left; vertical-align: center; line-height: 100px; font-weight: 500; font-size: 25px; color: red;"> Profit:   {{ income.income_all }} </p>
            </div>
          </li>
        </ul>
      </div>

    <!--<div id="myChart" :style="{width: '600px', height: '400px'}"></div>-->
    <loading v-show="isLoad"/>
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
      id: -1,
      intent: {},
      isLoad: false,
      info: {},
      incomes: []
    }
  },

  methods: {
    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/income/all?id=' +
        this.getCookie('userId'))
        .then((data) => {
          this.incomes = data.body.data.income
          this.isLoad = false
          this.myChart1 = this.$echarts.init(document.getElementById('myChart_day'))
          this.myChart2 = this.$echarts.init(document.getElementById('myChart_week'))
          this.myChart3 = this.$echarts.init(document.getElementById('myChart_month'))
          this.drawLine_day(this.incomes[0].day_Date, this.incomes[0].this_day_income)
          this.drawLine_week(this.incomes[0].this_week_income)
          this.drawLine_month(this.incomes[0].month_Date, this.incomes[0].this_month_income)
        })
        .catch((error) => {
          console.log(error)
          this.isLoad = false
        })
    },
    initInfo: function () {
      this.isLoad = true
      console.log(this.id)
      this.$http.get(this.URL + 'b/info/get?id=' +
          this.id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.info = response.data.data
        })
        .catch(() => {
          this.isLoad = false
        })
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
    }
  },

  mounted () {
    if (this.$route.params.data !== undefined) {
      this.id = this.$route.params.data
      this.$emit('childByValue', this.id)
      this.initInfo()
    }
    this.initLoad()
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
    width: 990px;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    height: 700px;
    float: left;
    display: block;
  }
  #containInfo{
    width: 1000px;
    margin: 0 auto;
  }
</style>
