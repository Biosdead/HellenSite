import Vue from 'vue'
import App from './App.vue'
import navbar from './components/navbar.vue'

Vue.config.productionTip = false

// Require the main Sass manifest file
require('../node_modules/bulma/css/bulma.css');


new Vue({
  render: h => h(navbar)
}).$mount('#navbar')

new Vue({
  render: h => h(App)
}).$mount('#app')


