<template>
  <div>
    <div id="containerHeader">
      <span id="txtUser">welcome: {{ name }}</span>
      <span id="title" style="clear: both; position: relative;">Owner Cart</span>
    </div>

    <div id="containerOpreator">
      <div id="btnTabLogin">
        <span>Good</span>
      </div>
      <div id="btnTabRegist">
        <span>Shop</span>
      </div>
    </div>

    <div id="containerBody">
      <ul>
        <li v-bind:key="user" v-for="user in users">
          <h2>{{ user.name }}</h2>
        </li>
      </ul>
    </div>
    <div id="containerFooter" v-show="users.length > 0">
      <span>第{{ currentPage }}页</span>
      <button class="btnPage" v-on:click="onClickSearch()">上一页</button>
      <button class="btnPage" v-on:click="onClickSearch()">下一页</button>
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
      users: []
    }
  },

  methods: {

  },

  created: function () {
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
</script>

<style scoped>

  #containerHeader{
    padding: 10px;
    background: #d4d7dc;
    text-align: center;
  }

  #title{
    font-size: 40px;
    font-family: "HanziPen TC";
  }

  #txtUser{
    float: left;
    font-weight: 600;
    color: #000000;
    margin-top: 6px;
    line-height: 40px;
    margin-right: 20px;
  }

  #containerSearch{
    text-align: center;
    padding: 30px;
  }

  #inputSearch{
    width: 400px;
    height: 40px;
    padding-left: 10px;
    color: #000000;
    font-weight: 600;
    font-size: 20px;
    border-radius: 25px;
    border: 2px solid #d4d7dc;
  }

  #btnSearch{
    margin-left: 20px;
    color: #000000;
    font-weight: 600;
    width: 120px;
    font-size: 20px;
    border-radius: 20px;
    height: 50px;
    background: #dfdfdf;
    border: 2px solid #808285;
  }

  #containerBody{
    width: 100%;
    clear: both;
  }

  #containerFooter{
    text-align: center;
    padding: 30px;
    background: #d4d7dc;
    font-size: 20px;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }

  li{
    flex-grow: 1;
    flex-basis: 200px;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }

  .btnPage{
    margin-left: 10px;
    font-size: 17px;
    font-weight: 600;
    border: 1px solid #000;
    padding: 0px 10px;
    border-radius: 10px;
  }

  #containerOpreator{
    position: center;
    width: 400px;
    border-radius: 25px;
    text-align: center;
  }

  #btnTabLogin{
    font-size: large;
    width: 50%;
    border-radius: 22px;
    background-color: #acccdc;
    padding: 15px 0px;
    color: #000;
    font-weight: 600;
    float: left;
  }

  #btnTabRegist{
    font-size: large;
    width: 50%;
    border-radius: 22px;
    background-color: #acccdc;
    padding: 15px 0px;
    color: #000;
    font-weight: 600;
    float: left;
  }
</style>
