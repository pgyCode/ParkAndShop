<template>
  <div style="width: 1000px; margin: 0px auto;">
    <div style="width: 1000px; min-width: 1000px; margin: 0px auto;">

      <div style="width: 1000px; height: 83px; padding: 0px 0px; margin: 0px auto;  border-bottom: 2px solid #f40">
        <img src="../../assets/logo.png" style="float: left" height="83px" width='210px'/>
        <p style="float: left; color: rgb(60, 60, 60); line-height: 83px; font-size: 22px; font-weight: 700; margin-left: 20px">Publish Goods</p>
      </div>

      <div style="clear: both; width: 500px;margin: 0px auto;">
        <div style="clear: both; padding-top: 35px; height: 100px;">
          <p style="text-align: right; float: left;  width: 150px; height: 100px; line-height: 100px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Shop Photo:&nbsp;</p>
          <img v-bind:src="localUrl" style="float:left; width: 100px; height: 100px; border: 1px solid #dfdfdf;"
               v-on:click="selectFile()"/>
          <input type="file" id="photoFileUpload" v-on:change="onSellerImgChange($event)"
                 style="filter:alpha(opacity=0);opacity:0;width: 0;height: 0;"/>
          <!--<input style="float: left; width: 150px; height: 100px; line-height: 100px;" id="photoFileUpload" type="file" v-on:change="onSellerImgChange($event)"/>-->
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Good Name:&nbsp;</p>
          <input style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Price:&nbsp;¥&nbsp;</p>
          <input style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Description:&nbsp;</p>
          <textarea style="float: left; width: 340px;  height: 140px; border: 1px solid #dfdfdf"/>
        </div>
        <button style="float: right; margin-top: 20px; width: 340px; margin-right: 10px; height: 42px; border: none; background: #f40; border-radius: 5px; font-weight: 700; font-size: 16px; color: #fff;"
                v-on:click="onClickRegister()">Publish</button>
      </div>
    </div>
  </div>
</template>

<script>

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

function upload () {
  const AV = require('leancloud-storage')
  var fileUploadControl = $('#photoFileUpload')[0]
  if (fileUploadControl.files.length <= 0) {
    return
  }
  var localFile = fileUploadControl.files[0]
  var name = 'avatar.jpg'
  var file = new AV.File(name, localFile)
  file.save().then(function (file) {
    // 文件保存成功
    console.log(file.url())
    this.url = file.url()
  }, function (error) {
    // 异常处理
    console.log(error)
  })
}
export default {
  components: {},
  data () {
    return {
      poiRegister: 0,
      localUrl: '/static/headimg.jpg',
      url: ''
    }
  },

  methods: {

    selectFile: function () {
      JSselectFile()
    },

    checkRegister: function (poi) {
      this.poiRegister = poi
    },

    onClickRegister: function () {

    },

    onSellerImgChange: function (e) {
      this.localUrl = getFileUrl(e.srcElement)
      console.log(this.url + 'wqe')
      upload()
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
