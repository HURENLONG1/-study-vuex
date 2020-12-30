import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,//开启严格模式
  //仓库的数据（负责修改仓库的数据）
  state: {
    count: 0,
    goodslist:[
      {
        id: 1,
        goodsname: "iphone12"
      },
      {
        id: 2,
        goodsname: "huawei"
      }
    ]
  },
  //仓库的同步管理员（负责修改仓库的数据）
  mutations: {
    //同步方法里面接受的是当前仓库的state
    add (state, payload) {
      console.log("add", state, payload); 
      // state.count++ 
      state.count = state.count + payload.number
    },
    sub(state, payload){
      console.log("sub", state, payload);
      state.count--
      state.count = state.count - payload.number


    }
  },
  actions: {
    //异步接受的是当前仓库的实列对象，稍后要通过实列对象进行commit
    Asyncadd: function(){
      setTimeout(function(){
        store.commit("add", {number: 1})
      },2000)
    }
  },

  //完成仓库的数据的筛选,过滤处理
  getters:{
    dbCount: function(state){
      return state.count*2
    }
  }
})


