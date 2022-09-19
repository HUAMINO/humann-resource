// import Vue from 'vue'
// import PageTool from '@/components/PageTool/index.vue'
// Vue.component('PageTool', PageTool)

// 高级写法: 以插件的方式来写
import PageTool from '@/components/PageTool/index.vue'
export default {
  install(Vue) {
    Vue.component('PageTool', PageTool)
  }
}
