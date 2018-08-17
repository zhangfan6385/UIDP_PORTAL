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
                用户ID：{{userinfo.name}}
                <br> 公司：{{userinfo.company}}
                <br> 积分：{{userinfo.score}}
                <br> 发帖数量：{{userinfo.recordNumber}}
                <br> 评论数量：{{userinfo.reviewNumvber}}
              </span>
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="14">
        <div class="rightcontainer">
          <el-card>
            <div class="title">
              我的收藏
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
 <el-table-column label="主题" prop="title" align="center"></el-table-column>
              <el-table-column label="阅读量" prop="readNumber" align="center"></el-table-column>
              <el-table-column label="悬赏金额" prop="offer" align="center"></el-table-column>
              <el-table-column label="评论人数" prop="commentNumber" align="center"></el-table-column>
              <el-table-column label="作者" prop="writter" align="center"></el-table-column>
              <el-table-column label="收藏日期" prop="collectionTiome" align="center"></el-table-column>
            </el-table>
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
            myCollectionList: [
                {
                    id: 1,
                    writter: "小李",
                    type: 1,
                    title: "为祖国庆生",
                    upTime: "2018-8-8",
                    readNumber: 200,
                    offer: 200,
                    commentNumber: 200,
                    collectionTiome: "2018-8-14"
                },
                {
                    id: 2,
                    writter: "小李",
                    type: 2,
                    title: "为祖国庆生",
                    upTime: "2018-8-8",
                    readNumber: 200,
                    offer: 200,
                    commentNumber: 200,
                    collectionTiome: "2018-8-14"
                },
                {
                    id: 3,
                    writter: "小李",
                    type: 3,
                    title: "为祖国庆生",
                    upTime: "2018-8-8",
                    readNumber: 200,
                    offer: 200,
                    commentNumber: 200,
                    collectionTiome: "2018-8-14"
                },
                {
                    id: 4,
                    writter: "小李",
                    type: 3,
                    title: "为祖国庆生",
                    upTime: "2018-8-8",
                    readNumber: 200,
                    offer: 200,
                    commentNumber: 200,
                    collectionTiome: "2018-8-14"
                }
            ]
        };
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        getcontent(data) {
            var id = data.id.toString();
            this.$router.push({ path: "/community/main/newscontent/" + id });
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
            font-size: 20px;
            line-height: 35px;
            font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
                "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
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
        .pageclass {
            text-align: center;
        }
    }
}
</style>