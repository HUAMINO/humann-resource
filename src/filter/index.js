// import Vue from 'vue'
// import moment from 'moment'
// Vue.filter('formate', (val) => {
//   return moment(val).format('YYYY-MM-DD')
// })

// 高级写法
import moment from 'moment'
export const formatdate = (val, format = 'YYYY-MM-DD') => {
  return moment(val).format(format)
}
export const formatDate = formatdate
// 枚举模块
import employeesEnum from '@/api/constant/employees'
export const formatHireType = val => {
  const f = employeesEnum.hireType.find(t => t.id === val)
  return f ? f.value : '未知'
}
