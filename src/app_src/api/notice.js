import request from '@/app_src/utils/request'

export function fetchNoticeList(query){
    return request({
        url:'',
        method:'get',
        params:query
    })
}