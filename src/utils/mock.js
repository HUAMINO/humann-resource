import mockjs from 'mockjs'
// 拦截http://127.0.0.1:9528/api/sys/profile
mockjs.mock('/api/sys/profile', 'post', function() {
  return {
    success: true,
    code: 10000,
    message: '操作成功！',
    data: {
      userId: '1063705989926227968',
      mobile: '13800000002',
      username: '管理员',
      company: '传智播客',
      companyId: '1',
      roles: {
        apis: ['API-USER-DELETE'],
        menus: [
          'employees',
          'settings',
          'permissions',
          'departments',
          'approvals',
          'salarys',
          'attendances',
          'social_securitys'
        ],
        points: [
          'add-dept'
        ]
      },
      authCacheKey: null
    }
  }
})
