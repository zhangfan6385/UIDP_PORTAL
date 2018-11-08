<template>
    <div id="community" class="community">
        <el-row :gutter="20" type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="15">
                <div class="LeftContainer">
                    <el-card>
                        <el-table :data="newslist" @row-click="getcontent" height="550px">
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
                            <el-table-column label="主题" header-align="center" show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <span class="newstitle">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="readNumber" label="单击" width="100px" align="center"></el-table-column>
                            <el-table-column prop="offer" label="悬赏" width="100px" align="center"></el-table-column>
                            <el-table-column prop="commentNumber" label="评论" width="100px" align="center"></el-table-column>
                            <el-table-column prop="writter" label="作者" width="100px" align="center"></el-table-column>
                            <el-table-column prop="upTime" label="发表日期" width="100px" align="center"></el-table-column>
                        </el-table>
                        <div class="page">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery1.page" :page-sizes="[8, 15, 20, 25]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
                            </el-pagination>
                        </div>
                    </el-card>
                </div>
            </el-col>

            <el-col :span="5">
                <div class="MainContainer">
                    <el-card>
                        <div class="rank">
                            <img src="../../../app_src/imgs/title.png">
                            <br>
                            <el-table :data="scoreList">
                                <el-table-column prop="index" label="排名" align="center" width="70px">
                                    <template slot-scope="scope">
                                        <span :class="addclass(scope.$index+1)">{{scope.$index+1}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="USER_NAME" label="姓名" align="center" show-overflow-tooltip></el-table-column>
                                <el-table-column prop="TOTAL" label="发帖量" align="center" width="70px"></el-table-column>
                            </el-table>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import {
    fetchCommunityList,
    getTop,
    getCardVisable,
    payScore
} from "@/app_src/api/community";
export default {
    data() {
        return {
            scoreList: [],
            newslist: [],
            currentPage1: 1,
            //帖子列表查询
            listQuery1: {
                limit: 8,
                page: 1,
                POST_TYPE: null,
                USER_ID: null,
                TITLE_NAME: null,
                BEGIN_SEND_DATE: null,
                END_SEND_DATE: null
            },
            userQuery: {
                POST_ID: "",
                POST_USER_ID: "",
                USER_ID: "",
                SCORE: ""
            },
            total: null,
            loading: true
        };
    },
    methods: {
        addclass(i) {
            switch (i) {
                case 1:
                    return "top1";
                case 2:
                    return "top2";
                case 3:
                    return "top3";
                default:
                    return "top";
            }
        },
        handleSizeChange(val) {
            //增加显示数据方法
            this.listQuery1.limit = val;
            this.getCommuntityList();
        },
        handleCurrentChange(val) {
            //翻页方法
            this.listQuery1.page = val;
            this.getCommuntityList();
        },
        getcontent(row, event, column) {
            //论坛首页点击事件
            let id = row.id.toString();
            if (row.type === 1) {
                //经验分享帖
                if (row.point === 0) {
                    //判断分值
                    this.$router.push({
                        path: "/community/main/newscontent/" + id
                    });
                } else if (this.getUserId === null) {
                    //判断登录状态
                    this.$alert("您还未登录,无法查看经验分享！", "登录提示", {
                        confirmButtonText: "确定"
                    });
                } else if (this.getUserLv === '0') {
                    //判断登录人权限
                    this.$router.push({
                        path: "/community/main/newscontent/" + id
                    });
                } else if (this.getUserId === row.writterID) {
                    //判断发帖人是否为登录人
                    this.$router.push({
                        path: "/community/main/newscontent/" + id
                    });
                } else if (this.getUserScore < row.point) {
                    //判断积分
                    this.$alert("您的积分不足！无法查看", "积分提示", {
                        confirmButtonText: "确定"
                    });
                } else {
                    //进行扣分查询
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
                                    "的帖子吗?",
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
        //获取帖子列表
        getCommuntityList() {
            this.newslist = [];
            fetchCommunityList(this.listQuery1).then(response => {
                if (response.data.code === 2000) {
                    this.loading = false;
                    this.total = response.data.total;
                    for (let i = 0; i < response.data.items.length; i++) {
                        let time = response.data.items[i].SEND_DATE.substring(
                            0,
                            10
                        );
                        this.newslist.push({
                            id: response.data.items[i].POST_ID,
                            writterID: response.data.items[i].USER_ID,
                            writter: response.data.items[i].CREATER,
                            type: response.data.items[i].POST_TYPE,
                            title: response.data.items[i].TITLE_NAME,
                            upTime: time,
                            offer: response.data.items[i].SCORE_POINT,
                            commentNumber: response.data.items[i].COMMONT_COUNT,
                            readNumber: response.data.items[i].BROWSE_NUM,
                            content: response.data.items[i].POST_CONTENT,
                            point: response.data.items[i].SCORE_POINT
                        });
                    }
                } else {
                    this.loading = false;
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
        //  获取Top排行
        getTopList() {
            getTop().then(response => {
                if (response.data.code === 2000) {
                    this.scoreList = response.data.items;
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
        this.getCommuntityList();
        this.getTopList();
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
.community {
    .card {
        max-height: 150px;
    }
    .header {
        border-radius: 0.5em;
        min-height: 65px;
        max-height: 80px;
        //background: rgb(194, 206, 195);
        .headerItem {
            float: right;
            padding-right: 20px;
            margin-left: 40px;
            margin-bottom: 20px;
        }
    }
    .LeftContainer {
        border-radius: 0.5em;
        min-height: 390px;
        .newslogo {
            img {
                width: 30px;
                height: 30px;
                border-radius: 1em;
            }
        }
        .page {
            text-align: center;
        }
        .title {
            margin-left: 15px;
            font-weight: 200;
            font-size: 20px;
            font-weight: bold;
            font-family: "SimHei";
            text-align: center;
        }
        .info {
            line-height: 25px;
            margin-bottom: 20px;
            color: gray;
            font-size: 10px;
            img {
                width: 13px;
                height: 13px;
            }
        }
        .pageclass {
            text-align: center;
        }
        .newstitle {
            text-align: left;
        }
        .newstitle:hover {
            text-decoration: underline;
            color: red;
            cursor: pointer;
        }
    }
    .MainContainer {
        border-radius: 0.5em;
        min-height: 100px;
        min-height: 390px;
        text-align: center;
        .rank {
            img {
                width: 200px;
                height: 40px;
            }
        }
    }
    .top {
        font-weight: bold;
        color: white;
        text-align: center;
        width: 25px;
        line-height: 25px;
        background-color: #7f7f7f;
        border-radius: 5px;
        display: -moz-inline-box; /* css注释：for ff2 */
        display: inline-block;
    }
    .top1 {
        font-weight: bold;
        color: white;
        text-align: center;
        width: 25px;
        line-height: 25px;
        background-color: #c00000;
        border-radius: 5px;
        display: -moz-inline-box; /* css注释：for ff2 */
        display: inline-block;
    }

    .top2 {
        font-weight: bold;
        color: white;
        text-align: center;
        width: 25px;
        line-height: 25px;
        background-color: #00b050;
        border-radius: 5px;
        display: -moz-inline-box; /* css注释：for ff2 */
        display: inline-block;
    }
    .top3 {
        font-weight: bold;
        color: white;
        text-align: center;
        width: 25px;
        line-height: 25px;
        background-color: #ffc000;
        border-radius: 5px;
        display: -moz-inline-box; /* css注释：for ff2 */
        display: inline-block;
    }
}
</style>


