import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'


Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user/userInfo', 'get', require('./mock/res'));

