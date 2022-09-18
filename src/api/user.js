import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    method: 'POST',
    url: '/sys/login',
    data
  })
}

// 获取用户基本资料
export function getUserBaseInfo() {
  return request({
    method: 'post',
    url: '/sys/profile'
  })
}

// 获取员工基本信息
export function getEmplyeeBaseInfo(id) {
  return request({
    method: 'get',
    url: '/sys/user/' + id
  })
}
