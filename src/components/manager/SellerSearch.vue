<template>
  <div>

    <div id="containerSearch">
      <div style="clear: both">
        <input id="inputSearch" v-model="value"/>
        <button id="btnSearch" v-on:click="onClickSearch()">Search</button>
      </div>
    </div>

    <div style="clear: both;height: 42px; width: 866px; margin: 20px auto;background: rgb(241, 241, 241); border: 1px solid #dfdfdf;">
      <p style="float: left; width: 280px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Basic Info</p>
      <p style="float: left; width: 500px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Description</p>
      <p style="float: right; width: 86px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Operate</p>
    </div>

    <div id="containerShop">
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
                <p style=" font-size: 13px; font-weight: 400; line-height: 20px; overflow: hidden; color: #666;">{{ shop.description }}</p>
              </div>
            </div>

            <div style="width: 86px; float: right; height: 120px; margin-top: 20px;">
              <button v-on:click="onClickBlock(shop)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; cursor: pointer; margin: 47px auto;" >Defriend</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {

  components: {Loading},

  data () {
    return {
      shops: [],
      isLoad: false,
      requests: [],
      value: ''
    }
  },

  methods: {
    onClickBlock: function (info) {
      this.isLoad = true
      this.$http.get(this.URL + 'm/seller_white_block?id=' +
        info.id)
        .then((data) => {
          this.isLoad = false
          this.onClickSearch()
        })
    },

    onClickSearch: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'm/seller_white_info?value=' +
        this.value)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.shops = data.body.data.array
        })
    }
  },

  created () {
    this.isLoad = true
    this.$http.get(this.URL + 'm/seller_white_info?value=' +
      this.value)
      .then((data) => {
        this.isLoad = false
        this.shops = data.body.data.array
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

  #containerSearch{
    margin: 0px auto;
    width: 560px;
    height: 34px;
    padding-top: 20px;
    text-align: center;
    /*padding: 15px 0px;*/
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
    outline: none;
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
    outline: none;
  }

  #containerShop{
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

</style>
