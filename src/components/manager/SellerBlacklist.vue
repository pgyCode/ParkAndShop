<template>
  <div>
    <div style="height: 42px; width: 866px; margin: 20px auto;background: rgb(241, 241, 241); border: 1px solid #dfdfdf;">
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
              <button v-on:click="onClickCancel(shop)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; cursor: pointer; margin: 22px auto;" >Cancel</button>
              <button v-on:click="onClickDelete(shop)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; cursor: pointer; margin: 22px auto;" >Delete</button>
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

  created () {
    this.initLoad()
  },

  data () {
    return {
      shops: [],
      isLoad: false,
      requests: []
    }
  },

  methods: {
    onClickCancel: function (info) {
      this.isLoad = true
      this.$http.get(this.URL + 'm/seller_black_cancel?id=' +
        info.id)
        .then((data) => {
          this.isLoad = false
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    onClickDelete: function (info) {
      this.isLoad = true
      this.$http.get(this.URL + 'm/delete_seller?id=' +
        info.id)
        .then((data) => {
          this.isLoad = false
          this.initLoad()
        })
        .catch(() => {
          this.isLoad = false
        })
    },

    onClickReject: function (index) {
      this.isLoad = true
      this.$http.get('http://jsonplaceholder.typicode.com/users')
        .then((data) => {
          this.isLoad = false
          this.shops.splice(index, 1)
        })
    },

    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'm/seller_black_info')
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
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    display: block;
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
