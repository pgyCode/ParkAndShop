<template>
  <div>
    <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">The Goods</p>

    <div style="width: 1000px; height: 430px; margin: 0px auto;">
      <img v-bind:src="data.portraitURL" style="float: left; width: 418px; height: 418px"/>
      <div style="float: left; margin-left: 20px; width: 552px;">
        <div style="width: 552px; height: 60px;">
          <p style="width: 300px;color: #000; line-height: 60px;font-size: 20px; font-weight: 700;  float: left;">{{ data.pName }}</p>
          <button v-on:click="goGoodInfo(data)" style="line-height: 60px;outline: none;background: white;color: green;font-size: 15px; font-weight: 700;width: 50px;height: 25px;border: none;float: right"> Update </button>
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
    <div style="width: 1000px; height: 500px; margin: 0px auto;">
      <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">Buyers comments</p>
      <div style="width: 990px; height: 470px; border: 1px;text-align: center ">
        <p style="width: 990px;height:20px"></p>
        <div v-bind:key="comment" v-for="comment in comments" style="border-bottom: 1px solid gray;width: 990px;height:134px ;margin-left:10px;margin-bottom: 10px">
          <div  style="margin-left:120px;width: 750px;height: 125px;margin-top: 10px;margin-bottom: 10px;border: 1px;">
            <div style="width: 100px;height:76px;margin: 10px 20px 10px auto;border: 1px ;float:left;text-align: center">
              <img v-bind:src="comment.portraitURL" style=" margin-left: 30px;width: 40px; height: 40px;"/>
              <div style="width: 100px;height: 18px;float: left">
                <p style="color: black; font-size: 14px; font-weight: 500;line-height: 1.5;  text-align: center">{{comment.nickname}}</p>
              </div>
            </div>
            <div style="width: 610px;height:124px;margin: 10px 10px 10px auto;border: 1px ;float: left;">
              <textarea v-model="comment.message" readonly style="outline: none;padding-left: 20px;font-size: 18px; font-weight: 500; float: left; width: 580px;  height: 88px;border: 1px"/>
              <p style="width: 600px;height: 18px; border: 1px;color: darkgrey; font-size: 13px; font-weight: 500;text-align: left">&nbsp;&nbsp;{{comment.Date}}&nbsp;&nbsp;</p>
            </div>
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
      comments: [],
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
          this.comments = data.body.data.comment
          console.log(this.comments)
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
