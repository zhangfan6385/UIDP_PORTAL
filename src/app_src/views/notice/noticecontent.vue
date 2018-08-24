<template>
    <div id="noticecontent">
        <el-row type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <div class="noticecontent">
                    <el-card>
                        <div slot="header" class="header">
                            {{notice.title}}
                        </div>
                        <div class="content">
                            <el-row>
                                <el-col :span="24">
                                    <p v-html="notice.content"></p>
                                </el-col>
                            </el-row>
                        </div>
                        <el-row>
                            <el-col :span="24">
                                <!-- 附件下载：<a :href="notice.filename">{{notice.fileurl}}</a> -->
                                附件下载：
                                <a :href="item.filE_URL" v-for="(item,key) in notice.children" :key="key">{{item.filE_NAME}}</a>
                            </el-col>
                        </el-row>
                        <div class="foot">
                            <el-row>
                                <el-col :span="24">
                                    作者：{{notice.writter}},发布时间：{{notice.time}}
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
            notice: {},
            listQuery: {
                id: null,
                limit: 5,
                page: 1
            },
            notice1: {
                total: 1,
                items: [
                    {
                        noticE_ID: "26b81b29-be4a-400e-9334-8ebe215dc4b8",
                        noticE_CODE: "111",
                        noticE_TITLE: "简介",
                        noticE_CONTENT:
                            '<p>\t大港<a href="https://baike.baidu.com/item/%E6%B2%B9%E7%94%B0" target="_blank" style="color: rgb(19, 110, 194);">油田</a>始建于1964年1月，经过多年的艰苦创业，昔日的盐碱滩已建设成为一个集石油及天然气勘探、开发、<a href="https://baike.baidu.com/item/%E5%8E%9F%E6%B2%B9" target="_blank" style="color: rgb(19, 110, 194);">原油</a>加工、机械制造、科研设计、后勤服务、多种经营、社会公益等多功能于一体的油气生产基地。现有职工71000余人，干部总数22000余人，专业技术人员19000余人。开发建设了21个<a href="https://baike.baidu.com/item/%E6%B2%B9%E6%B0%94%E7%94%B0" target="_blank" style="color: rgb(19, 110, 194);">油气田</a>，形成了年生产原油430万吨、天然气3.6亿立方米生产能力和250万吨原油加工能力。截止1996年底，累计生产原油9349万吨，天然气124亿立方米，在全国陆上21个油气田中，按原油产量计算，列第6位，在全国500家<a href="https://baike.baidu.com/item/%E7%89%B9%E5%A4%A7%E5%9E%8B%E4%BC%81%E4%B8%9A" target="_blank" style="color: rgb(19, 110, 194);">特大型企业</a>中列第59位。</p><p>\t大港油田勘探范围广阔，有陆地、滩海和极浅海三大勘探领域。包括<a href="https://baike.baidu.com/item/%E9%BB%84%E9%AA%85" target="_blank" style="color: rgb(19, 110, 194);">黄骅</a>坳陷中、南部陆地，滩海海域（0～5米水深），以及<a href="https://baike.baidu.com/item/%E6%B2%A7%E5%8E%BF" target="_blank" style="color: rgb(19, 110, 194);">沧县</a>隆起东半部、埕宁隆起北半部的陆地部分。探区内以油藏类型多，具有多套生油层系含油组合为主要特征，是一个油气生成量和聚集量十分丰富的大型复式含油气区，有着广阔的找油找气领域和发展前景。在已勘探开发范围内有2700平方公里的滩海区域。其中，油田自己承建的张巨河海上<a href="https://baike.baidu.com/item/%E4%BA%BA%E5%B7%A5%E5%B2%9B" target="_blank" style="color: rgb(19, 110, 194);">人工岛</a>被中国石油天然气总公司命名为“中华第一人工岛。”</p>',
                        noticE_DATETIME: "2018-08-21T16:57:25",
                        noticE_ORGID: "84e9a85d-38d2-461e-9e2b-b128bb9e188c",
                        noticE_ORGNAME: "大港油田公司",
                        iS_DELETE: null,
                        creater: "管理员001",
                        creatE_DATE: "2018-08-21T16:57:25",
                        noticE_DETAIL_ID: null,
                        filE_URL: 1,
                        filE_NAME: 2,
                        filE_SIZE: null,
                        children: [
                            {
                                noticE_ID: null,
                                noticE_CODE: null,
                                noticE_TITLE: null,
                                noticE_CONTENT: null,
                                noticE_DATETIME: "0001-01-01T00:00:00",
                                noticE_ORGID: null,
                                noticE_ORGNAME: null,
                                iS_DELETE: null,
                                creater: "sdf",
                                creatE_DATE: "2018-08-24T09:23:51",
                                noticE_DETAIL_ID:
                                    "26b81b29-be4a-400e-9334-8ebe215dc4b0",
                                filE_URL: "sfsdf",
                                filE_NAME: "sdf",
                                filE_SIZE: "21",
                                children: null
                            },
                            {
                                noticE_ID: null,
                                noticE_CODE: null,
                                noticE_TITLE: null,
                                noticE_CONTENT: null,
                                noticE_DATETIME: "0001-01-01T00:00:00",
                                noticE_ORGID: null,
                                noticE_ORGNAME: null,
                                iS_DELETE: null,
                                creater: "sdf",
                                creatE_DATE: "2018-08-24T09:23:51",
                                noticE_DETAIL_ID:
                                    "26b81b29-be4a-400e-9334-8ebe215dc4b0",
                                filE_URL: "sfsdf",
                                filE_NAME: "sdf",
                                filE_SIZE: "21",
                                children: null
                            }
                        ]
                    }
                ],
                code: 2000,
                message: "查询成功"
            }
        };
    },
    methods: {
        getNoticeList() {
            this.listQuery.id = this.$route.params.id;
            fetchNoticeList(this.listQuery).then(response => {
                if (response.data.code === 2000) {
                    for (let i = 0; i < response.data.items.length; i++) {
                        let longtime = response.data.items[i].creatE_DATE;
                        let shorttime = longtime.substring(0, 10);
                        this.notice = {
                            title: response.data.items[i].noticE_TITLE,
                            date: response.data.items[i].noticE_DATETIME,
                            id: response.data.items[i].noticE_ID,
                            time: shorttime,
                            content: response.data.items[i].noticE_CONTENT,
                            writter: response.data.items[i].creater,
                            children: response.data.items[i].children
                        };
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
        test() {
            for (let i = 0; i < this.notice1.items.length; i++) {
                let longtime = this.notice1.items[i].creatE_DATE;
                let shorttime = longtime.substring(0, 10);
                this.notice = {
                    title: this.notice1.items[i].noticE_TITLE,
                    date: this.notice1.items[i].noticE_DATETIME,
                    id: this.notice1.items[i].noticE_ID,
                    content: this.notice1.items[i].noticE_CONTENT,
                    //time:this.notice1.items[i].creatE_DATE,
                    time: shorttime,
                    writter: this.notice1.items[i].creater,
                    children: this.notice1.items[i].children,
                    filename: this.notice1.items[i].filE_NAME,
                    fileurl: this.notice1.items[i].filE_URL
                };
                console.log(this.notice);
            }
        }
    },
    mounted() {
        this.test();
        //this.getNoticeList();
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
