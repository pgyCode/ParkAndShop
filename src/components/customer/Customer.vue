<template>
    <div>
      <div id="containerHeader">
        <span class="title">Park&&Shop</span>
        <router-link to="/customer/owner"><span id="txtUser">welcome: {{ name }}</span></router-link>
      </div>
      <div style="padding: 100px; text-align: center" v-show="datas.length <= 0">
        <span class="title">Park&&Shop</span>
      </div>
      <div id="containerSearch">
        <input id="inputSearch"/>
        <button id="btnSearch" v-on:click="onClickSearch()">Search</button>
      </div>
      <div id="containerBody">
        <ul>
          <li v-bind:key="data" v-for="data in datas">
            <div style="text-align: center; width: 200px">
              <img style="width: 100px; height: 100px; " v-bind:src="data.url"/>
              <div>
                <h3 style="display: block; margin: 20px;">{{ data.name }}</h3>
                <p style="display: block; margin: 20px;">商品介绍：{{ data.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="containerFooter" v-show="datas.length > 0">
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
      users: [],
      datas: []
    }
  },

  methods: {
    onClickSearch () {
      this.isLoad = true
      this.$http.get('http://jsonplaceholder.typicode.com/users')
        .then((data) => {
          this.users = data.body
          this.datas = [
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
  padding: 10px;
  background: #d4d7dc;
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
  text-align: center;
}

li{
  display: inline-block;
  padding: 30px;
  float: left;
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
</style>
