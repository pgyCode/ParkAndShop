<template>
  <div style="width: 1000px; margin: 0px auto;">
    <div style="width: 1000px; min-width: 1000px; margin: 0px auto;">

      <div style="width: 1000px; height: 83px; padding: 0px 0px; margin: 0px auto;">
        <img src="../../assets/logo.png" style="float: left" height="83px" width='210px'/>
        <p style="float: left; color: rgb(60, 60, 60); line-height: 83px; font-size: 22px; font-weight: 700; margin-left: 20px">Shop</p>
      </div>
      <div style=" width: 1000px;height: 19px; padding: 6px 0px; border-bottom: 2px solid #f40">
        <p style="float: left;font-size: 13px; font-weight: 500; color: rgb(60, 60, 60);">Shop Name:&nbsp;&nbsp; {{ info.shopName }}</p>
        <p style="float:left; text-align:center; margin-left:10px;font-size: 13px; font-weight: 500; color: #fff; width: 70px; height: 19px; border-radius: 3px; background: #f40;">SHOP</p>
      </div>
      <div style="height: 120px; width: 1000px;">
        <img v-bind:src="info.url"
             style="float: left; width: 120px; height: 120px;"/>
        <p src="../../assets/logo.png" style="float:left; width: 880px; height: 120px; font-size: 30px; line-height: 120px; text-align: center; color: rgb(63,127,206);">{{ info.shopName }}</p>
      </div>
      <p style="font-size:12px; font-weight:700; color: #fff; padding: 3px 5px; height: 25px; line-height: 25px; background: rgb(63,127,206)">All Goods</p>

      <ul>
        <li v-bind:key="data" v-for="data in datas">
          <img v-bind:src="data.url" style="width: 240px; height: 240px; border: 1px solid #dfdfdf;"/>
          <p style="height: 16px; margin: 10px 3px 7px;text-align: center; vertical-align: center; line-height: 16px; font-weight: 500; font-size: 12px; color: #36c;">{{ data.name }}</p>
          <p style="height: 27px; text-align: center;  font-weight: 900; font-size: 14px; color: #f40;">💰¥{{ data.price }}</p>
        </li>
      </ul>
    </div>
    <loading v-show="isLoad"/>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
export default {
  components: {Loading},

  data () {
    return {
      datas: [],
      info: {
        url: 'http://lc-tp28gntm.cn-n1.lcfile.com/d2477ef0b23ec61b963f.jpg',
        telephone: '18392128500',
        shopName: 'Yi DianDian',
        nickname: 'YiDianDian',
        description: 'We sell drinks, various drinks, milk tea, lemonade, orange juice, etc.',
        major: 'Drink'
      }
    }
  },

  created: function () {
    this.isLoad = true
    this.$http.get('http://jsonplaceholder.typicode.com/users')
      .then((data) => {
        this.users = data.body
        this.datas = [
          {
            url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/644216784/O1CN011zz7MfIeHtCt30z_!!644216784.jpg_320x320Q90.jpg_.webp',
            name: 'Three-in-one original milk tea',
            price: '28.00'
          },
          {
            url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/644216784/O1CN011zz7N9og9LeoyEy_!!644216784.jpg_320x320Q90.jpg_.webp',
            name: 'Grass berry drink',
            price: '29.00'
          },
          {
            url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/644216784/TB29S0RoTnI8KJjSszbXXb4KFXa_!!644216784.jpg_320x320Q90.jpg_.webp',
            name: 'lemonade',
            price: '25.00'
          }
        ]
        this.isLoad = false
      })
      .catch(() => {
        this.isLoad = false
      })
  }
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
