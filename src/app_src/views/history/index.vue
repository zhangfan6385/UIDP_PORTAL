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
                    </div>
                    <el-table :data="histroyEdition" height="450px" :v-loading="listloading">
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
                                    <el-form-item label="发布日期">
                                        <span>{{scope.row.time}}</span>
                                    </el-form-item>
                                    <el-form-item label="文件大小">
                                        <span>{{scope.row.size}}</span>
                                    </el-form-item>
                                    <el-form-item label="适用平台">
                                        <span>{{scope.row.fixpaltform}}</span>
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
                        <el-table-column prop="fixpaltform" label="适用平台"></el-table-column>
                        <el-table-column prop="size" label="文件大小"></el-table-column>
                        <el-table-column prop="time" label="发布日期"></el-table-column>

                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="text"  @click="apply">申请下载</el-button>
                                <el-button type="text" >下载</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import {
    fetchGetHistoryList,
    fetchDownloadFile,
    fetchApplyDownload,
    FetchGetPermisstion
} from "@/app_src/api/history";
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
            histroyEdition: [
                {
                    type: "pro",
                    title: "新版本",
                    id: 1,
                    content: "更新内容1",
                    size: "200MB",
                    fixpaltform: "Windows7/8/10、Linux",
                    time: "2018-8-20",
                    doc: [
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20",
                            size: "200MB",
                            fixpaltform: "Windows7/8/10、Linux"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20",
                            size: "200MB",
                            fixpaltform: "Windows7/8/10、Linux"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        }
                    ]
                },
                {
                    type: "pro",
                    title: "新版本",
                    id: 1,
                    content: "更新内容1",
                    size: "200MB",
                    fixpaltform: "Windows7/8/10、Linux",
                    doc: [
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20",
                            size: "200MB",
                            fixpaltform: "Windows7/8/10、Linux"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20",
                            size: "200MB",
                            fixpaltform: "Windows7/8/10、Linux"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20",
                            size: "200MB",
                            fixpaltform: "Windows7/8/10、Linux"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        }
                    ]
                },
                {
                    type: "pro",
                    title: "新版本",
                    id: 1,
                    content: "更新内容1",
                    size: "200MB",
                    fixpaltform: "Windows7/8/10、Linux",
                    doc: [
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20",
                            size: "200MB",
                            fixpaltform: "Windows7/8/10、Linux"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20",
                            size: "200MB",
                            fixpaltform: "Windows7/8/10、Linux"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20",
                            size: "200MB",
                            fixpaltform: "Windows7/8/10、Linux"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        }
                    ]
                }
            ],
            querylist: {
                limit: 10,
                page: 1
            },
            permissionquery: {
                userID: null,
                proID: null
            },
            permissionList: [],
            total: null,
            userPower: 0,
            listloading: true
        };
    },
    methods: {
        apply(){
             if(this.$store.state.user.userID===null){
                 this.$store.state.user.dialogLoginVisible=true;
             }
             else{
                 this.$store.state.user.applyDialogVisible=true;
             }
        },
        getHistoryList() {
            fetchGetHistoryList(this.listQuery).then(response => {
                if (response.data.code === 2000) {
                    this.histroyEdition = response.data.items;
                    this.total = response.data.total;
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
        getPermissionList() {
            FetchGetPermisstion(this.permissionquery).then(response => {
                if (response.data.code === 2000) {
                    this.permissionList = response.data.items;
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
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 30%;
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
}
</style>


