<template>
  <div id="app">
    <mt-header fixed title="大智障">
      <div slot="left">
        <mt-button icon="back" @click="goHome">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goHome(){
      this.$router.go(-1)
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
