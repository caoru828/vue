<template>
  <div>
    <h1>计数器{{$store.state.count}}</h1>
    <h1>{{count}}</h1>
    <button @click="$store.commit('add')">add1</button>
    <button @click="$store.commit('reduce')">sub1</button>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  export default {
    data(){
      return {

      }
    },
    store,
//    通过computed 的计算属性直接赋值
    computed:{
      count(){
        return this.$store.state.count;
      }
    }
  }
</script>
