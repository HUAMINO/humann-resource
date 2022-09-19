import request from '@/utils/request'
// 获取用户基本资料
export function getCompanyById(id) {
  return request({
    method: 'get',
    url: '/company/' + id
  })
}

// 获取用户基本资料
export function getRoleList(params) {
  return request({
    method: 'get',
    url: '/sys/role',
    params
  })
}

// 获取用户基本资料
export function addRole(data) {
  return request({
    method: 'post',
    url: '/sys/role',
    data
  })
}

// 获取用户基本资料
export function delRole(id) {
  return request({
    method: 'delete',
    url: '/sys/role/' + id
  })
}

// 获取用户基本资料
export function getRoleById(id) {
  return request({
    method: 'get',
    url: '/sys/role/' + id
  })
}

// 获取用户基本资料
export function updateRole(data) {
  return request({
    method: 'put',
    url: '/sys/role/' + data.id,
    data
  })
}

