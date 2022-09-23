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

/** *
 *
 * 保存员工的基本信息
 * **/
export function saveUserDetailById(data) {
  return request({
    url: `/sys/user/${data.id}`,
    method: 'put',
    data
  })
}
/** *
 *  读取用户详情的基础信息
 * **/
export function getPersonalDetail(id) {
  return request({
    url: `/employees/${id}/personalInfo`
  })
}

/** *
 *  更新用户详情的基础信息
 * **/
export function updatePersonal(data) {
  return request({
    url: `/employees/${data.userId}/personalInfo`,
    method: 'put',
    data
  })
}

