<template>
  <el-menu class="navbar-set" mode="horizontal">

    <div class="right-menu">
      <!--
      <div class="logo">
        <span>Admin</span>
        <span style="margin-left:15px;">单位：大港油田信息中心</span>
      </div>
      -->
      <!--
      <el-tooltip effect="dark" content='全屏' placement="bottom">
        <screenfull class="screenfull right-menu-item" style="vertical-align: middle;"></screenfull>
      </el-tooltip>
      -->
      <!--
      <el-tooltip effect="dark" content='换肤' placement="bottom">-->
      <!-- <theme-picker class="theme-switch right-menu-item"></theme-picker> -->
      <!--
        <theme-picker class="right-menu-item noborder" style="vertical-align: middle;"></theme-picker>
      </el-tooltip>
      -->
      <span class="login_span" @click="changeIsVisible" v-if="isVisiable">登录</span>
      <el-dropdown v-else-if="!isVisiable" class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class='user-avatar' src="../../../../app_src/imgs/avatar.png">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <!--
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          -->
          <el-dropdown-item>
            <span @click="userInfo" style="display:block;">用户信息</span>
          </el-dropdown-item>

          <el-dropdown-item divided>
            <span @click="changeProj" style="display:block;">切换项目</span>
          </el-dropdown-item>

          <el-dropdown-item divided>
            <span @click="changePassword" style="display:block;">修改密码</span>
          </el-dropdown-item>

          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";

import Screenfull from "@/app_src/components/Screenfull";
import ThemePicker from "@/app_src/components/ThemePicker";

export default {
    data() {
        return {
            isVisiable: true,
            total: "您共有n条通知",
            list: {}
        };
    },
    components: {
        Screenfull
        //ThemePicker
    },
    computed: {
        ...mapGetters(["name", "avatar"])
    },
    methods: {
        toggleSideBar() {
            this.$store.dispatch("toggleSideBar");
        },
        messageContent() {
            alert("success");
        },
        userInfo() {
            alert("userinfo");
        },
        changeProj() {
            alert("changeProj");
        },
        changePassword() {
            alert("changepassword");
        },
        getcontent() {
            alert("content");
        },
        logout() {
            this.$store.dispatch("LogOut").then(() => {
                location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
            });
        },
        changeIsVisible() {
            this.$store.state.user.dialogLoginVisible = true;
        }
    },
    computed: {
        getLoginVisible() {
            return this.$store.state.user.userId;
        }
    },
    watch: {
        getLoginVisible(userid) {
            if (userid === "") {
                this.isVisiable = true;
            } else {
                this.isVisiable = false;
            }
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.noborder {
    .el-color-picker__trigger {
        border: none;
    }
}

.theme-picker .el-color-picker__trigger {
    border: none;
}

.el-menu--horizontal {
    border-right: none;
    border-bottom: none;
}
.el-menu {
    font-family: "微软雅黑";
}
.logo {
    float: left;
    margin: 0 20px;
    span {
        margin-left: 8px;
        font-size: 15px;
        font-weight: bold;
        color: #ffffff;
    }

    img {
        vertical-align: top;
        height: 25px;
        width: 25px;
    }
}

.navbar-set {
    background-color: transparent;
    // margin-top: 2px;
    // height: 50px;
    line-height: 25px;
    border-radius: 0px !important;

    .errLog-container {
        display: inline-block;
        vertical-align: top;
    }
    .right-menu {
        float: right;
        height: 100%;
        &:focus {
            outline: none;
        }
        .message {
            margin-left: 3px;
            width: 30px;
            height: 30px;
            border-radius: 10px;
            vertical-align: middle;
        }
        .notice {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            vertical-align: middle;
        }
        .right-menu-item {
            display: inline-block;
            margin: 0 8px;
        }
        .screenfull {
            height: 20px;
        }
        .international {
            vertical-align: top;
        }
        // .theme-switch {
        //   vertical-align: 15px;
        // }
        .avatar-container {
            height: 40px;
            //margin-right: 30px;
            .avatar-wrapper {
                cursor: pointer;
                // margin-top: 5px;
                position: relative;
                .user-avatar {
                    margin-top: 7px;
                    width: 25px;
                    height: 25px;
                    border-radius: 10px;
                    vertical-align: middle;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    // top: 25px;
                    font-size: 12px;
                    color: #fff;
                }
            }
        }
    }
    .login_span {
        font-size: 14px;
        cursor: pointer;
        display: inline-block;
        margin-top: 8px;
        padding-right: 20px;
    }
}
</style>
