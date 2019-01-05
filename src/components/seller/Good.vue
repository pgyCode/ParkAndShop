<template>
  <div>
    <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">The Goods</p>

    <div style="width: 1000px; height: 430px; margin: 0px auto;">
      <img v-bind:src="data.portraitURL" style="float: left; width: 418px; height: 418px"/>
      <div style="float: left; margin-left: 20px; width: 552px;">
        <p style="color: #000; font-size: 20px; font-weight: 700;  padding: 20px 0px;">{{ data.pName }}</p>
        <div style="width: 552px; height: 70px;">
          <p style="float: left; line-height: 70px; color: rgb(153, 153, 153); font-size: 12px; font-weight: 400; margin-left: 10px">Price:</p>
          <p style="line-height: 70px;color: rgb(255, 0, 54); font-size: 35px; font-weight: 700;">¥{{ data.price }}</p>
        </div>
        <div style="width: 552px; margin-top: 20px; float: right; height: 142px;">
          <div style="width: 552px; background: rgb(237, 237, 237); height: 132px; border-radius: 5px">
            <p style="padding-top: 15px; margin-bottom: 10px; margin-left: 20px; font-size: 14px; font-weight: 600; color: #666;">Good Description:</p>
            <p style="margin-top: 10px; margin-left: 20px; margin-right: 20px; font-size: 13px; font-weight: 400; color: #666;">{{ data.description }}</p>
          </div>
        </div>
        <div style="width: 552px; margin-top: 16px; float: right; height: 92px;">
          <div style="width: 552px; background: rgb(237, 237, 237); height: 82px; border-radius: 5px">
            <p style="float: left; line-height: 70px; color: rgb(153, 153, 153); font-size: 12px; font-weight: 400; margin-left: 10px">Count:</p>
            <p style="line-height: 70px; font-size: 25px; font-weight: 700;color: forestgreen;">{{ data.num }}</p>
          </div>
        </div>
        <loading v-show="isLoad"/>
      </div>
    </div>

    <div v-on:scroll.native=handleScroll; style="width: 1000px; height: 1100px; margin: 0px auto;">
      <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">Buyers comments</p>
      <div id="orderFullScreen" style="width: 998px; height: 1068px; border: 1px solid dodgerblue;">
        <p style="width: 998px;height:20px" v-on:click="getComment(data.pID)"></p>
        <div style="width: 936px;height: 300px;margin: 20px 30px 30px;border: 1px solid black;">
          <div style="width: 130px;height:278px;margin: 10px 20px 10px auto;border: 1px ;float: left;">
            <img v-bind:src="comments.portraitURL" style="float: right; width: 120px; height: 120px"/><!--获取顾客头像-->
          </div>
          <div style="width: 762px;height:278px;margin: 10px 10px 10px auto;border: 1px ;float: left;">
            <div style="width: 300px;height: 30px;margin-left:10px;">
              <p style="color: gray; font-size: 20px; font-weight: 700;  padding: 10px 0px;">Nickname:&nbsp;&nbsp;</p>
              <p style="color: #000; font-size: 20px; font-weight: 700;  padding: 10px 0px;">{{comments.nickname}} </p>
            </div> <!--返回顾客评论-->
            <textarea v-model="comments.message" readonly style="padding:10px 0px;font-size: 15px; font-weight: 500; float: left; width: 740px;  height: 210px;margin-top: 10px;margin-left: 10px; border: 1px solid #dfdfdf"/>
          </div>
        </div>

        <div style="width: 936px;height: 300px;margin: 20px 30px 30px;border: 1px solid black;">
          <div style="width: 130px;height:278px;margin: 10px 20px 10px auto;border: 1px ;float: left;">
            <img v-bind:src="data.portraitURL" style="float: right; width: 120px; height: 120px"/><!--获取顾客头像-->
          </div>
          <div style="width: 762px;height:278px;margin: 10px 10px 10px auto;border: 1px ;float: left;">
            <div style="width: 300px;height: 30px;margin-left:10px;">
              <p style="color: gray; font-size: 20px; font-weight: 700;  padding: 10px 0px;">Nickname:&nbsp;&nbsp;</p>
              <p style="color: #000; font-size: 20px; font-weight: 700;  padding: 10px 0px;"><!--返回评论人的姓名--> </p>
            </div> <!--返回顾客评论-->
            <textarea v-model="data.description" style="padding:10px 0px; float: left; width: 740px;  height: 210px;margin-top: 10px;margin-left: 10px; border: 1px solid #dfdfdf"/>
          </div>
        </div>
        <div style="width: 936px;height: 300px;margin: 20px 30px 30px;border: 1px solid black;">
          <div style="width: 130px;height:278px;margin: 10px 20px 10px auto;border: 1px ;float: left;">
            <img v-bind:src="data.portraitURL" style="float: right; width: 120px; height: 120px"/><!--获取顾客头像-->
          </div>
          <div style="width: 762px;height:278px;margin: 10px 10px 10px auto;border: 1px ;float: left;">
            <div style="width: 300px;height: 30px;margin-left:10px;">
              <p style="color: gray; font-size: 20px; font-weight: 700;  padding: 10px 0px;">Nickname:&nbsp;&nbsp;</p>
              <p style="color: #000; font-size: 20px; font-weight: 700;  padding: 10px 0px;"><!--返回评论人的姓名--> </p>
            </div> <!--返回顾客评论-->
            <textarea v-model="data.description" style="padding:10px 0px; float: left; width: 740px;  height: 210px;margin-top: 10px;margin-left: 10px; border: 1px solid #dfdfdf"/>
          </div>
        </div>
        <div style="width: 936px;height: 300px;margin: 20px 30px 30px;border: 1px solid black;">
          <div style="width: 130px;height:278px;margin: 10px 20px 10px auto;border: 1px ;float: left;">
            <img v-bind:src="data.portraitURL" style="float: right; width: 120px; height: 120px"/><!--获取顾客头像-->
          </div>
          <div style="width: 762px;height:278px;margin: 10px 10px 10px auto;border: 1px ;float: left;">
            <div style="width: 300px;height: 30px;margin-left:10px;">
              <p style="color: gray; font-size: 20px; font-weight: 700;  padding: 10px 0px;">Nickname:&nbsp;&nbsp;</p>
              <p style="color: #000; font-size: 20px; font-weight: 700;  padding: 10px 0px;"><!--返回评论人的姓名--> </p>
            </div> <!--返回顾客评论-->
            <textarea v-model="data.description" style="padding:10px 0px; float: left; width: 740px;  height: 210px;margin-top: 10px;margin-left: 10px; border: 1px solid #dfdfdf"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'

export default {
  components: {Loading},

  mounted () {
    document.getElementById('orderFullScreen').addEventListener('scroll', this.handleScroll, true)
    this.data = this.$route.params.data
    this.$emit('childByValue', this.data.sID)
    this.$http.get(this.URL + 'b/comment?pId=' +
      this.data.pID)
      .then((data) => {
        this.isLoad = false
        this.comments = data.body.data.comment
        console.log(this.comments)
      })
      .catch(() => {
        this.isLoad = false
      })
    console.log(this.data)
  },

  data: function () {
    return {
      id: -1,
      data: {},
      comments: {},
      isLoad: false
    }
  },

  methods: {
    handleScroll: function () {
      console.log(document.getElementById('orderFullScreen').scrollTop)
    }
  },
  getComment: function (id) {
    this.isLoad = true
    this.$http.get(this.URL + 'b/comment?pId=' +
      id +
      '&portraitURL=' +
      this.comments.portraitURL +
      '&nickname=' +
      this.comments[0].nickname +
      '&message=' +
      this.comments.message)
      .then((data) => {
        this.isLoad = false
      })
      .catch((error) => {
        console.log(error)
        this.isLoad = false
      })
  },
  initLoad: function () {
    this.isLoad = true
    this.$http.get(this.URL + 'b/good/all?pID=' +
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
