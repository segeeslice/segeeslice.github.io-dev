import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vue-scrollto'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
