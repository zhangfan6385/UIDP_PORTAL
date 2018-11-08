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
                                        通知通告
                                        <div class="headerbutton">
                                            <el-button type="primary" size="mini" @click="gotonotice">更多...</el-button>
                                            <!-- <el-button type="primary" size="mini" @click="test"> 全局数据展示</el-button>  -->
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <hr>
                        <el-table :data="noticeList" :show-header="false" @row-click="goToContent">
                            <el-table-column show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <span class="noticetitle">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <!-- <el-table-column  prop="writter" align="center"></el-table-column> -->
                            <el-table-column align="center" width="100px">
                                <template slot-scope="scope">
                                    <span class="noticetitle">{{scope.row.time}}</span>
                                </template>
                            </el-table-column>
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
                                            <el-button type="primary" size="mini" @click="goToCommunity">进入论坛</el-button>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <hr>
                        <el-table :data="newslist" @row-click="getcontent" :show-header="false">
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
                            <el-table-column label="主题" show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <span class="communitytitle">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="发帖时间" show-overflow-tooltip width="100px">
                                <template slot-scope="scope">
                                    <span class="communitytitle">{{scope.row.upTime}}</span>
                                </template>
                            </el-table-column>
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
                                <el-col :span="1"></el-col>
                                <el-col :span="3">

                                    <div class="platform">
                                        <img src="../../../app_src/imgs/platform.png" title="c#平台" @click="GOplatform1(0)">
                                    </div>
                                </el-col>
                                <el-col :span="5">
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

                                <el-col :span="3">
                                    <el-button type="primary" size="mini" @click="GOplatform1(0)" class="button1">点击下载</el-button>
                                    <!-- <div class="button1">
                                        <img src="../../../app_src/imgs/download1.png" title="C#下载" @click="GOplatform1(0)">
                                    </div> -->
                                </el-col>
                                <el-col :span="1"></el-col>
                                <!-- <el-col :span="1"></el-col> -->
                                <el-col :span="3">
                                    <div class="platform">
                                        <img src="../../../app_src/imgs/GOplatform.png" title="GO平台" @click="GOplatform1(1)">
                                    </div>
                                </el-col>

                                <el-col :span="5">
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
                                <el-col :span="3">
                                    <el-button type="primary" size="mini" @click="GOplatform1(1)" class="button1">点击下载</el-button>
                                    <!-- <div class="button1">
                                        <img src="../../../app_src/imgs/download2.png" title="GO#下载" @click="GOplatform1(1)">
                                    </div> -->
                                </el-col>
                                <el-col :span="1"></el-col>
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
                            <el-col :span="24">
                                <div class="header">
                                    <el-row type="flex">
                                        <el-col :span="2">
                                            <img src="../../../app_src/imgs/component.png" title="组件">
                                        </el-col>
                                        <el-col :span="22">
                                            <div class="title">
                                                组件排行
                                                <div class="headerbutton">
                                                    <el-button type="primary" size="mini" @click="getmore(0)"> 更多...</el-button>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>

                                </div>
                                <hr>
                                <div class="parent">
                                    <div id="myChart2" class="myChart"></div>
                                    <!-- <el-carousel-item>
                                            <div id="myChart1" class="myChart"></div>
                                        </el-carousel-item> -->
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>

                <el-col :span="10">
                    <el-card>
                        <el-row type="flex">
                            <el-col :span="24">
                                <div class="header">
                                    <el-row>
                                        <el-col :span="2">
                                            <img src="../../../app_src/imgs/sever.png" title="服务">
                                        </el-col>
                                        <el-col :span="22">
                                            <div class="title">
                                                服务排行
                                                <div class="headerbutton">
                                                    <el-button type="primary" size="mini" @click="getmore(1)"> 更多...</el-button>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                                <hr>
                                <div class="parent">
                                    <div id="myChart" class="myChart"></div>
                                    <!-- <el-carousel-item>
                                            <div id="myChart3" class="myChart"></div>
                                        </el-carousel-item> -->
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class="statistics">
            <!-- <el-dialog :visible.sync="showStatistics" title="全部排行榜">
                <el-card>
                    <div class="box">
                        <el-carousel trigger="click" height="500px" :initial-index="type" id="dialogdata">
                            <el-carousel-item>
                                <div id="allcomponentchart" class="allchart"></div>
                            </el-carousel-item>
                            <el-carousel-item>
                                <div id="allseverchart" class="allchart"></div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-card>
            </el-dialog> -->
            <el-dialog :visible.sync="showStatistics" title="组件排行榜">
                <el-card>
                    <div class="box">
                        <div id="allcomponentchart" class="allchart"></div>
                    </div>
                </el-card>
            </el-dialog>

            <el-dialog :visible.sync="showStatistics1" title="服务排行榜">
                <el-card>
                    <div class="box">
                        <div id="allseverchart" class="allchart"></div>
                    </div>
                </el-card>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import { fetchNoticeList } from "@/app_src/api/notice";
import { fetchAlldata } from "@/app_src/api/home";
import {
    fetchCommunityList,
    getCardVisable,
    payScore
} from "@/app_src/api/community";
//import { fetchSeverList } from "@/app_src/api/sever";
//import { fetchSeverComponentList } from "@/app_src/api/severcomponent";
export default {
    data() {
        return {
            noticeList: [],
            newslist: [],
            severRankList: [],
            severTopList: [],
            SeverComponentRankList: [],
            SeverComponentTopList: [],
            componentAllList: [],
            severAllList: [],
            type: 0,
            showStatistics: false,
            showStatistics1: false,
            userQuery: {
                POST_ID: "",
                POST_USER_ID: "",
                USER_ID: "",
                SCORE: ""
            },
            //柱状图数据
            option: {
                title: {
                    text: ""
                },
                tooltip: {},
                xAxis: {
                    data: [],
                    axisLabel: {
                        interval: 0,
                        rotate: 40,
                        grid: {
                            left: "10%",
                            bottom: "35%"
                        },
                        textStyle: {
                            fontSize: 11
                        }
                        // formatter: function(value) {
                        //     debugger;
                        //     var ret = ""; //拼接加\n返回的类目项
                        //     var maxLength = 2; //每项显示文字个数
                        //     var valLength = value.length; //X轴类目项的文字个数
                        //     var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                        //     if (rowN > 1) {
                        //         for (var i = 0; i < rowN; i++) {
                        //             var temp = ""; //每次截取的字符串
                        //             var start = i * maxLength; //开始截取的位置
                        //             var end = start + maxLength; //结束截取的位置
                        //             //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                        //             temp = value.substring(start, end) + "\n";
                        //             ret += temp; //凭借最终的字符串
                        //         }
                        //         return ret;
                        //     } else {
                        //         return value;
                        //     }
                        // }
                    }
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
            // //饼状图数据初始化
            // option1: {
            //     title: { text: "半年下载量详情" },
            //     tooltip: {},
            //     series: [
            //         {
            //             name: "月份",
            //             type: "pie",
            //             data: []
            //         }
            //     ]
            // },
            //组件柱状图数据初始化
            option2: {
                title: {
                    text: ""
                },
                tooltip: {},
                xAxis: {
                    data: [],
                    axisLabel: {
                        interval: 0,
                        rotate: 40,
                        grid: {
                            left: "10%",
                            bottom: "35%"
                        },
                        textStyle: {
                            fontSize: 11
                        }
                        // formatter: function(value) {
                        //     debugger;
                        //     var ret = ""; //拼接加\n返回的类目项
                        //     var maxLength = 3; //每项显示文字个数
                        //     var valLength = value.length; //X轴类目项的文字个数
                        //     var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                        //     if (rowN > 1) {
                        //         for (var i = 0; i < rowN; i++) {
                        //             var temp = ""; //每次截取的字符串
                        //             var start = i * maxLength; //开始截取的位置
                        //             var end = start + maxLength; //结束截取的位置
                        //             //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                        //             temp = value.substring(start, end) + "\n";
                        //             ret += temp; //凭借最终的字符串
                        //         }
                        //         return ret;
                        //     } else {
                        //         return value;
                        //     }
                        // }
                    }
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
            componentOption: {
                dataZoom: [
                    {
                        id: "dataZoomY",
                        type: "slider",
                        yAxisIndex: [0],
                        filterMode: "empty",
                        start: 0,
                        end: 100
                    }
                ],
                title: {
                    text: "组件下载排行"
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                legend: {
                    data: ["组件"]
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: {
                    type: "value",
                    boundaryGap: [0, 0.1]
                },
                yAxis: {
                    type: "category",
                    data: []
                },
                series: [
                    {
                        name: "2011年",
                        type: "bar",
                        data: []
                    }
                ]
            },
            // componentOption: {
            //     title: {
            //         text: "组件下载统计",
            //         subtext: "大港油田",
            //         x: "center"
            //     },
            //     tooltip: {
            //         trigger: "item",
            //         formatter: "{a} <br/>{b} : {c} ({d}%)"
            //     },
            //     legend: {
            //         type: "scroll",
            //         orient: "vertical",
            //         right: 10,
            //         top: 20,
            //         bottom: 20,
            //         data: [],

            //         selected: []
            //     },
            //     series: []
            // },
            // severOption: {
            //     title: {
            //         text: "服务调用统计",
            //         subtext: "大港油田",
            //         x: "center"
            //     },
            //     tooltip: {
            //         trigger: "item",
            //         formatter: "{a} <br/>{b} : {c} ({d}%)"
            //     },
            //     legend: {
            //         type: "scroll",
            //         orient: "vertical",
            //         right: 10,
            //         top: 20,
            //         bottom: 20,
            //         data: [],

            //         selected: []
            //     },
            //     series: []
            // },
            severOption: {
                dataZoom: [
                    {
                        id: "dataZoomY",
                        type: "slider",
                        yAxisIndex: [0],
                        filterMode: "empty",
                        start: 0,
                        end: 100
                    }
                ],
                title: {
                    text: "服务下载排行"
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                legend: {
                    data: ["组件"]
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: {
                    type: "value",
                    boundaryGap: [0, 0.1]
                },
                yAxis: {
                    type: "category",
                    data: []
                },
                series: [
                    {
                        name: "2011年",
                        type: "bar",
                        data: []
                    }
                ]
            },
            // option3: {
            //     title: { text: "半年下载量详情" },
            //     tooltip: {},
            //     series: [
            //         {
            //             name: "销量",
            //             type: "pie",
            //             data: []
            //         }
            //     ]
            // },

            //查询列表参数(公告,数据)
            listQuery: {
                limit: 6,
                page: 1
            },
            topQueryList: {
                limit: 10
            }
        };
    },
    methods: {
        drawLine() {
            //首页echarts初始化方法
            let myChart = this.$echarts.init(
                //初始化服务柱状图
                document.getElementById("myChart")
            );
            myChart.setOption(this.option);

            // let myChart1 = this.$echarts.init(//初始化服务饼状图
            //     document.getElementById("myChart1")
            // );
            // myChart1.setOption(this.option1);

            let myChart2 = this.$echarts.init(
                //初始化组件柱状图
                document.getElementById("myChart2")
            );
            myChart2.setOption(this.option2);

            // let myChart3 = this.$echarts.init(//初始化组件饼状图
            //     document.getElementById("myChart3")
            // );
            // myChart3.setOption(this.option3);
        },
        getcontent(row, event, column) {
            let id = row.id.toString();
            if (row.type === 1) {
                if (row.point === 0) {
                    this.$router.push({
                        path: "/community/main/newscontent/" + id
                    });
                } else if (this.getUserId === null) {
                    this.$alert("您还未登录，无法查看经验分享！", "登录提示", {
                        confirmButtonText: "确定"
                    });
                } else if (this.getUserLv === "0") {
                    this.$router.push({
                        path: "/community/main/newscontent/" + id
                    });
                } else if (this.getUserId === row.writterID) {
                    this.$router.push({
                        path: "/community/main/newscontent/" + id
                    });
                } else if (this.getUserScore < row.point) {
                    this.$alert("您的积分不足，无法查看！", "积分提示", {
                        confirmButtonText: "确定"
                    });
                } else {
                    this.userQuery.POST_ID = row.id;
                    this.userQuery.POST_USER_ID = row.writterID;
                    this.userQuery.SCORE = row.point;
                    this.userQuery.USER_ID = this.getUserId;
                    getCardVisable(this.userQuery).then(response => {
                        if (response.data === 0) {
                            this.$confirm(
                                "您确定花费" +
                                    row.point +
                                    "分查看标题为" +
                                    row.title +
                                    "的帖子吗？",
                                "帖子查看提示",
                                {
                                    confirmButtonText: "确定",
                                    cancelButtonText: "取消",
                                    type: "warning"
                                }
                            )
                                .then(() => {
                                    payScore(this.userQuery).then(response => {
                                        if (response.data.code === 2000) {
                                            this.$message({
                                                type: "success",
                                                message: "扣除成功！"
                                            });
                                            //this.$sotre.state.user.userinfo[0].score -= row.point;
                                            this.$router.push({
                                                path:
                                                    "/community/main/newscontent/" +
                                                    id
                                            });
                                        } else {
                                            this.$message({
                                                type: "error",
                                                message: "网络错误，扣除失败！"
                                            });
                                        }
                                    });
                                })
                                .catch(() => {
                                    this.$message({
                                        type: "info",
                                        message: "取消查看"
                                    });
                                });
                        } else {
                            this.$router.push({
                                path: "/community/main/newscontent/" + id
                            });
                        }
                    });
                }
            } else {
                this.$router.push({
                    path: "/community/main/newscontent/" + id
                });
            }
        },
        goToCommunity() {
            this.$router.push({ path: "/community" });
        },
        GOplatform1(data) {
            //获取点击图标索引
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
                if (
                    response.data.code === 2000 &&
                    response.data.items != null
                ) {
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

        //获取论坛列表
        getCommuntityList() {
            fetchCommunityList(this.listQuery).then(response => {
                if (
                    response.data.code === 2000 &&
                    response.data.items != null
                ) {
                    for (let i = 0; i < response.data.items.length; i++) {
                        var time = response.data.items[i].SEND_DATE.substring(
                            0,
                            10
                        );
                        this.newslist.push({
                            id: response.data.items[i].POST_ID,
                            writter: response.data.items[i].CREATER,
                            writterID: response.data.items[i].USER_ID,
                            type: response.data.items[i].POST_TYPE,
                            title: response.data.items[i].TITLE_NAME,
                            upTime: time,
                            point: response.data.items[i].SCORE_POINT
                        });
                    }
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
        //获取服务排名数据
        getSeverRank() {
            fetchAlldata(this.topQueryList).then(response => {
                if (response.data.code === 2000) {
                    this.severTopList = response.data.dtServerCountTop; //服务下载量柱状图数据
                    // for (
                    //     //服务下载量饼状图数据
                    //     let i = 0;
                    //     i < response.data.dtServerMonth.length;
                    //     i++
                    // ) {
                    //     this.severRankList.push({
                    //         name: response.data.dtServerMonth[i].CHECK_MONTH,
                    //         value: response.data.dtServerMonth[i].TOTAL
                    //     });
                    // }
                    this.SeverComponentTopList = response.data.dtComponentTop; //组件下载量柱状图数据
                    // for (
                    //     //组件下载量饼状图数据
                    //     let i = 0;
                    //     i < response.data.dtComponentMonth.length;
                    //     i++
                    // ) {
                    //     this.SeverComponentRankList.push({
                    //         name: response.data.dtComponentMonth[i].CHECK_MONTH,
                    //         value: response.data.dtComponentMonth[i].TOTAL
                    //     });
                    // }
                    this.changedata();
                    this.drawLine(); //绘制echarts图
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
            // //option1 服务饼状图数据转化
            // this.option1.series = [
            //     {
            //         name: "服务下载量",
            //         type: "pie",
            //         data: this.severRankList
            //     }
            // ];
            //option2 组件柱状图数据转化
            let Xdata1 = [];
            let Comdata = [];
            for (var com of this.SeverComponentTopList) {
                Xdata1.push(com.COMPONENT_NAME);
                Comdata.push(com.DOWNLOAD_TIMES);
            }
            this.option2.xAxis.data = Xdata1;
            this.option2.series = [
                {
                    name: "组件下载量",
                    type: "bar",
                    data: Comdata
                }
            ];
            // //option3 组件饼状图转化
            // this.option3.series = [
            //     {
            //         name: "组件下载量",
            //         type: "pie",
            //         data: this.SeverComponentRankList
            //     }
            // ];
        },
        dialogdrawline() {
            //echarts初始化
            let allcomponentchart = this.$echarts.init(
                document.getElementById("allcomponentchart")
            );
            allcomponentchart.setOption(this.componentOption);

            let allseverchart = this.$echarts.init(
                document.getElementById("allseverchart")
            );
            allseverchart.setOption(this.severOption);
        },
        getalldata() {
            //拉取top数据
            fetchAlldata().then(response => {
                if (response.data.code === 2000) {
                    this.componentAllList = response.data.dtComponentTop;
                    this.severAllList = response.data.dtServerCountTop;
                    // //饼状图数据转化
                    // let ComList = [];
                    // let ComName = [];
                    // let SerList = [];
                    // let SerName = [];
                    // if (this.componentAllList != null) {
                    //     for (let i = 0; i < this.componentAllList.length; i++) {
                    //         var dialogdata=document.getElementById("dialogdata");

                    //         ComList.push({
                    //             name: this.componentAllList[i].COMPONENT_NAME,
                    //             value: this.componentAllList[i].DOWNLOAD_TIMES
                    //         });
                    //         ComName.push(
                    //             this.componentAllList[i].COMPONENT_NAME
                    //         );
                    //     }
                    //     this.componentOption.legend.data = ComName;
                    //     this.componentOption.series = [
                    //         {
                    //             name: "组件下载量",
                    //             type: "pie",
                    //             radius: "55%",
                    //             center: ["40%", "50%"],
                    //             data: ComList,
                    //             itemStyle: {
                    //                 emphasis: {
                    //                     shadowBlur: 10,
                    //                     shadowOffsetX: 0,
                    //                     shadowColor: "rgba(0, 0, 0, 0.5)"
                    //                 }
                    //             }
                    //         }
                    //     ];
                    //     if (this.severAllList != null) {
                    //         for (let i = 0; i < this.severAllList.length; i++) {
                    //             SerList.push({
                    //                 name: this.severAllList[i].SERVICE_NAME,
                    //                 value: this.severAllList[i].SERVICE_TIMES
                    //             });
                    //             SerName.push(this.severAllList[i].SERVICE_NAME);
                    //         }
                    //         this.severOption.legend.data = SerName;
                    //         this.severOption.series = [
                    //             {
                    //                 name: "组件下载量",
                    //                 type: "pie",
                    //                 radius: "55%",
                    //                 center: ["40%", "50%"],
                    //                 data: SerList,
                    //                 itemStyle: {
                    //                     emphasis: {
                    //                         shadowBlur: 10,
                    //                         shadowOffsetX: 0,
                    //                         shadowColor: "rgba(0, 0, 0, 0.5)"
                    //                     }
                    //                 }
                    //             }
                    //         ];
                    //     }
                    // }
                    this.changeAllData();
                    this.dialogdrawline();
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
        changeAllData() {
            //数据转化
            let ComData = [];
            let ComYarry = [];
            let SerData = [];
            let SerYarry = [];
            if (this.componentAllList != null) {
                for (let i = this.componentAllList.length - 1; i > -1; i--) {
                    ComYarry.push(this.componentAllList[i].COMPONENT_NAME);
                    ComData.push(this.componentAllList[i].DOWNLOAD_TIMES);
                }
                this.componentOption.yAxis.data = ComYarry;
                this.componentOption.series = [
                    {
                        name: "组件下载详情",
                        type: "bar",
                        data: ComData
                    }
                ];
            }
            if (this.severAllList != null) {
                for (let i = this.severAllList.length - 1; i > -1; i--) {
                    SerYarry.push(this.severAllList[i].SERVICE_NAME);
                    SerData.push(this.severAllList[i].SERVICE_TIMES);
                }
                this.severOption.yAxis.data = SerYarry;
                this.severOption.series = [
                    {
                        name: "服务下载详情",
                        type: "bar",
                        data: SerData
                    }
                ];
            }
        },
        getmore(data) {
            if (data === 1) {
                this.showStatistics1 = true;
            } else {
                this.showStatistics = true;
            }
            this.type = data;
            this.getalldata();
        },
        test() {}
    },
    mounted() {
        //获取服务排名
        this.getNoticeList();
        //获取帖子列表
        this.getCommuntityList();
        this.test();
    },
    created() {
        this.getSeverRank();
    },
    computed: {
        getUserId() {
            return this.$store.state.user.userID;
        },
        getUserLv() {
            return this.$store.state.user.roleLv;
        },
        getUserScore() {
            return this.$store.state.user.SCORE;
        }
        // getUserInfo() {
        //     return this.$store.state.user.user.userinfo[0];
        // }
    }
};
</script>




<style lang="scss">
.home {
    margin-bottom: 25px;
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
        .noticetitle： {
            font-size: 20px;
        }
        .noticetitle:hover {
            text-decoration: underline;
            color: red;
            cursor: pointer;
        }
        .communitytitle {
            font-size: 13px;
        }
        .communitytitle:hover {
            text-decoration: underline;
            color: red;
            cursor: pointer;
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
                cursor: pointer;
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
        .button1 {
            margin-top: 45px;
            margin-left: 20px;
            img {
                width: 150px;
                height: 30px;
                border-radius: 5px;
            }
        }
    }
    .row3 {
        margin-top: 20px;
        .headerbutton {
            float: right;
            margin-right: 0px;
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
            img {
                width: 25px;
                height: 25px;
            }
        }
        .parent {
            text-align: center;
            height: 400px;
            .myChart {
                width: 400px;
                height: 400px;
                margin: auto;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
            }
        }
    }
    .statistics {
        .box {
            min-width: 600px;
            min-height: 500px;
            .allchart {
                width: 600px;
                height: 500px;
                margin: auto;
                position: absolute;
            }
        }
    }
    .el-card {
        font-family: "微软雅黑";
        min-height: 380px;
    }
}
</style>
