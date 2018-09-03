<template>
    <div id="histiory" class="history">
        <el-row :gutter="20" type="flex">
            <el-col :span="2"></el-col>
            <!-- <el-col :span="10">
                <el-card>
                    <div class="title">
                        当前版本
                    </div>
                    <el-table :data="currentEdition">
                        <el-table-column type="expand" v-if="userPower===2">
                            <template slot-scope="scope">
                                <el-form label-position="left" inline class="demo-table-expand">
                                    <el-form-item label="类型">
                                        <span>{{scope.row.type}}</span>
                                    </el-form-item>
                                    <el-form-item label="名称">
                                        <span>{{scope.row.title}}</span>
                                    </el-form-item>
                                    <el-form-item label="更新内容">
                                        <span>{{scope.row.content}}</span>
                                    </el-form-item>
                                    <el-form-item label="文档下载">
                                        <div v-for="(item,key) in scope.row.doc" :key="key" class="url">
                                            <a :href="item.docurl">{{item.docName}}</a>
                                        </div>
                                    </el-form-item>
                                </el-form>
                            </template>
                        </el-table-column>
                        <el-table-column prop="type" label="类型"></el-table-column>
                        <el-table-column prop="title" label="名称"></el-table-column>
                        <el-table-column prop="content" label="更新内容"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" v-if="userPower===0">申请下载</el-button>
                                <el-button type="text" v-else-if="userPower===1">查看申请进度</el-button>
                                <el-button type="text" v-else-if="userPower===2">下载</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col> -->
            <el-col :span="20">
                <el-card>
                    <div class="title">
                        历史版本
                        <el-button type="primary" size="mini" class="changePlatform" @click="changePlatform">切换平台</el-button>
                    </div>
                    <el-table :data="histroyEdition" height="450px" :v-loading="listloading">
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
                                <span v-else-if="scope.row.CHECK_STATE===0" class="red">待审核</span>
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
                </el-card>
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
            </el-col>
        </el-row>
    </div>
</template>


<script>
import { fetchGetHistoryList } from "@/app_src/api/history";
import { fetchApply } from "@/app_src/api/apply";
export default {
    data() {
        return {
            histroyEdition: [],
            querylist: {
                userid: null,
                projectid: null,
                resouseid: null,
                type: 0,
                isFirst: false
            },
            queryList: {
                userid: null,
                projectid: null,
                resourceid: null
            },
            total: null,
            userPower: 0,
            listloading: true,
            dialogTitle: "平台申请",
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
            dialogFormVisible:false
        };
    },
    methods: {
        apply(data) {
            if (this.$store.state.user.userID != null) {
                this.dialogFormVisible = true;
                //console.log(data.PLAT_ID);
                this.form.APPLY_RESOURCE_ID=data.PLAT_ID;
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
        },
        changePlatform() {
            if (this.querylist.type === 0) {
                this.querylist.type = 1;
            } else {
                this.querylist.type = 0;
            }
            this.FetchHistoryList();
        },
        getHistoryList() {
            this.querylist.type = this.$store.state.user.platformIndex;
            this.querylist.projectid = this.$store.state.user.currentProjID;
            this.querylist.userid = this.$store.state.user.userID;
            this.FetchHistoryList();
        },
        FetchHistoryList() {
            fetchGetHistoryList(this.querylist).then(response => {
                if (response.data.code === 2000) {
                    this.histroyEdition = response.data.items;
                    for (let i = 0; i < response.data.items.length; i++) {
                        let longtime = response.data.items[i].CREATE_DATE;
                        let shorttime = longtime.substring(0, 10);
                        this.histroyEdition[i].CREATE_DATE = shorttime;
                    }
                    this.listLoading = false;
                } else {
                    this.listLoading = false;
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
        test() {
            this.histroyEdition = this.list1.items;
        }
    },
    mounted() {
        this.getHistoryList();
    }
};
</script>


<style lang="scss">
.history {
    margin-top: 20px;
    .title {
        text-align: center;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 33%;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .url {
        color: blue;
    }
    .el-card {
        font-family: "微软雅黑";
    }
    .title {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 15px;
        .changePlatform {
            float: right;
        }
    }
    .blue {
        font-weight: bold;
        color: blue;
    }
    .red {
        font-weight: bold;
        color: red;
    }
    .green {
        font-weight: bold;
        color: green;
    }
}
</style>


