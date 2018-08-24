import { loginByUsername, getUserInfo } from '@/app_src/api/login'
import { getToken, setToken, removeToken } from '@/app_src/utils/auth'
import { fetchMessageList } from '@/app_src/api/message'
import { Promise } from 'core-js';

const user = {
  state: {
    //userInfo
    userID: null,
    status: '',
    code: '',
    token: getToken(),
    userName: '',
    loginUserCode: '', // 登陆账号,
    //projInfo
    currentProjID: '',
    currentProjName: '',
    projList: [
      {projID:'1',projName:'12432'}
    ],
    //Msg Info
    msgInfo: '',
    //global params
    dashboardindex: '',
    platformIndex: '',
    dialogLoginVisible: false, //判断登录框弹出zp
    dialogPasswordVisible: false, //判断修改密码框弹出zp
    dialogUserInfoVisible: false, //用户信息弹出zp
    dialogProjectInfoVisible: false, //切换项目框弹出zp 
    applyDialogVisible: false, //申请界面弹出框
    messageDialogVisible: false,// 
    // avatar: '',
    // userSex: '',
    // roleLevel: ''
    // introduction: '',
    // roles: [],
    // orgList: null, // 单位集合
    // userList: null, // 用户集合
    // setting: {
    //   articlePlatform: []
    // },
    // sysCode: '1',
    // sysName: '大港软件工厂',
    // departCode: '',
    // departName: '',
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
    }
    // SET_INTRODUCTION: (state, introduction) => {
    //   state.introduction = introduction
    // },
    // SET_SETTING: (state, setting) => {
    //   state.setting = setting
    // },
    // SET_STATUS: (state, status) => {
    //   state.status = status
    // },
    // SET_NAME: (state, name) => {
    //   state.name = name
    // },
    // SET_AVATAR: (state, avatar) => {
    //   state.avatar = avatar
    // },
    // SET_ROLES: (state, roles) => {
    //   state.roles = roles
    // },
    // SET_ORG_LIST: (state, orgList) => {
    //   state.orgList = orgList
    // },
    // SET_USER_LIST: (state, userList) => {
    //   state.userList = userList
    // },
    // SET_SYS_CODE: (state, sysCode) => {
    //   state.sysCode = sysCode
    // },
    // SET_SYS_NAME: (state, sysName) => {
    //   state.sysName = sysName
    // },
    // SET_DEPART_CODE: (state, departCode) => {
    //   state.departCode = departCode
    // },
    // SET_USER_ID: (state, userId) => {
    //   state.userId = userId
    // },
    // SET_DEPART_NAME: (state, departName) => {
    //   state.departName = departName
    // },
    // SET_USER_SEX: (state, userSex) => {
    //   state.userSex = userSex
    // },
    // SET_ROLE_LEVEL: (state, roleLevel) => {
    //   state.roleLevel = roleLevel
    // },

  },

  actions: {
    // setSysCode({ commit }, sysCode) {
    //   commit('SET_SYS_CODE', sysCode)
    // },
    // setSysName({ commit }, sysName) {
    //   commit('SET_SYS_NAME', sysName)
    // },
    // setDepartCode({ commit }, departCode) {
    //   commit('SET_DEPART_CODE', departCode)
    // },
    // setDepartName({ commit }, departName) {
    //   commit('SET_DEPART_NAME', departName)
    // },
    // setRoleLevel({ commit }, roleLevel) {
    //   commit('SET_ROLE_LEVEL', roleLevel)
    // },
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



    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        commit('SET_LOGIN_USER_CODE', username)// 保存用户登陆账号
        loginByUsername(userInfo.username, userInfo.password).then(response => {
          if (response.data.code === 2000) {
            const data = response.data
            commit('SET_USER_NAME', data.userName)
            commit('SET_CODE', data.userCode)
            commit('SET_TOKEN', data.token)
            commit('SET_PROJLIST', data.projList)
            setToken(response.data.token)
            this.$store.dispatch('GetUserMsg')
            resolve(response)
          } else {
            reject(response.data.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取用户消息
    GetUserMsg({ commit, state }) {
      return new Promise((resolve, reject) => {
        fetchMessageList(state.userID, state.token).then(response => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data
          commit(' SET_MSGINFO', data)
          resolve(response)
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
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
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
        commit('SET_TOKEN', '')
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
