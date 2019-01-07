<template>
  <div>
    <div id="containerSearch">
      <div style="clear: both">
        <input id="inputSearch" v-model="value"/>
        <button id="btnSearch" v-on:click="onClickSearch()">Search</button>
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
          <li v-bind:key="order" v-for="order in orders" style="border:1px solid gray;width: 1000px" >
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
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'

export default {
  components: {Loading},
  data () {
    return {
      orders: [],
      isLoad: false,
      value: ''
    }
  },
  created: function () {
    this.initLoad()
  },
  methods: {
    onClickSearch: function () {
      this.isLoad = true
      console.log(this.value)
      this.$http.get(this.URL + 'b/order/history/search?orderId=' +
        this.value)
        .then((data) => {
          this.isLoad = false
          this.orders = data.body.data.an_order
        })
        .catch(() => {
          this.isLoad = false
        })
    },
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
    border: 2px solid dodgerblue;
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
    background: dodgerblue;
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
