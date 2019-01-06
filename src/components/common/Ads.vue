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
    <!--<div id="containerSearch">-->
      <!--<button style="width: 70px; height: 30px; float: left;"-->
              <!--:class="{btnSearch: poiSearch == 0}" v-on:click="checkPoiSearch(0)">Good</button>-->
      <!--<button style="width: 70px; height: 30px; float: left;"-->
              <!--:class="{btnSearch: poiSearch == 1}" v-on:click="checkPoiSearch(1)">Shop</button>-->
      <!--<div style="clear: both">-->
        <!--<input id="inputSearch" v-model="value"-->
               <!--v-on:keyup.enter = "onClickSearch"/>-->
        <!--<button id="btnSearch" v-on:click="onClickSearch()">Search</button>-->
      <!--</div>-->
    <!--</div>-->
    <div>
      <div id="top5" style="width: 1000px;">
        <ul>
          <li v-bind:key="shop" v-for="shop in shops" class="containerBodyLi">
            <div style="width: 100%; height: 64px; background: #f0f0f0; border-radius: 10px 10px 0px 0px">
              <p style="line-height: 64px; font-size: 24px; padding-left: 10px; color: #4eac66; font-weight: 500">{{ shop.shopName }}</p>
            </div>
            <div style="width: 100%; height: 230px;">
              <img src="https://img.alicdn.com/tfs/TB11eRDohrI8KJjy0FpXXb5hVXa-1014-720.png_720x720Q90s50.jpg_.webp"
                style="width: 340px; height: 230px; float: left" />

              <!--<img v-bind:src="shop.url" style="float:left; height: 208px; width: 208px; margin: 11px 0px ; border: 1px solid #dfdfdf"/>-->
              <ul style="float:right;width: 600px; height: 230px">
                <li v-bind:key="product" v-for="product in shop.products" style="width: 170px; height: 230px; margin-left: 20px; float: right;">
                  <img style="width: 170px; height: 170px;" v-bind:src="product.portraitURL"/>
                  <p style="margin: 6px auto; text-align: center; line-height: 18px; font-size: 12px; color: rgba(0,0,0,0.87); font-weight: 500">{{ product.pName }}</p>
                  <div style="width: 140px; height: 24px; margin: 0px 10px;">
                    <p style="line-height: 24px; float: left; color: #f40; font-size: 16px; font-weight: 500;">¥{{ product.price }}</p>
                    <p style="float: right; font-size: 12px; color: rgba(0,0,0,0.38); line-height: 24px; font-weight: 500">Count:{{ product.count }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <!--<div style="clear: left; float: left; width: 1000px; border-bottom: 2px solid #f40;margin-top: 25px;">-->
        <!--<div style="clear: left; float: left; margin-top: 30px; ">-->
          <!--<h2 style="color: #f40; float: left">TOP 10 PRODUCTS</h2>-->
        <!--</div>-->
      <!--</div>-->

      <div style="margin: 0px auto; width: 350px; height: 80px; margin-top: 20px;">
        <img src="https://www.parknshop.com/medias/sys_master/hd7/hd0/9158622150686/top100-icon-90x90.png"
             style="width: 45px; height: 45px; float: left; margin-top: 17px; border-radius: 22px"/>
        <p style="line-height: 36px; float:left; font-size: 24px; padding-left: 20px; font-weight: 500; color: rgba(0,0,0,0.87); margin-top: 24px">Recommended Goods</p>
      </div>

      <div id="top10" style="width: 1000px">
        <ul>
          <li v-bind:key="top10" v-for="top10 in top10s"
              v-on:click="goGood(top10)"  style="display: block;width: 180px; height: 254px;float: left;margin: 10px 7px;">
            <img v-bind:src="top10.portraitURL" style="width: 180px; height: 180px; border: 1px solid #dfdfdf;" v-on:click="goGood(data.product)"/>
            <p style="height: 32px; text-align: center; line-height: 30px; line-height: 16px; margin-top: 8px; font-weight: 500; font-size: 13px; color: rgb(60, 60, 60);">{{ top10.pName }}</p>
            <p style="height: 20px; text-align: center; line-height: 20px; font-weight: 900; font-size: 18px; color: #f40;">💰¥{{ top10.price }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div id="containerBody">
      <ul>
        <li v-bind:key="data" v-for="data in datas"
            v-on:click="goGood(data)"  style="display: block;width: 180px; height: 314px;float: left;margin: 10px;">
          <div style="padding-bottom:5px; border: 1px solid #dfdfdf;">
            <img style="width: 178px; height: 180px;" v-bind:src="data.portraitURL"/>
            <h4 style="color: #f40; font-weight: 600; float: left; height: 22px; line-height:17px; margin-top: 11px; padding-left: 10px">¥{{ data.price }}</h4>
            <p style="display: block;margin-top: 6px; padding: 0px 10px; color: #3d3d3d; height: 18px; font-size: 14px; font-weight: 500; clear: both">{{ data.pName }}</p>
            <p style="overflow:hidden; display: block;margin-top: 6px; padding: 0px 10px; color: #808285; height: 36px; font-size: 12px; font-weight: 400; clear: both">{{ data.description }}</p>
            <div>
              <div style="float: left; padding-left: 10px">
                <span style="display: block; margin: 2px 0px; width: 10px; height: 3px; background: #f40"></span>
                <span style="display: block; margin: 2px 0px; width: 10px; height: 3px;  background: #f40"></span>
                <span style="display: block; margin: 2px 0px; width: 10px; height: 3px;  background: #f40"></span>
              </div>
              <span style="display: block; color: #888; font-size: 12px; padding-left:3px;float: left">{{ data.shopName }}</span>
              <span  style="display: block; color: #888; font-size: 12px; padding-left: 10px; text-align: right; padding-right: 10px; white-space:nowrap;overflow:hidden; text-overflow:ellipsis;">Remain:{{ data.num }} pieces</span>
            </div>
            <span style="clear:both; width: 100px; margin-left:10px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>
          </div>
        </li>
      </ul>
    </div>
    <div id="containerShop" v-show="(poiSearch == 1) && (isAd == false)">
      <ul>
        <li v-bind:key="shop" v-for="shop in shops"
            v-on:click="goShop(shop)"  class="containerShopLi">
          <div>
            <div style="float: left; width: 400px; height: 162px;">
              <img v-bind:src="shop.url"
                   style="float:left; width: 120px; height: 120px; margin-right: 20px; border: 1px solid #b6b6b6;"/>
              <div style="float: left; width: 250px;  height: 70px; ">
                <span style="font-size: 14px; font-weight: 700; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.shopName }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Seller：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.nickname }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Major Business：</b></span>
                <span style="overflow:hidden; height: 30px;  float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.major }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Telephone：</b></span>
                <span style="overflow:hidden; height: 30px;  float: left; font-size: 12px; font-weight: 400; line-height: 24px; color: rgb(0, 99, 200);">{{ shop.telephone }}</span>
              </div>
              <div style="clear: both; padding-top: 16px; width: 100%; height: 24px;">
                <div>
                  <div style="float: left;">
                    <span style="display: block; margin: 2px 0px; width: 10px; height: 3px; background: #f40"></span>
                    <span style="display: block; margin: 2px 0px; width: 10px; height: 3px;  background: #f40"></span>
                    <span style="display: block; margin: 2px 0px; width: 10px; height: 3px;  background: #f40"></span>
                  </div>
                  <span  style="display: block; color: #888; font-size: 12px; padding-left: 10px; float: left; font-weight: 600">Kinds：{{ shop.num }} pieces</span>
                </div>
              </div>
            </div>

            <div style="width: 560px; float: right; height: 162px;">
              <div style="width: 560px; background: rgb(237, 237, 237); height: 132px;">
                <p style="padding-top: 15px; margin-bottom: 10px; margin-left: 20px; font-size: 14px; font-weight: 600; color: #666;">Shop Description:</p>
                <p style="margin-top: 10px; margin-left: 20px; margin-right: 20px; font-size: 13px; font-weight: 400; color: #666;">{{ shop.description }}</p>
              </div>
              <p style="height: 30px; text-align: right; line-height:30px; color: #f40; font-size: 13px; font-weight: 500">Goto The Shop=></p>
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
    this.$http.get(this.URL + 'm/seller_top5_info')
      .then((data) => {
        this.isLoad = false
        this.shops = data.body.data.top5
        this.shops = [
          {
            shopName: 'hua wei',
            major: 'Phone',
            products: [
              {
                portraitURL: 'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01EepLXL28vIdBrsRJZ_!!725677994.jpg_320x5000Q50s50.jpg_.webp',
                pName: '三只松鼠',
                price: '123',
                count: 999
              },
              {
                portraitURL: 'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01EepLXL28vIdBrsRJZ_!!725677994.jpg_320x5000Q50s50.jpg_.webp',
                pName: '三只松鼠',
                price: '123',
                count: 999
              },
              {
                portraitURL: 'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01EepLXL28vIdBrsRJZ_!!725677994.jpg_320x5000Q50s50.jpg_.webp',
                pName: '三只松鼠',
                price: '123',
                count: 999
              }
            ]
          },

          {
            shopName: 'hua wei',
            major: 'Phone',
            products: [
              {
                portraitURL: 'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01EepLXL28vIdBrsRJZ_!!725677994.jpg_320x5000Q50s50.jpg_.webp',
                pName: '三只松鼠',
                price: '123',
                count: 999
              },
              {
                portraitURL: 'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01EepLXL28vIdBrsRJZ_!!725677994.jpg_320x5000Q50s50.jpg_.webp',
                pName: '三只松鼠',
                price: '123',
                count: 999
              },
              {
                portraitURL: 'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01EepLXL28vIdBrsRJZ_!!725677994.jpg_320x5000Q50s50.jpg_.webp',
                pName: '三只松鼠',
                price: '123',
                count: 999
              }
            ]
          }
        ]
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
      poiSearch: 0
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
