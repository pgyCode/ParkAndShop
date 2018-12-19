<template>
    <div>
      <div id="containerHeader">
        <router-link to="/customer/cart" style="float: left; padding-left: 20px">{{ welcomeMsg }}</router-link>
        <router-link to="/" style="float: left; color: grey; font-weight: 600" v-on:click="logout()">Logout</router-link>
        <router-link to="/customer/cart">Info</router-link>
        <router-link to="/customer/cart">Cart</router-link>
        <router-link to="/customer/favourite">Favorite</router-link>
        <router-link to="/customer/order">Order</router-link>
      </div>
      <div style="padding-top:80px; padding-bottom: 30px; text-align: center" v-show="datas.length <= 0">
        <img id="imgLogo" src="../../assets/logo.png"/>
      </div>
      <div id="containerSearch">
        <input id="inputSearch"/>
        <button id="btnSearch" v-on:click="onClickSearch()">Search</button>
      </div>
      <div id="containerBody">
        <ul>
          <li v-bind:key="data" v-for="data in datas" :class="{checkLi:poiMouseEnter === $index}" v-on:mouseenter="onLiEnter($event)" v-on:mouseleave="onLiLeave($event)">
            <div>
              <img style="width: 180px; height: 180px;" v-bind:src="data.portraitURL"/>
              <h4 style="color: #f40; font-weight: 600; float: left; height: 22px; line-height:17px; margin-top: 11px; padding-left: 10px">¥{{ data.price }}</h4>
              <p style="display: block;margin-top: 6px; padding: 0px 10px; color: #3d3d3d; height: 18px; font-size: 14px; font-weight: 400; clear: both">{{ data.pName }}</p>
              <p style="display: block;margin-top: 6px; padding: 0px 10px; color: #808285; height: 36px; font-size: 12px; font-weight: 400; clear: both">Description:{{ data.description }}</p>
              <div>
                <div style="float: left; padding-left: 10px">
                  <span style="display: block; margin: 2px 0px; width: 10px; height: 3px; background: coral"></span>
                  <span style="display: block; margin: 2px 0px; width: 10px; height: 3px;  background: coral"></span>
                  <span style="display: block; margin: 2px 0px; width: 10px; height: 3px;  background: coral"></span>
                </div>
                <span style="display: block; color: #888; font-size: 12px; padding-left:3px;float: left">{{ data.sName }}</span>
                <span  style="display: block; color: #888; font-size: 12px; padding-left: 10px; text-align: right; padding-right: 10px;">Remain:{{ data.count }} pieces</span>
              </div>
              <span style="clear:both; width: 100px; margin-left:10px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>
            </div>
          </li>
        </ul>
      </div>

      <Loading v-show="isLoad"/>
    </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {

  created () {
    const name = this.getCookie('username')
    if (name === '') {
      this.welcomeMsg = 'Dear,Please Login'
    } else {
      if (this.getCookie('usertype') === 0) {
        this.welcomeMsg = 'Customer:' + name
      } else if (this.getCookie('usertype') === 1) {
        this.welcomeMsg = 'Seller:' + name
      } else if (this.getCookie('usertype') === 2) {
        this.welcomeMsg = 'Manager:' + name
      }
    }
  },

  components: {Loading},
  data () {
    return {
      isLoad: false,
      currentPage: 1,
      name: 'sds',
      users: [],
      datas: [],
      poiMouseEnter: -1,
      welcomeMsg: ''
    }
  },

  methods: {

    logout () {
      this.clearCookie('username')
      this.clearCookie('usertype')
    },

    onLiEnter ($event) {
      $event.currentTarget.className = 'checkLi'
    },

    onLiLeave ($event) {
      $event.currentTarget.className = ''
    },

    onClickSearch () {
      this.isLoad = true
      this.$http.get('http://jsonplaceholder.typicode.com/users')
        // 'http://192.168.31.41:8000/api/searchproducts?pageIndex=0&pageSize=10')
        .then((data) => {
          console.log(data)
          // this.users = data.body
          this.isLoad = false
          this.datas = [
            {
              pName: 'iphone',
              price: 5000,
              portraitURL: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3197537752,2095789724&fm=27&gp=0.jpg',
              sName: 'Apple',
              count: 89,
              description: '这是个iphone',
              pID: 1,
              sID: 1
            },
            {
              pName: 'iphone',
              price: 5000,
              portraitURL: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3859421672,511986628&fm=200&gp=0.jpg',
              sName: 'Apple',
              count: 89,
              description: '这是个iphone',
              pID: 1,
              sID: 1
            },
            {
              pName: 'iphone',
              price: 5000,
              portraitURL: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1788562038,3472846301&fm=27&gp=0.jpg',
              sName: 'Apple',
              count: 89,
              description: '这是个iphone',
              pID: 1,
              sID: 1
            },
            {
              pName: 'iphone',
              price: 5000,
              portraitURL: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3969814012,482639741&fm=27&gp=0.jpg',
              sName: 'Apple',
              count: 89,
              description: '这是个iphone',
              pID: 1,
              sID: 1
            },
            {
              pName: 'iphone',
              price: 5000,
              portraitURL: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3677979722,2022079017&fm=27&gp=0.jpg',
              sName: 'Apple',
              count: 89,
              description: '这是个iphone',
              pID: 1,
              sID: 1
            }
          ]
        })
        .catch(() => {
          this.isLoad = false
        })
    }
  }
}
</script>

<style scoped>

  *{
    padding: 0px;
    margin: 0px;
    border: 0px;
    outline:none;
    cursor: pointer;
  }

  #imgLogo{
    width: 390px;
    height: 150px;
    padding-left: 10px
  }

#containerHeader {
  height: 35px;
  background: #f5f5f5;
  border-bottom: 1px solid #dfdfdf;
}

.checkLi{
  border: 1px solid #f40;
}

.title{
  font-size: 40px;
  font-family: "HanziPen TC";
}

#txtUser{
  float: right;
  font-weight: 600;
  color: #000000;
  margin-top: 6px;
  line-height: 40px;
  margin-right: 20px;
}

#containerSearch{
  margin: 0px auto;
  width: 810px;
  text-align: center;
  padding-top: 15px;
}

#inputSearch{
  width: 400px;
  height: 30px;
  padding-left: 10px;
  color: #000000;
  font-weight: 500;
  font-size: 16px;
  display: block;
  margin-left: 140px;
  float: left;
  border: 2px solid #f40;
}

#btnSearch{
  color: #000000;
  font-weight: 500;
  width: 120px;
  display:block;
  float: left;
  font-size: 16px;
  height: 34px;
  border: none;
  color: #fff;
  background: #f40;
}

#containerBody{
  width: 810px;
  min-width: 810px;
  margin: 0px auto;
}

#containerFooter{
  text-align: center;
  padding: 30px;
  background: #d4d7dc;
  font-size: 20px;
}

ul{
  list-style-type: none;
  display: inline-block;
}

li{
  display: inline-block;
  display: block;
  width: 180px;
  height: 320px;
  float: left;
  margin: 10px;
  border: 1px solid #dfdfdf;
}

.btnPage{
  margin-left: 10px;
  font-size: 17px;
  font-weight: 600;
  border: 1px solid #000;
  padding: 0px 10px;
  border-radius: 10px;
}

  a{
    display: block;
    float: right;
    margin-right: 30px;
    line-height: 35px;
    text-decoration: none;
    color: #6c6c6c;
    font-size: 13px;
  }
</style>
