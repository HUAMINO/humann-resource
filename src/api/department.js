import request from '@/utils/request'
// 获取用户基本资料
export function getList() {
  return request({
    method: 'get',
    url: '/company/department'
  })
}
