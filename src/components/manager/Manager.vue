<template>
  <div>
    <div id="containerHeader">
      <span id="title">Park&&Shop</span>
    </div>
    <div id="containerLeft">
      <div style="width: 300px; margin:0px auto; height: 300px;">
        <ul>
          <li><router-link to="/manager/saler">Manager Saler</router-link></li>
          <li><router-link to="/manager/customer">Manager Customer</router-link></li>
          <li><router-link to="/manager/cart">Manager Ads</router-link></li>
          <li><router-link to="/manager/owner">Manager Center</router-link></li>
        </ul>
      </div>
    </div>

    <div id="containerFooter">
      <span id="copyright">@copyright group_nine 2018</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      isLoad: false,
      currentPage: 1,
      name: 'sds',
      users: []
    }
  },

  methods: {
  }
}
</script>

<style scoped>

  #containerHeader{
    padding: 30px;
    background: #d4d7dc;
  }

  #title{
    font-size: 40px;
    font-family: "HanziPen TC";
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
    height: 500px;
    position: relative;
    text-align: center;
    padding: 50px;
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
