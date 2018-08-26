import request from '@/app_src/utils/request'

export function fetchSeverComponentList(query) {
    return request({
        url: '/apply/fetchComponentList',
        method: 'get',
        params: query
    })
}


export function fetchSeverComponentDetail(query) {
    return request({
        url: '/apply/fetchComponentDetailList',
        method: 'get',
        params: query
    })
}

