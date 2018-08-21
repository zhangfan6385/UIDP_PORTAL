<template>
  <div class="app-wrapper" :class="classObj">
    <div class="header">
      <el-col :span="10">
        <div class="logo">
          <img src="../../../app_src/imgs/logo.png">
          <!-- <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"> -->
          <span>大港油田软件工厂</span>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="headerset">
          <header-set></header-set>
        </div>
      </el-col>
    </div>
    <el-col :span="24">

      <div class="main-container">
        <div>
          <topbar></topbar>
        </div>
        <div>
        <user-password-manager></user-password-manager>
          <apply-dialog></apply-dialog>
          <login-dialog></login-dialog>
          <user-info></user-info>
          <project-info></project-info>
          <app-main></app-main>
        </div>

      </div>
    </el-col>
    <div class="copyright">
      版权所有：©大港油田集团责任有限公司信息中心
      <!-- 版权所有：©大港油田集团责任有限公司信息中心 -->
    </div>
  </div>
</template>

<script>
import { AppMain, HeaderSet, Topbar, LoginDialog,ApplyDialog } from "./components";
import userPasswordManager from '@/app_src/views/layout/components/LoginDialog/userPasswordManager'
import userInfo from '@/app_src/views/layout/components/LoginDialog/userInfo'
import projectInfo from '@/app_src/views/layout/components/LoginDialog/projectInfo'
import ResizeMixin from "./mixin/ResizeHandler";

export default {
    name: "layout",
    data(){
        return{
        }
    },
    components: {
        //Navbar,
        //Sidebar,
        //TagsView,
        AppMain,
        Topbar,
        LoginDialog,
        HeaderSet,
        userPasswordManager,
        projectInfo,
        userInfo,       ApplyDialog    },
    mixins: [ResizeMixin],
    computed: {
        sidebar() {
            return this.$store.state.app.sidebar;
        },
        device() {
            return this.$store.state.app.device;
        },
        classObj() {
            return {
                hideSidebar: !this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
                mobile: this.device === "mobile"
            };
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
//   //margin-top: 5px;
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
    position: fixed;
    z-index: 1999;
    min-width: 100%;
    height: 40px;
    background: #dce4e9;
    margin: 0 auto;
    line-height: 30px; //设置line-height与父级元素的height相等
    overflow: hidden; //防止内容超出容器或者产生自动换行

    .logo {
        float: left;
        margin: 4px 10px;
        span {
            margin-left: 8px;
            font-size: 15px;
            font-weight: bold;
            color: #0a0a0a;
        }

        img {
            vertical-align: top;
            margin-top: 2px;
            height: 27px;
            width: 27px;
        }
    }
}
.copyright {
    position: fixed;
    left: 40%;
    bottom: 0px;
    padding-top: 20px;
    margin: 0 auto;
    //margin-bottom: 5px;
    color: gray;
    font-family: "微软雅黑";
    font-size: 13px;
}
</style>
