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

export function createCard(data) {
    return request({
        url: 'communitypost/createCommunityPostArticle',
        method: 'post',
        data
    })
}


export function getTop(query) {
    return request({
        url: 'Home/getTopPost',
        method: 'get',
        params:query
    })
}

export function getDetail(data) {
    return request({
        url: 'Home/fetchPostDetail',
        method: 'post',
        data
    })
}

export function createArticle(data) {
    return request({
        url: 'collection/createCommunityCollectionArticle',
        method: 'post',
        data
    })
}

export function delArticle(data) {
    return request({
        url: 'collection/deleteCommunityCollectionArticle',
        method: 'post',
        data
    })
}

export function commit(data) {
    return request({
        url: 'communitypost/addComment',
        method: 'post',
        data
    })
}


