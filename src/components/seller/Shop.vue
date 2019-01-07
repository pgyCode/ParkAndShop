<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div style="width: 1000px; margin: 0px auto;">
    <div style="width: 1000px; min-width: 1000px; margin: 0px auto;">

      <div style="width: 1000px; height: 83px; padding: 0px 0px; margin: 0px auto;">
        <img src="../../assets/logo.png" style="float: left;" height="83px" width='210px'/>
        <p style="float: left; color: rgb(60, 60, 60); line-height: 83px; font-size: 22px; font-weight: 700; margin-left: 20px">Shop</p>
        <span v-if="info.isTop5 === 0 || info.isTop5 === -2">
          <button v-on:click="goAdvertise(-1)" style="margin-top: 53px;background: blue;color: white;width: 70px;line-height:25px;border: none;float: right"> Advertising </button>
        </span>
        <span v-else-if="info.isTop5 === -1">
          <button  style="margin-top: 53px;background: forestgreen;color: white;width: 70px;line-height:25px;border: none;float: right"> Loading... </button>
        </span>
        <span v-else-if="info.isTop5 === 1">
          <button  style="margin-top: 53px;background: red;color: white;width: 70px;line-height:25px;border: none;float: right"> Advertised </button>
        </span>
      </div>
      <div style=" width: 1000px;height: 19px; padding: 6px 0px; border-bottom: 2px solid #5884ff;float: left;">
        <p style="float:left;font-size: 15px;   font-weight: 500; color: rgb(0,0,0);border-radius: 3px;background: #2a56d7">&nbsp;&nbsp;Shop Name:&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;{{info.shopName }}</p>
      </div>
      <div style="height: 120px; width: 1000px;">
        <img v-bind:src="info.url" v-on:click="initLoad()" style="float: left; width: 118px; height: 118px; border: 1px solid rgb(212,215,220)"/>
        <p src="../../assets/logo.png" style="float:left; width: 880px; height: 120px; font-size: 30px; line-height: 120px; text-align: center; color: rgb(63,127,206);">{{ info.shopName }}</p>
      </div>
    </div>
    <loading v-show="isLoad"/>
    <p style="clear: both;font-size:12px;text-align:center; font-weight:700; color: #000000; padding: 3px 5px; height: 25px; line-height: 25px; background: dodgerblue">MANAGER All GOODS</p>
    <div id="containInfo">
      <ul>
        <p style="height: 5px;width: 990px"></p>
        <li v-bind:key="data" v-for="data in datas" style="border-color:darkgrey;border-width: 1px;" >
          <div style="width: 140px;height: 140px;margin: 5px;float: left;border:none;" v-on:click="goGood(data)">
            <img v-bind:src="data.portraitURL" style="width: 140px; height: 140px; margin: 0px auto; border: none;"/>
          </div>
          <div style="width: 840px;height: 150px;margin: 0px;float: right;">
            <div style="width: 680px;height: 140px;margin: 5px auto;float: left" v-on:click="goGood(data)">
              <p style="width: 250px;height: 55px; margin: 10px 5px 5px;float: left;text-align: center; vertical-align: center; line-height: 110px; font-weight: 700; font-size: 15px; color: black;">{{ data.pName }}</p>
              <p style="width: 150px;height: 140px; margin: 10px 30px 5px;text-align: center;float: left; line-height: 110px;font-weight: 900; font-size: 15px; color: #d71216;">💰¥{{ data.price }}</p>
              <p style="height: 140px; margin: 10px 30px 5px;text-align: center;float: left; line-height: 110px;font-weight: 900; font-size: 15px; color: forestgreen;">Count:{{ data.num }}</p>
            </div>
            <div style="width: 140px;height: 140px;margin: 5px auto;float: right;">
              <button class='subTitle' v-on:click="goGoodInfo(data)" style="margin-top: 12px;margin-left: 20px;background: dodgerblue;color: white;width: 70px;height: 25px;border: none"> Update </button>
              <button class='subTitle' v-on:click="goodDelete(data.pID)" style="margin-top: 20px;margin-left: 20px;background: dodgerblue;color: white;width: 70px;height: 25px;border: none">  Shelves </button>
              <span v-if="data.isTop10 === 0 || data.isTop10 === -2 ">
                <button class='subTitle' v-on:click="goAdvertise(data.pID)" style="margin-top: 20px;margin-left: 20px;background: dodgerblue;color: white;width: 70px;height: 25px;border: none"> Advertising </button>
              </span>
              <span v-else-if="data.isTop10 === -1 ">
                <button class='subTitle'  style="margin-top: 20px;margin-left: 20px;background: forestgreen;color: white;width: 70px;height: 25px;border: none"> Loading... </button>
              </span>
              <span v-else-if="data.isTop10 === 1 ">
                <button class='subTitle'  style="margin-top: 20px;margin-left: 20px;background: red;color: white;width: 70px;height: 25px;border: none"> Advertised </button>
              </span>
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
          this.getCookie('userId'))
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
    goGood: function (info) {
      this.$router.push({name: 'seller_good', params: {data: info}})
    },
    goGoodInfo: function (info) {
      this.$router.push({name: 'seller_good_info', params: {data: info}})
    },
    goodDelete: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'b/good/delete?pId=' + id)
        .then((data) => {
          this.isLoad = false
          alert('Shelevs Succeed')
          this.initLoad()
        })
    },
    goAdvertise: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'b/advertises?pId=' +
          id +
          '&sId=' +
          this.info.id)
        .then((data) => {
          this.isLoad = false
          alert('The request is successful,please wait for administrator\'s review')
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    changePage: function () {
      this.$nextTick(() => {
        document.documentElement.scrollTop = 0
      })
      console.log(document.documentElement.scrollTop)
    }
  },
  activated () {
    this.initLoad()
    this.initInfo()
    this.changePage()
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
    width: 990px;
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
