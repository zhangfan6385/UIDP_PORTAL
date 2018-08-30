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

export function fetchMyCommunityUserInfoList(query) {
    return request({
        url: 'User/CommunityUserInfo',
        method: 'get',
        params: query,
    })
}

export function fetchMyCommunityList(query) {
    return request({
        url: 'communitypost/fetchCommunityPostList',
        method: 'get',
        params: query,
    })
}

export function createCard(data){
    return request({
        url:'communitypost/createCommunityPostArticle',
        method:'post',
        data
    })
}