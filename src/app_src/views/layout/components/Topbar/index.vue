<template>
    <div id="topbar" class="headermenu">
        <el-menu  class="el-menu-demo" mode="horizontal" :default-active="this.$route.path" router  background-color="#e8f6f7" text-color="gray">
            <el-row type="flex">
                <el-col :span="2"></el-col>
                <el-col :span="4" v-for="(item,key) in menuList" :key="key">
                    <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
                </el-col>
            </el-row>
        </el-menu>   
        <div class="copyright">
            版权所有：©大港油田集团责任有限公司信息中心
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data(){
        return{
            menuList:[
                {path:'/home',name:'首页'},
                {path:'/dashboard',name:'开发平台'},
                {path:'/severcomponent',name:'组件目录'},
                {path:'/sever',name:'服务目录'},
                {path:'/community',name:'社区'}
            ]
        }
    }
};
</script>

<style lang="scss">

.headermenu{
    .el-menu-demo{
        background:none;
    }
}
.el-menu-item {
  text-align: center;
  max-height: 50px;
  
}
.copyright {
  position: fixed;
  left: 40%;
  bottom: 0px;
  margin: 0 auto;
  margin-bottom: 5px;
  color: gray;
  font-family: "华文楷体";
  font-size: 13px;
}
</style>