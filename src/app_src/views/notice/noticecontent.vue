<template>
    <div id="noticebackground" class="noticebackground">
        <el-row type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <el-card>
                    <el-row>
                        <el-col :span="12">
                            <div class="breadcrumb">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>通知列表</el-breadcrumb-item>
                                    <el-breadcrumb-item>通知详情</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="back">
                                <!-- <el-button type="primary" @click="back" size="mini">后退</el-button> -->
                                <a href="#" title="后退" @click="back" style="float:right"><img src="../../../app_src/imgs/back.png"></a>
                            </div>
                        </el-col>
                    </el-row>

                    <div class="noticecontent">
                        <el-card v-for="(ele,key) in notice" :key="key" style="width:95%;margin:0 auto;margin-top:10px;" shadow="never">
                            <div slot="header" class="header">
                                {{ele.NOTICE_TITLE}}

                            </div>
                            <div class="content">
                                <el-row>
                                    <el-col :span="24">
                                        <p v-html="ele.NOTICE_CONTENT"></p>
                                    </el-col>
                                </el-row>
                            </div>
                            <div style="padding-left:80px;padding-right:20px;">
                                <el-row>
                                    <el-col :span="24">
                                        <!-- 附件下载：<a :href="notice.filename">{{notice.fileurl}}</a> -->
                                        <div v-if="ele.children.length>0">
                                            附件下载：
                                            <div class="fliter" v-for="(item,key) in ele.children" :key="key">
                                                <el-button @click="downLoad(item)" type="primary" size="text">{{item.FILE_NAME}}</el-button>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="foot">
                                    <el-row>
                                        <el-col :span="24">
                                            作者：{{ele.CREATER}}，发布时间：{{ele.CREATE_DATE|parseTime}}
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { fetchNoticeList } from "@/app_src/api/notice";
import { parseTime } from "@/app_src/utils/index.js";
export default {
    data() {
        return {
            urlDown: process.env.BASE_DOWNLOAD,
            notice: "",
            listQuery: {
                id: null,
                limit: 5,
                page: 1
            }
        };
    },
    methods: {
        getNoticeList() {
            this.listQuery.id = this.$route.params.id;
            fetchNoticeList(this.listQuery).then(response => {
                if (response.data.code === 2000) {
                    this.notice = response.data.items;
                    //console.log(this.notice);
                } else {
                    // this.$notify({
                    //     position: "bottom-right",
                    //     title: "失败",
                    //     message: response.data.message,
                    //     type: "error",
                    //     duration: 2000
                    // });
                }
            });
        },
        downLoad(data) {
            //console.log(data);
            window.open(this.urlDown + data.FILE_URL);
        },
        back() {
            this.$router.go(-1);
        }
    },
    mounted() {
        this.getNoticeList();
    },
    filters: {
        parseTime
    }
};
</script>



<style lang="scss">
.noticebackground {
    min-height: 500px;
    margin-top: 20px;
    .breadcrumb {
        margin-top: 15px;
        margin-left: 5%;
    }
    .back {
        float: right;
        img {
            width: 50px;
            height: 50px;
        }
    }
    .noticecontent {
        .header {
            font-size: 25px;
            font-weight: bold;
            text-align: center;
        }
        .content {
            padding-left: 80px;
            padding-right: 80px;
            font-size: 18px;
            //line-height: 23px;
            //min-height: 400px;
        }
        .foot {
            float: right;
            font-size: 12px;
            color: gray;
            margin-bottom: 25px;
        }
        .el-card {
            font-family: "微软雅黑";
        }
        .fliter {
            color: blue;
            text-decoration: underline;
            margin-top: 10px;
            margin-bottom: 15px;
        }
        .fliter:hover {
            text-decoration: underline;
            color: red;
            cursor: pointer;
        }
    }
}
</style>
