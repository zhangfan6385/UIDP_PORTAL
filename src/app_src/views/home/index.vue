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
                                            <el-button type="primary" size="mini"> 查看详情</el-button>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <hr>
                        <el-table :data="noticeList" size="mini" :show-header="showheader">
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
                        <el-table :data="newslist" @row-click="getcontent" size="mini" :show-header="showheader">
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
                                        <!-- <img src="../../../app_src/imgs/platform.png" title="c#平台" @click="GOplatform1()"> -->
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
                                        <!-- <img src="../../../app_src/imgs/GOplatform.png" title="GO平台" @click="GOplatform1()"> -->
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
export default {
    data() {
        return {
            noticeList: [
                {
                    title: "重要通知",
                    content: "<h5>大港软件开发通知</h5>",
                    writter: "管理员",
                    time: "2018-8-13"
                },
                {
                    title: "重要通知",
                    content: "<h5>大港软件开发通知</h5>",
                    writter: "管理员",
                    time: "2018-8-13"
                },
                {
                    title: "重要通知",
                    content: "<h5>大港软件开发通知</h5>",
                    writter: "管理员",
                    time: "2018-8-13"
                },
                {
                    title: "重要通知",
                    content: "<h5>大港软件开发通知</h5>",
                    writter: "管理员",
                    time: "2018-8-13"
                },
                {
                    title: "重要通知",
                    content: "<h5>大港软件开发通知</h5>",
                    writter: "管理员",
                    time: "2018-8-13"
                },
                {
                    title: "重要通知",
                    content: "<h5>大港软件开发通知</h5>",
                    writter: "管理员",
                    time: "2018-8-13"
                }
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
            severRankList: [
                { index: "1", name: "张1", score: 1 },
                { index: "2", name: "张2", score: 2 },
                { index: "3", name: "张3", score: 3 },
                { index: "4", name: "张4", score: 4 },
                { index: "5", name: "张5", score: 5 },
                { index: "6", name: "张6", score: 6 },
                { index: "7", name: "张7", score: 7 },
                { index: "8", name: "张7", score: 8 },
                { index: "9", name: "张7", score: 9 },
                { index: "10", name: "张8", score: 10 }
            ],
            SeverComponentRankList: [
                { index: "1", name: "张1", score: 11 },
                { index: "2", name: "张2", score: 12 },
                { index: "3", name: "张3", score: 13 },
                { index: "4", name: "张4", score: 14 },
                { index: "5", name: "张5", score: 15 },
                { index: "6", name: "张6", score: 16 },
                { index: "7", name: "张7", score: 17 },
                { index: "8", name: "张7", score: 18 },
                { index: "9", name: "张7", score: 19 },
                { index: "10", name: "张8", score: 20 }
            ],
            //柱状图数据
            option: {
                title: {
                    text: "组件下载详情"
                },
                tooltip: {},
                xAxis: {
                    data: []
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: []
                    }
                ]
            },
            option1: {
                title: { text: "组件下载详情" },
                tooltip: {},
                series: [
                    {
                        name: "销量",
                        type: "pie",
                        data: []
                    }
                ]
            },
            option2: {
                title: {
                    text: "服务下载详情"
                },
                tooltip: {},
                xAxis: {
                    data: []
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: []
                    }
                ]
            },
            option3: {
                title: { text: "服务下载详情" },
                tooltip: {},
                series: [
                    {
                        name: "销量",
                        type: "pie",
                        data: []
                    }
                ]
            },
            //不显示表头属性
            showheader: false,
            //文字过长隐藏属性
            tooLongHidden: true
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
            for (let i = 0; i < this.SeverComponentRankList.length; i++) {
                data.push({
                    value: this.SeverComponentRankList[i].score,
                    name: this.SeverComponentRankList[i].name
                });
            }
            this.option1.series = {
                type: "pie",
                data: data
            };
        },
        getdata1() {
            let Xarr = [];
            let dataarr = [];
            let item = {};
            for (let i of this.severRankList) {
                //柱状图赋值
                Xarr.push(i.name);
                dataarr.push(i.score);
            }
            this.option2.xAxis.data = Xarr;

            this.option2.series = {
                name: "销量",
                type: "bar",
                data: dataarr
            };
            //饼状图赋值
            let data = [];
            for (let i = 0; i < this.severRankList.length; i++) {
                data.push({
                    value: this.severRankList[i].score,
                    name: this.severRankList[i].name
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
        GOplatform1() {
            this.$router.push({ path: "/dashboard" });
        }
    },
    mounted() {
        this.getdata();
        this.getdata1();
        this.drawLine();
    },
    create() {}
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
        background:url(../../../app_src/imgs/GOplatform.png);
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
