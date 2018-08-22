<template>
    <div id="noticecontent">
        <el-row type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <div class="noticecontent">
                    <el-card>
                        <div slot="header" class="header">
                            123
                        </div>
                        <div class="content">
                            <el-row>
                                <el-col :span="24">
                                    123
                                </el-col>
                            </el-row>
                        </div>
                        <div class="foot">
                            <el-row>
                                <el-col :span="24">
                                    123
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
export default {
    data() {
        return {
            noticeList: [],
            listQuery:{
                limit:5,
                page:1
            },
            // list: [
            //     {
            //         NOTICE_TITLE: 1,
            //         NOTICE_DATETIME: 2
            //     },
            //     {
            //         NOTICE_TITLE: 1,
            //         NOTICE_DATETIME: 2
            //     }
            // ]
        };
    },
    methods: {
        getNoticeList() {
            fetchNoticeList(this.listQuery).then(response => {
                if (response.data.code === 2000) {
                    for (let i = 0; i < response.data.item.length; i++) {
                        this.noticeList.push({
                            title: response.data.item[i].NOTICE_TITLE,
                            date: response.data.item[i].NOTICE_DATETIME,
                            id: response.data.item[i].NOTICE_ID,
                            content:  response.data.item[i].NOTICE_CONTENT,
                            writter: response.data.item[i].NOTICE_ORGNAME,
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
        // test() {
        //     for (let i = 0; i < this.list.length; i++) {
        //         this.noticeList.push({
        //             title: this.list[i].NOTICE_TITLE,
        //             date: this.list[i].NOTICE_DATETIME,
        //             id: "",
        //             contnet: "",
        //             writter: ""
        //         });
        //     }
        //     //console.log(this.list);
        //     console.log(this.noticeList);
        // }
    },
    mounted() {
        //this.test();
        //this.getNoticeList();
    }
};
</script>



<style lang="scss">
.noticecontent {
    margin-top: 20px;
    .header {
        font-size: 25px;
        font-weight: bold;
    }
    .content {
        font-size: 18px;
        min-height: 400px;
    }
    .foot {
        float: right;
        font-size: 12px;
        color: gray;
    }
}
.el-card {
    font-family: "微软雅黑";
}
</style>
