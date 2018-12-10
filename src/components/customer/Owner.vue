<template>
  <div>
    <div id="containerHeader">
      <span id="txtUser">welcome: {{ name }}</span>
      <span id="title" style="clear: both; position: relative;">Owner Center</span>
    </div>
    <div id="containerLeft">
      <div style="width: 300px; margin:150px auto; height: 300px;">
        <ul>
          <li><router-link to="/customer/order">Order History</router-link></li>
          <li><router-link to="/customer/favourite">Favorite</router-link></li>
          <li><router-link to="/customer/cart">Cart</router-link></li>
          <li>Owner Info</li>
        </ul>
      </div>
    </div>
    <div id="containerRight">
      <img src="https://rescdn.qqmail.com/zh_CN/htmledition/images/webp/tg-mj1e9c5d.jpg"/>
    </div>

    <Loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {
  name: 'Owner',
  components: {Loading},
  data () {
    return {
      isLoad: false,
      currentPage: 1,
      name: 'sds',
      users: []
    }
  },

  methods: {
    onClickSearch () {
      this.isLoad = true
      this.$http.get('http://jsonplaceholder.typicode.com/users')
        .then((data) => {
          this.users = data.body
          this.isLoad = false
        })
        .catch(() => {
          this.isLoad = false
        })
    }
  }
}
</script>

<style scoped>

  #containerHeader{
    padding: 20px;
    background: #d4d7dc;
    text-align: center;
  }

  #txtUser{
    font-weight: 600;
    color: #000000;
    margin-top: 6px;
    line-height: 40px;
    margin-right: 20px;
    float: left;
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
    float: left;
    width: 55%;
    height: 700px;
    position: relative;
    text-align: center;
  }

  #containerRight{
    padding: 150px 0px;
    float: left;
    width: 45%;
  }

  img{
    height: 400px;
  }

  #title{
    font-size: 40px;
    font-family: "HanziPen TC";
  }
</style>
