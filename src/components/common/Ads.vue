<template>
  <div>
    <div style="width: 1000px; margin: 0px auto; text-align: center; height: 100px; display: table-cell; vertical-align: center">
      <img style="margin-left:30px;float:left;width: 250px;height: 100px;" id="imgLogo" src="../../assets/logo.png"/>
      <router-link to="/search" style="float: left">
        <div style="float:left; width: 526px; height: 40px; padding: 30px; margin-left: 60px;">
          <p style="width: 526px; height: 40px; background: #fff; border: 1px solid #b6b9bc; border-radius: 5px; font-size: 24px; line-height: 40px; text-align: right; padding-right: 10px;">🔍</p>
        </div>
      </router-link>
    </div>
    <div>
      <div id="top5" style="width: 1000px;">
        <ul>
          <li v-bind:key="shop" v-for="(shop,index) in shops" class="containerBodyLi" v-on:click="goShop(shop)">
            <div style="width: 100%; height: 64px; background: #f0f0f0; border-radius: 10px 10px 0px 0px">
              <p style="float:left; line-height: 64px; font-size: 24px; padding-left: 20px; color: #808285; font-weight: 400">{{ shop.shopName }}</p>
              <p style="float:right; line-height: 64px; font-size: 16px; padding-right: 20px; color: #808285; font-weight: 400;">major：{{ shop.major }}</p>
            </div>
            <div style="width: 100%; height: 230px;">
              <img v-bind:src="imgs[index]"
                style="width: 340px; height: 230px; float: left" />

              <!--<img v-bind:src="shop.url" style="float:left; height: 208px; width: 208px; margin: 11px 0px ; border: 1px solid #dfdfdf"/>-->
              <ul style="float:right;width: 600px; height: 230px">
                <li v-bind:key="product" v-for="product in shop.products" style="width: 170px; height: 230px; margin-left: 20px; float: right;">
                  <img style="width: 170px; height: 170px;" v-bind:src="product.portraitURL"/>
                  <p style="margin: 6px auto; text-align: center; line-height: 18px; font-size: 12px; color: rgba(0,0,0,0.87); font-weight: 500">{{ product.pName }}</p>
                  <div style="width: 140px; height: 24px; margin: 0px 10px;">
                    <p style="line-height: 24px; float: left; color: #f40; font-size: 16px; font-weight: 500;">¥{{ product.price }}</p>
                    <p style="float: right; font-size: 12px; color: rgba(0,0,0,0.38); line-height: 24px; font-weight: 500">Count:{{ product.num}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div style="margin: 0px auto; width: 350px; height: 80px; margin-top: 20px;">
        <img src="https://www.parknshop.com/medias/sys_master/hd7/hd0/9158622150686/top100-icon-90x90.png"
             style="width: 45px; height: 45px; float: left; margin-top: 17px; border-radius: 22px"/>
        <p style="line-height: 36px; float:left; font-size: 24px; padding-left: 20px; font-weight: 500; color: rgba(0,0,0,0.87); margin-top: 24px">Recommended Goods</p>
      </div>

      <div id="top10" style="width: 1050px;">
        <ul>
          <li v-bind:key="top10" v-for="top10 in top10s"
              v-on:click="goGood(top10)"  style="display: block;width: 180px; height: 254px;float: left;padding-bottom: 15px; padding-top: 15px; padding-right: 27px;">
            <img v-bind:src="top10.portraitURL" style="width: 180px; height: 180px; border: 1px solid #dfdfdf;" v-on:click="goGood(data.product)"/>
            <p style="height: 32px; text-align: center; line-height: 30px; line-height: 16px; margin-top: 8px; font-weight: 500; font-size: 13px; color: rgb(60, 60, 60);">{{ top10.pName }}</p>
            <p style="height: 20px; text-align: center; line-height: 20px; font-weight: 900; font-size: 18px; color: #f40;">💰¥{{ top10.price }}</p>
          </li>
        </ul>
      </div>
    </div>

    <Loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {

  activated () {
    // 加载top10产品
    this.isLoad = true
    this.$http.get(this.URL + 'm/product_top10_info')
      .then((data) => {
        console.log(data)
        this.isLoad = false
        this.top10s = data.body.data.top10
      })
      .catch((error) => {
        console.log(error)
        this.isLoad = false
      })
    // 加载top5店铺
    this.isLoad = true
    this.$http.get(this.URL + 'm/seller_top5_info_ads')
      .then((data) => {
        this.isLoad = false
        this.shops = data.body.data.top5_ads
      })
      .catch(() => {
        this.isLoad = false
      })
  },

  components: {Loading},
  data () {
    return {
      isAd: true,
      isLoad: false,
      currentPage: 1,
      value: '',
      datas: [],
      shops: [],
      top10s: [],
      poiMouseEnter: -1,
      welcomeMsg: '',
      poiSearch: 0,
      imgs: [ '/static/ad0.png', '/static/ad1.png', '/static/ad2.png', '/static/ad3.png', '/static/ad4.png' ]
    }
  },

  methods: {

    goShop: function (info) {
      console.log(info.id)
      this.$router.push({name: 'customer_shop', params: {data: info.id}})
    },

    goGood: function (info) {
      console.log(info)
      this.$router.push({name: 'customer_good', params: {data: info}})
    },

    checkPoiSearch: function (poi) {
      this.poiSearch = poi
    },

    changgeiFrame: function () {
      this.$ref.frameDiv.html("<iframe  src='frame.src = 'http://10.255.44.33/srun_portal_pc.php' height='500' width='100%'></iframe>")
    },

    goLogin: function () {
      if (this.getCookie('username') === '') {
        this.$router.push('/login')
      } else {

      }
    },

    logout: function () {
      this.clearCookie('username')
      this.clearCookie('usertype')
      this.$router.push('/login')
    },

    onLiEnter: function ($event) {
      $event.currentTarget.style.border = '1px solid #f40'
    },

    onLiLeave: function ($event) {
      $event.currentTarget.style.border = '1px solid #dfdfdf'
    },

    getImg: function (poi) {
      console.log(poi + ' ' + this.imgs[poi])
      return this.imgs[poi]
    },

    onClickSearch: function () {
      this.isLoad = true
      this.isAd = false
      if (this.poiSearch === 0) {
        this.$http.get(this.URL + 'c/searchproducts?pName=' +
          this.value)
          .then((data) => {
            console.log(data)
            this.isLoad = false
            this.datas = data.body.data.array
          })
          .catch(() => {
            this.isLoad = false
          })
      } else if (this.poiSearch === 1) {
        this.$http.get(this.URL + 'm/seller_white_info?value=' +
          this.value)
          .then((data) => {
            this.isLoad = false
            this.shops = data.body.data.array
          })
          .catch(() => {
            this.isLoad = false
          })
      }
    }
  }
}
</script>

<style scoped>

  *{
    padding: 0px;
    margin: 0px;
    border: 0px;
    outline:none;
    cursor: pointer;
    display: block;
  }

  #imgLogo{
    width: 330px;
    height: 130px;
    margin: 0px auto;
  }

  #containerHeader {
    height: 35px;
    background: #f5f5f5;
    border-bottom: 1px solid #dfdfdf;
  }

  .title{
    font-size: 40px;
    font-family: "HanziPen TC";
  }

  #txtUser{
    float: right;
    font-weight: 600;
    color: #000000;
    margin-top: 6px;
    line-height: 40px;
    margin-right: 20px;
  }

  #containerSearch{
    margin: 0px auto;
    width: 560px;
    text-align: center;
    padding-top: 15px;
  }

  #inputSearch{
    width: 400px;
    height: 30px;
    color: #000000;
    font-weight: 500;
    font-size: 14px;
    display: block;
    float: left;
    padding-left: 10px;
    border: 2px solid #f40;
  }

  #btnSearch{
    color: #000000;
    font-weight: 500;
    width: 120px;
    display:block;
    float: left;
    font-size: 16px;
    height: 34px;
    border: none;
    color: #fff;
    background: #f40;
  }

  #containerBody{
    width: 810px;
    min-width: 810px;
    margin: 0px auto;
  }

  #containerShop{
    width: 1000px;
    min-width: 1000px;
    margin: 0px auto;
    padding-top: 20px;
    clear: both;
  }

  #containerFooter{
    text-align: center;
    padding: 30px;
    background: #d4d7dc;
    font-size: 20px;
  }

  .containerBodyLi {
    display: block;
    width: 998px;
    height: 285px;
    float: left;
    margin-bottom: 30px;
  }

  .containerShopLi {
    display: block;
    width: 1000px;
    height: 180px;
    padding-top: 20px;
    border-top: 1px solid #dfdfdf;
  }

  ul{
    list-style-type: none;
    display: inline-block;
  }

  a{
    display: block;
    float: right;
    padding-right: 30px;
    line-height: 35px;
    text-decoration: none;
    color: #6c6c6c;
    font-size: 13px;
  }

  .btnSearch{
    background: #f40;
    color: #fff;
    font-weight: 400;
  }

</style>
