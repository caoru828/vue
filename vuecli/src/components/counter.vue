<template>
  <div>
    <h1>计数器{{$store.state.count}}</h1>
    <!--<h1>{{count}}</h1>-->
    <!--<h1>{{count1}}</h1>-->
    <h1>{{count}}</h1>

    <button @click="$store.commit('add')">add1</button>
    <button @click="$store.commit('reduce')">sub1</button>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {}
    },
    store,
// 1.   通过computed 的计算属性直接赋值
    computed:
//      {
//      count(){
//        return this.$store.state.count;
//      }
// 2.   通过mapState的对象来赋值
//      mapState({
//        count1:state=>state.count
//      })
//    3. 通过mapstate的数组来赋值
//    这个取到的是一堆的集合，检索出count
    mapState(['count'])
//  }
  }
</script>
