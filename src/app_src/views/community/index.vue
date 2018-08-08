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
            <el-col :span="15">
                <div class="LeftContainer">               
                    <el-card v-for="(news,key) in newslist" :key="key" body-style="{padding:'0px'}">
                        <el-col :span="3">
                            <div class="newslogo">
                                <img src="../../../app_src/imgs/coin.png">
                            </div>
                        </el-col>
                        <el-col :span="21">
                            <div class="title">
                                {{news.title}}
                                <br>
                                {{news.content}}
                                <div class="info">
                                    {{news.upTime}}
                                     <img src="../../../app_src/imgs/coin.png">{{news.offer}}
                                </div>
                            </div>
                        </el-col>

                    </el-card>
                </div>
            </el-col>

            <el-col :span="9">
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
        { title: "新闻1", upTime: "2018-8-8", readNumber: 200, offer: 200,content:'1111111111111111111111111' }
      ]
    };
  },
  methods: {}
};
</script>


<style lang="scss">
.community {
  .header {
    border-radius: 0.5em;
    min-height: 65px;
    background: rgb(210, 231, 15);
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
        margin-left: 100px;
        font-weight: 200;
    }
    .info{
        float: right;
        margin-right: 20px;
        color: gray;
        font-size: 10px;
        img{
            width: 13px;
            height: 13px;
        }
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


