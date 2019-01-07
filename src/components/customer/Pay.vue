<template>
  <div style=" width: 1000px; height: 500px;">
    <img src="https://t.alipayobjects.com/images/rmsweb/T1.a4gXo4sXXXXXXXX.png"/>
    <div style="width: 1000px; height: 130px; padding: 5px; border: 1px solid rgb(182,185,188);">
      <img style="float:left; width: 130px; height: 130px;border: 1px solid rgb(223,223,223);" v-bind:src="data.portraitURL"/>
      <div style="padding-left:20px;float: left; display: table-cell; vertical-align: center">
        <p style="line-height: 65px; font-size: 15px; color: #000; font-weight: 600">Good Name: {{ data.pName }}</p>
        <p style="line-height: 65px; font-size: 15px; color: #000; font-weight: 600">Shop Name: {{ data.shopName }}</p>
      </div>
      <p style="float: right; color: #f40; line-height: 130px; padding-right: 20px; font-weight: 600; font-size: 24px">¥{{ data.price * data.number }}</p>
    </div>
    <div style="width: 400px; margin: 20px auto; height: 150px;">
      <div v-bind:src="qrcode" id="qrcode" style="float:left; width: 150px; height: 150px; margin-right: 20px;"/>
      <p style="float:left;font-size: 20px; font-weight: 600; line-height: 150px; border-left: 2px solid #000; display: block; width: 228px; color: #48bfff;">&nbsp;&nbsp;Sweep code payment</p>
    </div>

  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
import $ from 'jquery'
export default {
  name: 'Pay',
  data () {
    return {
      data: {},
      id: 0
    }
  },
  methods: {
    qrcodee: function (info) {
      let qrcode = new QRCode('qrcode', {
        width: 150,
        height: 150, // 高度
        text: info
      })
      console.log(qrcode)
    }
  },
  activated () {
    this.data = this.$route.params.info
    this.id = this.$route.params.data
    console.log(this.data)
    this.$http.get(this.URL + 'common/pay?name=' +
      this.data.pName +
      '&price=' +
      this.data.price +
      '&count=' +
      this.data.number +
      '&id=' +
      this.id)
      .then((data) => {
        console.log(data)
        $('#qrcode').html('')
        this.qrcodee(data.body.payData.qrCode)
      })
      .catch(() => {

      })
  }
}
</script>

<style scoped>

</style>
