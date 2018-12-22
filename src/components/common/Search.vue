<template>
  <div>
    <div style="padding-top:80px; padding-bottom: 30px; text-align: center" v-show="(poiSearch == 0 && datas.length <= 0) || (poiSearch == 1 && shops.length <= 0)">
      <img id="imgLogo" src="../../assets/logo.png"/>
    </div>
    <div id="containerSearch">
      <button style="width: 70px; height: 30px; float: left;"
              :class="{btnSearch: poiSearch == 0}" v-on:click="checkPoiSearch(0)">Good</button>
      <button style="width: 70px; height: 30px; float: left;"
              :class="{btnSearch: poiSearch == 1}" v-on:click="checkPoiSearch(1)">Shop</button>
      <div style="clear: both">
        <input id="inputSearch" v-model="value"/>
        <button id="btnSearch" v-on:click="onClickSearch()">Search</button>
      </div>
    </div>
    <div id="containerBody" v-show="poiSearch == 0">
      <ul>
        <li v-bind:key="data" v-for="data in datas"
            v-on:click="goGood(data)">
          <div class="containerBodyLi" v-on:mouseenter="onLiEnter($event)" v-on:mouseleave="onLiLeave($event)">
            <img style="width: 180px; height: 180px;" v-bind:src="data.portraitURL"/>
            <h4 style="color: #f40; font-weight: 600; float: left; height: 22px; line-height:17px; margin-top: 11px; padding-left: 10px">¥{{ data.price }}</h4>
            <p style="display: block;margin-top: 6px; padding: 0px 10px; color: #3d3d3d; height: 18px; font-size: 14px; font-weight: 500; clear: both">{{ data.pName }}</p>
            <p style="display: block;margin-top: 6px; padding: 0px 10px; color: #808285; height: 36px; font-size: 12px; font-weight: 400; clear: both">Description:{{ data.description }}</p>
            <div>
              <div style="float: left; padding-left: 10px">
                <span style="display: block; margin: 2px 0px; width: 10px; height: 3px; background: #f40"></span>
                <span style="display: block; margin: 2px 0px; width: 10px; height: 3px;  background: #f40"></span>
                <span style="display: block; margin: 2px 0px; width: 10px; height: 3px;  background: #f40"></span>
              </div>
              <span style="display: block; color: #888; font-size: 12px; padding-left:3px;float: left">{{ data.sName }}</span>
              <span  style="display: block; color: #888; font-size: 12px; padding-left: 10px; text-align: right; padding-right: 10px; white-space:nowrap;overflow:hidden; text-overflow:ellipsis;">Remain:{{ data.count }} pieces</span>
            </div>
            <span style="clear:both; width: 100px; margin-left:10px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>
          </div>
        </li>
      </ul>
    </div>
    <div id="containerShop" v-show="poiSearch == 1">
      <ul>
        <li v-bind:key="shop" v-for="shop in shops"
            v-on:click="goShop(shop)">
          <div  class="containerShopLi">
            <div style="float: left; width: 350px; height: 162px;">
              <img v-bind:src="shop.url"
                   style="float:left; width: 120px; height: 120px; margin-right: 20px; border: 1px solid #b6b6b6;"/>
              <div style="float: left; width: 200px;  height: 70px;">
                <span style="font-size: 14px; font-weight: 700; line-height: 24px; color: rgb(0, 99, 200);">{{ shop.shopName }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 24px; color: rgb(102, 102, 102);"><b>Seller：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 24px; color: rgb(0, 99, 200);">{{ shop.sellerName }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 24px; color: rgb(102, 102, 102);"><b>Major Business：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 24px; color: rgb(0, 99, 200);">{{ shop.major }}</span>
              </div>
              <div style="clear: both; padding-top: 16px; width: 100%; height: 24px;">
                <div>
                  <div style="float: left;">
                    <span style="display: block; margin: 2px 0px; width: 10px; height: 3px; background: #f40"></span>
                    <span style="display: block; margin: 2px 0px; width: 10px; height: 3px;  background: #f40"></span>
                    <span style="display: block; margin: 2px 0px; width: 10px; height: 3px;  background: #f40"></span>
                  </div>
                  <span  style="display: block; color: #888; font-size: 12px; padding-left: 10px; float: left; font-weight: 600">Kinds：{{ shop.count }} pieces</span>
                </div>
              </div>
            </div>

            <div style="width: 610px; float: right; height: 162px;">
              <div style="width: 610px; background: rgb(237, 237, 237); height: 132px;">
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

  created () {
    if (name === '') {
      this.welcomeMsg = 'Dear,Please Login'
    } else {
      if (this.getCookie('usertype') === '0') {
        this.welcomeMsg = 'Manager:' + name
      } else if (this.getCookie('usertype') === '1') {
        this.welcomeMsg = 'Customer:' + name
      } else if (this.getCookie('usertype') === '2') {
        this.welcomeMsg = 'Seller:' + name
      }
      console.log('12323')
    }
  },

  components: {Loading},
  data () {
    return {
      isLoad: false,
      currentPage: 1,
      value: '',
      datas: [],
      shops: [],
      poiMouseEnter: -1,
      welcomeMsg: '',
      poiSearch: 0
    }
  },

  methods: {

    goShop: function (poi) {
      this.$router.push('/seller/shop')
    },

    goGood: function (info) {
      this.$router.push({name: 'seller_good', params: {data: info}})
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
      if (this.poiSearch === 0) {
        this.$http.get('http://47.106.11.120:8080/DiGou/api/c/searchproducts?pName=' + this.value + '&pageIndex=0&pageSize=10')
          .then((data) => {
            console.log(data)
            // this.users = data.body
            this.isLoad = false

            this.datas = data.body.data.pArray

            /*
            this.datas = [
              {
                pName: 'HuaShuo ROG PHONE',
                price: 5999.00,
                portraitURL: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/TB1oAS6qzDpK1RjSZFrXXa78VXa.jpg_240x240Q90.jpg',
                sName: 'HuaShuo',
                count: 88,
                description: 'This is a HuaShuo phone.',
                pID: 1,
                sID: 1
              },
              {
                pName: 'Razer Phone 2',
                price: 5990.99,
                portraitURL: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/TB15ZaPjSzqK1RjSZFpXXakSXXa.jpg_240x240Q90.jpg',
                sName: 'Razer',
                count: 90,
                description: 'This is a Razer phone.',
                pID: 1,
                sID: 1
              },
              {
                pName: 'Nokia Phone 1020',
                price: 768.00,
                portraitURL: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/TB10zbvIFXXXXbKXFXXXXXXXXXX.jpg_240x240Q90.jpg',
                sName: 'Nokia',
                count: 99,
                description: 'This is a Nokia phone.',
                pID: 1,
                sID: 1
              },
              {
                pName: 'Nokia Phone 1520',
                price: 866.00,
                portraitURL: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/TB1NOxOHVXXXXXOXXXXXXXXXXXX.jpg_240x240Q90.jpg',
                sName: 'Nokia',
                count: 89,
                description: 'This is a Nokia phone.',
                pID: 1,
                sID: 1
              },
              {
                pName: 'Nokia Phone 930',
                price: 598.00,
                portraitURL: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/TB1SkfgHFXXXXc8apXXXXXXXXXX.jpg_240x240Q90.jpg',
                sName: 'Nokia',
                count: 100,
                description: 'This is a Nokia phone.',
                pID: 1,
                sID: 1
              },
              {
                pName: 'Apple iPhone XR',
                price: 6499.00,
                portraitURL: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/1917047079/O1CN0122AEDRms6xN0ZWl_!!0-item_pic.jpg_460x460Q90.jpg',
                sName: 'Apple',
                count: 30,
                description: 'This is an Apple phone.',
                pID: 1,
                sID: 1
              }
            ] */
          })
          .catch(() => {
            this.isLoad = false
          })
      } else if (this.poiSearch === 1) {
        this.$http.get('http://jsonplaceholder.typicode.com/users')
          // 'http://192.168.31.41:8000/api/searchproducts?pageIndex=0&pageSize=10')
          .then((data) => {
            console.log(data)
            this.users = data.body
            this.isLoad = false
            this.shops = [
              {
                shopName: 'Google Purchase',
                sellerName: 'sammy0123',
                url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4//55/5b/TB1yX_bcBLN8KJjSZFPwu0oLXXa.png_140x140Q90.jpg',
                major: 'Google devices',
                count: 2,
                description: 'We sell mobile phones, there are many mobile phones in our store, welcome everyone to buy our google mobile phone'
              }
            ]
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
    width: 180px;
    height: 320px;
    float: left;
    margin: 10px;
    border: 1px solid #dfdfdf;
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
