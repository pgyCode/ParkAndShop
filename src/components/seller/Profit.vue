<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div style="width: 1000px; margin: 0px auto;">

    <p style="clear: both;margin-top: 20px;font-size:12px;text-align:center; font-weight:700; color: #000000; padding: 3px 5px; height: 25px; line-height: 25px; background: dodgerblue">PROFIT</p>

    <div style="height: 330px;width: 800px;margin-left:75px;margin-top:50px;float: left">
      <div id="myChart_day" :style="{width: '900px', height: '300px'}"></div>
    </div>
    <div style="height: 330px;width: 800px;margin-left:75px;float: left">
      <div id="myChart_week" :style="{width: '900px', height: '300px'}"></div>
    </div>
    <div style="height: 330px;width: 800px;margin-left:75px;float: left">
      <div id="myChart_month" :style="{width: '900px', height: '300px'}"></div>
    </div>
    <div style="height: 330px;width: 800px;margin-left:75px;float: left">
      <div id="myChart_year" :style="{width: '900px', height: '300px'}"></div>
    </div>

      <div id="containInfo">
        <ul>
          <li v-bind:key="income" v-for="income in incomes">
            <div style="height: 150px">
              <p style="color: gray">&nbsp;&nbsp; The proceeds have been deducted for additional expenses ! &nbsp;&nbsp; </p>
              <p style="height: 30px; margin: 25px 5px 5px;float: left;text-align:left; vertical-align: center; line-height: 40px; font-weight: 600; font-size: 20px; color: black;"> Profit ( ￥ ) : &nbsp;&nbsp;&nbsp;&nbsp; </p>
              <p style="height: 30px; margin: 25px 5px 5px;float: left;text-align:left; vertical-align: center; line-height: 40px; font-weight: 700; font-size: 30px; color: red;"> {{ income.income_all }} </p>
            </div>
          </li>
        </ul>
      </div>
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
      console.log(this.id)
      this.$http.get(this.URL + 'b/info/get?id=' +
          this.getCookie('userId'))
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
    }
  },

  mounted () {
    /* if (this.$route.params.data !== undefined) {
      this.id = this.$route.params.data
      this.$emit('childByValue', this.id)

    } */
    this.initInfo()
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
    width: 800px;
    margin-top: 10px;
    margin-left: 100px;
    margin-right: 100px;
    height: 130px;
    float: left;
    display: block;
    background: rgb(237, 237, 237);
  }
  #containInfo{
    width: 1000px;
    margin: 0 auto;
  }
</style>
