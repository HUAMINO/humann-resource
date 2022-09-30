import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
Vue.use(VueI18n)
// 为 Vue 的根实例设置语言环境信息
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import en from './en'
import zh from './zh'

const i18n = new VueI18n({
  locale: Cookies.get('lang') || 'zh',
  messages: {
    en: {
      title: 'this is a title',
      ...enLocale,
      ...en
    },
    zh: {
      title: '这是一个标题',
      ...zhLocale,
      ...zh
    }
  }
})

export default i18n
