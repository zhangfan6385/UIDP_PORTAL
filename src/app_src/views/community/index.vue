<template>
  <div id="community" class="community">
    <el-row :gutter="20" type="flex">
      <el-col :span="2"></el-col>
      <el-col :span="15">
        <div class="LeftContainer">
          <el-card>
            <el-table :data="newslist" @row-click="getcontent">
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
              <el-table-column prop="title" label="主题" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="readNumber" label="阅读量" width="100px" align="center"></el-table-column>
              <el-table-column prop="offer" label="悬赏金额" width="100px" align="center"></el-table-column>
              <el-table-column prop="commentNumber" label="评论人数" width="100px" align="center"></el-table-column>
              <el-table-column prop="writter" label="作者" width="100px" align="center"></el-table-column>
              <el-table-column prop="upTime" label="发表日期" width="100px" align="center"></el-table-column>
            </el-table>
            <div class="page">
              <el-pagination layout="prev, pager, next" :total="50">
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
        { index: "8", name: "张7", score: 10000 },
        { index: "9", name: "张7", score: 10000 },
        { index: "10", name: "张7", score: 10000 }
      ],
      newslist: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
          writter: "小王",
          type: 3,
          title: "为祖国庆生",
          upTime: "2018-8-8",
          readNumber: 200,
          offer: 200,
          commentNumber: 200,
          content:
            "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
        },
        {
          id: 4,
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
          id: 5,
          writter: "小李",
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
          id: 6,
          writter: "小李",
          type: 3,
          title: "为祖国庆生",
          upTime: "2018-8-8",
          readNumber: 200,
          offer: 200,
          commentNumber: 200,
          content:
            "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
        },
        {
          id: 6,
          writter: "小李",
          type: 3,
          title: "为祖国庆生",
          upTime: "2018-8-8",
          readNumber: 200,
          offer: 200,
          commentNumber: 200,
          content:
            "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
        },
        {
          id: 6,
          writter: "小李",
          type: 3,
          title: "为祖国庆生",
          upTime: "2018-8-8",
          readNumber: 200,
          offer: 200,
          commentNumber: 200,
          content:
            "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
        },
        {
          id: 6,
          writter: "小李",
          type: 3,
          title: "为祖国庆生",
          upTime: "2018-8-8",
          readNumber: 200,
          offer: 200,
          commentNumber: 200,
          content:
            "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
        },
        {
          id: 6,
          writter: "小李",
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
    },
    getcontent(row, event, column) {
      let id = row.id.toString();
      this.$router.push({ path: "/community/main/newscontent/" + id });
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
    .rank {
      img {
        width: 200px;
        height: 40px;
      }
    }
  }
}
</style>


