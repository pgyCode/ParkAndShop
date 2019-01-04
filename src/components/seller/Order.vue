<template>
  <div>

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
        <li v-bind:key="order" v-for="order in orders">
          <div style="height: 42px;background: rgb(241, 241, 241); border-bottom: 1px solid #dfdfdf">
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 100px; text-align: center; font-weight: 800; line-height: 42px ">{{order.time}}</p>
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 130px; text-align: center; font-weight: 400; line-height: 42px ">OrderID: {{ order.orderID}}</p>
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 300px; text-align: center; font-weight: 400; line-height: 42px ">{{ order.shopName }}</p>
            <p style="float: right; color: rgb(60, 60, 60); font-size: 12px; width: 90px; text-align: center; font-weight: 400; line-height: 42px ">{{ order.sellerName }}</p>
          </div>
          <div style="padding: 15px; clear: both;">
            <img style="float: left; width: 80px; height: 80px; padding-right: 15px" v-bind:src="order.portraitURL"/>
            <div style="width: 220px; float: left; height: 80px;">
              <p style=" color: rgb(60, 60, 60); font-size: 13px; font-weight: 500; line-height: 25px; height: 55px; ">{{ order.pName }}</p>
              <span style="clear:both; width: 100px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>
            </div>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">¥{{ order.orderPrice }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">{{ order.amount }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">¥{{ order.orderPrice * order.amount}}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">{{ status }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px"></p>
            <div>
              <button style="float: right; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px;
             font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px;
              margin-top: 27px; cursor: pointer" v-on:click="refund(order.orderID)">Refund</button>
              <button style="float: right; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px;
             font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px;
              margin-top: 27px; cursor: pointer" v-on:click="send(order.orderID)">Send</button>
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
  data () {
    return {
      isLoad: false,
      currentPage: 1,
      // name: 'sds',
      orders: [],
      status: '&nbsp',
      status_num: 1 // 初始值：未发货
    }
  },

  methods: {
    refund: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/refund?orderId=' + id)
        .then((data) => {
          this.isLoad = false
          alert('refund Succeed')
        })
      this.status = 'Failed'
      this.initLoad()
    },

    send: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/send?orderId=' + id)
        .then((data) => {
          this.isLoad = false
          alert('send Succeed')
        })
      this.status = 'Sending'
      this.initLoad()
    },

    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/all?id=' + this.getCookie('userId'))
        .then((data) => {
          console.log(data)
          this.orders = data.body.data.order
          /* if (this.orders.isFinish == 0) {

          } */
          this.isLoad = false
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
</style>
