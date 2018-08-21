import request from '@/app_src/utils/request'
export function updatePasswordData(oldpassword,newpassword){//修改密码
        const data = {
          oldpassword,
          newpassword
        }
        return request({
          url: '/user/updatePasswordData',
          method: 'post',
          data
        })
  }
  export function getUserInfo(userId){//获取用户信息
    const data = {
      userId
    }
    return request({
      url: '/user/getUserInfo',
      method: 'post',
      data
    })
}
export function getProjectInfo(userId){//获取项目信息
  const data = {
    userId
  }
  return request({
    url: '/user/getProjectInfo',
    method: 'post',
    data
  })
}