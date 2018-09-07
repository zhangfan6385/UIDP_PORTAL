<template>
    <div id="topbar" class="headermenu">
        <el-menu  class="el-menu-demo" mode="horizontal" :default-active="this.$route.path" active-text-color="white" router  text-color="white">
            <el-row type="flex">
                <el-col :span="4"></el-col>
                <el-col :span="3" v-for="(item,key) in menuList" :key="key">
                    <el-menu-item :index="item.path" >{{item.name}}</el-menu-item>
                </el-col>
            </el-row>
        </el-menu>   
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      menuList: [
        { path: "/home", name: "首页" },
        { path: "/dashboard", name: "开发平台" },
        { path: "/severcomponent", name: "组件目录" },
        { path: "/sever", name: "服务目录" },
        { path: "/community", name: "开发社区" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.headermenu {
  .el-menu-demo {
    min-height: 56px;//56px;
  }
}
.el-menu{
  background: #409EFF;
  font-family: "微软雅黑";
}
.el-menu-item {
  font-size: 18px;
  height:53;//55
  text-align: center;
  &:link{
    border-bottom:3.5px solid #409EFF !important;
  }
    //  &:visited{
    //     border-bottom: 3.5px solid #eefaf3 !important;
    // }
  &:hover{
     border-bottom: 3.5px solid #eefaf3 !important;
  }
  &:active{
    border-bottom: 3.5px solid #eefaf3 !important;
  }
  background:#409EFF!important;
}
.is-active{
    border-bottom: 3.5px solid #eefaf3 !important;
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