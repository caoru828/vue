<template>

  <div>
    <h1 class="test">{{msg}}</h1>
    <h1>我是ziluyou1</h1>
    <div>
      <!--接收参数时-->
      name:{{$route.params.name}}
       age:{{$route.params.age}}
        {{$route.name}}
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msg:'this is a 自路由1'
      }

    }
  }
</script>

<style scoped>
  .test{
    background: red;
  }

</style>
