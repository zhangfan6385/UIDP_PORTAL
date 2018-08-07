<template>
  <div class="dashboard-container">
    <div class="platform">
        <el-row :gutter="20" type="flex">
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <img src="../../../app_src/imgs/GO.png"> 
            </div>
            </el-col>         
        </el-row>

        <el-row :gutter="20">
          <el-col :span="24">
            <div class="grid-content bg-purple">
            </div>
            </el-col>          
        </el-row>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.platform{
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 350px;
  }
  .row-bg {
    padding: 1000px 0;
    background-color: #f9fafc;
  }
}
</style>
