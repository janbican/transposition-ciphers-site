import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import Utils from '@/mixins/Utils'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/assets/styles/main.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.mixin(Utils)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
