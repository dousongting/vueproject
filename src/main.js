// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入mint-ui
// // 引入全部组件
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)


//按需引入
import { Button, Cell,Swipe, SwipeItem ,Header,Search } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Cell.name, Cell)
Vue.component(Search.name, Search);


//引入mui
import Mui from './lib/mui/js/mui.js'
import './lib/mui/css/mui.css'
Vue.use(Mui)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
