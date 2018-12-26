<template>
  <div style="width: 1000px; margin: 0px auto;">
    <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">All Goods</p>

    <ul>
      <li v-bind:key="data" v-for="data in datas" v-on:click="goGood(data)">
        <img v-bind:src="data.portraitURL" style="width: 240px; height: 240px; border: 1px solid #dfdfdf;"/>
        <p style="height: 16px; margin: 10px 3px 7px;text-align: center; vertical-align: center; line-height: 16px; font-weight: 500; font-size: 12px; color: #36c;">{{ data.pName }}</p>
        <p style="height: 27px; text-align: center;  font-weight: 900; font-size: 14px; color: #f40;">💰¥{{ data.price }}</p>
      </li>
    </ul>
    <router-view/>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {
  components: {Loading},

  data () {
    return {
      id: -1,
      datas: [],
      intent: {},
      isLoad: false
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

    goGood: function (info) {
      this.$router.push({name: 'seller_good', params: {data: info}})
    }
  },

  mounted () {
    if (this.$route.params.data !== undefined) {
      this.id = this.$route.params.data
      this.$emit('childByValue', this.id)
      this.initLoad()
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
