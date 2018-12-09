import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

/*import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyBfE3-lXF9e1KKa6byyX2nRREgODx6otVI'
})*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
