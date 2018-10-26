<template>
    <!--主贴界面-->
    <div id="newscontent" class="newscontent">
        <el-row :gutter="20" type="flex">
            <el-col :span="2"> </el-col>
            <el-col :span="20">
                <div class="card">
                    <!--主楼标题按钮界面-->
                    <el-card v-for="(card,cardIndex) in cardList" :key="cardIndex">
                        <div slot="header" class="cardheader" v-if="cardIndex ===0">
                            <span>{{card.cardinfo.title}}</span>
                            <div class="operation">
                                <el-button size="mini">
                                    <i class="el-icon-circle-plus"></i>收藏
                                </el-button>
                                <el-button size="mini">
                                    <i class="el-icon-remove"></i>取消收藏
                                </el-button>
                                <el-button size="mini" type="info">回复</el-button>
                            </div>
                        </div>
                        <!--主贴头像区域-->
                        <el-row>
                            <el-col :span="5">
                                <div class="userhead">
                                    <img src="../../../app_src/imgs/userHead.png">
                                    <div class="logo">
                                        <el-button type="primary" size="mini" v-if="cardIndex===0">楼主</el-button>
                                    </div>
                                </div>
                            </el-col>
                            <!--主贴信息界面-->
                            <el-col :span="18">
                                <div class="content">
                                    <p v-html="card.cardinfo.content"></p>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="foot">
                            <el-row>
                                <el-col :span="24">
                                    发表日期：{{card.cardinfo.upTime}}
                                    <!-- <el-button type="text" @click="getcomment(card,cardIndex)">{{mainCardMsg}}({{card.cardinfo.commentNumber}})</el-button> -->
                                </el-col>
                            </el-row>
                        </div>
                        <!--主贴评论界面-->
                        <!--<div class="commit" v-show="currentIndex===cardIndex">
                            <el-row>
                                <el-col>
                                    <el-card>
                                        <div v-for="(commit,commitIndex) in card.commitinfo" :key="commitIndex">
                                            <el-row type="flex">
                                                <el-col :span="3">
                                                    <div class="commithead">
                                                        <img src="../../../app_src/imgs/userHead.png">
                                                    </div>
                                                </el-col>
                                                <el-col :span="21">
                                                    <div class="commitcontent">
                                                        {{card.commitinfo[commitIndex].writter}}:{{card.commitinfo[commitIndex].content}}
                                                    </div>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <div class="commitfoot">
                                                    <el-col :span="24">
                                                        发表日期：{{card.commitinfo[commitIndex].upTime}}
                                                        <el-button type="text" @click="commitToPerson(card.commitinfo[commitIndex],commitIndex)">回复</el-button>
                                                    </el-col>
                                                </div>
                                            </el-row>

                                        </div>
                                        
                                        <el-row>
                                            <div class="commitfootbutton">
                                                <el-col :span="24">
                                                    <el-button type="info" size="mini" @click="openCommit()">{{commitcardMsg}}</el-button>
                                                </el-col>
                                            </div>
                                        </el-row>
                                        
                                        <div v-if="commitfootinputVisibility">
                                            <el-row>
                                                <div class="commitfootinput">
                                                    <el-col :span="24">
                                                        <el-input placeholder="请输入内容" v-model="commitcontent"></el-input>
                                                    </el-col>
                                                </div>
                                            </el-row>

                                            <el-row>
                                                <div class="commitfootbutton">
                                                    <el-col :span="24">
                                                        <el-button size="mini" type="primary">确定</el-button>
                                                    </el-col>
                                                </div>
                                            </el-row>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>-->
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    data() {
        return {
            cardList: [
                {
                    cardinfo: {
                        id: 1,
                        writter: "小李",
                        type: 1,
                        title: "为祖国庆生",
                        upTime: "2018-8-8",
                        readNumber: 200,
                        offer: 200,
                        commentNumber: 200,
                        content: "123"
                    },
                    commitinfo: [
                        {
                            writter: "阿亮",
                            content: "评论测试",
                            upTime: "2018-8-12"
                        },
                        {
                            writter: "小屹",
                            content: "评论测试11",
                            upTime: "2018-8-13"
                        }
                    ]
                },
                {
                    cardinfo: {
                        id: 2,
                        writter: "小李",
                        type: 1,
                        title: "为祖国庆生",
                        upTime: "2018-8-8",
                        readNumber: 200,
                        offer: 200,
                        commentNumber: 200,
                        content: "123"
                    },
                    commitinfo: [
                        {
                            writter: "阿亮",
                            content: "评论测试",
                            upTime: "2018-8-12"
                        },
                        {
                            writter: "小屹",
                            content: "评论测试11",
                            upTime: "2018-8-13"
                        }
                    ]
                },
                {
                    cardinfo: {
                        id: 3,
                        writter: "小李",
                        type: 1,
                        title: "为祖国庆生",
                        upTime: "2018-8-8",
                        readNumber: 200,
                        offer: 200,
                        commentNumber: 200,
                        content: "123"
                    },
                    commitinfo: [
                        {
                            writter: "阿亮",
                            content: "评论测试",
                            upTime: "2018-8-12"
                        },
                        {
                            writter: "小屹",
                            content: "评论测试11",
                            upTime: "2018-8-13"
                        }
                    ]
                }
            ],
            commitVisibility: false,
            commitfootinputVisibility: false,
            commitcontent: "",
            mainCardMsg: "回复",
            commitcardMsg: "我也说一句",
            currentIndex: null
        };
    },
    methods: {
        getcomment(data, index) {
            //console.log(this.currentIndex);
            if (this.currentIndex === null) {
                this.mainCardMsg = "收起回复";
                this.currentIndex = index;
            } else {
                this.currentIndex = null;
                this.mainCardMsg = "回复";
            }
        },
        openCommit() {
            this.commitcontent = "";
            this.commitfootinputVisibility = !this.commitfootinputVisibility;
            this.justbutton();
        },
        justbutton() {
            if (this.commitfootinputVisibility === true) {
                this.commitcardMsg = "收起回复";
            } else {
                this.commitcardMsg = "我也说一句";
            }
        },
        commitToPerson(data) {
            this.commitfootinputVisibility = true;
            this.justbutton();
            this.commitcontent = "回复" + data.writter + ":";
        }
    },
    mounted() {
        //this.getId();
    }
};
</script>



<style lang="scss">
.newscontent {
    margin-top: 10px;
    .card {
        min-height: 300px;
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
    }
    .cardheader {
        .operation {
            float: right;
            margin-right: 30px;
            margin-bottom: 20px;
        }
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
}
</style>



