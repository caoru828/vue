<template>
  <div>
    <h1 class="test">{{msg}}</h1>
  </div>

</template>
<script>
  export default {
    data(){
      return {
        msg:'页面走丢了！'
      }

    }
  }
</script>

<style scoped>
  .test{
    background: red;
  }

</style>
