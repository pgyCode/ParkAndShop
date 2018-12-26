<template>
  <div>

    <div style="clear: both;height: 42px; width: 866px; margin: 20px auto;background: rgb(241, 241, 241); border: 1px solid #dfdfdf;">
      <p style="float: left; width: 280px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Basic Info</p>
      <p style="float: right; width: 86px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Operate</p>
    </div>

    <div id="containerShop">
      <ul>
        <li class="containerShopLi" v-bind:key="shop" v-for="shop in shops">
          <div>
            <div style="float: left; width: 700px; height: 160px;">
              <div style="margin-left:20px; float: left; width: 700px;  height: 120px; margin-top: 20px">
                <span style="font-size: 14px; font-weight: 700; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.nickname }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>ID：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.userID }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Address：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.address }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(102, 102, 102);"><b>Telephone：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 400; line-height: 30px; color: rgb(0, 99, 200);">{{ shop.username }}</span>
              </div>
            </div>

            <div style="width: 86px; float: right; height: 120px; margin-top: 20px;">
              <button v-on:click="onClickBlock(shop)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; cursor: pointer; margin: 47px auto;" >Cancel</button>
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
      this.$http.get(this.URL + 'm/customer_black_cancel?id=' +
          info.userID)
        .then((data) => {
          this.isLoad = false
          this.initLoad()
        })
    },

    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'm/customer_black_info')
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.shops = data.body.data.array
        })
    }
  },

  created () {
    this.initLoad()
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
