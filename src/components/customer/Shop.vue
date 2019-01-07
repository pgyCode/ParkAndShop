<template>
  <div style="width: 1000px; margin: 0px auto;">
     <div style="width: 1000px; min-width: 1000px; margin: 0px auto;">

       <div style="width: 1000px; height: 83px; padding: 0px 0px; margin: 0px auto;">
         <img src="../../assets/logo.png" style="float: left;" height="83px" width='210px'/>
         <p style="float: left; color: rgb(60, 60, 60); line-height: 63px; margin-top: 15px; font-size: 22px; font-weight: 700; margin-left: 20px">Shop</p>
       </div>
       <div style=" width: 1000px;height: 19px; padding: 6px 0px; border-bottom: 2px solid #5884ff">
         <p style="float:left; font-size: 15px;   font-weight: 500; color: rgb(0,0,0);border-radius: 3px;background: #2a56d7">&nbsp;&nbsp;Shop Name:&nbsp;&nbsp;</p>
         <p >&nbsp;&nbsp; {{ info.shopName }}</p>
         <button style="float: right; margin-top: -33px; width: 178px; height: 38px; margin-left: 5px; border: none; background: blue; color: #fff; font-weight: 400; font-size: 16px" v-on:click="addFavouriteShop()">Favourite</button>
       </div>
       <div style="height: 120px; width: 1000px;">
         <img v-bind:src="info.url" v-on:click="goShop(info.sID)"
              style="float: left; width: 118px; height: 118px; border: 1px solid rgb(212,215,220)"/>
         <p src="../../assets/logo.png"  style="float:left; width: 880px; height: 120px; font-size: 30px; line-height: 120px; text-align: center; color: rgb(63,127,206);">{{ info.shopName }}</p>
       </div>
     </div>

      <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">All Goods</p>

      <div id="containInfo" style="float: left; height: 1000px; width: 1000px; margin-top: 10px;">
        <ul>
          <li v-bind:key="data" v-for="data in datas" v-on:click="goGood(data)">
            <img v-bind:src="data.portraitURL" style="width: 240px; height: 240px; border: 1px solid #dfdfdf;"/>
            <p style="height: 16px; margin: 10px 3px 7px;text-align: center; vertical-align: center; line-height: 16px; font-weight: 500; font-size: 12px; color: #36c;">{{ data.pName }}</p>
            <p style="height: 27px; text-align: center;  font-weight: 900; font-size: 14px; color: #f40;">💰¥{{ data.price }}</p>
          </li>
        </ul>
      </div>
    <router-view/>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {
  activated () {
    this.initInfo()
    this.initLoad()
  },

  components: {Loading},

  data () {
    return {
      id: -1,
      datas: [],
      intent: {},
      isLoad: false,
      info: {}
    }
  },

  methods: {
    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/good/all?id=' +
                this.id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          this.datas = data.body.data.array
        })
        .catch((error) => {
          console.log(error)
          this.isLoad = false
        })
    },

    initInfo: function () {
      this.isLoad = true
      console.log(this.id)
      if (this.$route.params.data !== undefined) {
        this.id = this.$route.params.data
        this.$emit('childByValue', this.id)
      }
      this.$http.get(this.URL + 'b/info/get?id=' +
            this.id)
        .then((data) => {
          console.log(data)
          this.isLoad = false
          const response = data.body
          this.info = response.data.data
        })
        .catch(() => {
          this.isLoad = false
        })
    },
    addFavouriteShop: function () {
      console.log(this.id)
      console.log(this.URL + 'c/addFavouriteShop?cID=' + this.getCookie('userId') + '&sID=' + this.info.id)
      this.$http.get(this.URL + 'c/addFavouriteShop?cID=' + this.getCookie('userId') + '&sID=' + this.info.id)
        .then((data) => {
          this.isLoad = false
          alert('Add to FavouriteShop Succeed!')
        })
        .catch(() => {
          this.isLoad = false
          alert('Add to FavouriteShop Failed!')
        })
    },
    goGood: function (info) {
      this.$router.push({name: 'customer_good', params: {data: info}})
    }
  }

  // mounted () {
  //   this.intent = this.$route.params.data
  //   this.id = this.intent.id
  //   if (this.id === -1) {
  //     this.id = this.getCookie('userId')
  //   }
  //   console.log(this.id)
  // }
}
</script>

<style scoped>

  *{
    margin: 0px;
    padding: 0px;
    display: block;
  }

  ul{
    margin: 0px auto;
  }

  li{
    width: 240px;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    height: 322px;
    float: left;
  }

</style>
