<template>
  <div>
    <div id="containerHistory">
      <div style="clear: both">
        <div style="clear: both; height: 36px; width: 400px; margin: 20px auto; margin-left: 400px">
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             :class="{checkTab:currentTab == 0}"
             v-on:click="onCheckTab(0)">Stores</p>
          <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
             class="basicTab"
             :class="{checkTab:currentTab == 1}"
             v-on:click="onCheckTab(1); initLoad1()">Products</p>
        </div>
      </div>
    </div>
    <div style="height: 42px; width: 866px; margin: 20px auto;background: rgb(241, 241, 241); border: 1px solid #dfdfdf;">
      <p style="float: left; width: 280px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Basic Info</p>
      <p style="float: left; width: 500px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Description</p>
      <p style="float: right; width: 86px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Operate</p>
    </div>

    <div class="containerShop" v-show="currentTab == 0">
      <ul>
        <li class="containerShopLi" v-bind:key="shop" v-for="shop in shops">
          <div>
            <div style="float: left; width: 400px; height: 160px;">
              <img v-bind:src="shop.url" style="float:left; width: 120px; height: 120px; margin-top: 20px; margin-bottom: 20px; margin-right: 20px; border: 1px solid #b6b6b6;"/>
              <div style="float: left; width: 250px;  height: 120px; margin-top: 20px">
                <span style="font-size: 14px; font-weight: 700; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.shopName }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Seller：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.nickname }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Major Business：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.major }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Telephone：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.telephone }}</span>
              </div>
            </div>

            <div style="width: 350px; float: left; height: 120px; margin-top: 20px;">
              <div style="width: 350px; background: rgb(237, 237, 237); height: 100px; padding: 10px;">
                <p style=" font-size: 13px; font-weight: 400; line-height: 20px; overflow: hidden; color: #666;">
                     Hello, administrator! This is my shop. I want to join in top 5 stores. Please give me a chance.</p>
              </div>
            </div>

            <div style="width: 86px; float: right; height: 120px; margin-top: 20px;">
              <button v-on:click="onClickApprove(shop)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin: 22px auto;" >Approve</button>
              <button  v-on:click="onClickReject(shop)"  style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin: 22px auto;" >Reject</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--<div class="containerShop" v-if="currentTab == 1" style="margin-left: 67px">
      <ul>
        &lt;!&ndash;<li class="containerShopLi" v-bind:key="data.pID" v-for="data in datas">&ndash;&gt;
        <li class="containerShopLi">
          <div>
            <div style="float: left; width: 400px; height: 160px;">
              <img src="../../assets/show.jpeg" style="float:left; width: 120px; height: 120px; margin-top: 20px; margin-bottom: 20px; margin-right: 20px; border: 1px solid #b6b6b6;"/>
              <div style="float: left; width: 250px;  height: 120px; margin-top: 20px">
                <span style="font-size: 14px; font-weight: 700; line-height: 30px; color: rgb(0, 99, 200);"> data.pName </span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Seller：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);"> shop.nickname </span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>💰¥：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);"> data.price </span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>count:</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);"> data.num </span>
              </div>
            </div>

            <div style="width: 350px; float: left; height: 120px; margin-top: 20px;">
              <div style="width: 350px; background: rgb(237, 237, 237); height: 100px; padding: 10px;">
                <p style=" font-size: 13px; font-weight: 400; line-height: 20px; overflow: hidden; color: #666;">
                  Hello, administrator! This is my products. I want to join in top 10 products. Please give me a chance.</p>
              </div>
            </div>

            <div style="width: 86px; float: right; height: 120px; margin-top: 20px;">
              <button v-on:click="onClickApprove(shop)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin: 22px auto;" >Approve</button>
              <button  v-on:click="onClickReject(shop)"  style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin: 22px auto;" >Reject</button>
            </div>
          </div>
        </li>
        <li class="containerShopLi">
          <div>
            <div style="float: left; width: 400px; height: 160px;">
              <img src="../../assets/show.jpeg" style="float:left; width: 120px; height: 120px; margin-top: 20px; margin-bottom: 20px; margin-right: 20px; border: 1px solid #b6b6b6;"/>
              <div style="float: left; width: 250px;  height: 120px; margin-top: 20px">
                <span style="font-size: 14px; font-weight: 700; line-height: 30px; color: rgb(0, 99, 200);"> data.pName </span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Seller：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);"> shop.nickname </span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>💰¥：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);"> data.price </span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>count:</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);"> data.num </span>
              </div>
            </div>

            <div style="width: 350px; float: left; height: 120px; margin-top: 20px;">
              <div style="width: 350px; background: rgb(237, 237, 237); height: 100px; padding: 10px;">
                <p style=" font-size: 13px; font-weight: 400; line-height: 20px; overflow: hidden; color: #666;">
                  Hello, administrator! This is my products. I want to join in top 10 products. Please give me a chance.</p>
              </div>
            </div>

            <div style="width: 86px; float: right; height: 120px; margin-top: 20px;">
              <button v-on:click="onClickApprove(shop)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin: 22px auto;" >Approve</button>
              <button  v-on:click="onClickReject(shop)"  style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin: 22px auto;" >Reject</button>
            </div>
          </div>
        </li>
        <li class="containerShopLi">
          <div>
            <div style="float: left; width: 400px; height: 160px;">
              <img src="../../assets/show.jpeg" style="float:left; width: 120px; height: 120px; margin-top: 20px; margin-bottom: 20px; margin-right: 20px; border: 1px solid #b6b6b6;"/>
              <div style="float: left; width: 250px;  height: 120px; margin-top: 20px">
                <span style="font-size: 14px; font-weight: 700; line-height: 30px; color: rgb(0, 99, 200);"> data.pName </span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Seller：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);"> shop.nickname </span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>💰¥：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);"> data.price </span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>count:</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);"> data.num </span>
              </div>
            </div>

            <div style="width: 350px; float: left; height: 120px; margin-top: 20px;">
              <div style="width: 350px; background: rgb(237, 237, 237); height: 100px; padding: 10px;">
                <p style=" font-size: 13px; font-weight: 400; line-height: 20px; overflow: hidden; color: #666;">
                  Hello, administrator! This is my products. I want to join in top 10 products. Please give me a chance.</p>
              </div>
            </div>

            <div style="width: 86px; float: right; height: 120px; margin-top: 20px;">
              <button v-on:click="onClickApprove(shop)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin: 22px auto;" >Approve</button>
              <button  v-on:click="onClickReject(shop)"  style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin: 22px auto;" >Reject</button>
            </div>
          </div>
        </li>
      </ul>
    </div>-->
    <div class="containerShop" v-show="currentTab == 1">
      <ul>
        <!--<li v-bind:key="data" v-for="data in datas" >
          <div style="width: 140px;height: 140px;margin: 5px;float: left" v-on:click="goGood(data)">
            <img v-bind:src="data.portraitURL" style="width: 140px; height: 140px; margin: 0px auto; border: 1px solid #dfdfdf;"/>
          </div>
          <div style="width: 840px;height: 150px;margin: 0px;float: right;">
            <div style="width: 680px;height: 140px;margin: 5px auto;float: left" v-on:click="goGood(data)">
              <p style="width: 250px;height: 55px; margin: 10px 5px 5px;float: left;text-align: center; vertical-align: center; line-height: 100px; font-weight: 500; font-size: 13px; color: black;">{{ data.pName }}</p>
              <p style="width: 150px;height: 140px; margin: 10px 30px 5px;text-align: center;float: left; line-height: 110px;font-weight: 900; font-size: 15px; color: #f40;">💰¥{{ data.price }}</p>
              <p style="height: 140px; margin: 10px 30px 5px;text-align: center;float: left; line-height: 110px;font-weight: 900; font-size: 15px; color: green;">count:{{ data.num }}</p>
            </div>
            <div style="width: 140px;height: 140px;margin: 5px auto;float: right;">
              <button class='subTitle' v-on:click="goGoodInfo(data)" style="margin_left: 80px;margin-top: 58px"> Update </button>
            </div>
          </div>
        </li>-->
        <li class="containerShopLi" v-bind:key="data" v-for="data in datas">
          <div>
            <div style="float: left; width: 400px; height: 160px;">
              <img v-bind:src="data.portraitURL" style="float:left; width: 120px; height: 120px; margin-top: 20px; margin-bottom: 20px; margin-right: 20px; border: 1px solid #b6b6b6;"/>
              <div style="float: left; width: 250px;  height: 120px; margin-top: 20px">
                <span style="font-size: 14px; font-weight: 700; line-height: 30px; color: rgb(0, 99, 200);">{{ data.pName }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>💰¥：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ data.price }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Seller ID：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ data.sID }}</span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ data.major }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>num：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ data.number }}</span>
              </div>
            </div>

            <div style="width: 350px; float: left; height: 120px; margin-top: 20px;">
              <div style="width: 350px; background: rgb(237, 237, 237); height: 100px; padding: 10px;">
                <p style=" font-size: 13px; font-weight: 400; line-height: 20px; overflow: hidden; color: #666;">
                  {{ data.description }}</p>
              </div>
            </div>

            <div style="width: 86px; float: right; height: 120px; margin-top: 20px;">
              <button v-on:click="onClickApproveProduct(data)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin: 22px auto;" >Approve</button>
              <button  v-on:click="onClickRejectProduct(data)"  style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer; margin: 22px auto;" >Reject</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {

  components: {Loading},

  created () {
    this.initLoad()
  },

  data () {
    return {
      shops: [],
      currentTab: 0,
      isLoad: false,
      requests: [],
      id: -1,
      datas: [],
      intent: {},
      info: {}
    }
  },

  methods: {
    onCheckTab: function (poi) {
      this.currentTab = poi
    },
    onClickApprove: function (shopInfo) {
      this.isLoad = true
      this.$http.get(this.URL + 'm/seller_to_top5?id=' +
        shopInfo.id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
          alert('Operate Failed')
        })
    },

    onClickApproveProduct: function (shopInfo) {
      this.isLoad = true
      console.log(shopInfo)
      this.$http.get(this.URL + 'm/product_to_top10?id=' +
        shopInfo.pID)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.initLoad1()
        })
        .catch(() => {
          this.isLoad = false
          alert('Operate Failed')
        })
    },

    /* setTop5: function (info) {
      // 给后台传入店铺的id，设置为top5店铺
      this.isLoad = true
      this.$http.get(this.URL + 'm/seller_to_top5?id=' + info.id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          if (data.body.code === 101) {
            alert('Set Succeed')
          } else {
            alert('Set Failed')
          }
        })
        .catch(() => {
          this.isLoad = false
        })
      event.stopPropagation()
    }, */

    onClickReject: function (shopinfo) {
      this.isLoad = true
      this.$http.get(this.URL + 'm/top5_seller_apply_reject?id=' +
        shopinfo.id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
          alert('Operate Failed')
        })
    },

    onClickRejectProduct: function (data) {
      this.isLoad = true
      this.$http.get(this.URL + 'm/top10_product_apply_reject?id=' +
        data.pID)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.initLoad1()
        })
        .catch(() => {
          this.isLoad = false
          alert('Operate Failed')
        })
    },

    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'm/top5_seller_apply_info')
        .then((data) => {
          this.isLoad = false
          const response = data.body
          this.shops = response.data.top5_apply
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    // shop
    initLoad1: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'm/top10_product_apply_info')
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.datas = response.data.top10_apply
        })
        .catch((error) => {
          console.log(error)
          this.isLoad = false
        })
    }

    /*    initInfo: function () {
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
    },

    mounted () {
      if (this.$route.params.data !== undefined) {
        this.id = this.$route.params.data
        this.$emit('childByValue', this.id)
        this.initLoad()
        this.initInfo()
      }
    } */
  }
}
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    display: block;
  }

  .containerShop{
    width: 866px;
    min-width: 866px;
    margin: 0px auto;
    clear: both;
  }

  .containerShopLi {
    display: block;
    width: 866px;
    height: 160px;
    margin-left:  auto;
    margin-right:  auto;
    margin-bottom: 20px;
    border: 1px solid #dfdfdf;
  }

  ul{
    list-style-type: none;
    display: inline-block;
  }
  .basicTab{
    /*background: antiquewhite;*/
    background: rgb(241, 241, 241);
  }

  .checkTab{
    color: #fff;
    background: #f40;
  }

</style>
