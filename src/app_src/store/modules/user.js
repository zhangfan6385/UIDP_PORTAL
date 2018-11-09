import { loginByUsername, getUserInfo } from '@/app_src/api/login'
import { getToken, setToken, removeToken } from '@/app_src/utils/auth'
import { fetchMessageList } from '@/app_src/api/message'
import { Promise } from 'core-js';

const user = {
  state: {
    //userInfo
    userID: null,
    roleLv:'',
    SCORE:'',
    usertype: null,
    status: '',
    code: '',
    token: getToken(),
    userName: '',
    loginUserCode: '', // 登陆账号,
    userinfo: [],
    //projInfo
    currentProjID: null,
    currentProjName: '',
    projList: [],
    //Msg Info
    msgInfo: '',
    noReadCount: '',
    total: '',
    //global params
    dashboardindex: '',//开发平台跳转索引
    platformIndex: '',//历史版本索引
    dialogLoginVisible: false, //判断登录框弹出zp
    dialogPasswordVisible: false, //判断修改密码框弹出zp
    dialogUserInfoVisible: false, //用户信息弹出zp
    dialogProjectInfoVisible: false, //切换项目框弹出zp 
    applyDialogVisible: false, //申请界面弹出框
    messageDialogVisible: false,// 
  },

  mutations: {
    SET_DIALOGLOGINVISIBLE: (state, code) => {
      state.dialogLoginVisible = code
    },
    SET_USER_ID: (state, userID) => {
      state.userID = userID
    },
    SET_USER_NAME: (state, userName) => {
      state.name = userName
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_DASHBOARD_INDEX: (state, dashboardindex) => {
      state.dashboardindex = dashboardindex
    },
    SET_PROJLIST: (state, projList) => {
      state.projList = projList
    },
    SET_CURRENTPROJID: (state, currentProjID) => {
      state.currentProjID = currentProjID
    },
    SET_CURRENTPROJNAME: (state, currentProjName) => {
      state.currentProjName = currentProjName
    },
    SET_LOGIN_USER_CODE: (state, loginUserCode) => {
      state.loginUserCode = loginUserCode
    },
    SET_MSGINFO: (state, msgInfo) => {
      state.msgInfo = msgInfo
    },
    SET_NOREADCOUNT: (state, noReadCount) => {
      state.noReadCount = noReadCount
    },
    SET_TOTAL: (state, total) => {
      state.total = total
    },
    SET_USER_INFO: (state, userinfo) => {
      state.userinfo = userinfo
    },
    SET_USER_TYPE: (state, usertype) => {
      state.usertype = usertype
    },
    SET_ROLE_LV:(state,roleLv)=>{
      state.roleLv=roleLv
    },
    SET_CURRENTPROJ_ID:(state,currentProjID)=>{
      state.currentProjID=currentProjID
    },
    SET_CURRENTPROJNAME:(state,currentProjName)=>{
      state.currentProjName=currentProjName
    },
    SET_DIALOGPROJECTINFOVISIBLE:(state,dialogProjectInfoVisible)=>{
      state.dialogProjectInfoVisible=dialogProjectInfoVisible
    },
    SET_SCORE:(state,SCORE)=>{
      state.SCORE=SCORE
    },
    SET_PLATFORMINDEX:(state,platformIndex)=>{
      state.platformIndex=platformIndex
    }
  },

  actions: {
    setUserInfo({ commit }, userinfo) {
      commit('SET_USER_INFO', userinfo)
    },
    setUserId({ commit }, userID) {
      commit('SET_USER_ID', userID)
    },
    setUserName({ commit }, userName) {
      commit('SET_USER_NAME', userName)
    },
    setDashboardIndex({ commit }, dashboardindex) {
      commit('SET_DASHBOARD_INDEX', dashboardindex)
    },
    setProjList({ commit }, projList) {
      commit('SET_PROJLIST', projList)
    },
    setdialogLoginVisible({ commit }, dialogLoginVisible) {
      commit('SET_DIALOGLOGINVISIBLE', dialogLoginVisible)
    },
    setMsgInfo({ commit }, msginfo) {
      commit('SET_MSGINFO', msginfo)
    },
    setCurrentProjID({commit},currentProjID){
      commit('SET_CURRENTPROJ_ID',currentProjID)
    },
    setCurrentProjName({commit},currentProjName){
      commit('SET_CURRENTPROJNAME',currentProjName)
    },
    setdialogProjectInfoVisible({commit},dialogProjectInfoVisible){
      commit('SET_DIALOGPROJECTINFOVISIBLE',dialogProjectInfoVisible)
    },
    setScore({commit},SCORE){
      commit('SET_SCORE',SCORE)
    },
    setToken({commit},token){
      commit('SET_TOKEN',token)
    },
    setPlatformIndex({commit},platformIndex){
      commit('SET_PLATFORMINDEX',platformIndex)
    },



    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        commit('SET_LOGIN_USER_CODE', username)// 保存用户登陆账号
        loginByUsername(userInfo.username, userInfo.password).then(response => {
          if (response.data.code === 2000) {
            const data = response.data
            if (userInfo.username === 'admin') {
              commit('SET_USER_INFO', data.userInfo)
              commit('SET_USER_ID', '超级管理员')
              commit('SET_ROLE_LV',response.data.roleLevel);
            }
            else {
              commit('SET_USER_INFO', data.userInfo)
              //commit('SET_USER_TYPE', data.userInfo[0].AUTHENTICATION_TYPE)
              commit('SET_PROJLIST', data.projectInfo)
              commit('SET_USER_ID', data.userInfo[0].USER_ID)
              commit('SET_SCORE',data.userInfo[0].SCORE)
              commit('SET_ROLE_LV',response.data.roleLevel)
            }
            commit('SET_TOKEN',response.data.token);
            //console.log(response.data.token)
            // commit('SET_USER_NAME', data.userName)
            // commit('SET_CODE', data.userCode)
            // commit('SET_TOKEN', data.token)
            //this.$store.dispatch('GetUserMsg')
            resolve(response)
          } else {
            reject(response.data.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取审核消息
    GetUserMsg({ commit }, mesinfo) {
      return new Promise((resolve, reject) => {
        fetchMessageList(mesinfo).then(response => {
          if (response.data.code === 2000) {
            const data = response.data
            commit('SET_MSGINFO', data.items)
            commit('SET_NOREADCOUNT', data.noReadCount)
            commit('SET_TOTAL', data.total)
            //this.$store.dispatch('GetUserMsg')
            resolve(response)
          } else {
            reject(response.data.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token, state.userId).then(response => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data
          // if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          //   commit('SET_ROLES', data.roles)
          // } else {
          //   reject('getInfo: roles must be a non-null array !')
          // }

          commit('SET_USER_NAME', data.userName)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          commit('SET_CODE', data.userCode)
          commit('SET_TOKEN', data.token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        commit('SET_TOKEN', null)
        //commit('SET_ROLES', [])
        removeToken()
        resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', null)
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    }
  }
}

export default user
