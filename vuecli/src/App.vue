<template>
  <div id="app">
<!--vuex不同URL间传值，不管是爸爸可以找儿子，还可以直接爷爷找孙子，其他没亲戚的，vuex就是资源池-->
<!--编程式导航-->
    <div>
      <button @click="back">上一页</button>
      <button @click="forward">下一页</button>
      <button @click="home">首页</button>

    </div>

    <!--<img src="./assets/logo.png">-->
    <router-link to="/">首页</router-link>
    <router-link to="/Test">导航1</router-link>
    <!--name是路径的name，params传参数用的，不能改变-->
    <router-link :to="{name:'test1',params:{name:'vs',age:15}}">luyou1</router-link>
    <router-link to="/Test/Test2">luyou2</router-link>
    <router-link to="/TestUrl/5/lisi">TestUrl</router-link>
    <router-link to="/home/8/wangwu">reUrl</router-link>
    <!--<router-link to="/home">redirect</router-link>-->
    <!--配置组路由得站位。router-view就是站位用的，再在index。js里配置import引入，和路径children-->


    <router-link to="/counter">vuex</router-link>

    <!--alias别名 ：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。redirect -->
    <!--：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容-->
    <router-link to="/abc">alias小名</router-link>
    <!--fade名字可以随便起-->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    back(){
//      前一页
      this.$router.go(-1);
    },
//    后一页
    forward(){
      this.$router.go(1);
    },
//    跳转到首页。push里可以任意路径
    home(){
      this.$router.push('/');
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
  .fade-enter{
    opacity : 0;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave-active{
    transition: opacity 1s;
  }
</style>
