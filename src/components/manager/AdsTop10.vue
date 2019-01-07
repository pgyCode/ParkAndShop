<template xmlns:style="http://www.w3.org/1999/xhtml">
  <div style="width: 866px; margin: 0px auto;">
    <p style="clear: both;font-size:12px; font-weight:700; margin-top: 20px; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">Top 10</p>
    <div id="containInfo">
      <ul>
        <!--
        <li v-bind:key="data" v-for="data in datas" >
          <div style="width: 140px;height: 140px;margin: 5px;float: left" v-on:click="goGood(data)">
            <img v-bind:src="data.portraitURL" style="width: 140px; height: 140px; margin: 0px auto; border: 1px solid #dfdfdf;"/>
          </div>
          <div style="clear:both; width: 710px; height: 140px; vertical-align: middle; display: table-cell">
            <p style="width: 200px; font-weight: 500; font-size: 13px; color: black; float: left">{{ data.pName }}</p>
            <p style="width: 100px; font-weight: 500; font-size: 13px; color: black; float: left">{{ data.pName }}</p>
            <p style="width: 100px; font-weight: 500; font-size: 13px; color: black; float: left">{{ data.pName }}</p>
            <p style="width: 100px; font-weight: 500; font-size: 13px; color: black; float: left">{{ data.pName }}</p>
            <p style="width: 150px;height: 140px; margin: 10px 30px 5px;text-align: center;float: left;line-height: 140px; font-weight: 900; font-size: 15px; color: #f40;">💰¥{{ data.price }}</p>
            <p style="height: 140px; margin: 10px 30px 5px;text-align: center;float: left;line-height: 140px;font-weight: 900; font-size: 15px; color: green;">count:{{ data.num }}</p>
            <button class='subTitle' v-on:click="cancel(data)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 70px; cursor: pointer;"> Cancel </button>
          </div>
        </li>-->
        <li v-bind:key="data" v-for="data in datas" >
          <div style=" width: 100%; height: 100%">
            <div style="float: left; width: 280px; height: 130px;vertical-align: middle; display: table-cell; padding: 4px; ">
              <img v-bind:src="data.portraitURL" style="float:left; width: 120px; height: 120px; margin-bottom: 20px; margin-right: 10px; border: 1px solid #b6b6b6;"/>
              <div style="float: left; width: 140px;  height: 120px;">
                <span style="display:block;font-size: 15px; font-weight: 700; line-height: 40px; width: 140px; overflow: hidden; height: 40px; color: rgb(0, 99, 200); overflow: hidden">{{ data.pName }}</span>
                <span style="float: left; font-size: 14px; font-weight: 400; line-height: 40px; color: rgb(0, 99, 200); overflow: hidden; color: #f40; font-weight: 600">¥{{ data.price }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 40px; color: rgb(102, 102, 102);"><b>Count：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 600; line-height: 40px; color: rgb(102, 102, 102); overflow: hidden">{{ data.num }}</span>
              </div>
            </div>
            <button v-on:click="cancel(data)" style="width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; float: right; border: 1px solid rgb(220, 220, 220); border-radius: 5px; cursor: pointer; margin: 52px 13px;" >Cancel</button>

            <div style="float:right; width: 470px; background: rgb(237, 237, 237); height: 100px; padding: 10px; margin: 5px 0px;">
              <p style=" font-size: 13px; font-weight: 400; line-height: 20px; overflow: hidden; color: #666;">{{ data.description }}</p>
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

  li {
    display: block;
    width: 864px;
    height: 130px;
    margin: 20px 0px;
    border: 1px solid #dfdfdf;
  }
  #containInfo{
    width: 866px;
    margin: 0px auto;
    /*clear: both;*/
  }

</style>
