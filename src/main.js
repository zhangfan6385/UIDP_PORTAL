import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/app_src/styles/index.scss' // 全局 css

import App from './app_src/App'
import router from './app_src/router'
import store from './app_src/store'

import '@/app_src/icons' // 图标
//  import '@/app_src/permission' // 权限控制


//富文本编辑器
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
