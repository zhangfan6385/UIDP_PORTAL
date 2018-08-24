<template>
    <div id="home" class="home">
        <div class="row1">
            <el-row :gutter="20" type="flex">
                <el-col :span="2"></el-col>
                <el-col :span="10">
                    <el-card>
                        <div class="header">
                            <el-row>
                                <el-col :span="2">
                                    <img src="../../../app_src/imgs/notice.png" title="公告">
                                </el-col>

                                <el-col :span="22">
                                    <div class="title">
                                        公告
                                        <div class="headerbutton">
                                            <el-button type="primary" size="mini" @click="gotonotice"> 查看更多</el-button>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <hr>
                        <el-table :data="noticeList" size="mini" :show-header="false" @row-click="goToContent">
                            <el-table-column prop="title" align="center" show-overflow-tooltip></el-table-column>
                            <!-- <el-table-column  prop="writter" align="center"></el-table-column> -->
                            <el-table-column prop="time" align="center"></el-table-column>
                        </el-table>
                    </el-card>
                </el-col>

                <el-col :span="10">
                    <el-card>
                        <div class="header">
                            <el-row>
                                <el-col :span="2">
                                    <img src="../../../app_src/imgs/message.png" title="公告">
                                </el-col>

                                <el-col :span="22">
                                    <div class="title">
                                        最新发帖
                                        <div class="headerbutton">
                                            <el-button type="primary" size="mini" @click="goToCommunity"> 论坛首页</el-button>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <hr>
                        <el-table :data="newslist" @row-click="getcontent" size="mini" :show-header="false">
                            <el-table-column label="类型" width="50px" align="center">
                                <template slot-scope="scope">
                                    <div class="newslogo">
                                        <span v-if="scope.row.type===1">
                                            <img src="../../../app_src/imgs/shakehande.png" title="经验分享">
                                        </span>
                                        <span v-else-if="scope.row.type===2">
                                            <img src="../../../app_src/imgs/feedback.png" title="问题反馈">
                                        </span>
                                        <span v-else-if="scope.row.type===3">
                                            <img src="../../../app_src/imgs/help.png" title="问题求助">
                                        </span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="title" label="主题" show-overflow-tooltip></el-table-column>
                            <!-- <el-table-column prop="readNumber" label="阅读量" width="100px" align="center"></el-table-column>
                            <el-table-column prop="offer" label="悬赏金额" width="100px" align="center"></el-table-column>
                            <el-table-column prop="commentNumber" label="评论人数" width="100px" align="center"></el-table-column>
                            <el-table-column prop="writter" label="作者" width="100px" align="center"></el-table-column>
                            <el-table-column prop="upTime" label="发表日期" width="100px" align="center"></el-table-column> -->
                        </el-table>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <div class="row2">
            <el-row type="flex">
                <el-col :span="2"></el-col>
                <el-col :span="20">
                    <div class="logocard">
                        <el-card>
                            <el-row>
                                <el-col :span="1">
                                    <img src="../../../app_src/imgs/computer.png" title="公告">
                                </el-col>
                                <el-col :span="23">
                                    开发平台
                                </el-col>

                            </el-row>
                            <el-row type="flex">
                                <el-col :span="2"></el-col>
                                <el-col :span="3">

                                    <div class="platform">
                                        <img src="../../../app_src/imgs/platform.png" title="c#平台" @click="GOplatform1(0)">
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <el-col>
                                        <div class="title">
                                            C#平台
                                        </div>
                                    </el-col>
                                    <el-col>
                                        <div class="content">
                                            前端：Vue 2.0+elementUI
                                            <br> 后端：.NET Core2.0+Web API
                                        </div>
                                    </el-col>
                                </el-col>
                                <el-col :span="2"></el-col>
                                <el-col :span="3">
                                    <div class="platform">
                                        <img src="../../../app_src/imgs/GOplatform.png" title="GO平台" @click="GOplatform1(1)">
                                    </div>
                                </el-col>

                                <el-col :span="6">
                                    <el-col>
                                        <div class="title">
                                            GOLANG平台
                                        </div>
                                    </el-col>
                                    <el-col>
                                        <div class="content">
                                            前端：Vue 2.0+elementUI
                                            <br> 后端：.NET Core2.0+Web API
                                        </div>
                                    </el-col>
                                </el-col>
                                <el-col :span="3"></el-col>
                            </el-row>

                        </el-card>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="row3">
            <el-row :gutter="20" type="flex">
                <el-col :span="2"></el-col>
                <el-col :span="10">
                    <el-card>
                        <el-row type="flex">
                            <el-col :span="2"></el-col>
                            <el-col :span="20">
                                <div class="parent">
                                    <el-carousel trigger="click" height="300px">
                                        <el-carousel-item>
                                            <div id="myChart" class="myChart"></div>
                                        </el-carousel-item>
                                        <el-carousel-item>
                                            <div id="myChart1" class="myChart"></div>
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>

                <el-col :span="10">
                    <el-card>
                        <el-row type="flex">
                            <el-col :span="2"></el-col>
                            <el-col :span="20">
                                <div class="parent">
                                    <el-carousel trigger="click" height="300px">
                                        <el-carousel-item>
                                            <div id="myChart2" class="myChart"></div>
                                        </el-carousel-item>
                                        <el-carousel-item>
                                            <div id="myChart3" class="myChart"></div>
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { fetchNoticeList } from "@/app_src/api/notice";
import { fetchCommunityList } from "@/app_src/api/community";
import { fetchSeverList } from "@/app_src/api/sever";
import { fetchSeverComponentList } from "@/app_src/api/severcomponent";

export default {
    data() {
        return {
            noticeList: [
                // {
                //     id: 1,
                //     title: "重要通知",
                //     content: "<h5>大港软件开发通知</h5>",
                //     writter: "管理员",
                //     time: "2018-8-13"
                // },
                // {
                //     id: 2,
                //     title: "重要通知",
                //     content: "<h5>大港软件开发通知</h5>",
                //     writter: "管理员",
                //     time: "2018-8-13"
                // },
                // {
                //     id: 3,
                //     title: "重要通知",
                //     content: "<h5>大港软件开发通知</h5>",
                //     writter: "管理员",
                //     time: "2018-8-13"
                // },
                // {
                //     id: 4,
                //     title: "重要通知",
                //     content: "<h5>大港软件开发通知</h5>",
                //     writter: "管理员",
                //     time: "2018-8-13"
                // },
                // {
                //     id: 5,
                //     title: "重要通知",
                //     content: "<h5>大港软件开发通知</h5>",
                //     writter: "管理员",
                //     time: "2018-8-13"
                // },
                // {
                //     id: 6,
                //     title: "重要通知",
                //     content: "<h5>大港软件开发通知</h5>",
                //     writter: "管理员",
                //     time: "2018-8-13"
                // }
            ],
            newslist: [
                {
                    id: 1,
                    writter: "小李",
                    type: 1,
                    title:
                        "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。",
                    upTime: "2018-8-8",
                    readNumber: 200,
                    offer: 200,
                    commentNumber: 200,
                    content:
                        "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
                },
                {
                    id: 2,
                    writter: "小张",
                    type: 2,
                    title: "为祖国庆生",
                    upTime: "2018-8-8",
                    readNumber: 200,
                    offer: 200,
                    commentNumber: 200,
                    content:
                        "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
                },
                {
                    id: 3,
                    writter: "小王",
                    type: 3,
                    title: "为祖国庆生",
                    upTime: "2018-8-8",
                    readNumber: 200,
                    offer: 200,
                    commentNumber: 200,
                    content:
                        "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
                },
                {
                    id: 4,
                    writter: "小李",
                    type: 1,
                    title: "为祖国庆生",
                    upTime: "2018-8-8",
                    readNumber: 200,
                    offer: 200,
                    commentNumber: 200,
                    content:
                        "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
                },
                {
                    id: 5,
                    writter: "小李",
                    type: 2,
                    title: "为祖国庆生",
                    upTime: "2018-8-8",
                    readNumber: 200,
                    offer: 200,
                    commentNumber: 200,
                    content:
                        "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
                },
                {
                    id: 6,
                    writter: "小李",
                    type: 3,
                    title: "为祖国庆生",
                    upTime: "2018-8-8",
                    readNumber: 200,
                    offer: 200,
                    commentNumber: 200,
                    content:
                        "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
                }
            ],
            severRankList: [],
            severTopList: [],
            SeverComponentRankList: [],
            SeverComponentTopList: [],
            //柱状图数据
            option: {
                title: {
                    text: "Top下载详情"
                },
                tooltip: {},
                xAxis: {
                    data: []
                },
                yAxis: {},
                series: [
                    {
                        name: "下载量",
                        type: "bar",
                        data: []
                    }
                ]
            },
            option1: {
                title: { text: "半年下载量详情" },
                tooltip: {},
                series: [
                    {
                        name: "月份",
                        type: "pie",
                        data: []
                    }
                ]
            },
            option2: {
                title: {
                    text: "Top下载详情"
                },
                tooltip: {},
                xAxis: {
                    data: []
                },
                yAxis: {},
                series: [
                    {
                        name: "月份",
                        type: "bar",
                        data: []
                    }
                ]
            },
            option3: {
                title: { text: "半年下载量详情" },
                tooltip: {},
                series: [
                    {
                        name: "销量",
                        type: "pie",
                        data: []
                    }
                ]
            },
            //查询列表参数
            listQuery: {
                limit: 5,
                page: 1,
                id: null
            },
            listRankQuery: {
                limt: 5,
                page: 1,
                sort: "rank"
            },
            list1: {
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
                        filE_URL: null,
                        filE_NAME: null,
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
                            }
                        ]
                    }
                ],
                code: 2000,
                message: "查询成功"
            },
            list2: {
                dtComponentMonth: [
                    {
                        TOTAL: 1,
                        CHECK_MONTH: 8
                    },
                    {
                        TOTAL: 1,
                        CHECK_MONTH: 7
                    },
                    {
                        TOTAL: 1,
                        CHECK_MONTH: 6
                    }
                ],
                dtServerMonth: [
                    {
                        TOTAL: 2,
                        CHECK_MONTH: 8
                    }
                ],
                dtComponentTop: [
                    {
                        DOWNLOAD_TIMES: 21,
                        COMPONENT_NAME: "dd"
                    },
                    {
                        DOWNLOAD_TIMES: 12,
                        COMPONENT_NAME: "sdfdsf"
                    }
                ],
                dtServerCountTop: [
                    {
                        SERVICE_TIMES: 5,
                        SERVICE_NAME: "we"
                    },
                    {
                        SERVICE_TIMES: 3,
                        SERVICE_NAME: "ss"
                    }
                ],
                code: 2000,
                message: "查询成功"
            }
        };
    },
    methods: {
        drawLine() {
            let myChart = this.$echarts.init(
                document.getElementById("myChart")
            );
            myChart.setOption(this.option);
            let myChart1 = this.$echarts.init(
                document.getElementById("myChart1")
            );
            myChart1.setOption(this.option1);

            let myChart2 = this.$echarts.init(
                document.getElementById("myChart2")
            );
            myChart2.setOption(this.option2);
            let myChart3 = this.$echarts.init(
                document.getElementById("myChart3")
            );
            myChart3.setOption(this.option3);
        },
        //组件数据转化
        getdata() {
            let Xarr = [];
            let dataarr = [];
            let item = {};
            for (let i of this.SeverComponentRankList) {
                //柱状图赋值
                Xarr.push(i.name);
                dataarr.push(i.score);
            }
            this.option.xAxis.data = Xarr;

            this.option.series = {
                name: "下载量",
                type: "bar",
                data: dataarr
            };
            //饼状图赋值
            var data = [];
            for (let i = 0; i < this.SeverComponentTopList.length; i++) {
                data.push({
                    value: this.SeverComponentTopList[i].score,
                    name: this.SeverComponentTopList[i].name
                });
            }
            this.option1.series = {
                type: "pie",
                data: data
            };
        },
        //服务数据转化
        getdata1() {
            //柱状图赋值，前6个月
            let Xarr = [];
            let dataarr = [];
            let item = {};
            for (let i of this.severRankList) {
                Xarr.push(i.name);
                dataarr.push(i.score);
            }
            this.option2.xAxis.data = Xarr;

            this.option2.series = {
                name: "销量",
                type: "bar",
                data: dataarr
            };
            //饼状图赋值，下载量
            let data = [];
            for (let i = 0; i < this.severTopList.length; i++) {
                data.push({
                    value: this.severTopList[i].score,
                    name: this.severTopList[i].name
                });
            }
            this.option3.series = {
                type: "pie",
                data: data
            };
        },
        getcontent(row, event, column) {
            let id = row.id.toString();
            this.$router.push({ path: "/community/main/newscontent/" + id });
        },
        goToCommunity() {
            this.$router.push({ path: "/community" });
        },
        GOplatform1(data) {
            this.$store.state.user.dashaboardindex = data;
            this.$router.push({ path: "/dashboard" });
        },
        gotonotice() {
            this.$router.push({ path: "/notice" });
        },
        goToContent(row) {
            this.$router.push({ path: "noticecontent/" + row.id });
        },
        //获取通知列表
        getNoticeList() {
            fetchNoticeList(this.listQuery).then(response => {
                if (response.data.code === 2000) {
                    for (let i = 0; i < response.data.items.length; i++) {
                        let longtime = response.data.items[i].creatE_DATE;
                        let shorttime = longtime.substring(0, 10);
                        this.noticeList.push({
                            title: response.data.items[i].noticE_TITLE,
                            date: response.data.items[i].noticE_DATETIME,
                            id: response.data.items[i].noticE_ID,
                            content: response.data.items[i].noticE_CONTENT,
                            writter: response.data.items[i].creater,
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
        //本地数据测试
        // getNoticeList() {
        //     for (let i = 0; i < this.list1.items.length; i++) {
        //         this.noticeList.push({
        //              title: this.list1.items[i].noticE_TITLE,
        //             // date: response.data.item[i].NOTICE_DATETIME,
        //             id: this.list1.items[i].noticE_ID
        //             // content: response.data.item[i].NOTICE_CONTENT,
        //             // writter: response.data.item[i].NOTICE_ORGNAME
        //         });
        //     }
        // },
        //获取论坛列表 待修改表
        getCommuntityList() {
            fetchCommunityList(this.listQuery).then(response => {
                if (response.data.code === 2000) {
                    for (let i = 0; i < response.data.item.length; i++) {
                        this.newslist.push({
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
        },
        //获取服务排名数据
        getSeverRank() {
            fetchSeverList(this.listRankQuery).then(response => {
                if (response.data.code === 2000) {
                    for (
                        let i = 0;
                        i < response.data.dtComponentMonth.length;
                        i++
                    ) {
                        this.severRankList.push({
                            name: response.data.dtComponentMonth[i].TOTAL,
                            score: response.data.dtComponentMonth[i].CHECK_MONTH
                        });
                    }
                    for (let i = 0; i < response.data.list2.dtComponentTop.length; i++) {
                        this.severTopList.push({
                            name: response.data.dtComponentTop[i].COMPONENT_NAME,
                            score: response.data.dtComponentTop[i].DOWNLOAD_TIMES
                        });
                    }
                    for (let i = 0; i < response.data.dtServerMonth.length; i++) {
                        this.SeverComponentRankList.push({
                            name: response.data.dtServerMonth[i].TOTAL,
                            score: response.data.dtServerMonth[i].CHECK_MONTH
                        });
                    }
                    for (
                        let i = 0;
                        i < response.data.dtServerCountTop.length;
                        i++
                    ) {
                        this.SeverComponentTopList.push({
                            name: response.data.dtServerCountTop[i].SERVICE_NAME,
                            score:response.data.dtServerCountTop[i].SERVICE_TIMES
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
        //获取服务排名数据本地数据测试
        getSeverRank() {
            for (let i = 0; i < this.list2.dtComponentMonth.length; i++) {
                this.severRankList.push({
                    name: this.list2.dtComponentMonth[i].TOTAL,
                    score: this.list2.dtComponentMonth[i].CHECK_MONTH
                });
            }
            for (let i = 0; i < this.list2.dtComponentTop.length; i++) {
                this.severTopList.push({
                    name: this.list2.dtComponentTop[i].COMPONENT_NAME,
                    score: this.list2.dtComponentTop[i].DOWNLOAD_TIMES
                });
            }
            //
            for (let i = 0; i < this.list2.dtServerMonth.length; i++) {
                this.SeverComponentRankList.push({
                    name: this.list2.dtServerMonth[i].TOTAL,
                    score: this.list2.dtServerMonth[i].CHECK_MONTH
                });
            }
            for (let i = 0; i < this.list2.dtServerCountTop.length; i++) {
                this.SeverComponentTopList.push({
                    name: this.list2.dtServerCountTop[i].SERVICE_NAME,
                    score: this.list2.dtServerCountTop[i].SERVICE_TIMES
                });
            }
            this.getdata(); //组件echarts赋值
            this.getdata1(); //服务echarts赋值
            this.drawLine(); //绘制echarts图
        },
        //获取组件排行榜
        getSeverComponentRank() {
            fetchSeverComponentList(this.listRankQuery).then(response => {
                if (response.data.code === 2000) {
                    for (let i = 0; i < response.data.item.length; i++) {
                        this.SeverComponentRankList.push({
                            name: response.data.item[i].CHECK_MONTH,
                            score: response.data.item[i].TOTAL
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
        this.getSeverRank(); //获取服务排名
    },
    created() {
        //.getNoticeList(); //拉取通知列表
        // this.getSeverComponentRank(); //获取组件现在排名
    }
};
</script>




<style lang="scss">
.home {
    margin-bottom: 25px;
}
.row1 {
    margin-top: 20px;
    .headerbutton {
        float: right;
        margin-right: 0px;
    }
    img {
        width: 25px;
        height: 25px;
    }
    //max-height: 400px;
    .foot {
        float: right;
        font-size: 13px;
        color: gray;
    }
    .canven {
        text-align: center;
    }
    .newslogo {
        img {
            width: 16px;
            height: 16px;
            border-radius: 1em;
        }
    }
    .header {
        font-weight: bold;
        font-size: 20px;
        max-height: 30px;
        .title {
            margin-top: 1px;
            margin-bottom: 0px;
        }
    }
}
.row2 {
    margin-top: 20px;
    margin-bottom: 20px;
    .el-card {
        min-height: 200px;
    }
    .logocard {
        font-weight: bold;
        font-size: 20px;
        img {
            width: 25px;
            height: 25px;
        }
    }
    .platform {
        margin-top: 20px;
        //overflow: hidden;
        img {
            display: block;
            width: 80px;
            height: 80px;
            transition: all 1s;
        }
        img:hover {
            /*鼠标悬浮效果*/
            /*发光*/
            //background-color: #58b7ff;
            transform: scale(1.1);
            //background-image:url(../../../app_src/imgs/platform.png);
        }
    }
    .title {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }
    .content {
        font-size: 13px;
        margin-top: 15px;
        line-height: 25px;
        color: gray;
    }
}
.row3 {
    margin-top: 20px;
    .headerbutton {
        float: right;
        margin-right: 0px;
    }
    img {
        width: 25px;
        height: 25px;
    }
    //max-height: 400px;
    .foot {
        float: right;
        font-size: 13px;
        color: gray;
    }
    .newslogo {
        img {
            width: 25px;
            height: 25px;
            border-radius: 1em;
        }
    }
    .header {
        font-weight: bold;
        font-size: 20px;
        max-height: 40px;
        .title {
            margin-top: 1px;
            margin-bottom: 0px;
        }
    }
    .parent {
        text-align: center;
        .myChart {
            width: 350px;
            height: 300px;
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }
}
.el-card {
    font-family: "微软雅黑";
}
</style>
