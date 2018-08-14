<template>
  <div class="dashboard-container">
    <div class="paltform">
      <el-row type="flex">
        <el-col :span="2"></el-col>
        <el-col :span="20">
          <div class="card">
            <el-card>
              <el-col :span="4">
                <div class="logo">
                  <img src="../../../app_src/imgs/C.png" alt="">
                </div>
              </el-col>

              <el-col :span="8">
                <el-row>
                  <el-col>
                    <div class="infotitle">
                      123
                    </div>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col>
                    123
                  </el-col>
                </el-row>
              </el-col>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "dashboard",
  data() {
    return {
      CSharpPlatformInfo: {
        server: "Windows Server 2008 sp1",
        OperatingEnvironment: ".Net Core 2.0",
        Edition: [
          { name: "UIDP开发平台V3.5.1(测试版)", id: 1 },
          { name: "UIDP开发平台V3.5.2(测试版)", id: 2 },
          { name: "UIDP开发平台V3.5.3(测试版)", id: 3 },
          { name: "UIDP开发平台V3.5.4(测试版)", id: 4 },
          { name: "UIDP开发平台V3.5.5(测试版)", id: 5 }
        ]
      },
      GOPlatformInfo: {
        server: "Windows Server 2008 sp1",
        OperatingEnvironment: ".Net Core 2.0",
        Edition: [
          { name: "UIDP开发平台V3.5.1(测试版)", id: 1 },
          { name: "UIDP开发平台V3.5.2(测试版)", id: 2 },
          { name: "UIDP开发平台V3.5.3(测试版)", id: 3 },
          { name: "UIDP开发平台V3.5.4(测试版)", id: 4 },
          { name: "UIDP开发平台V3.5.5(测试版)", id: 5 }
        ]
      },
      histioryList:[
        {time:'2018-8-7',name: "UIDP开发平台V3.5.1(测试版)",id:1},
        {time:'2018-8-8',name: "UIDP开发平台V3.5.2(测试版)",id:2},
        {time:'2018-8-9',name: "UIDP开发平台V3.5.3(测试版)",id:3},
        {time:'2018-8-10',name: "UIDP开发平台V3.5.4(测试版)",id:4},
      ],
      successhistory:[
        {name:'成功案例1',URL:'https://www.baidu.com',content:'大港项目'},
      ],
      CSharpradio:null,
      GOradio:null,
      dialogTableVisible:false
    }
  },
  methods:{
    download(){
      if(this.CSharpradio!=null){
        alert("开始下载"+this.CSharpradio+"号文件，文件名为"+this.GOPlatformInfo.Edition[this.CSharpradio-1].name)
      }
      else{
        alert('请选择下载的文件')
      }
    },
    histiory(){
      this.dialogTableVisible=true;
    }
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
.platform {
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
    min-height: 250px;
  }
  .row-bg {
    padding: 1000px 0;
    background-color: #f9fafc;
  }
  .logo {
    img {
      height: 180px;
      width: 200px;
      border-radius: 4em;
      padding: 30px 40px;
    }
  }
  .waitlogo {
    img {
      width: 200px;
      height: 200px;
      padding: 30px;
    }
  }
  .sucesshistory{
    margin-left: 40px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
  .platformInfo {
    color: rgb(13, 44, 102);
    font-weight: bold;
    margin-top: 30px;
    margin-left: 30px;
  }
  .histiory {
    margin-left: 30px;
    padding: 10px;
    color: rgb(13, 44, 102);
    font-weight: bold;
    z-index:999;
  }
}
</style>
