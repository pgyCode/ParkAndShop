<template>
  <div>
    <div id="containerSearch">
      <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
         class="basicTab"
         :class="{checkTab:poiSearch == 0}"
         v-on:click="checkPoiSearch(0);">Stores</p>
      <p style="float:left; width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 35px"
         class="basicTab"
         :class="{checkTab:poiSearch == 1}"
         v-on:click="checkPoiSearch(1); ">Products</p>
      <div style="clear: both">
        <input id="inputSearch" v-model="value"/>
        <button id="btnSearch" v-on:click="onClickSearch()">Search</button>
      </div>
    </div>
    <div id="containerBody" v-show="poiSearch == 1">
      <ul>
        <li class="containerProductLi" v-bind:key="data" v-for="data in datas" >
          <div style=" width: 100%; height: 100%">
            <div style="float: left; width: 280px; height: 130px;vertical-align: middle; display: table-cell; padding: 4px; ">
              <img v-bind:src="data.portraitURL" style="float:left; width: 120px; height: 120px; margin-bottom: 20px; margin-right: 10px; border: 1px solid #b6b6b6;"/>
              <div style="float: left; width: 140px;  height: 120px;">
                <span style="display:block;font-size: 15px; font-weight: 700; line-height: 40px; color: rgb(0, 99, 200); overflow: hidden">{{ data.pName }}</span>
                <span style="float: left; font-size: 14px; font-weight: 400; line-height: 40px; color: rgb(0, 99, 200); overflow: hidden; color: #f40; font-weight: 600">¥{{ data.price }}</span>
                <span style="clear:both; float: left; font-size: 12px; font-weight: 400; line-height: 40px; color: rgb(102, 102, 102);"><b>Count：</b></span>
                <span style="float: left; font-size: 12px; font-weight: 600; line-height: 40px; color: rgb(102, 102, 102); overflow: hidden">{{ data.num }}</span>
              </div>
            </div>
            <button v-on:click="setTop10(data)" style="text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 80px; float: right; border: 1px solid rgb(220, 220, 220); border-radius: 5px; cursor: pointer; margin: 52px 13px;" >Set Top 10</button>

            <div style="float:right; width: 450px; background: rgb(237, 237, 237); height: 100px; padding: 10px; margin: 5px 0px;">
              <p style=" font-size: 13px; font-weight: 400; line-height: 20px; overflow: hidden; color: #666;">{{ data.description }}</p>
            </div>

          </div>
        </li>
      </ul>
    </div>
    <div id="containerShop" v-show="poiSearch == 0">
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
            <button v-on:click="setTop5(shop)" style="width: 100px; text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 60px; float: right; border: 1px solid rgb(220, 220, 220); border-radius: 5px; cursor: pointer; margin: 52px 13px;" >Set Top 5</button>

            <div style="float:right; width: 350px; background: rgb(237, 237, 237); height: 100px; padding: 10px; margin: 5px 0px;">
              <p style=" font-size: 13px; font-weight: 400; line-height: 20px; overflow: hidden; color: #666;">{{ shop.description }}</p>
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

  mounted: function () {
    this.isLoad = true
    this.$http.get(this.URL + 'c/searchproducts?pName=')
      .then((data) => {
        console.log(data)
        this.isLoad = false
        this.datas = data.body.data.array
      })
      .catch(() => {
        this.isLoad = false
      })

    this.$http.get(this.URL + 'm/seller_white_info?value=')
      .then((data) => {
        this.isLoad = false
        this.shops = data.body.data.array
      })
      .catch(() => {
        this.isLoad = false
      })
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
    setTop5: function (info) {
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
    },
    onClickBlock: function (info) {
      this.isLoad = true
      this.$http.get(this.URL + 'm/customer_white_block?id=' +
        info.userID)
        .then((data) => {
          this.isLoad = false
          this.onClickSearch()
        })
    },

    goShop: function (info) {
      console.log(info.id)
      this.$router.push({name: 'admin_shop', params: {data: info.id}})
    },

    goGood: function (info) {
      this.$router.push({name: 'admin_good', params: {data: info}})
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
      if (this.poiSearch === 1) {
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
      } else if (this.poiSearch === 0) {
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
    },
    setTop10: function (data) {
      // 给后台返回商品id， 让后台加入top10
      this.isLoad = true
      this.$http.get(this.URL + 'm/product_to_top10?id=' + data.pID)
        .then((data) => {
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
    width: 866px;
    min-width: 866px;
    margin: 0px auto;
  }

  #containerShop{
    width: 866px;
    min-width: 866px;
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
    height: 314px;
    float: left;
    margin: 10px;
  }

  .containerProductLi {
    display: block;
    width: 864px;
    height: 130px;
    margin: 20px 0px;
    border: 1px solid #dfdfdf;
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
  .btnNoSearch{
    background: rgb(241, 241, 241);
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
