<template>
  <div style="width: 1000px; margin: 0px auto;">
    <div style="width: 1000px; min-width: 1000px; margin: 0px auto;">

      <div style="width: 1000px; height: 83px; padding: 0px 0px; margin: 0px auto;  border-bottom: 2px solid #5884ff">
        <img src="../../assets/logo.png" style="float: left" height="83px" width='210px'/>
        <p style="float: left; color: rgb(60, 60, 60); line-height: 83px; font-size: 22px; font-weight: 700; margin-left: 20px">Update Goods Information</p>
      </div>
      <button style="padding-left: 10px;float: left; margin-top: 20px; width: 200px; margin-right: 10px; height: 20px; border: none; background: white; border-radius: 0px; font-weight: 700; font-size: 16px; color: gray;"
              v-on:click="goGood(data)"> 👈&nbsp;BACK&nbsp;TO&nbsp;GOOD
      </button>
      <div style="clear: both; width: 500px;margin: 0px auto;">
        <ul>
          <div style="clear: both; padding-top: 35px; height: 100px;">
            <p style="text-align: right; float: left;  width: 150px; height: 100px; line-height: 100px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Shop Photo:&nbsp;</p>
            <img v-bind:src="data.portraitURL" style="float:left; width: 100px; height: 100px; border: 1px solid #dfdfdf;"
                 v-on:click="selectFile()"/>
            <input type="file" id="photoFileUpload" v-on:change="onSellerImgChange($event)"
                   style="filter:alpha(opacity=0);opacity:0;width: 0;height: 0;"/>
          </div>
          <div style="clear: both; padding-top: 20px; height: 37px;">
            <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Good Name:&nbsp;</p>
            <input v-model="data.pName" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
          </div>
          <div style="clear: both; padding-top: 20px; height: 37px;">
            <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Price&nbsp;¥:&nbsp;</p>
            <input v-model="data.price" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
          </div>
          <div style="clear: both; padding-top: 20px; height: 37px;">
            <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Count:</p>
            <div style="float: left; width: 340px;  height: 35px; border: 1px solid white">
              <button v-on:click="add(100)" style="float:left; margin: 8px 5px 5px">&nbsp;+100&nbsp;</button>
              <button v-on:click="add(1)" style="float:left; margin: 8px 5px 10px">&nbsp;+1&nbsp;</button>
              <input v-model="data.num" style="float:left; width: 50px;  height: 35px; border: 1px solid #dfdfdf"/>
              <button v-on:click="subtract(1)" style="float:left; margin: 8px 10px 5px">&nbsp;-1&nbsp;</button>
              <button v-on:click="subtract(100)" style="float:left; margin: 8px 5px 5px">&nbsp;-100&nbsp;</button>
            </div>
          </div>
          <div style="clear: both; padding-top: 20px; height: 37px;">
            <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Description:&nbsp;</p>
            <textarea v-model="data.description" style="float: left; width: 340px;  height: 140px; border: 1px solid #dfdfdf"/>
          </div>
          <button style="float: right; margin-top: 20px; width: 340px; margin-right: 10px; height: 42px; border: none; background: #f40; border-radius: 5px; font-weight: 700; font-size: 16px; color: #fff;"
                  v-on:click="onClickUpdate(data.pID)"> Update
          </button>
        </ul>
      </div>
    </div>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
import $ from 'jquery'

function JSselectFile () {
  $('#photoFileUpload').trigger('click')
}

/**
   * 从 file 域获取 本地图片 url
   */
function getFileUrl (obj) {
  let url
  url = window.URL.createObjectURL(obj.files.item(0))
  return url
}

export default {
  components: {Loading},
  data () {
    return {
      isLoad: false,
      poiRegister: 0,
      localUrl: '/static/headimg.jpg',
      data: []
    }
  },
  mounted () {
    this.data = this.$route.params.data
    console.log(this.data)
  },

  methods: {
    add: function (inc) {
      this.data.num += inc
    },

    subtract: function (inc) {
      this.data.num -= inc
    },

    selectFile: function () {
      JSselectFile()
    },

    checkRegister: function (poi) {
      this.poiRegister = poi
    },

    goGood: function (info) {
      this.$router.push({name: 'seller_good', params: {data: info}})
    },

    onClickUpdate: function (pID) {
      this.isLoad = true
      this.$http.get(this.URL + 'b/good/modify?pID=' +
        this.data.pID +
        '&portraitURL=' +
        this.data.portraitURL +
        '&pName=' +
        this.data.pName +
        '&price=' +
        this.data.price +
        '&description=' +
        this.data.description +
        '&num=' +
        this.data.num +
        '&sID=' +
        this.data.sID
      )
        .then((data) => {
          this.isLoad = false
          alert('Update Succeed')
        })
        .catch(() => {
          this.isLoad = false
          alert('Update Failed')
        })
    },

    onSellerImgChange: function (e) {
      this.data.portraitURL = getFileUrl(e.srcElement)

      const AV = require('leancloud-storage')
      var fileUploadControl = $('#photoFileUpload')[0]
      if (fileUploadControl.files.length <= 0) {
        return
      }
      var localFile = fileUploadControl.files[0]
      var name = 'avatar.jpg'
      var file = new AV.File(name, localFile)
      file.save().then((file) => {
        // 文件保存成功
        this.data.portraitURL = file.url()
        console.log(this.data.portraitURL)
      }, function (error) {
        // 异常处理
        console.log(error)
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
