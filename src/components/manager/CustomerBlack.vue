<template>
  <div>
    <ul v-bind:key="data" v-for="data in datas">
      <li>
        <div>
          <img style="float: left;width: 100px; height: 100px;" v-bind:src="data.url"/>
          <div style="float: left; padding-left: 30px">
            <p style="display: block; line-height: 100px">用户：{{ data.name + " "}} 已经被暂停账号</p>
          </div>

          <button style="float: right;">Cancel</button>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data () {
    return {
      datas: [
        {
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3197537752,2095789724&fm=27&gp=0.jpg',
          name: '007号用户',
          description: '我是007，我是一个chinese 用户'
        },
        {
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3859421672,511986628&fm=200&gp=0.jpg',
          name: '007号用户',
          description: '我是007，我是一个chinese 用户'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1788562038,3472846301&fm=27&gp=0.jpg',
          name: '007号用户',
          description: '我是007，我是一个chinese 用户'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3677979722,2022079017&fm=27&gp=0.jpg',
          name: '007号用户',
          description: '我是007，我是一个chinese 用户'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3969814012,482639741&fm=27&gp=0.jpg',
          name: '007号用户',
          description: '我是007，我是一个chinese 用户'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=412121078,3966575157&fm=27&gp=0.jpg',
          name: '007号用户',
          description: '我是007，我是一个chinese 用户'
        }
      ]
    }
  }
}
</script>

<style scoped>

  li{
    padding: 10px;
    display: block;
    clear: both;
  }

  button{
    float: right;
    font-size: 25px;
    margin-top: 25px;
    margin-left: 20px;
    border: 2px solid #acccdc;
    border-radius: 20px;
    padding: 5px 20px;
  }

</style>
