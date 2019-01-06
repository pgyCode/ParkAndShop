<template>
  <div style="width: 1000px; margin: 0px auto;">
    <div style="width: 1000px; min-width: 1000px; margin: 0px auto;">

      <div style="width: 1000px; height: 83px; padding: 0px 0px; margin: 0px auto;">
        <img src="../../assets/logo.png" style="float: left;" height="83px" width='210px'/>
        <p style="float: left; color: rgb(60, 60, 60); line-height: 83px; font-size: 22px; font-weight: 700; margin-left: 20px">Shop</p>
      </div>
      <div style=" width: 1000px;height: 19px; padding: 6px 0px; border-bottom: 2px solid #5884ff">
        <p style="float:left; font-size: 15px;   font-weight: 500; color: rgb(0,0,0);border-radius: 3px;background: #2a56d7">&nbsp;&nbsp;Shop Name:&nbsp;&nbsp;</p>
        <p >&nbsp;&nbsp; {{ info.shopName }}</p>
      </div>
      <div style="height: 120px; width: 1000px;">
        <img v-bind:src="info.url" v-on:click="goShop(info.sID)"
             style="float: left; width: 118px; height: 118px; border: 1px solid rgb(212,215,220)"/>
        <p src="../../assets/logo.png"  style="float:left; width: 880px; height: 120px; font-size: 30px; line-height: 120px; text-align: center; color: rgb(63,127,206);">{{ info.shopName }}</p>
      </div>
    </div>
    <loading v-show="isLoad"/>
    <keep-alive><router-view/></keep-alive>
    <good v-show="false" v-on:childByValue="childByValue"/>
    <shop v-show="false" v-on:childByValue="childByValue"/>
    <customerShop v-show="false" v-on:childByValue="childByValue"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
import Good from '@/components/seller/Good'
import Shop from '@/components/seller/Shop'
import CustomerShop from '@/components/customer/Shop'
export default {
  components: {CustomerShop, Loading, Good, Shop},

  data () {
    return {
      id: -1,
      info: {
      },
      isLoad: false
    }
  },

  methods: {
    childByValue: function (childValue) {
      console.log('我收到的是' + childValue)
      if (childValue !== '') {
        this.id = childValue
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
      }
    },
    goShop: function (info) {
      this.$router.push({name: 'seller_shop', params: {data: info}})
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

  ul{
    margin: 0px auto;
  }

  li{
    width: 240px;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    height: 322px;
    float: left;
  }

</style>
