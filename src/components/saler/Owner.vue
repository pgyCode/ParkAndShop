<template>
  <div>
    <div id="containerHeader">
      <span id="txtUser">welcome: {{ name }}</span>
      <span id="title" style="clear: both; position: relative;">Owner Center</span>
    </div>
    <h3 style="padding: 30px">我的信息</h3>
    <dl>
      <dt>Nickname:</dt>
      <dd>008Saler</dd>
      <dt>Telephone:</dt>
      <dd>1888888888</dd>
      <dt>Email:</dt>
      <dd>xxxx@163.com</dd>
      <dt>Address:</dt>
      <dd>xian shaanXi china</dd>
      <dt>ShopName:</dt>
      <dd>super market goo</dd>
    </dl>
    <h3 style="padding: 30px; clear: both">我的订单</h3>
    <ul v-bind:key="data" v-for="data in datas">
      <li>
        <div>
          <img style="float: left;width: 100px; height: 100px;" v-bind:src="data.url"/>
          <div style="float: left; padding-left: 30px">
            <h3 style="display: block; margin: 20px;">{{ data.name }}</h3>
            <p style="display: block; margin: 20px;">商品介绍：{{ data.description }}</p>
          </div>

        </div>
      </li>
    </ul>
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
      name: '008号商家',
      users: [],
      datas: [
        {
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3197537752,2095789724&fm=27&gp=0.jpg',
          name: '商品code111',
          description: 'i am only a good, i can do nothing ,so so  sooso'
        },
        {
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3859421672,511986628&fm=200&gp=0.jpg',
          name: '商品code111',
          description: 'i am only a good, i can do nothing ,so so  sooso'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1788562038,3472846301&fm=27&gp=0.jpg',
          name: '商品code111',
          description: 'i am only a good, i can do nothing ,so so  sooso'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3677979722,2022079017&fm=27&gp=0.jpg',
          name: '商品code111',
          description: 'i am only a good, i can do nothing ,so so  sooso'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3969814012,482639741&fm=27&gp=0.jpg',
          name: '商品code111',
          description: 'i am only a good, i can do nothing ,so so  sooso'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=412121078,3966575157&fm=27&gp=0.jpg',
          name: '商品code111',
          description: 'i am only a good, i can do nothing ,so so  sooso'
        }
      ]
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

  li{
    padding: 10px 10px 10px 50px;
    display: block;
    clear: both;
  }

  img{
    height: 400px;
  }

  #title{
    font-size: 40px;
    font-family: "HanziPen TC";
  }

  dd{
    float: left;
    display: inline-block;
    margin-left: 20px;
    font-size: 15px;
    line-height: 35px;
    font-weight: 500;
    color: grey;
  }

  dt{
    clear: both;
    float: left;
    display: inline-block;
    margin-left: 60px;
    font-size: 18px;
    font-weight: 600;
    color: #000;
  }
</style>
