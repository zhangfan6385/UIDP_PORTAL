<template>
    <div id="community" class="community">
        <!--
        <el-row :gutter="20" type="flex">  
            <el-col :span="2"></el-col>
            
            <el-col :span="20">
              <el-card class="header">
                  <div class="headerItem">
                      <el-button type="primary" plain>我的积分{{score}}</el-button>
                      <el-button type="success" plain>我的帖子</el-button>
                      <el-button type="info" plain>我的收藏</el-button>
                      <el-button type="warning" plain>发布帖子</el-button>
                  </div>                  
                 </el-card>
            </el-col>      
        </el-row>
        -->
        

        <el-row :gutter="20" type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="13">
                <div class="LeftContainer">
                  <el-card>               
                    <el-card v-for="(news,key) in newslist" :key="key" body-style="{padding:'0px'}" class="card" @click.native="getcontent()" v-if="key<3">
                        <el-col :span="3">
                            <div class="newslogo">
                                <img src="../../../app_src/imgs/shakehande.png" v-if="news.type===1" title="经验分享">
                                <img src="../../../app_src/imgs/feedback.png" v-if="news.type===2" title="问题反馈">
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
                                  作者：{{news.writter}}
                                  <br>
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

            <el-col :span="7">
                <div class="MainContainer">
                    <el-card>
                        <div class="rank">
                            <img src="../../../app_src/imgs/title.png">
                            <br>
                            <el-table :data="scoreList"  >
                                <el-table-column prop="index" label="排名" align="center"></el-table-column>
                                <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                                <el-table-column prop="score" label="积分" align="center"></el-table-column>
                            </el-table>
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
      score: 1000,
      scoreList: [
        { index: "1", name: "张1", score: 10000 },
        { index: "2", name: "张2", score: 10000 },
        { index: "3", name: "张3", score: 10000 },
        { index: "4", name: "张4", score: 10000 },
        { index: "5", name: "张5", score: 10000 },
        { index: "6", name: "张6", score: 10000 },
        { index: "7", name: "张7", score: 10000 },
        { index: "8", name: "张8", score: 10000 }
      ],
      newslist: [
        {
          writter:'小李',
          type:1,
          title: "为祖国庆生",
          upTime: "2018-8-8",
          readNumber: 200,
          offer: 200,
          commentNumber: 200,
          content:
            "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
        },
        {
          writter:'小张',
          type:2,
          title: "为祖国庆生",
          upTime: "2018-8-8",
          readNumber: 200,
          offer: 200,
          commentNumber: 200,
          content:
            "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
        },
        {
          writter:'小王',
          type:3,
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
    },
    getcontent(id) {
      alert("显示新闻具体内容"+id);
    }
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
  .MainContainer {
    border-radius: 0.5em;
    min-height: 100px;
    min-height: 390px;
    text-align: center;
    .rank{
      img{
        width: 200px;
        height: 40px;
      }
    }
  }
}
.el-row {
  margin-bottom: 20px;
}
</style>


