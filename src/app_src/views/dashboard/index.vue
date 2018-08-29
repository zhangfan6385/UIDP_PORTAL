<template>
  <div id="index" class="index">
    <el-row type="flex">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <div class="platform">
          <el-carousel :interval="5000" arrow="always" height="650px" :initial-index="index">
            <el-carousel-item>
              <div class="cSharpPlatform">
                <el-row>
                  <el-col :span="12">
                    <div class="info">
                      <div class="title">
                        C#平台
                      </div>
                      <div class="content">
                        运行环境：.Net Core 2.0<br> 运行服务器：Windows Server 2008 sp1
                      </div>
                      <div class="button">
                        <el-button type="primary" @click="goToHistory(0)">历史版本</el-button>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="table">
                      <div class="tabletitle">
                        当前版本
                      </div>
                      <div class="content">
                        <div>版本信息：{{CSharp.PLAT_NAME}}</div>
                        <div>版本号：{{CSharp.PLAT_VERSION}}</div>
                        <div>发布日期：{{CSharp.PLAT_PUBLISHDATE}}</div>
                        <div class="tablebutton">
                          <el-button @click="CsharpVisable=true" type="info">点击查看详情</el-button>
                        </div>
                      </div>
                    </div>

                  </el-col>
                </el-row>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="GOPlatform">
                <el-row>
                  <el-col :span="12">
                    <div class="info">
                      <div class="title">
                        GOLANG平台
                      </div>
                      <div class="content">
                        运行环境：.Net Core 2.0<br> 运行服务器：Windows Server 2008 sp1
                      </div>
                      <div class="button">
                        <img src="../../../app_src/imgs/ButtonBlack.png" alt="" title="点击下载" @click="goToHistory(1)">
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="table">
                      <div class="tabletitle">
                        当前版本
                      </div>
                      <div class="content">
                        <div>版本信息：{{GOCurrent.PLAT_NAME}}</div>
                        <div>版本号：{{GOCurrent.PLAT_VERSION}}</div>
                        <div>发布日期：{{GOCurrent.PLAT_PUBLISHDATE}}</div>
                        <div class="tablebutton">
                          <el-button @click="GOVisable=true" type="info">点击查看详情</el-button>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="CsharpVisable" title="C#当前版本">
      <el-table height="450px" :data="CSharpCurrentList">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <div v-if="scope.row.CHECK_STATE===1">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="名称">
                  <span>{{scope.row.PLAT_NAME}}</span>
                </el-form-item>
                <el-form-item label="软件语言">
                  <span>{{scope.row.SOFTWARE_LANGUAGE}}</span>
                </el-form-item>
                <el-form-item label="发布日期">
                  <span>{{scope.row.CREATE_DATE}}</span>
                </el-form-item>
                <el-form-item label="文件大小">
                  <span>{{scope.row.size}}</span>
                </el-form-item>
                <el-form-item label="适用平台">
                  <span>{{scope.row.SUIT_PLAT}}</span>
                </el-form-item>
                <el-form-item label="适用浏览器">
                  <span>{{scope.row.APPLICATION_BROWSER}}</span>
                </el-form-item>
                <el-form-item label="发布者">
                  <span>{{scope.row.CREATER}}</span>
                </el-form-item>
                <el-form-item label="文档下载">
                  <div v-for="(item,key) in scope.row.children" :key="key" class="url">
                    <a :href="item.docurl">{{item.docName}}</a>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.CHECK_STATE===-1" class="blue">未申请</span>
            <span v-else-if="scope.row.CHECK_STATEE===0" class="red">待审核</span>
            <span v-else-if="scope.row.CHECK_STATE===1" class="green">已通过</span>
          </template>
        </el-table-column>
        <el-table-column prop="PLAT_NAME" label="名称" align="center"></el-table-column>
        <el-table-column prop="SUIT_PLAT" label="适用平台" align="center"></el-table-column>
        <el-table-column prop="APPLICATION_BROWSER" label="环境需求" align="center"></el-table-column>
        <el-table-column prop="CREATE_DATE" label="发布日期" align="center"></el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="apply(row)" v-if="scope.row.CHECK_STATE!=1">申请下载</el-button>
            <el-button type="text" v-else-if="scope.row.CHECK_STATE===1" @click="download(row)">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog :visible.sync="GOVisable" title="GO当前版本">
        <el-table height="450px" :data="GOCurrentList">
          <el-table-column type="expand">
            <template slot-scope="scope">
              <div v-if="scope.row.CHECK_STATE===1">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="名称">
                    <span>{{scope.row.PLAT_NAME}}</span>
                  </el-form-item>
                  <el-form-item label="软件语言">
                    <span>{{scope.row.SOFTWARE_LANGUAGE}}</span>
                  </el-form-item>
                  <el-form-item label="发布日期">
                    <span>{{scope.row.CREATE_DATE}}</span>
                  </el-form-item>
                  <el-form-item label="文件大小">
                    <span>{{scope.row.size}}</span>
                  </el-form-item>
                  <el-form-item label="适用平台">
                    <span>{{scope.row.SUIT_PLAT}}</span>
                  </el-form-item>
                  <el-form-item label="适用浏览器">
                    <span>{{scope.row.APPLICATION_BROWSER}}</span>
                  </el-form-item>
                  <el-form-item label="发布者">
                    <span>{{scope.row.CREATER}}</span>
                  </el-form-item>
                  <el-form-item label="文档下载">
                    <div v-for="(item,key) in scope.row.children" :key="key" class="url">
                      <a :href="item.docurl">{{item.docName}}</a>
                    </div>
                  </el-form-item>
                </el-form>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="审核状态" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.CHECK_STATE===-1" class="blue">未申请</span>
              <span v-else-if="scope.row.CHECK_STATEE===0" class="red">待审核</span>
              <span v-else-if="scope.row.CHECK_STATE===1" class="green">已通过</span>
            </template>
          </el-table-column>
          <el-table-column prop="PLAT_NAME" label="名称" align="center"></el-table-column>
          <el-table-column prop="SUIT_PLAT" label="适用平台" align="center"></el-table-column>
          <el-table-column prop="APPLICATION_BROWSER" label="环境需求" align="center"></el-table-column>
          <el-table-column prop="CREATE_DATE" label="发布日期" align="center"></el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="apply(row)" v-if="scope.row.CHECK_STATE!=1">申请下载</el-button>
              <el-button type="text" v-else-if="scope.row.CHECK_STATE===1" @click="download(row)">下载</el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-dialog>
  </div>
</template>


<script>
import { fetchGetHistoryList } from "@/app_src/api/history";
export default {
    data() {
        return {
            index: 0,
            CSharpCurrentList: [],
            CSharp: {},
            GOCurrentList: [],
            GOCurrent: {},
            querylist: {
                userid: null,
                projectid: null,
                resouseid: null,
                type: 0,
                isFirst: true
            },
            querylist1: {
                userid: null,
                projectid: null,
                resouseid: null,
                type: 1,
                isFirst: true
            },
            CsharpVisable: false,
            GOVisable: false
        };
    },
    methods: {
        getindex() {
            let dashaboardindex = this.$store.state.user.dashaboardindex;
            this.index = dashaboardindex;
        },
        goToHistory(data) {
            this.$store.state.user.platformIndex = data;
            console.log(this.$store.state.user.platformIndex);
            this.$router.push({ path: "/history" });
        },
        getCurrent() {
            this.querylist.projectid = this.$store.state.user.currentProjID;
            this.querylist.userid = this.$store.state.user.userID;
            this.FetchCSharpHistoryList();
            this.FetchGOHistoryList();
        },
        FetchCSharpHistoryList() {
            fetchGetHistoryList(this.querylist).then(response => {
                if (response.data.code === 2000) {
                    this.CSharp = response.data.items;
                    this.CSharp.PLAT_PUBLISHDATE = this.CSharp.PLAT_PUBLISHDATE.substring(
                        0,
                        10
                    );
                    this.CSharpCurrentList.push(response.data.items);
                    console.log(this.CSharpCurrentList);
                    // for (let i = 0; i < response.data.items.length; i++) {
                    //     let longtime = response.data.items[i].CREATE_DATE;
                    //     let shorttime = longtime.substring(0, 10);
                    //     this.CSharpCurrentList[i].CREATE_DATE = shorttime;
                    // }
                    // this.listLoading = false;
                } else {
                    this.$notify({
                        position: "bottom-right",
                        title: "失败",
                        message: response.data.message,
                        type: "error",
                        duration: 2000
                    });
                }
            });
        },
        FetchGOHistoryList() {
            fetchGetHistoryList(this.querylist1).then(response => {
                if (response.data.code === 2000) {
                    this.GOCurrent=response.data.items;
                    this.GOCurrentList.push(response.data.items);
                    this.GOCurrent.PLAT_PUBLISHDATE=this.GOCurrent.PLAT_PUBLISHDATE.substring(0,10)
                    console.log(this.GOCurrentList);
                    // for (let i = 0; i < response.data.items.length; i++) {
                    //     let longtime = response.data.items[i].CREATE_DATE;
                    //     let shorttime = longtime.substring(0, 10);
                    //     this.GOCurrentList[i].CREATE_DATE = shorttime;
                    // }
                } else {
                    this.$notify({
                        position: "bottom-right",
                        title: "失败",
                        message: response.data.message,
                        type: "error",
                        duration: 2000
                    });
                }
            });
        }
    },
    mounted() {},
    created() {
        this.getindex();
        this.getCurrent();
    }
};
</script>


<style lang="scss">
.index {
    .platform {
        margin-top: 20px;
        .cSharpPlatform {
            border-radius: 0.83em;
            background-image: url(../../../app_src/imgs/CSharpBackground.jpg);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            font-family: "微软雅黑";
            height: 95%;
            .info {
                margin-left: 10%;
                margin-top: 45%;
            }
            .title {
                text-align: center;
                font-size: 30px;
                font-weight: bold;
            }
            .content {
                margin-top: 20px;
                line-height: 30px;
                font-weight: 10px;
            }
            .button {
                margin-top: 30px;
                text-align: center;
                .el-button {
                    font-weight: bold;
                }
                img {
                    width: 230px;
                    height: 70px;
                }
            }
            .table {
                .tabletitle {
                    margin-left: 10%;
                    margin-top: 43%;
                    text-align: center;
                    font-size: 30px;
                    font-weight: bold;
                }
            }
            .content {
                margin-left: 20%;
            }
            .tablebutton {
                text-align: center;
                margin-top: 20px;
            }
        }
    }

    .el-carousel {
        min-height: 600px;
    }
    .GOPlatform {
        border-radius: 0.83em;
        background-image: url(../../../app_src/imgs/GOBackground.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        min-height: 95%;
        .info {
            margin-left: 10%;
            margin-top: 45%;
        }
        .title {
            margin-left: 50px;
            font-size: 30px;
            font-weight: bold;
        }
        .content {
            margin-top: 20px;
            line-height: 30px;
            font-weight: 10px;
        }
        .button {
            margin-top: 10px;
            margin-left: 20px;
            img {
                width: 230px;
                height: 70px;
            }
        }
        .table {
            .tabletitle {
                margin-left: 10%;
                margin-top: 43%;
                text-align: center;
                font-size: 30px;
                font-weight: bold;
            }
        }
        .content {
            margin-left: 20%;
        }
        .tablebutton {
            text-align: center;
            margin-top: 20px;
        }
    }
}
</style>


