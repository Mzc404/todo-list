import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    console.log('aaaaa:',this)
    Vue.prototype.$bus=this
  },
}).$mount('#app')
