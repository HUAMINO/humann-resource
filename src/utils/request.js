import store from '@/store/index'
import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
const request = axios.create({
  // baseURL: 'http://ihrm-java.itheima.net/api'
  baseURL: '/api'
})
// 设置请求拦截器
request.interceptors.request.use(config => {
// Do something before request is sent
  if (store.state.user.token) {
    config.headers.Authorization = 'Bearer ' + store.state.user.token
  }
  return config
}, error => {
// Do something with request error
  return Promise.reject(error)
})

// 设置响应拦截器
request.interceptors.response.use(response => {
// Do something before response is sent
  console.log('成功', response)
  const res = response
  if (res.data.success) {
    return res.data.data
  } else {
    Message.error(res.data.message)
    throw new Error(res.data.message)
  }
  // return response
}, error => {
// Do something with response error

  // 如果报错401
  if (error.response && error.response.state === '401') {
    // 退出登录 并且清除用户信息
    store.dispatch('user/logout')
    // 返回登录页面 并且阻止下面代码执行
    return router.push('/login')
  }
  Message.error('服务器异常,请稍后再试')
  return Promise.reject(error)
})
export default request
