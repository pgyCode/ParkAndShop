<template>
  <div>
    <div style="height: 48px; width: 850px; margin: 0px auto; margin-top: 10px">
      <p style="height: 48px; width: 100%; line-height: 48px; margin-left: 10px; padding-left: 10px; border-bottom: 2px solid #f40; color: #f40; font-weight: 600">All My Favourite</p>
    </div>
    <div id="containerBody">
      <ul>
        <li v-bind:key="data" v-for="data in datas">
          <img v-bind:src="data.url" style="width: 148px; height: 148px; border: 1px solid #dfdfdf;"/>
          <p style="height: 30px; text-align: center; line-height: 30px; font-weight: 500; font-size: 12px; color: rgb(60, 60, 60);">{{ data.name }}</p>
          <p style="height: 20px; text-align: center; line-height: 20px; font-weight: 900; font-size: 14px; color: #f40;">💰¥{{ data.price }}</p>
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
        this.datas = [
          {
            url: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/TB1oAS6qzDpK1RjSZFrXXa78VXa.jpg_240x240Q90.jpg',
            name: 'HuaShuo ROG PHONE',
            price: '5999.00'
          },
          {
            url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/TB15ZaPjSzqK1RjSZFpXXakSXXa.jpg_240x240Q90.jpg',
            name: 'Razer Phone 2',
            price: '5990.99'
          },
          {
            url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/TB10zbvIFXXXXbKXFXXXXXXXXXX.jpg_240x240Q90.jpg',
            name: 'Nokia Phone 1020',
            price: '768.00'
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
    padding: 0px;
    margin: 0px;
    display: block;
  }

  #containerBody{
    width: 850px;
    margin: 0px auto;
    clear: both;
  }

  li{
    float: left;
    width: 148px;
    height: 218px;
    margin: 10px;
  }

</style>
