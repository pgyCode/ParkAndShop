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
          <div style=" width: 100%; height: 100%">
            <div style="float: left; width: 400px; height: 130px;vertical-align: middle; display: table-cell; padding: 4px; ">
              <img v-bind:src="shop.url" style="float:left; width: 120px; height: 120px; margin-bottom: 20px; margin-right: 10px; border: 1px solid #b6b6b6;"/>
              <div style="float: left; width: 250px;  height: 120px;">
                <span style="display:block;font-size: 14px; font-weight: 700; line-height: 30px; color: rgb(0, 99, 200); overflow: hidden">{{ shop.shopName }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Seller：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200); overflow: hidden">{{ shop.nickname }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Major Business：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200); overflow: hidden">{{ shop.major }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Telephone：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200); overflow: hidden">{{ shop.telephone }}</span>
              </div>
            </div>
            <button v-on:click="cancel(shop)" style="width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; float: right; border: 1px solid rgb(220, 220, 220); border-radius: 5px; cursor: pointer; margin: 52px 13px;" >Cancel</button>

            <div style="float:right; width: 350px; background: rgb(237, 237, 237); height: 100px; padding: 10px; margin: 5px 0px;">
              <p style=" font-size: 13px; font-weight: 400; line-height: 20px; overflow: hidden; color: #666;">{{ shop.description }}</p>
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
    /* onClickBlock: function (info) {
      this.isLoad = true
      this.$http.get(this.URL + 'm/seller_white_block?id=' +
          info.id)
        .then((data) => {
          this.isLoad = false
          this.onClickSearch()
        })
    }, */

    cancel: function (info) {
      // 给后端返回商店id
      this.isload = true
      this.$http.get(this.URL + 'm/seller_top5_cancel?id=' + info.id)
        .then((data) => {
          this.$http.get(this.URL + 'm/seller_top5_info')
            .then((data) => {
              this.isLoad = false
              this.shops = data.body.data.top5
            })
          this.isload = false
        }
        )
    }
  },

  created () {
    this.isLoad = true
    this.$http.get(this.URL + 'm/seller_top5_info')
      .then((data) => {
        this.isLoad = false
        this.shops = data.body.data.top5
        console.log(this.shops)
      })
      .catch(() => {
        this.isLoad = false
      })
  }

}
</script>

<style scoped>
  #containerShop{
    width: 866px;
    min-width: 866px;
    margin: 0px auto;
    clear: both;
  }
  .containerShopLi {
    display: block;
    width: 866px;
    height: 130px;
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
