<template>
  <div>
    <div style="height: 48px; width: 866px; margin: 0px auto;">
      <p style="height: 48px; width: 100%; line-height: 48px; border-bottom: 2px solid #f40; color: #f40; font-weight: 600">All Cart</p>
    </div>

    <div style="height: 42px; width: 866px; margin: 20px auto;background: rgb(241, 241, 241); border: 1px solid #dfdfdf;">
      <p style="float: left; width: 330px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Good</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Shop</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Price</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Number</p>
      <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Sum</p>
      <p style="float: right; width: 80px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 42px">Operate</p>
    </div>

    <div id="containerBody">
      <ul>
        <li v-bind:key="order" v-for="order in orders">
          <div style="padding: 15px; clear: both;">
            <img style="float: left; width: 80px; height: 80px; padding-right: 15px" v-bind:src="order.portraitURL"/>
            <div style="width: 220px; float: left; height: 80px;">
              <p style=" color: rgb(60, 60, 60); font-size: 13px; font-weight: 500; line-height: 25px; height: 55px; ">{{ order.pName }}</p>
              <span style="clear:both; width: 100px; text-align: center; display: block; color: #fff; background: #f40; font-size: 12px;padding: 1px 3px; margin-top: 3px">Authenticated</span>
            </div>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">{{ order.sName }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">¥{{ order.price }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 400; line-height: 80px">{{ a = 1 }}</p>
            <p style="float: left; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 80px">¥{{ order.price }}</p>
            <button style="float: right; width: 100px;text-align: center; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; height: 26px; width: 50px; border: 1px solid rgb(220, 220, 220); border-radius: 5px; margin-top: 27px; cursor: pointer">Buy</button>
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
  components: {Loading},
  data: function () {
    return {
      isLoad: false,
      currentPage: 1,
      name: 'sds',
      users: [],
      datas: [],
      orders: []
    }
  },

  methods: {

  },

  created: function () {
    this.isLoad = true
    this.$http.get('http://47.106.11.120:8080/DiGou/api/c/lookupCart?cID=' + this.getCookie('userId'))
      .then((data) => {
        console.log(data)
        this.isLoad = false
        const response = data.body
        if (response.code === 101) {
          this.orders = response.data.pArray
        } else {
          alert('Connect Failed')
        }
      })
      .catch(() => {
        this.isLoad = false
        alert('Connect Failed')
      })
    /*
    this.$http.get('http://jsonplaceholder.typicode.com/users')
      .then((data) => {
        this.orders = [
          {
            url: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/TB1oAS6qzDpK1RjSZFrXXa78VXa.jpg_240x240Q90.jpg',
            goodName: 'HuaShuo ROG PHONE',
            shopName: 'HuaShuo',
            price: '5999.00'
          },
          {
            url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/TB15ZaPjSzqK1RjSZFpXXakSXXa.jpg_240x240Q90.jpg',
            goodName: 'Razer Phone 2',
            shopName: 'Razer',
            price: '5990.99'
          },
          {
            url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/TB10zbvIFXXXXbKXFXXXXXXXXXX.jpg_240x240Q90.jpg',
            goodName: 'Nokia Phone 1020',
            shopName: 'Nokia',
            price: '768.00'
          }
        ]
        this.isLoad = false
      })
      .catch(() => {
        this.isLoad = false
      }) */
  }
}
</script>

<style scoped>

  #containerBody{
    width: 100%;
    clear: both;
  }

  ul{
    list-style-type: none;
  }

  li{
    width: 866px;
    height: 110px;
    display: block;
    margin-top: 10px;
    border: 1px solid #dfdfdf;
    margin-left: auto;
    margin-right: auto;
  }

</style>
