<template>
    <div>
      <div id="containerBody">
        <div id="containerHeader">
          <span id="title">Park&&Shop</span>
        </div>
        <div id="containerLeft">
          <img src="https://rescdn.qqmail.com/zh_CN/htmledition/images/webp/tg-mj1e9c5d.jpg"/>
        </div>
        <div id="containerRight">
          <div id="containerOpreator">
            <div id="btnTabLogin">
              <span>Login</span>
            </div>
            <div id="btnTabRegist">
              <span>Regist</span>
            </div>

            <div class="input">
              <span>UserName:&nbsp;&nbsp;</span><input/>
            </div>

            <div class="input">
              <span>PassWord:&nbsp;&nbsp;</span><input/>
            </div>

            <div id="opreator" v-on:click="onClickLogin()">Login</div>
          </div>
        </div>
      </div>
      <div id="containerFooter">
        <span id="copyright">@copyright group_nine 2018</span>
      </div>

      <Loading v-show="isLoad"/>
    </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {
  name: 'Login',
  components: {Loading},
  data () {
    return {
      name: 'sds',
      isLoad: false
    }
  },

  methods: {
    onClickLogin: function () {
      this.isLoad = true
      this.$http.get('http://jsonplaceholder.typicode.com/users')
        .then((data) => {
          this.$router.push('/customer/main')
        })
        .catch(() => {
          this.isLoad = false
        })
    }
  }
}
</script>

<style scoped>

#containerLeft{
  float: left;
  width: 55%;
  height: 600px;
  position: relative;
}

#containerRight{
  float: left;
  width: 45%;
  height: 600px;
}

#containerHeader{
  padding: 30px;
  background: #d4d7dc;
}

#title{
  font-size: 40px;
  font-family: "HanziPen TC";
}

#containerFooter{
  clear: both;
  background-color: #d4d7dc;
  text-align: center;
  padding: 20px;
  color: gray;
}

img{
  position: relative;
  top: 100px;
  width: 100%;
  height: 400px;
}

#containerOpreator{
  position: center;
  margin: 150px auto;
  width: 400px;
  height: 300px;
  border: 2px solid #acccdc;
  border-radius: 25px;
  text-align: center;
}

#btnTabLogin{
  font-size: large;
  width: 50%;
  border-radius: 22px 0px 0px 0px;
  background-color: #acccdc;
  padding: 20px 0px;
  color: #000;
  font-weight: 600;
  float: left;
}

#btnTabRegist{
  font-size: large;
  width: 50%;
  border-radius: 0px 22px 0px 0px;
  background-color: #acccdc;
  padding: 20px 0px;
  color: #000;
  font-weight: 600;
  float: left;
}

.input{
  clear: both;
  top: 30px;
  position: relative;
  margin-top: 10px;
  height: 50px;
  color: #000000;
  font-weight: 600;
  font-size: 17px;
}

input{
  border: 1px solid #000;
  width: 200px;
  height: 30px;
  padding-left: 5px;
  border-radius: 5px;
  font-weight: 500;
  color: grey;
  font-size: 15px;
}

#opreator{
  margin: 50px auto;
  background: #d4d7dc;
  padding: 5px;
  color: grey;
  border-radius: 22px;
  border: 2px solid #d4d7dc;
  width: 200px;
  font-weight: 600;
}

</style>
