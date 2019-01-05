<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div style="width: 1000px; margin: 0px auto;">
    <p style="clear: both;font-size:12px; font-weight:700; margin-top: 20px; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">Top 10</p>
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
              <button class='subTitle' v-on:click="cancel(data)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin-top: 52px"> Cancel </button>
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

    cancel: function (info) {
      // 给后端返回商店id
      this.isload = true
      this.$http.get(this.URL + 'm/product_top10_cancel?id=' + info.pID)
        .then((data) => {
          this.$http.get(this.URL + 'm/product_top10_info')
            .then((data) => {
              this.isLoad = false
              this.datas = data.body.data.top10
            })
          this.isload = false
        }
        )
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

  created () {
    this.isLoad = true
    this.$http.get(this.URL + 'm/product_top10_info')
      .then((data) => {
        console.log(data)
        this.isLoad = false
        this.datas = data.body.data.top10
      })
      .catch((error) => {
        console.log(error)
        this.isLoad = false
      })
  },

  mounted () {
    if (this.$route.params.data !== undefined) {
      this.id = this.$route.params.data
      this.$emit('childByValue', this.id)
      this.initLoad()
      this.initInfo()
    }
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
