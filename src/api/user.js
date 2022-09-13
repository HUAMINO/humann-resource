import request from '@/utils/request'

export function login(data) {
  return request({
    method: 'post',
    // url: '/sys/login',
    // 模拟服务器转态不为200的错误
    url: '/sys/login1111',
    data
  })
}

export function getInfo(token) {
  return request({
  })
}
