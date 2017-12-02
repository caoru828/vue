<template>
  <div>
    <h1>this is Url test</h1>
    <div>
      Id:  {{$route.params.userId}}
      Name:  {{$route.params.userName}}
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {

      }
    }
  }
</script>
<style scoped>

</style>
