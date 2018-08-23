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
                        <el-card v-for="(item,key) in  noticeList" :key="key" @click.native="goToContent(item)">
                            <div slot="header" class="header">
                                {{item.title}}
                            </div>
                            <div class="content">
                                <el-row>
                                    <el-col :span="24">
                                        {{item.content}}
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24">
                                        <div class="foot">
                                            作者:{{item.writter}} 发表日期：{{item.time}}
                                        </div>

                                    </el-col>
                                </el-row>
                            </div>
                        </el-card>
                        <div class="page">
                            <el-pagination background layout="prev, pager, next" :total="1000">
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
            noticeList: [
                {
                    title:
                        "zhongyao1zhongyao1zhongyao1zhongyao1zhongyao1zhongyao1zhongyao1zhongyao1zhongyao1",
                    content: "123123123",
                    writter: "xiaozhang",
                    time: "2018-8-20",
                    id: 1
                },
                {
                    content: "123123123",
                    title: "zhongyao1",
                    writter: "xiaozhang",
                    time: "2018-8-20",
                    id: 2
                },
                {
                    content: "123123123",
                    title: "zhongyao1",
                    writter: "xiaozhang",
                    time: "2018-8-20",
                    id: 3
                },
                {
                    content: "123123123",
                    title: "zhongyao1",
                    writter: "xiaozhang",
                    time: "2018-8-20",
                    id: 4
                },
                {
                    content: "123123123",
                    title: "zhongyao1",
                    writter: "xiaozhang",
                    time: "2018-8-20",
                    id: 5
                }
            ],
            listQuery:{
                limit:5,
                page:1,
                id:null,
            }
        };
    },
    methods: {
        goToContent(data) {
            let id = data.id.toString();
            console.log(typeof id);
            this.$router.push({ path: "noticecontent/" + id });
        },
        getNoticeList() {
            fetchNoticeList(this.listQuery).then(response => {
                if (response.data.code === 2000) {
                    for (let i = 0; i < response.data.item.length; i++) {
                        this.noticeList.push({
                            title: response.data.item[i].NOTICE_TITLE,
                            date: response.data.item[i].NOTICE_DATETIME,
                            id: response.data.item[i].NOTICE_ID,
                            content: response.data.item[i].NOTICE_CONTENT,
                            writter: response.data.item[i].NOTICE_ORGNAME
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
        }
    },
    mounted() {
        //this.getNoticeList();
    }
};
</script>


<style lang="scss">
.noticecard {
    margin-top: 20px;
    .header {
        text-align: center;
    }
    .content {
        font-size: 20px;
        .foot {
            float: right;
            font-size: 10px;
            color: gray;
        }
    }
    .page {
        text-align: center;
    }
}
.el-card {
    font-family: "微软雅黑";
}
</style>


