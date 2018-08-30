import request from '@/app_src/utils/request'

export function fetchApply(data){
    return request({
        url:'Apply/createApply',
        method:'post',
        data,
    })
}