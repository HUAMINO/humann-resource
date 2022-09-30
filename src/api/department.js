import request from '@/utils/request'
// 获取用户基本资料
export function getList() {
  return request({
    method: 'get',
    url: '/company/department'
  })
}

// 添加内容
export function addDept(data) {
  return request({
    method: 'post',
    url: '/company/department',
    data
  })
}
// 删除内容
export function delDept(id) {
  return request({
    method: 'delete',
    url: '/company/department/' + id
  })
}

// 编辑获取的id
export function getDeptById(id) {
  return request({
    method: 'get',
    url: '/company/department/' + id
  })
}

// 编辑获功能的实现
export function UpdateDept(data) {
  return request({
    method: 'put',
    url: '/company/department/' + data.id,
    data
  })
}
export const getDepartments = getList
