// import Vue from 'vue'
// import PageTool from '@/components/PageTool/index.vue'
// Vue.component('PageTool', PageTool)

// 高级写法: 以插件的方式来写
import PageTool from '@/components/PageTool/index.vue'
import UploadExcel from '@/components/UploadExcel/index'
import UploadImage from '@/components/UploadImage'
import Screenfull from './Screenfull/index.vue'
import ThemePicker from './ThemePicker/index.vue'
import LangSelect from './LangSelect/index.vue'
export default {
  install(Vue) {
    Vue.component('PageTool', PageTool)
    Vue.component('UploadExcel', UploadExcel)
    Vue.component('PageTools', PageTool)
    Vue.component('UploadImage', UploadImage)
    Vue.component('Screenfull', Screenfull)
    Vue.component('ThemePicker', ThemePicker)
    Vue.component('LangSelect', LangSelect)
  }
}
