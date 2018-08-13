<template>
    <div id="home">
        <div class="row1">
            <el-row :gutter="20" type="flex">
                <el-col :span="2"></el-col>
                <el-col :span="10">
                    <el-card>   
                        <el-card v-for="(item,key) in noticeList" :key="key" v-if="key<=2">
                            <div slot="header" class="header">
                                <span>{{item.title}}</span>
                            </div>
                            <el-row>
                                <el-col>
                                    <div class="content">
                                        <p v-html="item.content"></p>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row>
                                <el-col>
                                    <div class="foot">
                                        作者：{{item.writter}}
                                        <br>
                                        发表日期：{{item.time}}
                                    </div>
                                </el-col>
                            </el-row>
                        </el-card>
                        <el-pagination
                            layout="prev, pager, next"
                            :total="50">
                        </el-pagination>
                    </el-card> 
                </el-col>

                <el-col :span="10">
                    <el-card>
                        <h3>论坛积分排行榜</h3>
                        <el-table :data="commnunityScoreList" >
                            <el-table-column label="排名" prop="index" align="center"></el-table-column>
                            <el-table-column label="姓名" prop="name" align="center"></el-table-column>
                            <el-table-column label="积分" prop="score" align="center"></el-table-column>
                        </el-table>
                    </el-card>
                </el-col>
            </el-row>
        </div> 

        <div class="row1">
            <el-row :gutter="20" type="flex">
                <el-col :span="2"></el-col>
                <el-col :span="10">
                    <el-card>
                        C#平台
                    </el-card>
                </el-col>

                <el-col :span="10">
                    <el-card>
                        GO平台
                    </el-card>
                </el-col>
            </el-row>                   
        </div>

        <div class="row1">
            <el-row :gutter="20" type="flex">
                <el-col :span="2"></el-col>
                <el-col :span="10">
                    <el-card>
                        <h3>组件下载排行榜</h3>
                        <el-table :data="severRankList" >
                            <el-table-column label="排名" prop="index" align="center"></el-table-column>
                            <el-table-column label="姓名" prop="name" align="center"></el-table-column>
                            <el-table-column label="积分" prop="score" align="center"></el-table-column>
                        </el-table>
                    </el-card>
                </el-col>

                <el-col :span="10">
                    <el-card>
                        <h3>服务积分排行榜</h3>
                        <el-table :data="SeverComponentRankList" >
                            <el-table-column label="排名" prop="index" align="center"></el-table-column>
                            <el-table-column label="姓名" prop="name" align="center"></el-table-column>
                            <el-table-column label="积分" prop="score" align="center"></el-table-column>
                        </el-table>
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
      commnunityScoreList: [
        { index: "1", name: "张1", score: 10000 },
        { index: "2", name: "张2", score: 10000 },
        { index: "3", name: "张3", score: 10000 },
        { index: "4", name: "张4", score: 10000 },
        { index: "5", name: "张5", score: 10000 },
        { index: "6", name: "张6", score: 10000 },
        { index: "7", name: "张7", score: 10000 },
        { index: "8", name: "张8", score: 10000 }
      ],
      severRankList: [
        { index: "1", name: "张1", score: 10000 },
        { index: "2", name: "张2", score: 10000 },
        { index: "3", name: "张3", score: 10000 },
        { index: "4", name: "张4", score: 10000 },
        { index: "5", name: "张5", score: 10000 },
        { index: "6", name: "张6", score: 10000 },
        { index: "7", name: "张7", score: 10000 },
        { index: "8", name: "张8", score: 10000 }
      ],
      SeverComponentRankList: [
        { index: "1", name: "张1", score: 10000 },
        { index: "2", name: "张2", score: 10000 },
        { index: "3", name: "张3", score: 10000 },
        { index: "4", name: "张4", score: 10000 },
        { index: "5", name: "张5", score: 10000 },
        { index: "6", name: "张6", score: 10000 },
        { index: "7", name: "张7", score: 10000 },
        { index: "8", name: "张8", score: 10000 }
      ]
    };
  }
};
</script>




<style lang="scss">
.row1 {
  margin-top: 20px;
  text-align: center;
  //max-height: 400px;
  .foot {
    float: right;
    font-size: 13px;
    color: gray;
  }
}
</style>


