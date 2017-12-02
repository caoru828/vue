import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//状态  记时
const state = {
  count:1
};

//不能直接改变count值，必须得这样改变
const mutation = {
  add(state){
    state.count++;
  },
  reduce(state){
    state.count--;
  }
};
//es6属性名对应属性值放进去
export default new Vue.Store({
  state,
  mutations
});

