import request from '@/app_src/utils/request'

export function fetchGetHistoryList(query) {
    return request({
        url: 'software/history',
        method: 'get',
        params: query
    })
}

export function fetchDownloadFile(data) {
    return request({
        url:'',
        method:'post',
        data
    })
}

export function fetchApplyDownload(data){
    return request({
        url:'',
        method:'post',
        data
    })
}

export function FetchGetPermisstion(query){
    return request({
        url:'',
        method:'post',
        params:query
    })
}