<template>
  <div class="app-wrapper" :class="classObj">
    <div class="header">
      <el-col :span="10">
        <div class="logo">
          <img src="../../../app_src/imgs/logo.png">
          <!-- <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"> -->
          <span>大港油田软件工厂开发平台资源库</span>
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
        <login-dialog></login-dialog>
          <app-main></app-main>
      </div>
        
      </div>
    </el-col>

  </div>
</template>

<script>
import { AppMain, HeaderSet, Topbar, LoginDialog } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "layout",
  components: {
    //Navbar,
    //Sidebar,
    //TagsView,
    AppMain,
    Topbar,
    LoginDialog,
    HeaderSet
  },
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
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.headerset {
  margin-top: 5px;
}
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
  height: 60px;
  background:#2196F3;
  margin: 0 auto;
  line-height: 55px; //设置line-height与父级元素的height相等
  overflow: hidden; //防止内容超出容器或者产生自动换行

  .logo {
    float: left;
    margin: 3px 10px;
    span {
      margin-left: 8px;
      font-size: 18px;
      font-weight: bold;
      color: #ffffff;
    }

    img {
      vertical-align: top;
      margin-top: 13px;
      height: 30px;
      width: 30px;
    }
  }
}
</style>
