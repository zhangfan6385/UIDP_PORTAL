import request from '@/app_src/utils/request'

export function fetchCommunityList(query) {
    return request({
        url: 'home/fetchCommunityPostList',
        method: 'get',
        params: query,
    })
}

export function fetchMyCommunityCollectionList(query) {
    return request({
        url: 'collection/fetchMyCommunityCollectionList',
        method: 'get',
        params: query,
    })
}