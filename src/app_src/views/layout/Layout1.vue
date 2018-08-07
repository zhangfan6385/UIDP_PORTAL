<template>
    <div id="layout">
        <el-container>
            <el-header>
                <el-col :span="10">
                    <div class="logo">
                    <img src="../../../app_src/imgs/logo.png">
                    <!-- <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"> -->
                    <span>大港油田软件研发平台</span>
                    </div>
                </el-col>
                <el-col :span="14">
                    <header-set></header-set>
                </el-col>
            </el-header>
            <el-main>
                    <el-col :span="24">
                        <div class="main-container">
                            <topbar></topbar>
                            <app-main></app-main>
                        </div>
                    </el-col>
            </el-main>
        </el-container>
    </div>
</template>



<script>
import { AppMain,HeaderSet,Topbar } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'layout',
  components: {
    AppMain,
    Topbar,
    HeaderSet
  },
  mixins: [ResizeMixin],
  computed: {

  },
  methods: {
    
  }
}
</script>


<style lang="scss">
.el-header{
    background-color: aqua
}
.logo {
  float: left;
  margin: 0 20px;
  span {
    padding: 20px,0,0,0,0;
    margin-left: 12px;
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
</style>
