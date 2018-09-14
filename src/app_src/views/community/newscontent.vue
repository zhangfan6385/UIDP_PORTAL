<template>
    <!--主贴界面-->
    <div id="newscontent" class="newscontent">
        <el-row :gutter="20" type="flex">
            <el-col :span="2"> </el-col>
            <el-col :span="20">
                <div class="card">
                    <!--主楼标题按钮界面-->
                    <el-card>
                        <div slot="header" class="cardheader">
                            <span>{{cardcontent.TITLE_NAME}}</span>
                            <div class="operation">
                                <el-button size="mini" @click="delcard" type="danger" v-if="userType===1">
                                    <i class="el-icon-warning"></i>删除本帖
                                </el-button>
                                <el-button size="mini" @click="collection" v-if="cardcontent.COLLECTION_STATE==='0'">
                                    <i class="el-icon-circle-plus"></i>收藏
                                </el-button>
                                <el-button size="mini" @click="uncollection" v-else-if="cardcontent.COLLECTION_STATE==='1'">
                                    <i class="el-icon-remove"></i>取消收藏
                                </el-button>
                                <el-button size="mini" type="info" @click="goAnchor">回复</el-button>
                                <el-button size="mini" type="primary" @click="back">后退</el-button>
                            </div>
                        </div>
                        <!--主贴头像区域-->
                        <el-row>
                            <el-col :span="6">
                                <div class="userhead">
                                    <img src="../../../app_src/imgs/userHead.png">
                                    <div class="logo">
                                        <el-button type="primary" size="mini">楼主</el-button>
                                        <div class="username">
                                            {{cardcontent.USER_NAME}}
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <!--主贴信息界面-->
                            <el-col :span="17">
                                <div class="content">
                                    <p v-html="cardcontent.POST_CONTENT"></p>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="foot">
                            <el-row>
                                <el-col :span="24">
                                    发表日期：{{cardcontent.SEND_DATE|parseTime}}
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                    <!--回复-->
                    <el-card v-for="(commit,key) in commentlist" :key="key">
                        <el-row v-if="cardcontent.USER_ID===getCurrentUserId&&cardcontent.POST_TYPE===3&&cardcontent.POST_STATUS===0">
                            <el-col :span="24">
                                <div class="tieUp">
                                    <el-form :model="commit" ref="score" :rules="rules">
                                        <el-form-item prop="score">
                                            <el-input placeholder="请输入满意积分" v-model.number="commit.BONUS_POINTS"></el-input>
                                        </el-form-item>
                                    </el-form>

                                    <!-- <el-button type="info" size="mini" @click="tieUp(commit)">满意答案</el-button> -->
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <div class="userhead">
                                    <img src="../../../app_src/imgs/userHead.png">
                                    <div class="logo">
                                        <el-button type="primary" size="mini">{{key+2}}楼</el-button>
                                        <div class="username">
                                            {{commit.USER_NAME}}
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <!--主贴信息界面-->
                            <el-col :span="17">
                                <div class="content">
                                    <p v-html="commit.CONTENT"></p>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="foot">
                            <el-row>
                                <el-col :span="24">
                                    发表日期：{{commit.CREATE_DATE|parseTime}}
                                    <el-button type="text" @click="delcommit(commit)" v-if="userType===1">删除</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                    <el-card>
                        <!-- <div slot="header" class="clearfix">
                            <span>发表回复</span>
                        </div> -->
                        <!-- <el-form :model="commit">
                            <el-form-item label="用途类型">
                                <el-input v-model="commit.CONTENT"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submit">提 交</el-button>
                            </el-form-item>
                        </el-form> -->
                        <el-form ref="commit" :model="commit" label-width="80px" id="commit" :rules="rules">
                            <el-form-item :label="type" prop="content">
                                <div class="editor">
                                    <!-- <quill-editor v-model="commit.CONTENT" ref="myQuillEditor" :options="commit.editorOption" @ready="onEditorReady($event)" height="500px"></quill-editor> -->
                                    <quillEditor @listenToEditorChange="EditorChange" v-bind:content="commit.CONTENT" v-bind:apiUrl="urlPicUpload">
                                    </quillEditor>
                                </div>
                                <el-form-item>
                                    <div class="cardbutton"></div>
                                    <el-button type="primary" @click="submit()">确认提交</el-button>
                                    <el-button type="info" @click="submitScore()" v-if="cardcontent.USER_ID===getCurrentUserId&&cardcontent.POST_TYPE===3&&cardcontent.POST_STATUS===0">结贴</el-button>
                                </el-form-item>
                            </el-form-item>
                        </el-form>
                    </el-card>
                </div>
            </el-col>
            <!-- <el-dialog :visible.sync="scoreVisble" title="积分分配" width="400px">
                <el-form :model="scorelist" ref="scorelist" :rules="rules">
                    <span>您即将把
                        <span class="score">{{scorelist.SCORE}}</span>
                        分配给回复者
                        <span class="writter">{{writter}}</span>
                        的人吗？</span>
                    <el-form-item prop="score">
                        <el-input v-model.number="scorelist.SCORE" placeholder="请输入积分">请输入分配积分</el-input>
                    </el-form-item>
                    <el-form-item>
                        <div class="scoreButtton">
                            <el-button type="primary" @click="submitScore">确认</el-button>
                            <el-button type="primary" @click="scoreVisble=false">取消</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </el-dialog> -->
        </el-row>
    </div>
</template>


<script>
import {
    getDetail,
    createArticle,
    delArticle,
    commit,
    delcommit,
    delcard,
    updateLookTimes,
    delScore
} from "@/app_src/api/community";
//import { quillEditor } from "vue-quill-editor";
import { parseTime } from "@/app_src/utils/index.js";
import quillEditor from "@/app_src/components/QuillEditor";
export default {
    data() {
        return {
            urlPicUpload: process.env.BASE_API + "home/uploadCommunityPic",
            cardcontent: {},
            commentlist: [],
            type: "",
            userType: "",
            writter: "",
            content: "",
            scoreVisble: false,
            queryList: {
                POST_ID: null,
                USER_ID: null
            },
            createList: {
                POST_ID: "",
                COLLECTION_PERSON_ID: null
            },
            delComentList: {
                COMMENT_ID: null
            },
            delCardList: {
                USER_ID: "",
                POST_ID: ""
            },
            commit: {
                POST_ID: "",
                CONTENT: "",
                FROM_UID: "", //当前登录人ID
                //TO_UID:'',//主贴ID
                IS_RIGHT_ANSWER: 0,
                BONUS_POINTS: 0
            },
            scorelist: {
                SCORE: "",
                //FROM_UID:'',
                TO_UID: "",
                POST_ID: ""
            },
            rules: {
                content: [
                    {
                        required: true,
                        message: "请输入详细内容",
                        trigger: "blur"
                    }
                ],
                score: [
                    {
                        type: "number",
                        message: "分值必须为数字值",
                        trigger: "change"
                    }
                ]
            }
        };
    },
    components: {
        quillEditor
    },
    methods: {
        EditorChange(data) {
            this.commit.CONTENT = data.editorContent;
        },
        //获取帖子内容
        getCardDetail() {
            this.queryList.POST_ID = this.$route.params.id;
            this.queryList.USER_ID = this.$store.state.user.userID;
            getDetail(this.queryList).then(response => {
                if (response.data.code === 2000) {
                    this.cardcontent = response.data.items;
                    this.commentlist = response.data.items.children;
                    for (
                        let i = 0;
                        i < this.cardcontent.children.length;
                        i++
                    ) {}
                    if (this.cardcontent.POST_TYPE === 3) {
                        this.type = "回复";
                    } else {
                        this.type = "评论";
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
        collection() {
            if (this.$store.state.user.userID === null) {
                this.$store.state.user.dialogLoginVisible = true;
            } else {
                this.createList.COLLECTION_PERSON_ID = this.$store.state.user.userID;
                this.createList.POST_ID = this.cardcontent.POST_ID;
                createArticle(this.createList).then(response => {
                    if (response.data.code === 2000) {
                        this.$notify({
                            position: "bottom-right",
                            title: "收藏成功",
                            message: response.data.message,
                            type: "success",
                            duration: 2000
                        });
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
        uncollection() {
            if (this.$store.state.user.userID === null) {
                this.$store.state.user.dialogLoginVisible = true;
            } else {
                this.$confirm("您确定取消收藏本帖吗?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                    .then(() => {
                        this.createList.COLLECTION_PERSON_ID = this.$store.state.user.userID;
                        this.createList.POST_ID = this.cardcontent.POST_ID;
                        delArticle(this.createList).then(response => {
                            if (response.data.code === 2000) {
                                this.$notify({
                                    position: "bottom-right",
                                    title: "取消收藏成功",
                                    message: response.data.message,
                                    type: "success",
                                    duration: 2000
                                });
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
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消操作"
                        });
                    });
            }
        },
        onEditorReady(editor) {},
        resetTemp() {
            this.commit = {
                POST_ID: "",
                CONTENT: "",
                FROM_UID: "", //当前登录人ID
                //TO_UID:'',//主贴ID
                IS_RIGHT_ANSWER: 0,
                BONUS_POINTS: 0
            };
        },
        submit() {
            if (this.$store.state.user.userID === null) {
                this.$store.state.user.dialogLoginVisible = true;
            } else {
                this.commit.POST_ID = this.cardcontent.POST_ID;
                this.commit.FROM_UID = this.$store.state.user.userID;
                this.commit.TO_UID = this.cardcontent.USER_ID;
                commit(this.commit).then(response => {
                    if (response.data.code === 2000) {
                        this.$notify({
                            position: "bottom-right",
                            title: "发表成功",
                            message: response.data.message,
                            type: "success",
                            duration: 2000
                        });
                        this.commit.CONTENT = "";
                        this.getCardDetail();
                        this.resetTemp();
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
        goAnchor() {
            window.location.hash = "commit";
        },
        back() {
            this.$router.go(-1);
        },
        delcard() {
            this.$confirm("您确定删除本帖吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.delCardList.USER_ID = this.$store.state.user.userID;
                    this.delCardList.POST_ID = this.cardcontent.POST_ID;
                    delcard(this.delCardList).then(response => {
                        if (response.data.code === 2000) {
                            this.$notify({
                                position: "bottom-right",
                                title: "删帖成功",
                                message: response.data.message,
                                type: "success",
                                duration: 2000
                            });
                            this.$router.push({
                                path: "/community/main/index"
                            });
                        } else {
                            this.$notify({
                                position: "bottom-right",
                                title: "删帖失败",
                                message: response.data.message,
                                type: "error",
                                duration: 2000
                            });
                        }
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        },
        delcommit(data) {
            this.$confirm("您确定删除本条评论吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.delCardList.USER_ID = this.$store.state.user.userID;
                    this.delComentList.COMMENT_ID = data.COMMENT_ID;
                    delcommit(this.delComentList).then(response => {
                        if (response.data.code === 2000) {
                            this.$notify({
                                position: "bottom-right",
                                title: "删除成功",
                                message: response.data.message,
                                type: "success",
                                duration: 2000
                            });
                            this.getCardDetail();
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
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        },
        update() {
            this.delCardList.POST_ID = this.$route.params.id;
            updateLookTimes(this.delCardList);
        },
        getUserType() {
            this.userType = this.$store.state.user.roleLv;
        },
        tieUp(data) {
            this.scoreVisble = true;
            this.writter = data.USER_NAME;
            this.content = data.CONTENT;
            this.scorelist.TO_UID = data.USER_ID;
            this.scorelist.POST_ID = this.cardcontent.POST_ID;
        },
        submitScore() {
            this.$confirm("您确定进行结贴操作吗?本操作不可逆转", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    let flag = true;
                    let num = 0;
                    for (let i = 0; i < this.$refs.score.length; i++) {
                        this.$refs.score[i].validate(valid => {
                            flag = flag && valid;
                        });
                    }
                    if (flag) {
                        this.commentlist.forEach((item, key) => {
                            num += parseInt(item.BONUS_POINTS);
                        });
                        if (num === 0) {
                            let postlist1 = {
                                POST_ID: this.cardcontent.POST_ID,
                                SCORE_POINT: this.cardcontent.SCORE_POINT,
                                USER_ID: this.cardcontent.USER_ID,
                                children: []
                            };
                            delScore(postlist1).then(response => {
                                if (response.data.code === 2000) {
                                    console.log("success");
                                    this.getCardDetail();
                                }
                            });
                        } else if (num != this.cardcontent.SCORE_POINT) {
                            this.$message({
                                type: "error",
                                message: "请输入符合当前帖子悬赏分数的分值"
                            });
                        } else {
                            let arr = this.commentlist;
                            arr = arr.filter(t => t.BONUS_POINTS != 0);
                            let postlist = {
                                POST_ID: this.cardcontent.POST_ID,
                                SCORE_POINT: this.cardcontent.SCORE_POINT,
                                USER_ID: this.cardcontent.USER_ID,
                                children: arr
                            };
                            delScore(postlist).then(response => {
                                if (response.data.code === 2000) {
                                    console.log("success");
                                    this.getCardDetail();
                                }
                            });
                        }
                    }
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消结贴"
                    });
                });
        }
    },
    filters: {
        parseTime
    },
    computed: {
        // editor() {
        //     return this.$refs.myQuillEditor.quill;
        // },
        getCurrentUserId() {
            return this.$store.state.user.userID;
        },
        getCurrentRoleLv() {
            return this.$store.state.user.roleLv;
        },
        getUserInfo() {
            return this.$store.state.user.userinfo[0];
        }
    },
    watch: {
        getCurrentUserId(data) {
            if (data != null) {
                this.getCardDetail();
            }
        },
        getCurrentRoleLv(data) {
            if (data != null) {
                this.userType = data;
            }
        }
    },
    components: {
        quillEditor
    },
    mounted() {
        this.getCardDetail();
        this.update();
        this.getUserType();
    }
};
</script>



<style lang="scss">
.newscontent {
    min-height: 100%;
    margin-top: 10px;
    .content {
        line-height: 20px;
    }
    .foot {
        float: right;
        right: 0;
        font-size: 10px;
        color: gray;
        font-family: "Times New Roman", Times, serif;
    }
    .cardheader {
        .operation {
            float: right;
            margin-right: 30px;
            margin-bottom: 20px;
        }
    }
    .tieUp {
        float: right;
    }
    .score {
        color: red;
        font-weight: bold;
    }
    .scoreButtton {
        float: right;
    }
    .writter {
        color: blue;
        font-weight: bold;
    }
    .userhead {
        margin-top: 20px;
        text-align: center;
        img {
            width: 150px;
            height: 150px;
        }
        .logo {
            margin-top: 20px;
        }
    }
    .username {
        margin-top: 20px;
        font-weight: bold;
        font-family: "微软雅黑";
        font-size: 15px;
    }
    .commit {
        margin-top: 35px;
    }
    .commitcontent {
        margin-top: 10px;
        margin-left: 15px;
        font-size: 12px;
        color: gray;
    }
    .commitfoot {
        float: right;
        bottom: 0;
        font-size: 8px;
        right: 0;
    }
    .commitfootbutton {
        float: right;
        margin-top: 20px;
    }
    .commitfootinput {
        margin-top: 20px;
    }
    .commithead {
        text-align: right;
        img {
            width: 30px;
            height: 30px;
        }
    }
    .post {
        margin-top: 20px;
    }
    .cardbutton {
        margin-top: 20px;
    }
}
</style>



