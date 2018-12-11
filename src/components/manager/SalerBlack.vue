<template>
  <div>
    <ul v-bind:key="data" v-for="data in datas">
      <li>
        <div>
          <img style="float: left;width: 200px; height: 100px;" src="https://tpc.googlesyndication.com/simgad/7681908306886901514?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkGbUsdIe5vHEeqM_srhN_kumb1uQ"/>
          <div style="float: left; padding-left: 30px">
            <p style="display: block; line-height: 100px">店铺：{{ data.name + " "}} 已经被暂停业务</p>
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
          name: '海鲜',
          description: '我们是一个卖海鲜的店铺'
        },
        {
          name: '海鲜',
          description: '我们是一个卖海鲜的店铺'
        },
        {
          name: '海鲜',
          description: '我们是一个卖海鲜的店铺'
        },
        {
          name: '海鲜',
          description: '我们是一个卖海鲜的店铺'
        },
        {
          name: '海鲜',
          description: '我们是一个卖海鲜的店铺'
        },
        {
          name: '海鲜',
          description: '我们是一个卖海鲜的店铺'
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
