import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false



new Vue({ 
  router,
  store,//把vue实列对象和我们的store产生关联，以后再vue组件里面，我们可以对实列对象this.$stroe获取当前仓库
  render: h => h(App)
}).$mount('#app')
