import request from '@/app_src/utils/request'

export function fetchMessageList(query) {
    return request({
        url: 'Apply/fetchApplyRecordList',
        method: 'get',
        params: query
    })
}

export function fetchCheckInfo(data) {
    return request({
        url: 'Apply/updateApplyRecord',
        method: 'post',
        data
    })
}