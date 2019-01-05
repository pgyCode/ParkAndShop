<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div style="width: 1000px; margin: 0px auto;">

    <div style="width: 1000px; min-width: 1000px; margin: 0px auto;">

      <div style="width: 1000px; height: 83px; padding: 0px 0px; margin: 0px auto;">
        <img src="../../assets/logo.png" style="float: left;" height="83px" width='210px'/>
        <p style="float: left; color: rgb(60, 60, 60); line-height: 83px; font-size: 22px; font-weight: 700; margin-left: 20px">Shop</p>
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

    <p style="clear: both;font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">All Goods</p>
    <div id="containInfo">
      <ul>
        <li v-bind:key="data" v-for="data in datas" >
          <div style="width: 140px;height: 140px;margin: 5px;float: left" v-on:click="goGood(data)">
            <img v-bind:src="data.portraitURL" style="width: 140px; height: 140px; margin: 0px auto; border: 1px solid #dfdfdf;"/>
          </div>
          <div style="width: 840px;height: 150px;margin: 0px;float: right;">
            <div style="width: 680px;height: 140px;margin: 5px auto;float: left" v-on:click="goGood(data)">
              <p style="width: 250px;height: 55px; margin: 10px 5px 5px;float: left;text-align: center; vertical-align: center; line-height: 100px; font-weight: 500; font-size: 13px; color: black;">{{ data.pName }}</p>
              <p style="width: 150px;height: 140px; margin: 10px 30px 5px;text-align: center;float: left; line-height: 110px;font-weight: 900; font-size: 15px; color: #f40;">💰¥{{ data.price }}</p>
              <p style="height: 140px; margin: 10px 30px 5px;text-align: center;float: left; line-height: 110px;font-weight: 900; font-size: 15px; color: green;">count:{{ data.num }}</p>
            </div>
            <div style="width: 140px;height: 140px;margin: 5px auto;float: right;">
              <button class='subTitle' v-on:click="goGoodInfo(data)" style="margin_left: 80px;margin-top: 58px"> Update </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <router-view/>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {
  components: {Loading},

  data () {
    return {
      id: -1,
      datas: [],
      intent: {},
      isLoad: false,
      info: {}
    }
  },

  methods: {
    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/good/all?id=' +
        this.id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.datas = data.body.data.array
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

    goGood: function (info) {
      this.$router.push({name: 'seller_good', params: {data: info}})
    },

    goGoodInfo: function (info) {
      this.$router.push({name: 'seller_good_info', params: {data: info}})
    }
  },

  activated () {
    console.log(this.$route.params.data)
    if (this.$route.params.data !== undefined) {
      this.id = this.$route.params.data
    }
    this.$emit('childByValue', this.id)
    this.initLoad()
    this.initInfo()
    // console.log('测试 mounted')
    // this.id = this.getCookie('userId')
    // this.$emit('childByValue', this.id)
    // this.initLoad()
    // console.log(this.id)
  }

  // mounted () {
  //   this.intent = this.$route.params.data
  //   this.id = this.intent.id
  //   if (this.id === -1) {
  //     this.id = this.getCookie('userId')
  //   }
  //   console.log(this.id)
  // }
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
    width: 990px;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    height: 150px;
    float: left;
    display: block;
    border: 1px solid #dfdfdf;
  }
  #containInfo{
    width: 1000px;
    margin: 0px auto;
    /*clear: both;*/
  }

</style>
