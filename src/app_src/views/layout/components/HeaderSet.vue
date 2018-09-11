<template>
    <el-menu class="navbar-set" mode="horizontal">

        <div class="right-menu">

            <span class="login_span" @click="changeIsVisible" v-if="isVisiable">登录</span>

            <el-badge :value="total" v-if="!isVisiable" >
                <img class='user-avatar' src="../../../../app_src/imgs/message2.png" @click="getMsg">
            </el-badge>

            <el-dropdown v-if="!isVisiable" class="avatar-container right-menu-item" trigger="click">
                <div class="avatar-wrapper">
                    <img class='user-avatar' src="../../../../app_src/imgs/avatar.png">
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu slot="dropdown">

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
import { fetchCheckInfo } from "@/app_src/api/message";
import Screenfull from "@/app_src/components/Screenfull";
import ThemePicker from "@/app_src/components/ThemePicker";

export default {
    data() {
        return {
            isVisiable: true,
            total:0,
            list: {},
            userID: ""
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
            this.$store.state.user.dialogUserInfoVisible = true;
        },
        changeProj() {
            this.$store.state.user.dialogProjectInfoVisible = true;
        },
        changePassword() {
            this.$store.state.user.dialogPasswordVisible = true;
        },
        getcontent() {
            alert("content");
        },
        logout(){
            window.sessionStorage.clear();
            this.$store.dispatch("LogOut").then(() => {
                location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
            });
        },
        changeIsVisible() {
            this.$store.state.user.dialogLoginVisible = true;
        },
        getMsg() {
            this.$store.state.user.messageDialogVisible=true;
            // this.userID = this.$store.state.user.userID;
            // fetchCheckInfo(this.userID).then(response => {
            //     if (response.data.code === 2000) {
            //         this.$notify({
            //             position: "bottom-right",
            //             title: "成功",
            //             message: response.data.message,
            //             type: "success",
            //             duration: 2000
            //         });
            //     } else {
            //         this.$notify({
            //             position: "bottom-right",
            //             title: "失败",
            //             message: response.data.message,
            //             type: "error",
            //             duration: 2000
            //         });
            //     }
            // });
        },
        getMesCount() {
            this.total=parseInt(this.getMstCount);
            console.log(this.total)
        },
        getVisable(){
            if(this.getLoginVisible!=null){
                this.isVisiable=false
            }else{
                this.isVisiable=true;
            }
        }
    },
    computed: {
        getLoginVisible() {
            return this.$store.state.user.userID;
        },
        getMstCount(){
            return this.$store.state.user.noReadCount
        }
    },
    watch: {
        getLoginVisible(data) {
            if(this.getLoginVisible!=null||data!=null){
                this.isVisiable=false
            }else{
                this.isVisiable=true;
            }
        },
        getMstCount(data){
            this.total=parseInt(data);
        }
    },
    mounted() {
        this.getMesCount();
        this.getVisable();
    },
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
    margin-top: 8px;
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
        .user-avatar {
            margin-top: 0px;
            width: 25px;
            height: 25px;
            border-radius: 10px;
            vertical-align: middle;
        }
        .user-avatar:hover{
            cursor: pointer;
        }
        .avatar-container {
            height: 40px;
            //margin-right: 30px;
            .avatar-wrapper {
                cursor: pointer;
                // margin-top: 5px;
                position: relative;

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
