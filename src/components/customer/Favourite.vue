<template>
  <div>
    <div style="height: 48px; width: 850px; margin: 0px auto; margin-top: 10px">
      <p style="height: 48px; width: 100%; line-height: 48px; margin-left: 10px; padding-left: 10px; border-bottom: 2px solid #f40; color: #f40; font-weight: 600">All My FavouriteGoods</p>
    </div>
    <div id="containerBody">
      <ul>
        <li v-bind:key="data" v-for="data in datas" style="margin: 30px" >
          <img v-bind:src="data.product.portraitURL" style="width: 148px; height: 148px; border: 1px solid #dfdfdf;" v-on:click="goGood(data.product)"/>
          <p style="height: 30px; text-align: center; line-height: 30px; font-weight: 500; font-size: 12px; color: rgb(60, 60, 60);">{{ data.product.pName }}</p>
          <p style="height: 20px; text-align: center; line-height: 20px; font-weight: 900; font-size: 14px; color: #f40;">💰¥{{ data.product.price }}</p>
          <button style="width: 50px;text-align: center; background: rgb(255,90,44);color: white; font-size: 12px; font-weight: 600; height: 26px; width: 50px; border: 1px solid rgb(255,90,44); border-radius: 5px; margin: 0 auto; cursor: pointer" v-on:click="onClickRemove(data.product.pID)">remove</button>


        </li>
      </ul>
    </div>
     <div style="height: 48px; width: 850px; margin: 0px auto; margin-top: 10px">
          <p style="float:left; height: 48px; width: 100%; line-height: 48px; margin-left: 10px; padding-left: 10px; border-bottom: 2px solid #f40; color: #f40; font-weight: 600">All My FavouriteShop</p>
      </div>
      <div id="containerBody">
        <ul>
                <li v-bind:key="shop" v-for="shop in shops"
                     class="containerShopLi" style="margin: 30px">
                  <div v-on:click="goShop(shop)" >
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
                  <button style="float: left; width: 178px; height: 38px; margin-left: 5px;border: none; background: rgb(255,90,44); color: #fff; font-weight: 400; font-size: 16px" v-on:click="onClickRemoveShop(shop.id)">remove</button>
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
  data () {
    return {
      isLoad: false,
      currentPage: 1,
      name: 'sds',
      datas:[],
      shops:[],
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

    goGood: function (info) {
      this.$router.push({name: 'seller_good', params: {data: info}})
    },
    goShop: function (info) {
          console.log(info.id)
          this.$router.push({name: 'customer_shop', params: {data: info.id}})
        },
  },
  created: function () {
    this.initLoad()
  }
}
</script>

<style scoped>

  *{
    padding: 0px;
    margin: 0px;
    display: block;
  }

  #containerBody{
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
    width: 1000px;
    height: 180px;
    padding-top: 20px;
    border-top: 1px solid #dfdfdf;
  }

</style>
