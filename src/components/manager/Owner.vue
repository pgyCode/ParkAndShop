<template>
  <div>
    <div id="containerHeader">
      <span id="title">{{ name }}</span>
    </div>

    <div id="containerOpreator">

      <div class="input">
        <span>UserName:&nbsp;&nbsp;</span><input v-model="username"/>
      </div>

      <div class="input">
        <span>Telephone:&nbsp;&nbsp;</span><input/>
      </div>

      <div class="input">
        <span>Address:&nbsp;&nbsp;</span><input/>
      </div>

      <div id="opreator" v-on:click="onClickLogin()">Save</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '007用户'
    }
  }
}
</script>

<style scoped>

  #containerHeader {
    padding: 30px;
    background: #d4d7dc;
    text-align: center;
  }

  #title{
    font-size: 40px;
    font-family: "HanziPen TC";
  }

  #containerOpreator{
    position: center;
    margin: 80px auto;
    width: 600px;
    height: 300px;
    border: 2px solid #acccdc;
    border-radius: 25px;
    text-align: center;
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

  .input span{
    display: block;
    clear: both;
    float: left;
    width: 100px;
    margin-left: 50px;
  }

  input{
    border: 1px solid #000;
    width: 400px;
    height: 30px;
    float: left;
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
