import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
new Vue({
  router, // 挂载
  render: h => h(App),
}).$mount('#app')  // 将Vue实例挂载到 #app所对应的视图上 和 el:"#app"的效果是一样的
