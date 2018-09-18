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
                  <el-col :span="24">
                    <div class="info">
                      <div class="title">
                        C#平台
                      </div>
                      <div class="content">
                        <div style="width:45%;float:left;">
                          最新版本：{{charpData.version}}<br> 大小：{{charpData.size}}<br> 运行环境：.Net Core 2.0<br> 运行服务器：Windows Server 2008 sp1
                        </div>
                        <div style="float:left;margin-left:80px">
                          <img src="../../imgs/sharplogo2.png" style="width:150px;height:120px;" />
                        </div>
                      </div>
                      <div class="button" style="clear:both;padding-top:10px">
                        <el-button type="primary" @click="goToHistory(0)">点击下载</el-button>
                      </div>
                    </div>
                  </el-col>
                  <!-- <el-col :span="12">
                    <div class="table">
                      <div class="tabletitle">
                        当前版本
                      </div>
                      <div class="content">
                        <div>版本信息：{{CSharp.PLAT_NAME}}</div>
                        <div>版本号：{{CSharp.PLAT_VERSION}}</div>
                        <div>发布日期：{{CSharp.PLAT_PUBLISHDATE}}</div>
                        <div class="tablebutton">
                          <el-button @click="CsharpVisable=true" type="primary">点击查看详情</el-button>
                        </div>
                      </div>
                    </div>

                  </el-col> -->
                </el-row>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="GOPlatform">
                <el-row>
                  <el-col :span="24">
                    <div class="info">
                      <div class="title">
                        GOLANG平台
                      </div>
                      <div class="content">
                        <div style="width:45%;float:left;">
                          最新版本：{{goData.version}}<br> 大小：{{goData.size}}<br> 运行环境：go1.7.4
                          <br> 运行服务器：Windows Server 2008 sp1
                        </div>
                      </div>
                      <div style="float:left;margin-left:80px">
                        <img src="../../imgs/gologo.png" style="width:150px;height:120px;" />
                      </div>
                      <div class="button" style="clear:both;padding-top:10px">
                        <el-button type="primary" @click="goToHistory(1)">点击下载</el-button>
                      </div>
                    </div>
                  </el-col>
                  <!-- <el-col :span="12">
                    <div class="table">
                      <div class="tabletitle">
                        当前版本
                      </div>
                      <div class="content">
                        <div>版本信息：{{GOCurrent.PLAT_NAME}}</div>
                        <div>版本号：{{GOCurrent.PLAT_VERSION}}</div>
                        <div>发布日期：{{GOCurrent.PLAT_PUBLISHDATE}}</div>
                        <div class="tablebutton">
                          <el-button @click="GOVisable=true" type="primary">点击查看详情</el-button>
                        </div>
                      </div>
                    </div>
                  </el-col> -->
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
            <el-button type="text" @click="apply(scope.row)" v-if="scope.row.CHECK_STATE!=1">申请下载</el-button>
            <el-button type="text" v-else-if="scope.row.CHECK_STATE===1" @click="download">下载</el-button>
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
            <el-button type="text" @click="apply(scope.row)" v-if="scope.row.CHECK_STATE!=1">申请下载</el-button>
            <el-button type="text" v-else-if="scope.row.CHECK_STATE===1" @click="download(row)">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="公司名称" :label-width="formLabelWidth">
          <el-input v-model="userinfo.ORG_NAME" auto-complete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="承担项目" :label-width="formLabelWidth">
          <el-select v-model="form.PROJECT_ID" placeholder="请选项目">
            <el-option v-for="(item,key) in projList" :key="key" :label="item.PROJECT_NAME" :value="item.PROJECT_ID">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用途描述" :label-width="formLabelWidth">
          <el-input v-model="form.USE_CONTENT" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="用途类型" :label-width="formLabelWidth">
          <el-select v-model="form.USE_TYPE" placeholder="请选用途类型">
            <el-option label="开发" :value="0"></el-option>
            <el-option label="生产" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系人" :label-width="formLabelWidth">
          <el-input v-model="form.APPLY_LINKMAN" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="form.APPLY_PHONE" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.APPLY_EMAIL" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cencel">取 消</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import { fetchGetHistoryList } from "@/app_src/api/history";
import { fetchApply } from "@/app_src/api/apply";
export default {
    data() {
        return {
            index: 0,
            CSharpCurrentList: [],
            CSharp: {},
            charpData: {
                version: "v1.0",
                size: "10M"
            },
            goData: {
                version: "v1.0",
                size: "10M"
            },
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
            GOVisable: false,
            form: {
                APPLY_USERID: "",
                APPLY_ORG_NAME: "",
                PROJECT_ID: "",
                PROJECT_NAME: "",
                APPLY_ORG_ID: "",
                APPLY_RESOURCE_ID: "",
                APPLY_TYPE: 2,
                USE_CONTENT: "",
                USE_TYPE: "",
                APPLY_LINKMAN: "",
                APPLY_PHONE: "",
                APPLY_EMAIL: ""
            },
            severInfo: {},
            projList: [],
            userinfo: {},
            formLabelWidth: "120px",
            dialogTitle: "平台申请",
            dialogFormVisible: false
        };
    },
    methods: {
        getindex() {//获取HOME页点击图标
            let dashaboardindex = this.$store.state.user.dashaboardindex;
            this.index = dashaboardindex;
        },
        goToHistory(data) {//跳转历史版本
            this.$store.state.user.platformIndex = data;
            this.$router.push({ path: "/history" });
        },
        getCurrent() {//获取最新版本信息
            this.querylist.projectid = this.$store.state.user.currentProjID;
            this.querylist.userid = this.$store.state.user.userID;
            this.FetchCSharpHistoryList();
            this.FetchGOHistoryList();
        },
        FetchCSharpHistoryList() {
            fetchGetHistoryList(this.querylist).then(response => {
                if (response.data.code === 2000) {
                    this.CSharp = response.data.items;
                    this.charpData.size = response.data.items[0].PLAT_SIZE;
                    this.charpData.version =
                        response.data.items[0].PLAT_VERSION;
                    if (this.CSharp.PLAT_PUBLISHDATE != null) {
                        this.CSharp.PLAT_PUBLISHDATE = this.CSharp.PLAT_PUBLISHDATE.substring(
                            0,
                            10
                        );
                    }
                    this.CSharpCurrentList.push(response.data.items);
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
                    this.GOCurrent = response.data.items;
                    this.goData.size = response.data.items[0].PLAT_SIZE;
                    this.goData.version = response.data.items[0].PLAT_VERSION;
                    this.GOCurrentList.push(response.data.items);
                    if (this.GOCurrent.PLAT_PUBLISHDATE != null) {
                        this.GOCurrent.PLAT_PUBLISHDATE = this.GOCurrent.PLAT_PUBLISHDATE.substring(
                            0,
                            10
                        );
                    }
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
        },
        apply(data) {
            if (this.$store.state.user.userID != null) {
                this.dialogFormVisible = true;
                this.form.APPLY_RESOURCE_ID = data.PLAT_ID;
                this.getProjInfo();
            } else {
                this.$store.state.user.dialogLoginVisible = true;
            }
        },
        submit() {
            //this.queryList.projectid = this.$store.state.user.currentProjID;
            //this.queryList.ID = this.$route.params.id;
            fetchApply(this.form).then(response => {
                if (response.data.code === 2000) {
                    this.$notify({
                        position: "bottom-right",
                        title: "成功",
                        message: response.data.message,
                        type: "success",
                        duration: 2000
                    });
                    this.dialogFormVisible = false;
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
        cencel() {
            this.resetForm();
            this.dialogFormVisible = false;
        },
        resetForm() {
            this.form.APPLY_TYPE = 2;
            this.form.USE_CONTENT = "";
            this.form.USE_TYPE = "";
            this.form.APPLY_LINKMAN = "";
            this.form.APPLY_PHONE = "";
            this.form.APPLY_EMAIL = "";
        },
        getProjInfo() {
            this.projList = this.$store.state.user.projList;
            this.userinfo = this.$store.state.user.userinfo[0];
            this.form.APPLY_USERID = this.userinfo.USER_ID;
            this.form.APPLY_ORG_NAME = this.userinfo.ORG_NAME;
            this.form.APPLY_ORG_ID = this.userinfo.ORG_ID;
            this.form.APPLY_USERID = this.$store.state.user.userID;
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
            background-image: url(../../../app_src/imgs/csharp2.jpg); //url(../../../app_src/imgs/CSharpBackground.jpg);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            font-family: "微软雅黑";
            height: 95%;
            .info {
                margin-left: 10%;
                margin-top: 20%;
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
            margin-top: 20%;
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
</style>


