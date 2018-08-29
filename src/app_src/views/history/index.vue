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
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import { fetchGetHistoryList } from "@/app_src/api/history";
export default {
    data() {
        return {
            // currentEdition: [
            //     {
            //         type: "pro",
            //         title: "新版本",
            //         id: 1,
            //         content: "更新内容1",
            //         doc: [
            //             {
            //                 docurl: "http://www.baidu.com",
            //                 docName: "最新版本文档",
            //                 time: "2018-8-20",
            //                 size: "200MB",
            //                 fixpaltform: "Windows7/8/10、Linux"
            //             },
            //             {
            //                 docurl: "http://www.baidu.com",
            //                 docName: "最新版本文档",
            //                 time: "2018-8-20",
            //                 size: "200MB",
            //                 fixpaltform: "Windows7/8/10、Linux"
            //             },
            //             {
            //                 docurl: "http://www.baidu.com",
            //                 docName: "最新版本文档",
            //                 time: "2018-8-20",
            //                 size: "200MB",
            //                 fixpaltform: "Windows7/8/10、Linux"
            //             },
            //             {
            //                 docurl: "http://www.baidu.com",
            //                 docName: "最新版本文档",
            //                 time: "2018-8-20"
            //             }
            //         ]
            //     }
            // ],
            histroyEdition: [],
            querylist: {
                userid: null,
                projectid: null,
                resouseid: null,
                type: 0,
                isFirst: false
            },
            permissionquery: {
                userID: null
            },
            permissionList: [],
            total: null,
            userPower: 0,
            listloading: true
        };
    },
    methods: {
        apply() {
            if (this.$store.state.user.userID === null) {
                this.$store.state.user.dialogLoginVisible = true;
            } else {
                this.$store.state.user.applyDialogVisible = true;
            }
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


