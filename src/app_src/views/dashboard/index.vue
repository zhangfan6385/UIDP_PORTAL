<template>
  <div id="dashboard">
    <div class="paltform">
      <!--C#平台-->
      <el-row type="flex">
        <el-col :span="2"></el-col>
        <el-col :span="20">
          <div class="card">
            <el-card>
              <el-row>
                <!--左侧图标-->
                <el-col :span="4">
                  <div class="logo">
                    <img src="../../../app_src/imgs/C.png" alt="">
                  </div>
                </el-col>
                <!--中间文字介绍-->
                <el-col :span="8">
                  <el-row>
                    <el-col>
                      <div class="infotitle">
                        平台需求
                      </div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col>
                      <div class="info">
                        服务器：{{CSharpPlatformInfo.server}}
                        <br>
                        运行环境：{{CSharpPlatformInfo.OperatingEnvironment}}
                        <div class="downloadbutton">
                          <el-button type="primary"  @click="download()">平台下载</el-button>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>

                <!--右侧图标-->
                <el-col :span="4">
                  <div class="waitlogo">
                    <img src="../../../app_src/imgs/time.png" alt="" title="C#平台历史版本" @click="histiory">
                  </div>
                </el-col>

                <!--右侧列表-->
                <el-col :span="8">
                  <div class="list">
                    <div class="listItem" v-for="(item,itemkey) in CSharpPlatformInfo.Edition" :key="itemkey">
                      <el-radio :label="item.id" v-model="CSharpradio">{{item.name}}</el-radio>                   
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!--下侧下载界面-->
              <el-row>
                <el-col :span="4" v-for="(item,index) in successhistory" :key="index">
                  <div class="succesinfo" >
                    <a :href="item.URL">{{item.name}}</a>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>  

      <div class="paltform">
        <!--GO平台-->
        <el-row type="flex">
          <el-col :span="2"></el-col>
          <el-col :span="20">
            <div class="card">
              <el-card>
                <el-row>
                  <!--左侧图标-->
                  <el-col :span="4">
                    <div class="logo">
                      <img src="../../../app_src/imgs/GO.png" alt="">
                    </div>
                  </el-col>
                  <!--中间文字介绍-->
                  <el-col :span="8">
                    <el-row>
                      <el-col>
                        <div class="infotitle">
                          平台需求
                        </div>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col>
                        <div class="info">
                          服务器：{{GOPlatformInfo.server}}
                          <br>
                          运行环境：{{GOPlatformInfo.OperatingEnvironment}}
                          <div class="downloadbutton">
                            <el-button type="primary"  @click="download()">平台下载</el-button>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>

                  <!--右侧图标-->
                  <el-col :span="4">
                    <div class="waitlogo">
                      <img src="../../../app_src/imgs/time.png" alt="" title="GO#平台历史版本" @click="histiory">
                    </div>
                  </el-col>

                  <!--右侧列表-->
                  <el-col :span="8">
                    <div class="list">
                      <div class="listItem" v-for="(item,itemkey) in GOPlatformInfo.Edition" :key="itemkey">
                        <el-radio :label="item.id" v-model="GOradio">{{item.name}}</el-radio>                   
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <!--下侧下载界面-->
                <el-row>
                  <el-col :span="4" v-for="(item,index) in successhistory" :key="index">
                    <div class="succesinfo" >
                      <a :href="item.URL">{{item.name}}</a>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </el-col>
        </el-row>           
      </div>

      <div class="historyinfo">
        <el-dialog :visible.sync="dialogTableVisible" width="60%">
          <div class="histiorytitle">
            历史版本
          </div>
          <el-table :data="histioryList">
            <el-table-column prop="id" label="版本ID" align="center"></el-table-column>
            <el-table-column prop="name" label="版本名称" align="center" width="200px"></el-table-column>
            <el-table-column prop="time" label="更新日期" align="center"></el-table-column>
            <el-table-column  label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="text">下载文件</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-dialog>
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
      histioryList: [
        { time: "2018-8-7", name: "UIDP开发平台V3.5.1(测试版)", id: 1 },
        { time: "2018-8-8", name: "UIDP开发平台V3.5.2(测试版)", id: 2 },
        { time: "2018-8-9", name: "UIDP开发平台V3.5.3(测试版)", id: 3 },
        { time: "2018-8-10", name: "UIDP开发平台V3.5.4(测试版)", id: 4 }
      ],
      successhistory: [
        {
          name: "成功案例1",
          URL: "https://www.baidu.com",
          content: "大港项目"
        },
        {
          name: "成功案例2",
          URL: "https://www.baidu.com",
          content: "大港项目"
        },
        {
          name: "成功案例3",
          URL: "https://www.baidu.com",
          content: "大港项目"
        },
        {
          name: "成功案例4",
          URL: "https://www.baidu.com",
          content: "大港项目"
        },
        {
          name: "成功案例5",
          URL: "https://www.baidu.com",
          content: "大港项目"
        },
        { name: "成功案例6", URL: "https://www.baidu.com", content: "大港项目" }
      ],
      CSharpradio: null,
      GOradio: null,
      dialogTableVisible: false
    };
  },
  methods: {
    download() {
      if (this.CSharpradio != null) {
        alert(
          "开始下载" +
            this.CSharpradio +
            "号文件，文件名为" +
            this.GOPlatformInfo.Edition[this.CSharpradio - 1].name
        );
      } else {
        alert("请选择下载的文件");
      }
    },
    histiory() {
      this.dialogTableVisible = true;
    }
  }
};
</script>

<style lang="scss">
.paltform {
  margin-top: 20px;
  .logo {
    img {
      width: 125px;
      height: 125px;
      border-radius: 1em;
    }
  }
  .waitlogo {
    img {
      width: 125px;
      height: 125px;
    }
  }
  .list {
    margin: 8px 10px 0 0;
    .listItem {
      margin: 8px 0 0 8px;
    }
  }
  .succesinfo {
    margin-top: 10px;
  }
  .infotitle {
    text-align: center;
    font-size: 20px;
    font-family: "黑体";
    font-weight: bold;
  }
  .info {
    margin-top: 15px;
    font-size: 16px;
    color: gray;
    font-family: "楷体";
    line-height: 20px;
    .downloadbutton {
      margin: 15px 0 0 0;
      text-align: center;
    }
  }
  .succesinfo {
    padding-top: 16px;
    text-align: center;
    font-family: "楷体";
    font-size: 15px;
    color: rgb(72, 72, 218);
  }
}
.histiorytitle {
  text-align: center;
  font-size: 20px;
  font-family: "黑体";
  margin-bottom: 15px;
}
.el-radio{
  font-family: "宋体";
  color: gray;
}
</style>


