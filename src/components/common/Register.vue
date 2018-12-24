<!--suppress ALL -->
<template>
  <div>
    <div style="width: 990px; height: 83px; padding: 0px 0px;">
      <img src="../../assets/logo.png" style="float: left" height="83px" width='210px'/>
      <p style="float: left; color: rgb(60, 60, 60); line-height: 43px; margin-top: 30px; font-size: 22px; font-weight: 700">User Register</p>
    </div>
    <div style="clear: both; width: 720px; height: 48px; padding: 0px 135px; border-bottom: 2px solid #dfdfdf">
      <div style="float: left; height: 48px; padding: 0px 30px;" :class="{checkRegisterDiv:poiRegister == 0}" v-on:click="checkRegister(0)">
        <p style="line-height: 24px; margin-top: 12px; float: left; width: 24px; height: 24px;  text-align: center; border-radius: 12px; color: #fff; font-size: 14px; font-weight: 700"
           class="basicRegisterSign"
           :class="{checkRegisterSign:poiRegister == 0}"  >1</p>
        <p style="line-height: 48px; float: left; font-size: 16px; font-weight: 700; padding-left: 10px"
           class="basicRegisterTxt"
           :class="{checkRegisterTxt:poiRegister == 0}" >Customer</p>
      </div>
      <div style="float: left; height: 48px; padding: 0px 30px;" :class="{checkRegisterDiv:poiRegister == 1}"   v-on:click="checkRegister(1)">
        <p style="line-height: 24px; margin-top: 12px; float: left; width: 24px; height: 24px; text-align: center; border-radius: 12px; color: #fff; font-size: 14px; font-weight: 700"
           class="basicRegisterSign"
           :class="{checkRegisterSign:poiRegister == 1}"  >2</p>
        <p style="line-height: 48px; float: left; font-size: 16px; font-weight: 700; padding-left: 10px"
           class="basicRegisterTxt"
           :class="{checkRegisterTxt:poiRegister == 1}">Seller</p>
      </div>

      <div style="clear: both; width: 500px;margin: 0px auto;" v-show="poiRegister == 0">
        <div style="clear: both; padding-top: 35px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Telephone:&nbsp;</p>
          <input v-model="cTelephone" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Nickname:&nbsp;</p>
          <input v-model="cNickname" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Address:&nbsp;</p>
          <input v-model="cAddress" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Password:&nbsp;</p>
          <input v-model="cPassword" type="password" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <button style="float: right; margin-top: 20px; width: 340px; margin-right: 10px; height: 42px; border: none; background: #f40; border-radius: 5px; font-weight: 700; font-size: 16px; color: #fff;"
                v-on:click="onClickRegister()">Register</button>
      </div>

      <div style="clear: both; width: 500px;margin: 0px auto;" v-show="poiRegister == 1">
        <div style="clear: both; padding-top: 35px; height: 100px;">
          <p style="text-align: right; float: left;  width: 150px; height: 100px; line-height: 100px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">profile photo:&nbsp;</p>
          <img v-bind:src="localUrl" style="float:left; width: 100px; height: 100px; border: 1px solid #dfdfdf;"
               v-on:click="selectFile()"/>
          <input type="file" id="photoFileUpload" v-on:change="onSellerImgChange($event)"
                 style="filter:alpha(opacity=0);opacity:0;width: 0;height: 0;"/>
          <!--<input style="float: left; width: 150px; height: 100px; line-height: 100px;" id="photoFileUpload" type="file" v-on:change="onSellerImgChange($event)"/>-->
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Telephone:&nbsp;</p>
          <input v-model="bTelephone" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">ShopName:&nbsp;</p>
          <input v-model="bShopName" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Major Business:&nbsp;</p>
          <input v-model="bMajor" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Description:&nbsp;</p>
          <textarea v-model="bDescription" style="float: left; width: 340px; padding: 10px 0px;  height: 100px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Nickname:&nbsp;</p>
          <input v-model="bNickname" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <div style="clear: both; padding-top: 20px; height: 37px;">
          <p style="text-align: right; float: left; width: 150px; height: 35px; line-height: 35px; font-size: 14px; font-weight: 400; color: rgb(60, 60, 60);">Password:&nbsp;</p>
          <input v-model="bPassword" type="password" style="float: left; width: 340px;  height: 35px; border: 1px solid #dfdfdf"/>
        </div>
        <button style="float: right; margin-top: 20px; width: 340px; margin-right: 10px; height: 42px; border: none; background: #f40; border-radius: 5px; font-weight: 700; font-size: 16px; color: #fff;"
                v-on:click="onClickRegister()">Register</button>
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
  components: { Loading },
  data () {
    return {
      isLoad: false,
      poiRegister: 0,
      localUrl: '/static/headimg.jpg',

      cTelephone: '',
      cNickname: '',
      cPassword: '',
      cAddress: '',

      bUrl: '',
      bTelephone: '',
      bShopName: '',
      bMajor: '',
      bDescription: '',
      bNickname: '',
      bPassword: ''
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
      this.isLoad = true
      if (this.poiRegister === 0) {
        this.$http.get(this.URL + 'c/logup?username=' +
          this.cTelephone +
          '&password=' +
          this.cPassword +
          '&address=' +
          this.cAddress +
          '&nickname=' +
          this.cNickname)
          .then((data) => {
            console.log(data)
            this.isLoad = false
            const response = data.body
            if (response.code === 101) {
              this.setCookie('userId', response.data.userID, 7)
              this.setCookie('userName', this.cNickname, 7)
              this.setCookie('userType', 0, 7)
              this.$router.push('/')
            } else {
              alert('Register Failed')
            }
          })
          .catch(() => {
            alert('Register Failed')
            this.isLoad = false
          })
      } else if (this.poiRegister === 1) {
        this.$http.get(this.URL + 'b/register?url=' +
          this.bUrl +
          '&telephone=' +
          this.bTelephone +
          '&shopName=' +
          this.bShopName +
          '&major=' +
          this.bMajor +
          '&description=' +
          this.bDescription +
          '&nickname=' +
          this.bNickname +
          '&password=' +
          this.bPassword)
          .then((data) => {
            this.isLoad = false
            const response = data.body
            if (response.code === 101) {
              this.setCookie('userId', response.data.id, 7)
              this.setCookie('userName', this.bNickname, 7)
              this.setCookie('shopName', response.data.shopName, 7)
              this.setCookie('userType', 1, 7)
              this.$router.push('/')
            } else {
              alert('Register Failed')
            }
          })
          .catch(() => {
            alert('Register Failed')
            this.isLoad = false
          })
      }
    },

    onSellerImgChange: function (e) {
      this.localUrl = getFileUrl(e.srcElement)

      const AV = require('leancloud-storage')
      var fileUploadControl = $('#photoFileUpload')[0]
      if (fileUploadControl.files.length > 0) {
        var localFile = fileUploadControl.files[0]
        var name = 'avatar.jpg'
        var file = new AV.File(name, localFile)
        file.save().then((file) => {
          // 文件保存成功
          this.bUrl = file.url()
          console.log(this.bUrl)
        }, function (error) {
          // 异常处理
          console.log(error)
        })
      }
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

  .checkRegisterDiv{
    border-bottom: 2px solid #f40;
  }

  .basicRegisterSign{
    background: #b6b6b6;
  }

  .checkRegisterSign{
    background: #f40;
  }

  .basicRegisterTxt{
    color: #808285;
  }

  .checkRegisterTxt{
    color: rgb(62,62,62);
  }

</style>
