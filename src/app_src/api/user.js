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