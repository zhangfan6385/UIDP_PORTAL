<template>
    <div id="noticecontent">
        <el-row type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <div class="noticecontent">
                    <el-card v-for="(ele,key) in notice" :key="key">
                        <div slot="header" class="header">
                            {{ele.NOTICE_TITLE}}
                            <div class="back">
                                <el-button type="primary" @click="back" size="mini">后退</el-button>
                            </div>
                        </div>
                        <div class="content">
                            <el-row>
                                <el-col :span="24">
                                    <p v-html="ele.NOTICE_CONTENT"></p>
                                </el-col>
                            </el-row>
                        </div>
                        <el-row>
                            <el-col :span="24">
                                <!-- 附件下载：<a :href="notice.filename">{{notice.fileurl}}</a> -->
                                附件下载：
                                <div class="fliter" v-for="(item,key) in ele.children" :key="key">
                                    <el-button @click="downLoad(item)" type="primary" size="text">{{item.FILE_NAME}}</el-button>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="foot">
                            <el-row>
                                <el-col :span="24">
                                    作者：{{ele.CREATER}},发布时间：{{ele.CREATE_DATE|parseTime}}
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </div>
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
.noticecontent {
    margin-top: 20px;
    min-height: 500px;
    .header {
        font-size: 25px;
        font-weight: bold;
    }
    .content {
        font-size: 18px;
        line-height: 23px;
    }
    .foot {
        float: right;
        font-size: 12px;
        color: gray;
    }
    .back {
        float: right;
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
</style>
