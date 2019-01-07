<template>
  <div>
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
    </div>

    <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">The Goods</p>

    <div style="width: 1000px; height: 430px; margin: 0px auto;">
      <img v-bind:src="data.portraitURL" style="float: left; width: 418px; height: 418px"/>
      <div style="float: left; margin-left: 20px; width: 552px;">
        <div style="width: 552px; height: 60px;">
          <p style="width: 300px;color: #000; line-height: 60px;font-size: 20px; font-weight: 700;  float: left;">{{ data.pName }}</p>
        </div>
        <div style="width: 552px; height: 70px;background: rgb(237, 237, 237);">
          <p style="float: left; line-height: 70px; color: rgb(153, 153, 153); font-size: 16px; font-weight: 400;color: black; margin-left: 10px; margin-right: 10px">Price:</p>
          <p style="line-height: 70px;color: rgb(255, 0, 54); font-size: 35px; font-weight: 700;">¥{{ data.price }}</p>
        </div>
        <div style="width: 552px; margin-top: 20px; float: right; height: 142px;">
          <div style="width: 552px; background: rgb(237, 237, 237); height: 132px; border-radius: 5px">
            <p style="padding-top: 15px; margin-bottom: 10px; margin-left: 10px; font-size: 16px; font-weight: 400; color: black;">Good Description:</p>
            <p style="margin-top: 10px; margin-left: 20px; margin-right: 20px; font-size: 14px; font-weight: 400; color: #666;">{{ data.description }}</p>
          </div>
        </div>
        <div style="width: 552px; margin-top: 16px; float: right; height: 92px;">
          <div style="width: 552px; background: rgb(237, 237, 237); height: 82px; border-radius: 5px">

            <p style="float: left; line-height: 70px; color: black; font-size: 16px; font-weight: 400; margin-left: 10px; margin-right: 10px">Count:</p>
            <p style="line-height: 70px; font-size: 25px; font-weight: 700;color: forestgreen;">{{ data.num }}</p>

            <div style="margin-top: 20px">
              <button style="float: right; width: 178px; height: 38px; margin-left: 5px; border: none; background: rgb(255, 0, 54); color: #fff; font-weight: 400; font-size: 16px" v-on:click="addCart()">Add to cart</button>
              <button style="float: right; width: 178px; height: 38px; margin-left: 5px;border: none; background: rgb(255,90,44); color: #fff; font-weight: 400; font-size: 16px" v-on:click="addFavourite()">Favourite</button>
            </div>

          </div>
        </div>
      </div>
    </div>
    <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206); margin-top: 20px">Buyers comments</p>

    <div style="width: 1000px;  margin: 0px auto;">
        <ul>
          <li v-bind:key="comment" v-for="comment in comments" style="border-bottom: 1px solid gray;width: 990px;height:134px ; margin-top: 20px; margin-left:10px;margin-bottom: 10px">

                <div style="margin: 10px 20px 20px 20px;border: 1px;float: left;">
                  <img v-bind:src="getHeadImg(comment.portraitURL)" style="  width: 70px; height: 70px;"/>
                  <div style=" margin: 10px auto 10px">
                     <p style="color: black; font-size: 14px; font-weight: 500;line-height: 1.5;  text-align: center;">{{comment.nickname}}</p>
                  </div>
                </div>

                <div style="margin: 10px 10px 10px auto;border: 1px ;float: left;">
                      <textarea v-model="comment.message" readonly style="outline: none;padding-left: 20px; padding-top: 10px; font-size: 18px; font-weight: 600; float: left; width: 580px;  height: 88px;border: 1px"/>
                      <p style="width: 600px;height: 18px; border: 1px;color: darkgrey; font-size: 13px; font-weight: 500;text-align: left">&nbsp;&nbsp;{{comment.Date}}&nbsp;&nbsp;</p>
                </div>
          </li>
        </ul>
    </div>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'

export default {
  activated () {
    this.initLoad()
    this.initInfo()
    console.log(this.id)
  },
  components: {Loading},
  data: function () {
    return {
      id: -1,
      data: {},
      comments: [],
      isLoad: false,
      info: {}
    }
  },

  methods: {
    addCart: function () {
      this.$http.get(this.URL + 'c/addToCart?cID=' + this.getCookie('userId') + '&pID=' + this.data.pID)
        .then((data) => {
          this.isLoad = false
          const response = data.body
          if (response.code === 101) {
            alert('Add to cart Succeed!')
          } else {
            alert('Add to cart Failed!')
          }
        })
        .catch(() => {
          this.isLoad = false
          alert('Add to cart Failed!')
        })
    },

    addFavourite: function () {
      this.$http.get(this.URL + 'c/addFavourite?cID=' + this.getCookie('userId') + '&pID=' + this.data.pID)
        .then((data) => {
          this.isLoad = false
          alert('Add to Favourite Succeed!')
        })
        .catch(() => {
          this.isLoad = false
          alert('Add to Favourite Failed!')
        })
    },
    handleScroll: function () {
      console.log(document.getElementById('orderFullScreen').scrollTop)
    },
    getHeadImg: function (info) {
      if (info === '') {
        return '/static/headimg.jpg'
      } else {
        return info
      }
    },
    initLoad: function () {
      this.isLoad = true
      if (this.$route.params.data !== undefined) {
        this.data = this.$route.params.data
        console.log(this.data)
        this.$emit('childByValue', this.data.sID)
      }

      this.$http.get(this.URL + 'b/comment?pId=' +
         this.data.pID)
        .then((data) => {
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
    initInfo: function () {
      this.isLoad = true
      console.log(111)
      if (this.$route.params.data !== undefined) {
        this.id = this.$route.params.data
        this.$emit('childByValue', this.id)
      }

      this.$http.get(this.URL + 'b/info/get?id=' +
             this.id.sID)
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
