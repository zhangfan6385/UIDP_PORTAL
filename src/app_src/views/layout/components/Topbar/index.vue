<template>
    <div id="topbar">
             <el-menu  class="el-menu-demo" mode="horizontal" :default-active="this.$route.path" router>
            <el-col :span="6" v-for="(item,key) in menuList" :key="key">
                <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
            </el-col>
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
.el-menu-item {
  text-align: center;
  
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