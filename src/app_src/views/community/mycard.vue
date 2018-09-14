<template>
    <div id="mycard" class="mycard">
        <el-row type="flex" :gutter="20">
            <el-col :span="2"></el-col>
            <el-col :span="6">
                <div class="leftcontainer">
                    <el-card :body-style="{ padding: '0px' }">
                        <div class="photo">
                            <img src="../../../app_src/imgs/avatar.png">
                        </div>
                        <div style="padding: 14px;" class="info">
                            <span>
                                姓名：{{userinfo.USER_NAME}}
                                <br> 公司：{{userinfo.ORG_NAME}}
                                <br> 积分：{{score}}
                                <br> 手机：{{userinfo.MOBILE}}
                                <br> 注册邮箱：{{userinfo.USER_EMAIL}}
                            </span>
                        </div>
                    </el-card>
                </div>
            </el-col>

            <el-col :span="14">
                <div class="rightcontainer">
                    <el-card>
                        <div class="title">
                            我的帖子
                        </div>

                        <el-table :data="myCollectionList" @row-click="getcontent">

                            <el-table-column label="类型" prop="type" align="center">
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
                            <el-table-column label="主题" header-align="center">
                                <template slot-scope="scope">
                                    <span class="newstitle">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="阅读量" prop="readNumber" align="center"></el-table-column>
                            <el-table-column label="悬赏金额" prop="offer" align="center"></el-table-column>
                            <el-table-column label="评论人数" prop="commentNumber" align="center"></el-table-column>
                            <!-- <el-table-column label="作者" prop="writter" align="center"></el-table-column> -->
                            <el-table-column label="发帖日期" prop="upTime" align="center"></el-table-column>
                        </el-table>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import { fetchMyCommunityList } from "@/app_src/api/community";
export default {
    data() {
        return {
            userinfo: {},
            score: "",
            myCollectionList: [],
            queryList: {
                limit: 6,
                page: 1,
                POST_TYPE: null,
                USER_ID: null,
                TITLE_NAME: null,
                BEGIN_SEND_DATE: null,
                END_SEND_DATE: null
            }
        };
    },
    methods: {
        handleSizeChange(val) {
            this.queryList.limit = val;
            this.getMyCard();
        },
        handleCurrentChange(val) {
            this.queryList.page = val;
            this.getMyCard();
        },
        getcontent(data) {
            var id = data.id.toString();
            this.$router.push({ path: "/community/main/newscontent/" + id });
        },
        getUserInfo() {
            this.userinfo = this.$store.state.user.userinfo[0];
            this.score = this.getUserScore;
        },
        getMyCard() {
            this.queryList.USER_ID = this.$store.state.user.userID;
            fetchMyCommunityList(this.queryList).then(response => {
                if (response.data.code === 2000) {
                    for (let i = 0; i < response.data.items.length; i++) {
                        let time = response.data.items[i].CREATE_DATE.substring(
                            0,
                            10
                        );
                        this.myCollectionList.push({
                            id: response.data.items[i].POST_ID,
                            writter: response.data.items[i].CREATER,
                            type: response.data.items[i].POST_TYPE,
                            title: response.data.items[i].TITLE_NAME,
                            offer: response.data.items[i].SCORE_POINT,
                            commentNumber: response.data.items[i].COMMONT_COUNT,
                            upTime: time,
                            readNumber: response.data.items[i].BROWSE_NUM,
                            content: response.data.items[i].POST_CONTENT
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
        this.getUserInfo();
        this.getMyCard();
    },
    computed: {
        getUserScore() {
            return this.$store.state.user.SCORE;
        }
    },
    watch: {
        getUserScore(data) {
            this.score = data;
        }
    }
};
</script>
<style lang="scss">
.mycard {
    .leftcontainer {
        min-height: 450px;
        text-align: center;
        .el-card {
            min-height: 450px;
        }
        .img {
            text-align: center;
        }
        .photo {
            margin-top: 45px;
        }
        .info {
            text-align: left;
            font-size: 18px;
            line-height: 35px;
            font-family: "微软雅黑";
        }
    }
    .rightcontainer {
        min-height: 350px;
        border-radius: 0.5em;
        .newslogo {
            img {
                width: 30px;
                height: 30px;
                border-radius: 1em;
            }
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
        .content {
            padding-left: 20px;
            margin-top: 15px;
            margin-left: 25px;
            margin-right: 20px;
            font-size: 15px;
            line-height: 20px;
            color: rgb(53, 49, 49);
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
        .newstitle:hover {
            text-decoration: underline;
            color: red;
            cursor: pointer;
        }
        .pageclass {
            text-align: center;
        }
    }
}
</style>