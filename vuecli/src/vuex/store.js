import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


//vuex资源池，传值方便

//状态  记时
//state  访问状态对象
const state = {
  count:1
};



//不能直接改变count值，必须得这样改变
const mutations = {
  add(state,num){
    state.count += num;
  },
  reduce(state){
    state.count--;
  }
};

const getters = {
  count1(state){
    return state.count +=100;
  }
}
//es6属性名对应属性值放进去
export default new Vuex.Store({
  state,
  mutations,
  getters
});

