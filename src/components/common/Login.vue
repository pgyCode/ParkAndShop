<template>
    <div>
      <div>
        <div id="containerHeader" style="height: 80px;">
          <img id="imgLogo" src="../../assets/logo.png"/>
        </div>
        <div id="containerBody">
          <div id="box">
            <div id="innerBox">
              <h4 style="margin-top: 9px; padding-bottom: 8px">Login By Passwrod</h4>
              <select v-model="poiLogin" style="margin-top: 9px; height: 40px; border: 1px solid rgb(221, 221, 221); width: 300px;font-weight: 500;color: grey;font-size: 14px; outline: none;">
                <option value="0">Customer</option>
                <option value="1">Seller</option>
                <option value="2">Manager</option>
              </select>

              <div style="width: 300px; height: 42px; margin-top: 20px; border: 1px solid rgb(221, 221, 221);">
                <span style="background:rgb(221, 221, 221);display: block; float: left; width: 20px; height: 24px; padding: 9px 10px;">👤</span>
                <input placeholder="username" v-model="username"/>
              </div>
              <div style="clear: both;width: 300px; height: 42px; margin-top: 20px;border: 1px solid rgb(221, 221, 221);">
                <span style="background:rgb(221, 221, 221); width: 20px;float: left; height: 24px; line-height: 24px; padding: 9px 10px;">🔒</span>
                <input placeholder="password" v-model="password"/>
              </div>
              <button style="margin-top: 20px; width: 300px; height: 42px; border: none; background: #f40; border-radius: 5px; font-weight: 700; font-size: 16px; color: #fff;"
                      v-on:click="onClickLogin">Login</button>
              <router-link to="/register" style="color: #6c6c6c; text-decoration: none; font-size: 12px; font-weight: 600; float: right; margin-top: 20px">Register</router-link>
            </div>
          </div>
          <!--<div class="dowebok">-->
            <!--<div class="logo"></div>-->
            <!--<div class="form-item">-->
              <!--<input id="username" v-model="username" type="text" autocomplete="off" placeholder="UserName">-->
            <!--</div>-->
            <!--<div class="form-item">-->
              <!--<input id="password" v-model="password" type="password" autocomplete="off" placeholder="PassWord">-->
            <!--</div>-->
            <!--<div class="form-item"><button id="submit" v-on:click="onClickLogin">Login</button></div>-->
            <!--<div class="reg-bar">-->
              <!--<a class="reg" href="javascript:">Register</a>-->
              <!--<a class="forget" href="javascript:">Forgot PassWord</a>-->
            <!--</div>-->
          <!--</div>-->
        </div>
      </div>
      <div id="containerFooter">
        <span id="copyright">©copyright group_nine 2018</span>
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
      name: 'sds',
      isLoad: false,
      username: '',
      password: '',
      poiLogin: '0'
    }
  },

  methods: {
    onClickLogin: function () {
      this.isLoad = true
      if (this.poiLogin === '0') {
        this.$http.get('http://jsonplaceholder.typicode.com/users')
        // ('http://192.168.43.16:8000/api/login?username=' + this.username + '&password=' + this.password)
          .then((data) => {
            // this.setCookie('userName', data.body.data.username, 7)
            // this.setCookie('userId', data.body.data.userID, 7)
            // this.setCookie('usertype', '1', 7)
            this.setCookie('userName', 'James', 7)
            this.setCookie('userId', '3', 7)
            this.setCookie('userType', '0', 7)
            this.$router.push('/')
            this.isLoad = false
          })
          .catch(() => {
            this.isLoad = false
          })
      } else if (this.poiLogin === '1') {
        this.$http.get('http://jsonplaceholder.typicode.com/users')
        // ('http://192.168.43.16:8000/api/login?username=' + this.username + '&password=' + this.password)
          .then((data) => {
            // this.setCookie('userName', data.body.data.username, 7)
            // this.setCookie('userId', data.body.data.userID, 7)
            // this.setCookie('usertype', '1', 7)
            this.setCookie('userName', 'YiDianDian', 7)
            this.setCookie('userId', '3', 7)
            this.setCookie('userType', '1', 7)
            this.$router.push('/')
            this.isLoad = false
          })
          .catch(() => {
            this.isLoad = false
          })
      } else if (this.poiLogin === '2') {
        this.$http.get('http://jsonplaceholder.typicode.com/users')
        // ('http://192.168.43.16:8000/api/login?username=' + this.username + '&password=' + this.password)
          .then((data) => {
            // this.setCookie('userName', data.body.data.username, 7)
            // this.setCookie('userId', data.body.data.userID, 7)
            // this.setCookie('usertype', '1', 7)
            this.setCookie('userName', 'Admin', 7)
            this.setCookie('userId', '3', 7)
            this.setCookie('userType', '2', 7)
            this.$router.push('/')
            this.isLoad = false
          })
          .catch(() => {
            this.isLoad = false
          })
      }
    }
  }
}
</script>

<style scoped>

#containerBody{
  height: 600px;
  -webkit-background-size: 100%;
  background-size: 100%;
  background-image: url("../../assets/show.jpeg");
}

#imgLogo{
  width: 200px;
  height: 80px;
}
#containerFooter{
  border-top: 2px solid #000;
  background: #f5f5f5;
  clear: both;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

#copyright{
  font-size: 12px;
  font-weight: 400;
  color: #666;
  text-align: center;
}

input{
  display: block;
  width: 230px;
  height: 40px;
  border: none;
  float: left;
  font-weight: 500;
  outline: none;
  color: grey;
  padding-left: 10px;
  font-size: 14px;
  background: rgba(0,0,0,0);
}

#box{
  width: 810px;
  height: 600px;
  margin: 0px auto;
}

#innerBox{
  float: right;
  width: 300px;
  height: 310px;
  padding: 25px;
  margin-top: 120px;
  opacity: 80%;
  background: rgba(255,255,255,0.9);
}

* { margin: 0; padding: 0; display: block}
</style>
