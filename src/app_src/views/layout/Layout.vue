<template>
    <div class="app-wrapper">
        <div class="header">
            <el-row type="flex">
                <el-col :span="2"></el-col>
                <el-col :span="10">
                    <div class="logo">
                        <img src="../../../app_src/imgs/logo.png">
                        <!-- <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"> -->
                    </div>
                    <div style="margin-top:10px">
                    <span class="title">大港油田软件工厂</span>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="headerset">
                        <header-set></header-set>
                    </div>
                </el-col>
                <el-col :span="2"></el-col>
            </el-row>
        </div>
        <el-col :span="24">

            <div class="main-container">
                <div>
                    <topbar></topbar>
                </div>
                <div>
                    <user-password-manager></user-password-manager>
                    <!-- <apply-dialog></apply-dialog> -->
                    <login-dialog></login-dialog>
                    <message-dialog></message-dialog>
                    <user-info></user-info>
                    <project-info></project-info>
                    <app-main></app-main>
                </div>
                <div class="copyright">
                    ©大港油田信息中心&nbsp;&nbsp;版权所有
                    <!-- 版权所有：©大港油田集团责任有限公司信息中心 -->
                </div>
                <br>
            </div>
        </el-col>
    </div>
</template>

<script>
import {
    AppMain,
    HeaderSet,
    Topbar,
    LoginDialog,
    //ApplyDialog,
    MessageDialog
} from "./components";
import userPasswordManager from "@/app_src/views/layout/components/LoginDialog/userPasswordManager";
import userInfo from "@/app_src/views/layout/components/LoginDialog/userInfo";
import projectInfo from "@/app_src/views/layout/components/LoginDialog/projectInfo";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
    name: "layout",
    data() {
        return {};
    },
    components: {
        //Navbar,
        //Sidebar,
        //TagsView,
        MessageDialog,
        AppMain,
        Topbar,
        LoginDialog,
        HeaderSet,
        userPasswordManager,
        projectInfo,
        userInfo
        //ApplyDialog
    },
    mixins: [ResizeMixin],
    computed: {
        sidebar() {
            return this.$store.state.app.sidebar;
        },
        device() {
            return this.$store.state.app.device;
        }
    },
    methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/app_src/styles/mixin.scss";
.main-container {
    background: #e3e6e8;
}
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}
// .headerset {
//   vertical-align: middle;
// }
.drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
}
.header {
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    //position: fixed;
    z-index: 1999;
    min-width: 100%;
    height: 80px;//43px;
    background: #dce4e9;
    margin: 0 auto;
    padding-top: 15px;
    //vertical-align: middle;
   // line-height: 42px;//42px; //设置line-height与父级元素的height相等
    overflow: hidden; //防止内容超出容器或者产生自动换行

    .logo {
        float: left;
        margin-left: 30px;
        //margin: 4px 10px;
        img {
            //vertical-align: center;
            //  margin-top: 15px;
            height: 50px;
            width: 50px;
        }
    }
    .title {
        margin-left: 5px;
        font-size: 25px;
        letter-spacing:1px;
        font-weight: bold;
        color: #0a0a0a;
    }
}
.copyright {
    width: 180px;
    margin: 10px auto;
    // left: 40%;
    // margin-top:10px;
    // margin-bottom: 10px;
    bottom: 3px;
    // margin-left: 42%;
    //margin-bottom: 5px;
    color: gray;
    font-family: "微软雅黑";
    font-size: 13px;
}
</style>
