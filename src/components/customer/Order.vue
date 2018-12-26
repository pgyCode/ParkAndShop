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
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 100px; text-align: center; font-weight: 800; line-height: 42px ">{{order.createTime}}</p>
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 130px; text-align: center; font-weight: 400; line-height: 42px ">OrderNum: {{ order.orderID}}</p>
            <p style="float: left; color: rgb(60, 60, 60); font-size: 12px; width: 300px; text-align: center; font-weight: 400; line-height: 42px ">{{ order.product.shopName }}</p>
            <p style="float: right; color: rgb(60, 60, 60); font-size: 12px; width: 90px; text-align: center; font-weight: 400; line-height: 42px ">{{ order.product.shopName }}</p>
          </div>
          <div style="padding: 15px; clear: both;">
            <img style="float: left; width: 80px; height: 80px; padding-right: 15px" v-bind:src="order.product.portraitURL"/>
            <div style="width: 220px; float: left; height: 80px;">
              <p style=" color: rgb(60, 60, 60); font-size: 13px; font-weight: 500; line-height: 25px; height: 55px; ">{{ order.product.pName }}</p>
              <span style="clear:both; width: 100px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>
            </div>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">¥{{ order.product.price }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">{{ a = 1 }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">¥{{ order.product.price }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">{{ getStatus(order.isFinish) }}</p>
            <button style="float: right; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer" v-on:click="onClickRefund(order.orderID)">Refund</button>
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
      name: 'sds',
      orders: []
    }
  },

  methods: {
    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'c/lookupOrders?cID=' + this.getCookie('userId'))
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
    onClickRefund: function (id) {
      this.isLoad = true
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
    getStatus: function (statu) {
      if (statu === 0) {
        return 'Failed'
      } else if (statu === 1) {
        return 'Succeed'
      }
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
