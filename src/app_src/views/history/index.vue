<template>
    <div id="histiory" class="history">
        <el-row :gutter="20" type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="10">
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
                                        <a :href="item.docurl" v-for="(item,key) in scope.row.doc" :key="key" class="url">{{item.docName}}</a>
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
            </el-col>
            <el-col :span="10">
                <el-card>
                    <div class="title">
                        历史版本
                    </div>
                    <el-table :data="histroyEdition">
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
                                        <a :href="item.docurl" v-for="(item,key) in scope.row.doc" :key="key" class="url">{{item.docName}}</a>
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
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    data() {
        return {
            currentEdition: [
                {
                    type: "pro",
                    title: "新版本",
                    id: 1,
                    content: "更新内容1",
                    doc: [
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        }
                    ]
                }
            ],
            histroyEdition: [
                {
                    type: "pro",
                    title: "老版本1",
                    id: 1,
                    content: "更新内容1",
                    doc: [
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        }
                    ]
                },
                {
                    type: "doc",
                    title: "老版本2",
                    id: 2,
                    content: "更新内容2",
                    doc: [
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        }
                    ]
                },
                {
                    type: "doc",
                    title: "老版本3",
                    id: 3,
                    content: "更新内容3",
                    doc: [
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        },
                        {
                            docurl: "http://www.baidu.com",
                            docName: "最新版本文档",
                            time: "2018-8-20"
                        }
                    ]
                }
            ],
            power: false,
            userPower: 2
        };
    },
    methods: {}
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
    width: 50%;
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
.title{
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 15px;
}
</style>


