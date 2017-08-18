// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Bus from './components/Bus'
import TTable from './components/nav2/TTable'
import TTableItem from './components/nav2/TTableItem'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('bus',Bus)
Vue.component('t-table',TTable)
Vue.component('t-table-item',TTableItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  name: 'ttt',
  template: '<App/>',
  components: { App }
})
