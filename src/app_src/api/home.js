import request from '@/app_src/utils/request'

export function fetchAlldata(data){
    return request({
        url:'Home/fetchCountList',
        method:'get',
        params:data
    })
}