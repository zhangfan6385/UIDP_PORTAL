<template>
    <div id="topbar">
        <el-cow>
             <el-menu  class="el-menu-demo" mode="horizontal" >
            <el-col :span="6">
                <el-menu-item index="1">开发平台</el-menu-item>
            </el-col>
            <el-col :span="6">
                <el-menu-item index="2">组件目录</el-menu-item>
            </el-col>
            <el-col :span="6">
                <el-menu-item index="3">服务目录</el-menu-item>
            </el-col>
            <el-col :span="6">
                <el-menu-item index="4">社区</el-menu-item>
            </el-col>
            </el-menu>
        </el-cow>       
        <div class="copyright">
            版权所有：©大港油田集团责任有限公司信息中心
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {};
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