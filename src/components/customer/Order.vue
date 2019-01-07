<template>
  <div>
    <loading v-show="isLoad"/>
    <div v-show="isComment" style="background: #d5d5d5; border-radius: 5px; position: fixed; top: 0px;left: 0px;right: 0px;bottom: 0px;margin: auto; width: 352px; height: 213px">
      <div>
        <p style="padding-left:8px; line-height: 30px; float: left; font-size: 15px; font-weight: 600; color: rgb(60, 60, 60);">Comment</p>
        <img style="float: right; width: 20px; height: 20px; padding: 5px"  v-on:click="isComment = false" src="../../assets/close.jpg"/>
      </div>
      <textarea v-model="comment" style="float: left; width: 350px; line-height: 16px; font-weight: 500; resize:none; font-size: 13px; color: rgb(60, 60, 60);  height: 150px; border: 1px solid #dfdfdf"/>
      <button v-on:click="onClickSure()" style="float:right;width: 80px; height: 30px; border: none; background: #f40; border-radius: 5px; font-weight: 700; font-size: 16px; color: #fff;">OK</button>
    </div>

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
          <div style="width: 200px; height: 30px; margin-top: 5px; margin-left: 75px; float: left">{{ outputDate()}}</div>
          <img src="../../assets/next.png" style="float:right; width: 30px; height: 30px; background: #dbd7d0;  color: rgb(255,255,255)" id="next" v-on:click="onClickNext()"/>
        </div>
      </div>
    </div>

    <div style="height: 42px; width: 866px; margin: 20px auto;background: rgb(241, 241, 241); border: 1px solid #dfdfdf;">
      <p style="float: left; width: 330px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Good</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Price</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Number</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Sum</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Trading Status</p>
      <p style="float: right; width: 80px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Operate</p>
    </div>
    <div id="containerBody">
      <ul>
        <li v-bind:key="order" v-for="order in orders" v-on:click="goGood(order)">
          <div style="height: 42px;background: rgb(241, 241, 241); border-bottom: 1px solid #dfdfdf">
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 150px; padding-left: 20px; font-weight: 800; line-height: 42px ">{{order.createTime | formatDate }}</p>
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 130px; text-align: center; font-weight: 400; line-height: 42px ">OrderNum: {{ order.orderID}}</p>
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 90px; text-align: center; font-weight: 400; line-height: 42px ">{{ order.shopName }}</p>
          </div>
          <div style="padding: 15px; clear: both;">
            <img style="float: left; width: 80px; height: 80px; padding-right: 15px" v-bind:src="order.portraitURL"/>
            <div style="width: 220px; float: left; height: 80px;">
              <p style=" color: rgb(60, 60, 60); font-size: 13px; font-weight: 500; line-height: 25px; height: 55px; ">{{ order.pName }}</p>
              <span style="clear:both; width: 100px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>
            </div>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">¥{{ order.orderPrice / order.amount }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">{{ order.amount }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">¥{{ order.orderPrice }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">{{ getStatus(order.isFinish) }}</p>
            <div style="display:table-cell; vertical-align:middle; float: right; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">
              <button v-show="order.isFinish === 3" class="content" style="float: right; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; cursor: pointer" v-on:click="onClickConfirm(order.orderID)">Confirm</button>
              <button v-show="order.isFinish === 2 && order.commented === 0" style="float: right; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; cursor: pointer" v-on:click="onClickComment(order)">comment</button>
              <button v-show="order.isFinish === 1||order.isFinish === 2||order.isFinish === 3" class="content" style="float: right; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer" v-on:click="onClickRefund(order.orderID)">Refund</button>
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
    return {
      isLoad: false,
      currentPage: 1,
      name: 'sds',
      orders: [],
      isComment: false,
      currentOrder: {},
      comment: '',
      currentTab: 0,
      date: new Date().getTime()
    }
  },

  methods: {
    initLoad: function () {
      // this.isLoad = true
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
      this.$http.get(this.URL + 'c/search_order_by_time?' +
        'start=' +
        start +
        '&end=' +
        this.date +
        '&cid=' +
        this.getCookie('userId'))
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.orders = data.body.data.array
          console.log(this.orders)
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    onClickRefund: function (id) {
      this.isLoad = true
      event.stopPropagation()
      this.$http.get(this.URL + 'c/refund?orderID=' + id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    onClickConfirm: function (id) {
      event.stopPropagation()
      this.isLoad = true
      this.$http.get(this.URL + 'c/confirmOrder?orderID=' + id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    onClickComment: function (order) {
      this.isComment = true
      this.currentOrder = order
      // 阻止点击事件向上传递，防止影响到父容器的点击事件
      event.stopPropagation()
    },

    onCheckTab: function (poi) {
      this.date = new Date().getTime()
      this.currentTab = poi
      this.initLoad()
    },

    onClickSure: function () {
      this.isComment = false
      this.isLoad = true
      this.$http.get(this.URL + 'c/comment?orderID=' +
        this.currentOrder.orderID +
        '&message=' +
        this.comment)
        .then((data) => {
          console.log(data)
          this.comment = ''
          this.isLoad = false
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    getStatus: function (statu) {
      if (statu === 0) {
        return 'Failed'
      } else if (statu === 1) {
        return 'Wait_delivery'
      } else if (statu === 2) {
        return 'Succeed'
      } else if (statu === 3) {
        return 'Arrived'
      }
    },
    outputDate: function () {
      let date = new Date(this.date)
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
    goGood: function (info) {
      this.$router.push({name: 'customer_good', params: {data: info}})
    },
    onClickYearly: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'c/ordersWithin?cID=' +
        this.getCookie('userId') +
        '&type=' +
        1)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.orders = response.data.orderArr
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    onClickMonthly: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'c/ordersWithin?cID=' +
        this.getCookie('userId') +
        '&type=' +
        2)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.orders = response.data.orderArr
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    onClickWeekly: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'c/ordersWithin?cID=' +
        this.getCookie('userId') +
        '&type=' +
        4)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.orders = response.data.orderArr
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    onClickDayly: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'c/ordersWithin?cID=' +
        this.getCookie('userId') +
        '&type=' +
        3)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.orders = response.data.orderArr
        })
        .catch(() => {
          this.isLoad = false
        })
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

  activated: function () {
    this.initLoad()
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

  #containerBody{
    width: 866px;
    margin: 0px auto;
    clear: both;
  }

  ul{
    list-style-type: none;
  }

  li{
    width: 866px;
    height: 150px;
    display: block;
    margin-top: 10px;
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
