<template>
    <div id="community" class="community">
        <el-row>
            <el-col :span="24">
                <div class="header">
                    <div class="headerItem">
                        <el-button type="primary" plain>我的积分{{score}}</el-button>
                        <el-button type="success" plain>我的帖子</el-button>
                        <el-button type="info" plain>我的收藏</el-button>
                        <el-button type="warning" plain>发布帖子</el-button>
                    </div>
                    
                </div>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="17">
                <div class="LeftContainer">               
                    <el-card v-for="(news,key) in newslist" :key="key" body-style="{padding:'0px'}" class="card">
                        <el-col :span="3">
                            <div class="newslogo">
                                <img src="../../../app_src/imgs/coin.png">
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="title">
                                {{news.title}}
                                <div class="content">
                                    {{news.content}}
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                             <div class="info">
                                发表日期：{{news.upTime}}
                                <br>
                                求助金额：<img src="../../../app_src/imgs/coin.png" >{{news.offer}}
                            </div>
                        </el-col>

                    </el-card>
                </div>
            </el-col>

            <el-col :span="7">
                <div class="MainContainer">
                    <el-card>
                        <div>
                            <img src="../../../app_src/imgs/title.png">
                            <br>
                            <el-table :data="scoreList" stripe >
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
        { index: "1", name: "张三", score: 10000 },
        { index: "2", name: "张2", score: 10000 },
        { index: "3", name: "张4", score: 10000 },
        { index: "4", name: "张5", score: 10000 },
        { index: "5", name: "张5", score: 10000 },
        { index: "6", name: "张5", score: 10000 }
      ],
      newslist: [
        { title: "为祖国庆生", upTime: "2018-8-8", readNumber: 200, offer: 200,
        content:'为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。' },
        { title: "为祖国庆生", upTime: "2018-8-8", readNumber: 200, offer: 200,
        content:'为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。' },
        { title: "为祖国庆生", upTime: "2018-8-8", readNumber: 200, offer: 200,
        content:'为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。' },
        { title: "为祖国庆生", upTime: "2018-8-8", readNumber: 200, offer: 200,
        content:'为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。' }
      ]
    };
  },
  methods: {}
};
</script>


<style lang="scss">
.community {
    .card{
        max-height:150px; 
    }
  .header {
    border-radius: 0.5em;
    min-height: 65px;
    background:rgb(194, 206, 195);
    .headerItem {
      float: right;
      padding-top: 20px;
      padding-right: 20px;
      margin-left: 40px;
    }
  }
  .LeftContainer {
    border-radius: 0.5em;
    min-height: 100px;
    background: rgb(145, 210, 214);
    min-height: 390px;
    .newslogo{
        img{
            width: 100px;
            height: 100px;
        }
    }
    .title{
        margin-left: 12px;
        font-weight: 200;
        text-align: center;
    }
    .info{
        margin-bottom: 20px;
        color: gray;
        font-size: 10px;
        img{
            width: 13px;
            height: 13px;
        }
    }
    .content{
        font-size: 15px;
        line-height: 20px;
        color:rgb(53, 49, 49);
    }
  }
  .MainContainer {
    border-radius: 0.5em;
    min-height: 100px;
    min-height: 390px;
    text-align: center;
  }
}
.el-row {
  margin-bottom: 20px;
}
</style>


