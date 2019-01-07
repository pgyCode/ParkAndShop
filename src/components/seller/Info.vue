<template>
  <div style="width: 1000px; margin: 0px auto;">
    <div style="width: 1000px; min-width: 1000px; margin: 0px auto;">

      <div style="width: 1000px; height: 83px; padding: 0px 0px; margin: 0px auto;  border-bottom: 2px solid #5884ff">
        <img src="../../assets/logo.png" style="float: left" height="83px" width='210px'/>
        <p style="float: left; color: rgb(60, 60, 60); line-height: 83px; font-size: 22px; font-weight: 700; margin-left: 20px">Shop Info</p>
      </div>

      <div style="clear: both; width: 500px;margin: 0px auto;">
        <div style="clear: both; padding-top: 35px; height: 100px;">
          <p style="text-align: right; float: left;  width: 150px; height: 100px; line-height: 100px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Profile photo:&nbsp;</p>
          <img v-bind:src="data.url" style="float:left; width: 100px; height: 100px; border: 1px solid #dfdfdf;"
               v-on:click="selectFile()"/>
          <input type="file" id="photoFileUpload" v-on:change="onSellerImgChange($event)"
                 style="filter:alpha(opacity=0);opacity:0;width: 0;height: 0;"/>
          <!--<input style="float: left; width: 150px; height: 100px; line-height: 100px;" id="photoFileUpload" type="file" v-on:change="onSellerImgChange($event)"/>-->
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">ShopName:&nbsp;</p>
          <input v-model="data.shopName" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;"><!--///////////////联系人-->
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">ContactName:&nbsp;</p>
          <input v-model="data.nickname" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;"><!--///////////////e-mail-->
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">E-mail:&nbsp;</p>
          <input v-model="data.email" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Telephone:&nbsp;</p>
          <input v-model="data.telephone" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Major Business:&nbsp;</p>
          <input v-model="data.major" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Description:&nbsp;</p>
          <textarea v-model="data.description" style="padding:10px 0px; float: left; width: 340px;  height: 100px; border: 1px solid #dfdfdf"/>
        </div>
        <!--<div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Nickname:&nbsp;</p>
          <input v-model="data.nickname" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>-->
        <button style="float: right; margin-top: 20px; width: 340px; margin-right: 10px; height: 42px; border: none; background: #f40; border-radius: 5px; font-weight: 700; font-size: 16px; color: #fff;"
                v-on:click="onClickCommit()">Commit</button>
      </div>
    </div>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>

import $ from 'jquery'

import Loading from '@/components/common/Loading'

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
      poiRegister: 0,
      localUrl: '/static/headimg.jpg',
      data: {},
      isLoad: false
    }
  },

  methods: {

    selectFile: function () {
      JSselectFile()
    },

    checkRegister: function (poi) {
      this.poiRegister = poi
    },

    onClickCommit: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/info/modify?id=' +
        this.getCookie('userId') +
        '&url=' +
        this.data.url +
        '&telephone=' +
        this.data.telephone +
        '&shopName=' +
        this.data.shopName +
        '&nickname=' +
        this.data.nickname +
        '&email=' +
        this.data.email +
        '&description=' +
        this.data.description +
        '&major=' +
        this.data.major)
        .then((data) => {
          this.isLoad = false
          alert('Modify Succeed!')
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    onSellerImgChange: function (e) {
      this.data.url = getFileUrl(e.srcElement)
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
        this.data.url = file.url()
        console.log(this.data.url)
      }, function (error) {
        // 异常处理
        console.log(error)
      })
    }
  },

  activated: function () {
    this.isLoad = true
    this.$http.get(this.URL + 'b/info/get?id=' +
      this.getCookie('userId'))
      .then((data) => {
        console.log(data)
        this.isLoad = false
        const response = data.body
        this.data = response.data.data
      })
      .catch(() => {
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
