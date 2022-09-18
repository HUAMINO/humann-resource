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
