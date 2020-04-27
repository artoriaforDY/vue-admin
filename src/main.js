import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Mock from '@/mock/index.js'
import axios from 'axios';
Vue.prototype.$axios = axios;
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Mock.startMock();

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://www.apidemo.com/api';
axios.defaults.headers.common['Authorization'] = Math.random().toString(30).substr(2);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function(config){
  //在发送请求之前做某事
  return config;
},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
  //对响应数据做些事
  return response;
},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
