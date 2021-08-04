import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// nomalize.css는 css초기화를 수행(margin,padding 등 브라우저마다 기본적으로 적용된 css를 초기화)
import 'normalize.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
