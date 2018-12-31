<template>
  <div>
    <div style="height: 48px; width: 850px; margin: 0px auto; margin-top: 10px">
      <p style="height: 48px; width: 100%; line-height: 48px; margin-left: 10px; padding-left: 10px; border-bottom: 2px solid #f40; color: #f40; font-weight: 600">All My Favourite</p>
    </div>
    <div id="containerBody">
      <ul>
        <li v-bind:key="data" v-for="data in datas" v-on:click="goGood(data.product)">
          <img v-bind:src="data.product.portraitURL" style="width: 148px; height: 148px; border: 1px solid #dfdfdf;"/>
          <p style="height: 30px; text-align: center; line-height: 30px; font-weight: 500; font-size: 12px; color: rgb(60, 60, 60);">{{ data.product.pName }}</p>
          <p style="height: 20px; text-align: center; line-height: 20px; font-weight: 900; font-size: 14px; color: #f40;">💰¥{{ data.product.price }}</p>
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
      datas: []
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
    },

    goGood: function (info) {
      this.$router.push({name: 'seller_good', params: {data: info}})
    }
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

</style>
