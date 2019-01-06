<template>
  <div>
    <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">The Goods</p>

    <div style="width: 1000px; height: 430px; margin: 0px auto;">
      <img v-bind:src="data.portraitURL" style="float: left; width: 418px; height: 418px"/>
      <div style="float: left; margin-left: 20px; width: 552px;">
        <div style="width: 552px; height: 60px;">
          <p style="width: 300px;color: #000; line-height: 60px;font-size: 20px; font-weight: 700;  float: left;">{{ data.pName }}</p>
          <button v-on:click="goGoodInfo(data)" style="line-height: 60px;background: white;color: green;font-size: 15px; font-weight: 700;width: 50px;height: 25px;border: none;float: right"> Update </button>
        </div>
        <div style="width: 552px; height: 70px;background: rgb(237, 237, 237);">
          <p style="float: left; line-height: 70px; color: rgb(153, 153, 153); font-size: 12px; font-weight: 400; margin-left: 10px">Price:</p>
          <p style="line-height: 70px;color: rgb(255, 0, 54); font-size: 35px; font-weight: 700;">¥{{ data.price }}</p>
        </div>
        <div style="width: 552px; margin-top: 20px; float: right; height: 142px;">
          <div style="width: 552px; background: rgb(237, 237, 237); height: 132px; border-radius: 5px">
            <p style="padding-top: 15px; margin-bottom: 10px; margin-left: 10px; font-size: 14px; font-weight: 600; color: #666;">Good Description:</p>
            <p style="margin-top: 10px; margin-left: 20px; margin-right: 20px; font-size: 13px; font-weight: 400; color: #666;">{{ data.description }}</p>
          </div>
        </div>
        <div style="width: 552px; margin-top: 16px; float: right; height: 92px;">
          <div style="width: 552px; background: rgb(237, 237, 237); height: 82px; border-radius: 5px">
            <p style="float: left; line-height: 70px; color: rgb(153, 153, 153); font-size: 12px; font-weight: 400; margin-left: 10px">Count:</p>
            <p style="line-height: 70px; font-size: 25px; font-weight: 700;color: forestgreen;">{{ data.num }}</p>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 1000px; height: 400px; margin: 0px auto;">
      <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">Buyers comments</p>
      <div style="width: 998px; height: 300px; border: 1px ;">
        <p style="width: 998px;height:20px"></p>
        <div v-bind:key="comment" v-for="comment in commenting" style="width: 936px;height: 300px;margin: 20px 30px 30px;border: 1px solid black;">
          <div style="width: 130px;height:278px;margin: 10px 20px 10px auto;border: 1px ;float: left;">
            <img v-bind:src="comment.portraitURL" style="float: right; width: 120px; height: 120px"/>
          </div>
          <div style="width: 762px;height:278px;margin: 10px 10px 10px auto;border: 1px ;float: left;">
            <div style="width: 300px;height: 30px;margin-left:10px;float: left">
              <p style="color: gray; font-size: 20px; font-weight: 700;  padding: 10px 0px;">Nickname:&nbsp;&nbsp;{{comment.nickname}}</p>
            </div>
            <p style="width: 762px;height: 20px;color: gray; font-size: 15px; font-weight: 500;  margin-top: 12px;">&nbsp;&nbsp;{{comment.Date}}&nbsp;&nbsp;</p>
            <textarea v-model="comment.message" readonly style="padding:10px 0px;font-size: 15px; font-weight: 500; float: left; width: 740px;  height: 210px;margin-top: 10px;margin-left: 10px; border: 1px solid #dfdfdf"/>
          </div>
        </div>
      </div>
    </div>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'

export default {
  components: {Loading},

  data: function () {
    return {
      id: -1,
      data: {},
      commenting: [],
      isLoad: false
    }
  },

  methods: {
    initLoad: function () {
      this.isLoad = true
      if (this.$route.params.data !== undefined) {
        this.data = this.$route.params.data
        this.$emit('childByValue', this.data.sID)
      }
      this.$http.get(this.URL + 'b/comment?pId=' +
        this.data.pID)
        .then((data) => {
          console.log(this.data.pID)
          console.log(data)
          this.isLoad = false
          this.commenting = data.body.data.comments
          console.log(this.commenting)
        })
        .catch((error) => {
          console.log(error)
          this.isLoad = false
        })
    },
    goGoodInfo: function (info) {
      this.$router.push({name: 'seller_good_info', params: {data: info}})
    }
  },
  activated () {
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

</style>
