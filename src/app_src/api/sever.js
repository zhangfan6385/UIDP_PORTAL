import request from '@/app_src/utils/request'

export function fetchSeverList(query) {
    return request({
        url: 'Home/fetchServerList/',
        method: 'get',
        params: query
    })
}


export function fetchSeverDetail(query) {
    return request({
        url: 'Home/fetchServerDetailList',
        method: 'get',
        params: query
    })
}


