<template>
    <div id="mycard"  class="mycard">
        <el-row type="flex" :gutter="20">
            <el-col :span="2"></el-col>
            <el-col :span="6">
                <div class="leftcontainer">
                    <el-card :body-style="{ padding: '0px' }">
                        <div class="photo">
                            <img src="../../../app_src/imgs/avatar.png" >
                        </div>
                        <div style="padding: 14px;" class="info">
                            <span>
                                用户ID：{{userinfo.name}}
                                <br>
                                公司：{{userinfo.company}}
                                <br>
                                积分：{{userinfo.score}}
                                <br>
                                发帖数量：{{userinfo.recordNumber}}
                                <br>
                                评论数量：{{userinfo.reviewNumvber}}
                            </span>
                        </div>
                    </el-card>
                </div>
            </el-col>

            <el-col :span="14">
                <div class="rightcontainer">
                    <el-card>
                    <el-card v-for="(news,key) in newslist" :key="key" body-style="{padding:'0px'}" class="card" v-if="key<3">
                        <el-col :span="3">
                            <div class="newslogo">
                                <img src="../../../app_src/imgs/shakehande.png" v-if="news.type===1" title="经验分享">
                                <img src="../../../app_src/imgs/share.png" v-if="news.type===2" title="经验分享">
                                 <img src="../../../app_src/imgs/help.png" v-if="news.type===3" title="求助">
                            </div>
                        </el-col>
                        <el-row>
                            <el-col :span="16">
                                <div class="title">
                                    {{news.title}}
                                </div>
                                <div class="content">
                                    {{news.content}}
                                </div>
                            </el-col>

                            <el-col :span="5">
                                <div class="info">
                                  发表日期：{{news.upTime}}  
                                   <br>
                                  求助金额：<img src="../../../app_src/imgs/coin.png" >{{news.offer}}
                                   <br>
                                   阅读量：{{news.readNumber}}
                                   <br>
                                  评论数：{{news.commentNumber}}
                                   <br>
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                    <div class="pageclass">
                        <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="100">
                        </el-pagination>
                    </div>                            
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
      userinfo: {
        name: "小张",
        company: "大港油田",
        score: "180",
        recordNumber: "100",
        reviewNumvber: "101"
      },
      newslist: [
        {
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
          writter: "小王",
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
      currentPage1: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>



<style lang="scss">
.mycard {
  margin-top: 20px;
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
      font-size: 20px;
      line-height: 25px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  }
  .rightcontainer {
    min-height: 350px;
    border-radius: 0.5em;
    min-height: 390px;
    .newslogo {
      img {
        width: 100px;
        height: 100px;
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
    .pageclass {
      text-align: center;
    }
  }
}
</style>



