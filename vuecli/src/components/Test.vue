<template>
  <div>
    <h1 class="test">{{msg}}</h1>
<!--配置自路由-->
    <router-view></router-view>
  </div>

</template>
<script>
  export default {
    data(){
      return {
        msg:'this is a test'
      }

    }
  }
</script>

<style scoped>
.test{
  background: red;
}

</style>
