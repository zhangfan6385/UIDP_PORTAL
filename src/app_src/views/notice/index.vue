<template>
    <div id="notice" class="notice">
        <el-row type="flex" :gutter="20">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <div class="noticecard">
                    <!-- <el-table :data="noticeList" style="width: 100%" @row-click="goToContent">
                        <el-table-column prop="title" label="标题" :show-overflow-tooltip="true"></el-table-column>
                        <el-table-column prop="writter" width="120px" label="发布人"></el-table-column>
                        <el-table-column prop="time" label="日期" width="120px"></el-table-column>
                    </el-table> -->
                    <el-card>
                        <el-row>
                            <el-col>
                                <div class="backbutton">
                                    <el-button size="mini" type="primary" @click="goback">返回</el-button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col>
                                <el-card v-for="(item,key) in  noticeList" :key="key" @click.native="goToContent(item)">
                                    <el-row>
                                        <el-col :span="24">
                                            <div class="header">
                                                {{item.title}}
                                            </div>
                                            <div class="foot">
                                                作者:{{item.writter}} 发表日期：{{item.time}}
                                            </div>

                                        </el-col>
                                    </el-row>

                                </el-card>
                            </el-col>
                        </el-row>

                        <div class="page">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[6, 15, 20, 25]" :page-size="100" :current-page="currentPage1" layout="total, sizes, prev, pager, next, jumper" :total="total">
                            </el-pagination>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import { fetchNoticeList } from "@/app_src/api/notice";
export default {
    data() {
        return {
            noticeList: [],
            total:1,
            currentPage1:1,
            listQuery: {
                limit: 6,
                page: 1,
                id: null
            }
        };
    },
    methods: {
        goToContent(data) {
            let id = data.id.toString();
            this.$router.push({ path: "noticecontent/" + id });
        },
        getNoticeList() {
            fetchNoticeList(this.listQuery).then(response => {
                if (response.data.code === 2000) {
                    this.total = response.data.total;
                    for (let i = 0; i < response.data.items.length; i++) {
                        let longtime = response.data.items[i].CREATE_DATE;
                        let shorttime = longtime.substring(0, 10);
                        this.noticeList.push({
                            title: response.data.items[i].NOTICE_TITLE,
                            date: response.data.items[i].NOTICE_DATETIME,
                            id: response.data.items[i].NOTICE_ID,
                            content: response.data.items[i].NOTICE_CONTENT,
                            writter: response.data.items[i].CREATER,
                            time: shorttime
                        });
                    }
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
        goback() {
            this.$router.go(-1);
        },
        handleCurrentChange(val) {
            this.listQuery.page = val;
            this.noticeList = [];
            this.getNoticeList();
        },
        handleSizeChange(val) {
            this.listQuery.limit = val;
            this.noticeList = [];
            this.getNoticeList();
        }
    },
    mounted() {
        this.getNoticeList();
    }
};
</script>


<style lang="scss">
.noticecard {
    min-height: 500px;
    margin-top: 20px;
    .header {
        font-size: 16px;
    }
    .header:hover {
        text-decoration: underline;
        color: red;
        cursor: pointer;
    }
    .content {
        padding-left: 20px;
        margin-top: 15px;
        margin-left: 25px;
        margin-right: 20px;
        font-size: 15px;
        line-height: 20px;
        color: rgb(53, 49, 49);
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
    .foot {
        float: right;
        font-size: 10px;
        color: gray;
    }
    .page {
        text-align: center;
    }
    .el-card {
        font-family: "微软雅黑";
    }
    .backbutton {
        float: right;
        margin-bottom: 10px;
    }
}
</style>


