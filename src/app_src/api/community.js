import request from '@/app_src/utils/request'

export function fetchCommunityList(query){
    return request({
        url:'',
        method:'get',
        params:query,
    })
}