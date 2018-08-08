<template>
  <div class="dashboard-container">
    <div class="platform">
        <el-row :gutter="20" type="flex">
          <el-col :span="24">
            <div class="grid-content bg-purple">
              
                <el-col :span="4">
                    <div class="logo">
                      <img src="../../../app_src/imgs/C.png"> 
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="platformInfo">
                      <h3>平台需求</h3> 
                      <p>服务器: {{CSharpPlatformInfo.server}}</p>
                      <p>运行环境：{{CSharpPlatformInfo.OperatingEnvironment}}</p>
                      <el-button @click="download" type="primary" round >平台下载</el-button>
                    </div>
                </el-col>

                <el-col :span="4">
                    <div class="waitlogo">
                       <img src="../../../app_src/imgs/time.png" title="历史版本" @click="histiory">
                    </div>
                </el-col>

                <el-col :span="8">
                  <div  class="histiory" v-for="(item,key) in CSharpPlatformInfo.Edition" :key=key>
                      <el-radio v-model="CSharpradio" :label="item.id">{{item.name}}</el-radio>
                  </div>
                </el-col>
                
            </div>
            </el-col>       
        </el-row>

        <el-row :gutter="20">
          <el-col :span="24">
            <div class="grid-content bg-purple">
                <el-col :span="4">
                    <div class="logo">
                      <img src="../../../app_src/imgs/GO.png" > 
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="platformInfo">
                      <h3>平台需求</h3> 
                      <p>服务器: {{GOPlatformInfo.server}}</p>
                      <p>运行环境：{{GOPlatformInfo.OperatingEnvironment}}</p>
                      <el-button type="primary" round @click="download">平台下载</el-button>
                    </div>
                </el-col>

                <el-col :span="4">
                    <div class="waitlogo">
                       <img src="../../../app_src/imgs/time.png" title="历史版本">
                    </div>
                </el-col>

                <el-col :span="8">
                  <div  class="histiory" v-for="(item,key) in GOPlatformInfo.Edition" :key=key>
                      <el-radio v-model="GOradio" :label="item.id">{{item.name}}</el-radio>
                  </div>
                </el-col>        
            </div>
            </el-col>          
        </el-row>
    </div>
    <el-dialog title="历史版本" :visible.sync="dialogTableVisible">
      <el-table :data="histioryList">
        <el-table-column property="time" label="日期" width="150" align="center"></el-table-column>
        <el-table-column property="name" label="版本" width="300" align="center"></el-table-column>
        <el-table-column  label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="download(scope.row.id)" type="primary" size="mini">点击下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
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
  .platformInfo {
    color: rgb(13, 44, 102);
    font-weight: bold;
    margin-top: 30px;
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
