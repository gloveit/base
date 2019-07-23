import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import VueTour from 'vue-tour'
import svuex from './svuex'

import 'vue-tour/dist/vue-tour.css'
// import _ from 'lodash';
import '@/assets/css/basecss/base.css'
import "@/assets/less/base.less"
Vue.config.productionTip = false
import loadTime from './utils/loadTime'


import animate from 'animate.css'
import { setDomain } from '../client/javascript/vue-api-client.js'
setDomain('http://rap2api.taobao.org/app/mock/183494/swagger/api')

//离线时启动workbox服务
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/sw.js').then(registration => {
//         console.log('SW registered: ', registration);
//       }).catch(registrationError => {
//         console.log('SW registration failed: ', registrationError);
//       });
//     });
// }


Vue.use(Antd)
Vue.use(VueTour)
Vue.prototype.animate = animate
//处理未捕获异常信息
// Vue.config.errorHandler = function (err, vm, info) {
//   console.log("异常信息:"+err);
//   console.log("异常信息实例对象"+vm);
//   console.log("特定错误信息"+info);
// }

// const sendPonit = (data)=>{
  //异步发送埋点数据
  // console.log(data)
// }

// 全局定义指令
// Vue.directive("buriedPoint",{
//   bind:function(el,binding,vnode){
//     el.addEventListener('click',()=>{
//       sendPonit({kye:binding.value.key,type:binding.value.type})
//     })
//   }
// })

//路由守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path !== from.path){
//     // 一些业务逻辑
//     sendPage(from.path);
//     next()
//   }
// })
const mstore = new svuex.Mstore({
  state:{
    account:1,
    address:"goldcard"
  },
  mutations:{
    addC(state,data){
      state.account +=data; 
    }
  }
})
Vue.prototype.$mstore = mstore;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
