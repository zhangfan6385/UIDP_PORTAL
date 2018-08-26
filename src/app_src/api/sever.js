import request from '@/app_src/utils/request'

export function fetchSeverList(query) {
    return request({
        url: '/apply/fetchComponentList/',
        method: 'get',
        params: query
    })
}


export function fetchSeverDetail(query) {
    return request({
        url: '/apply/fetchServerDetailList',
        method: 'get',
        params: query
    })
}


