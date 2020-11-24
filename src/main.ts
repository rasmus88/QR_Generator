import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')

// Plugins 
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)