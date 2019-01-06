<template>
  <div>

    <div style="clear: both; width: 866px; height: 40px; margin: 0px auto; border-bottom: 2px solid #dfdfdf">
      <router-link style="line-height: 40px; float: left; font-size: 14px; text-align: center; font-weight: 700; padding:0px 20px"
                   @click.native="onCheckTab(0)"
                   class="basicTab"
                   :class="{checkTab:poiTab == 0}" to="/manager/customer/search">Search</router-link>
      <router-link style="line-height: 40px; float: left; font-size: 14px; text-align: center; font-weight: 700; padding:0px 20px"
                   @click.native="onCheckTab(1)"
                   class="basicTab"
                   :class="{checkTab:poiTab == 1}" to="/manager/customer/blacklist">BlackList</router-link>
    </div>
    <router-view/>

  </div>
</template>

<script>
export default {
  created () {
  },
  component: {},
  data () {
    return {
      currentFrame: 1,
      shops: [],
      poiTab: 0
    }
  },
  methods: {
    checkFrame: function (position) {
      this.currentFrame = position
    },
    onCheckTab: function (poi) {
      this.poiTab = poi
    },
    fetchDate: function () {
      this.poiTab = 0
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': function (to, from) {
      if (to.path === '/manager/customer') {
        this.poiTab = 0
      }
    }
  }
}
</script>

<style scoped>

  *{
    display: block;
    margin: 0px;
    padding: 0px;
    text-decoration: none;
  }

  .title{
    border-bottom: 5px solid #003aff;

  }

  #containerTop{
  }

  #containerRight{
    clear: both;
    width: 1000px;
  }
  img{
    height: 400px;
  }

  .basicTab{
    color: #808285;
  }

  .checkTab{
    color: #f40;
    border-bottom: 2px solid #f40;
  }
</style>
