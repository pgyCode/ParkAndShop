<template>
  <div>
    <div id="containerHeader">
      <span class="title" v-on:click="checkFrame(0)">Park&&Shop</span>
      <span class="title" v-on:click="checkFrame(1)">message</span>
      <span class="title" v-on:click="checkFrame(2)">black list</span>
      <input class="title"/>
      <button class="title" v-on:click="checkFrame(3)">Search</button>
    </div>
    <saler-main v-show="currentFrame == 0"/>
    <saler-message v-show="currentFrame == 1"/>
    <saler-black v-show="currentFrame == 2"/>
    <saler-search v-show="currentFrame == 3"/>

    <div id="containerFooter">
      <span id="copyright">@copyright group_nine 2018</span>
    </div>
  </div>
</template>

<script>
import SalerMain from '@/components/manager/SalerMain'
import SalerMessage from '@/components/manager/SalerMessage'
import SalerBlack from '@/components/manager/SalerBlack'
import SalerSearch from '@/components/manager/SalerSearch'
export default {
  components: {SalerMain, SalerMessage, SalerBlack, SalerSearch},
  data () {
    return {
      currentFrame: 0
    }
  },

  methods: {
    checkFrame: function (position) {
      this.currentFrame = position
    }
  }
}
</script>

<style scoped>

  #containerHeader{
    padding: 30px;
    background: #d4d7dc;
  }

  .title{
    margin-left: 20px;
    font-size: 35px;
    padding: 0px 20px;
    font-family: "BogleWeb";
  }

  ul{
    flex-wrap: wrap;
    list-style: none;
  }

  li{
    width: 300px;
    flex-basis: 200px;
    padding: 20px;
    border: 3px solid #acccdc;
    border-radius: 40px;
    font-weight: 600;
    font-size: 18px;
    margin-top: 30px;
  }
  #containerLeft{
    width: 100%;
    height: 500px;
    background: #000;
    position: relative;
    text-align: center;
  }

  img{
    height: 400px;
  }

  #containerFooter{
    clear: both;
    background-color: #d4d7dc;
    text-align: center;
    padding: 20px;
    color: gray;
  }
</style>
