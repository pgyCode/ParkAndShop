<template>
  <div>
    <div style="height: 42px; width: 1000px; margin: 20px auto;background: rgb(42,86,215); border: #000000 ;solid :000000;">
      <p style="float: left; width: 250px;text-align: center;color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Good</p>
      <p style="float: left; width: 80px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Price</p>
      <p style="float: left; width: 150px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Number</p>
      <!--<p style="float: left; width: 120px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Sum</p>-->
      <p style="float: left; width: 150px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Information</p>
      <p style="float: left; width: 150px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Time</p>
      <p style="float: left; width: 130px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Trading Status</p>
      <!--<p style="float: right; width: 120px;text-align: center; color: rgb(60, 60, 60); font-size: 15px; font-weight: 600; line-height: 42px">Operate</p>-->
    </div>
    <div id="containerBody">
      <ul>
        <li v-bind:key="order" v-for="order in orders" style="border-width:1px;border-color: black;" >
          <div style="height: 42px;background: rgb(241, 241, 241); border-bottom: none;border-color: black; solid: #dfdfdf">
            <!--<p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 100px; text-align: center; font-weight: 800; line-height: 42px ">{{order.time}}</p>-->
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 1000px; font-weight: 700; line-height: 42px ">&nbsp;&nbsp;&nbsp;OrderID: &nbsp;&nbsp;&nbsp;&nbsp;{{ order.orderID}}
             </p>
          </div>
            <div style="height: 108px; width: 1000px;">
             <img v-bind:src="order.portraitURL"
               style="float: left; width: 105px; height: 108px; border:none;"  v-on:click="goOrder(order)"/>

          <div style="width: 880px;height: 108px;margin: 0px auto;">
             <div style="width: 800px;height: 108px;margin: 0px auto;float: left" v-on:click="goOrder(order)">
              <p style="float: left; width: 100px;text-align:center;color: rgb(60, 60, 60); font-size: 12px; font-weight: 700; line-height: 96px">{{ order.pName }}</p>
              <!--<span style="clear:both; width: 100px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>-->
            <!--</div>-->
            <p style="float: left; width: 160px;text-align:center;color: rgb(60, 60, 60); font-size: 12px; font-weight: 700; line-height: 96px">¥{{ order.orderPrice }}</p>
            <p style="float: left; width: 80px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 700; line-height: 96px">{{  order.amount }}</p>
            <!--<p style="float: left; width: 70px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 96px">¥{{ order.orderPrice*order.amount}}</p>-->
            <div style="float: left; width: 220px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 50px">
              <p>{{ order.username}}</p>
              <p>{{order.address}}</p>
            </div>
            <div style="float: left; width: 80px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 50px">
              <p>{{ order.Date}}</p>
            </div >
               <div style="float: left; width: 160px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 50px">
            <p v-if="order.isFinish === 3" style="float: left; width: 160px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 96px">&nbsp;&nbsp;&nbsp;&nbsp;Unshipped</p>
               <p v-else-if="order.isFinish ===1" style="float: left; width: 160px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 96px">&nbsp;&nbsp;&nbsp;&nbsp;Sending</p>
               <p v-else-if="order.isFinish ===0" style="float: left; width: 160px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 96px">&nbsp;&nbsp;&nbsp;&nbsp;Failed</p>
               <p v-else-if="order.isFinish ===2" style="float: left; width: 160px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 96px">&nbsp;&nbsp;&nbsp;&nbsp;Succeed</p>
               </div><!--<div style="float:left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px;-->
             <!--font-weight: 600;border-radius: 5px;-->
             <!--cursor: pointer">-->
              <!--<button style="margin:0px auto;margin-top: 15px;border: none;text-align: center;background: #f3476c;color: white;" v-on:click="refund(order.orderID)">Refund</button>-->
              <!--<button style="margin:0px auto;margin-top: 25px;border: none;background: #f3476c;color: white;" v-on:click="send(order.orderID)">&nbsp;Send &nbsp;</button>-->
            <!--</div>-->
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
      // name: 'sds',
      orders: []
//      status: 'unshipped',
//      status_num: 1    // 初始值：未发货
    }
  },

  methods: {
/*   refund: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/refund?orderId=' + id)
        .then((data) => {
          this.isLoad = false
          alert('refund Succeed')
        })
      this.status = 'Failed'
      this.initLoad()
    },
*/
 /*   send: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/send?orderId=' + id)
        .then((data) => {
          this.isLoad = false
          alert('send Succeed')
        })
      this.status = 'Sending'
      this.initLoad()
    },
*/
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
    },

    goOrder: function (order) {
       console.log(order)
      this.$router.push({name: 'seller_order_info', params: {data: order}})
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
    display: block;
    margin-top: 10px;
    border: 1px solid #dfdfdf;
  }

</style>
