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
                                            <el-button type="primary" size="mini" @click="test"> 全局数据展示</el-button>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <hr>
                        <el-table :data="noticeList" size="mini" :show-header="false" @row-click="goToContent" height="220px">
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
                        <el-table :data="newslist" @row-click="getcontent" size="mini" :show-header="false" height="220px">
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
//import { fetchSeverList } from "@/app_src/api/sever";
//import { fetchSeverComponentList } from "@/app_src/api/severcomponent";
import { fetchAlldata } from "@/app_src/api/home";

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
                page: 1
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
                    //console.log(response.data.items);
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
            fetchAlldata().then(response => {
                if (response.data.code === 2000) {
                    this.severTopList = response.data.dtServerCountTop; //服务下载量柱状图数据
                    for (
                        //服务下载量饼状图数据
                        let i = 0;
                        i < response.data.dtServerMonth.length;
                        i++
                    ) {
                        this.severRankList.push({
                            name: response.data.dtServerMonth[i].CHECK_MONTH,
                            value: response.data.dtServerMonth[i].TOTAL
                        });
                    }
                    this.SeverComponentTopList = response.data.dtComponentTop; //组件下载量柱状图数据
                    for (
                        //组件下载量饼状图数据
                        let i = 0;
                        i < response.data.dtComponentMonth.length;
                        i++
                    ) {
                        this.SeverComponentRankList.push({
                            name: response.data.dtComponentMonth[i].CHECK_MONTH,
                            value: response.data.dtComponentMonth[i].TOTAL
                        });
                    }
                    console.log(this.severRankList);
                    this.changedata();
                    this.drawLine(); //绘制echarts图
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
        //数据转化
        changedata() {
            //option 服务柱状图转化
            let Xdata = [];
            let Severdata = [];
            for (var sevice of this.severTopList) {
                Xdata.push(sevice.SERVICE_NAME);
                Severdata.push(sevice.SERVICE_TIMES);
            }
            this.option.xAxis.data = Xdata;
            this.option.series = [
                {
                    name: "下载量",
                    type: "bar",
                    data: Severdata
                }
            ];
            //option1 服务饼状图数据转化
            this.option1.series = [
                {
                    name: "服务下载量",
                    type: "pie",
                    data: this.severRankList
                }
            ];
            //option2 组件柱状图数据转化
            let Xdata1 = [];
            let Comdata = [];
            for (var com of this.SeverComponentTopList) {
                Xdata1.push(com.COMPONENT_NAME);
                Comdata.push(com.DOWNLOAD_TIMES);
            }
            this.option2.series = [
                {
                    name: "组件下载量",
                    type: "bar",
                    data: Comdata
                }
            ];
            //option3 组件饼状图转化
            this.option3.series = [
                {
                    name: "服务下载量",
                    type: "pie",
                    data: this.SeverComponentRankList
                }
            ];
        },
        //获取服务排名数据本地数据测试
        // getSeverRank() {
        //     for (let i = 0; i < this.list2.dtComponentMonth.length; i++) {
        //         this.severRankList.push({
        //             name: this.list2.dtComponentMonth[i].TOTAL,
        //             score: this.list2.dtComponentMonth[i].CHECK_MONTH
        //         });
        //     }
        //     for (let i = 0; i < this.list2.dtComponentTop.length; i++) {
        //         this.severTopList.push({
        //             name: this.list2.dtComponentTop[i].COMPONENT_NAME,
        //             score: this.list2.dtComponentTop[i].DOWNLOAD_TIMES
        //         });
        //     }
        //     //
        //     for (let i = 0; i < this.list2.dtServerMonth.length; i++) {
        //         this.SeverComponentRankList.push({
        //             name: this.list2.dtServerMonth[i].TOTAL,
        //             score: this.list2.dtServerMonth[i].CHECK_MONTH
        //         });
        //     }
        //     for (let i = 0; i < this.list2.dtServerCountTop.length; i++) {
        //         this.SeverComponentTopList.push({
        //             name: this.list2.dtServerCountTop[i].SERVICE_NAME,
        //             score: this.list2.dtServerCountTop[i].SERVICE_TIMES
        //         });
        //     }
        //     this.getdata(); //组件echarts赋值
        //     this.getdata1(); //服务echarts赋值
        //     this.drawLine(); //绘制echarts图
        // },
        test(){
            //console.log(this.$store.state.user.total)
            //console.log(this.$store.state.user.msgInfo)
            console.log(this.$store.state.user.userinfo)
            console.log(this.$store.state.user.projList)
        }
    },
    mounted() {
        //获取服务排名
        this.getNoticeList();
        // this.getdata(); //组件echarts赋值
        // this.getdata1(); //服务echarts赋值
    },
    created() {
        this.getSeverRank();
        //getNoticeList(); //拉取通知列表
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
