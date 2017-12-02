<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-link to="/">首页</router-link>
    <router-link to="/Test">导航1</router-link>
    <!--name是路径的name，params传参数用的，不能改变-->
    <router-link :to="{name:'test1',params:{name:'vs',age:15}}">luyou1</router-link>
    <router-link to="/Test/Test2">luyou2</router-link>
    <router-link to="/TestUrl/5/lisi">TestUrl</router-link>
    <!--配置组路由得站位。router-view就是站位用的，再在index。js里配置import引入，和路径children-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
