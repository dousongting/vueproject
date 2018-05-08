<template>
  <div class="hello">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../assets/images/1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/2.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/3.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/4.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <mt-cell title="你好哈哈哈哈"></mt-cell>
    <mt-cell title="其实是hhh" value="今天风很大"></mt-cell>
    <mt-button type="default">默认</mt-button>
    <mt-button type="primary">基本</mt-button>
    <mt-button type="danger">危险</mt-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  height: 300px;
  background-color: pink;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 300px;
    }
}
}

</style>
