<template>
    <div id="home">
        <div class="row1">
            <el-row :gutter="20" type="flex">
                <el-col :span="2"></el-col>
                <el-col :span="10">
                    <el-card>   
                        <h3>公告</h3>
                        <el-table :data="noticeList" height="383px" size="mini" style="border-top:1px solid #2196F3;cursor:pointer">
                           <el-table-column label="标题" prop="title"  align="center"></el-table-column>
                            <el-table-column label="发布人" prop="writter" align="center"></el-table-column>
                            <el-table-column label="发布时间" prop="time" align="center"></el-table-column>
                        </el-table>
                         <div class="pagination-container">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="11">
                </el-pagination>
              </div>
                    </el-card> 
                </el-col>

                <el-col :span="10">
                    <el-card>
                        <h3>论坛积分排行榜</h3>
                        <el-table :data="commnunityScoreList" size="mini" height="397px" style="border-top:1px solid #2196F3;">
                            <el-table-column label="排名" prop="index"  align="center"></el-table-column>
                            <el-table-column label="姓名" prop="name" align="center"></el-table-column>
                            <el-table-column label="积分" prop="score" align="center"></el-table-column>
                        </el-table>
                    </el-card>
                </el-col>
            </el-row>
        </div> 

        <!-- <div class="row1">
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
        </div> -->

        <div class="row1">
            <el-row :gutter="20" type="flex">
                <el-col :span="2"></el-col>
                <el-col :span="10">
                    <el-card>
                        <h3>组件下载排行榜</h3>
                        <el-table :data="severRankList" height="397px" size="mini" style="border-top:1px solid #2196F3">
                            <el-table-column label="标题" prop="index" align="center"></el-table-column>
                            <el-table-column label="发布人" prop="name" align="center"></el-table-column>
                            <el-table-column label="发布时间" prop="score" align="center"></el-table-column>
                        </el-table>
                       
                    </el-card>
                </el-col>

                <el-col :span="10">
                    <el-card>
                        <h3>服务积分排行榜</h3>
                        <el-table :data="SeverComponentRankList" height="397px" size="mini" style="border-top:1px solid #2196F3">
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
        { index: "8", name: "张7", score: 10000 },
        { index: "9", name: "张7", score: 10000 },
        { index: "10", name: "张8", score: 10000 }
      ],
      severRankList: [
        { index: "1", name: "张1", score: 10000 },
        { index: "2", name: "张2", score: 10000 },
        { index: "3", name: "张3", score: 10000 },
        { index: "4", name: "张4", score: 10000 },
        { index: "5", name: "张5", score: 10000 },
        { index: "6", name: "张6", score: 10000 },
        { index: "7", name: "张7", score: 10000 },
        { index: "8", name: "张7", score: 10000 },
        { index: "9", name: "张7", score: 10000 },
        { index: "10", name: "张8", score: 10000 }
      ],
      SeverComponentRankList: [
        { index: "1", name: "张1", score: 10000 },
        { index: "2", name: "张2", score: 10000 },
        { index: "3", name: "张3", score: 10000 },
        { index: "4", name: "张4", score: 10000 },
        { index: "5", name: "张5", score: 10000 },
        { index: "6", name: "张6", score: 10000 },
        { index: "7", name: "张7", score: 10000 },
       { index: "8", name: "张7", score: 10000 },
        { index: "9", name: "张7", score: 10000 },
        { index: "10", name: "张8", score: 10000 }
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


