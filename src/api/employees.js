import request from '@/utils/request'
// 获取用户基本资料
export function getEmployeeSimple() {
  return request({
    method: 'get',
    url: '/sys/user/simple'
  })
}
