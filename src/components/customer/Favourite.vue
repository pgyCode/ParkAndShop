<template>
  <div>
    <div style="height: 48px; width: 850px; margin: 0px auto; margin-top: 10px">
      <p style="height: 48px; width: 100%; line-height: 48px; margin-left: 10px; padding-left: 10px; border-bottom: 2px solid #f40; color: #f40; font-weight: 600">All My Favourite</p>
       <div id="containerSearch" style=" margin-left: 10px; background: rgb(221, 221, 221);">
        <button style="width: 70px; height: 30px; float: left;border: 0px; outline: none;"
                :class="{btnSearch: poiSearch == 0}" v-on:click="checkPoiSearch(0)">Good</button>
        <button style="width: 70px; height: 30px; float: left;border: 0px; outline: none;"
                :class="{btnSearch: poiSearch == 1}" v-on:click="checkPoiSearch(1)">Shop</button>
        </div>
    </div>

    <div class="containerBody" v-show="poiSearch == 0">
      <ul>
        <li v-bind:key="data" v-for="data in datas" style="margin: 10px 10px 30px" >
          <img v-bind:src="data.product.portraitURL" style="width: 148px; height: 148px; border: 1px solid #dfdfdf;" v-on:click="goGood(data.product)"/>
          <p style="height: 30px; text-align: center; line-height: 30px; font-weight: 500; font-size: 12px; color: rgb(60, 60, 60);">{{ data.product.pName }}</p>
          <p style="height: 20px; text-align: center; line-height: 20px; font-weight: 900; font-size: 14px; color: #f40;">💰¥{{ data.product.price }}</p>
          <button style="float: left; width: 148px; height: 25px;border: none; background: rgb(255,90,44); color: #fff; font-weight: 400; font-size: 16px; margin-top: 15px" v-on:click="onClickRemove(data.product.pID)">remove</button>
        </li>
      </ul>
    </div>

    <div class="containerBody" v-show="poiSearch == 1">
          <ul>
                  <li v-bind:key="shop" v-for="shop in shops"
                       class="containerShopLi" style="margin: 10px 10px 30px">
                    <div v-on:click="goShop(shop)" >
                      <div style="float: left; width: 400px; height: 130px;">
                        <img v-bind:src="shop.url"
                             style="float:left; width: 90px; height: 90px;  margin-right: 10px; border: 1px solid #b6b6b6;"/>
                        <div style="float: left; width: 250px;  height: 50px;  ">
                          <span style="font-size: 14px; font-weight: 700; line-height: 25px; color: rgb(0, 99, 200);">{{ shop.shopName }}</span>
                          <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 25px; color: rgb(102, 102, 102);"><b>Seller：</b></span>
                          <span style="float: left; font-size: 12px; font-weight: 400; line-height: 25px; color: rgb(0, 99, 200);">{{ shop.nickname }}</span>
                          <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 25px; color: rgb(102, 102, 102);"><b>Major Business：</b></span>
                          <span style="overflow:hidden; height: 25px;  float: left; font-size: 12px; font-weight: 400; line-height: 25px; color: rgb(0, 99, 200);">{{ shop.major }}</span>
                          <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 25px; color: rgb(102, 102, 102);"><b>Telephone：</b></span>
                          <span style="overflow:hidden; height: 25px;  float: left; font-size: 12px; font-weight: 400; line-height: 24px; color: rgb(0, 99, 200);">{{ shop.telephone }}</span>
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

                      <div style="width: 450px; float: right; height: 130px;">
                        <div style="width: 450px; background: rgb(237, 237, 237); height: 100px;">
                          <p style="padding-top: 15px; margin-bottom: 10px; margin-left: 20px; font-size: 14px; font-weight: 600; color: #666;">Shop Description:</p>
                          <p style="margin-top: 10px; margin-left: 20px; margin-right: 20px; font-size: 13px; font-weight: 400; color: #666;">{{ shop.description }}</p>
                        </div>
                        <p style="height: 30px; text-align: right; line-height:30px; color: #f40; font-size: 13px; font-weight: 500">Goto The Shop=></p>
                      </div>
                    </div>
                    <button style="float: left; width: 120px; height: 25px;border: none; background: rgb(255,90,44); color: #fff; font-weight: 400; font-size: 16px" v-on:click="onClickRemoveShop(shop.id)">remove</button>
                  </li>
                </ul>
        </div>

    <Loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {
  activated: function () {
    this.initLoad()
    console.log(111)
  },
  components: {Loading},
  data () {
    return {
      isLoad: false,
      currentPage: 1,
      name: 'sds',
      datas: [],
      shops: [],
      poiSearch: 0
    }
  },

  methods: {
    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'c/myFavourite?cID=' + this.getCookie('userId'))
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.datas = response.data.favourites
        })
        .catch(() => {
          this.isLoad = false
        })
      this.$http.get(this.URL + 'c/myFavouriteShop?cID=' + this.getCookie('userId'))
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.shops = response.data.favourites
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    onClickRemove: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'c/unfavourite?cID=' + this.getCookie('userId') + '&pID=' + id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    onClickRemoveShop: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'c/unfavouriteShop?cID=' + this.getCookie('userId') + '&sID=' + id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    checkPoiSearch: function (poi) {
      this.poiSearch = poi
    },

    goGood: function (info) {
      this.$router.push({name: 'customer_good', params: {data: info}})
    },
    goShop: function (info) {
      console.log(info.id)
      this.$router.push({name: 'customer_shop', params: {data: info.id}})
    }
  }
}
</script>

<style scoped>

  *{
    padding: 0px;
    margin: 0px;
    display: block;
  }

  .containerBody{
    width: 850px;
    margin: 0px auto;
    clear: both;
  }

  li{
    float: left;
    width: 148px;
    height: 218px;
    margin: 10px;
  }
   .containerShopLi {
      display: block;
      width: 850px;
      height: 150px;
      padding-top: 10px;
      border-top: 1px solid #dfdfdf;
    }

   .btnSearch{
      border: 0px;
      background: #f40;
      color: #fff;
      font-weight: 400;
    }

</style>
