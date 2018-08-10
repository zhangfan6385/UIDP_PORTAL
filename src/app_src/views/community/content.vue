<template>
    <div id="newscontent" class="newscontent">
        <el-row :gutter="20" type="flex">
          <el-col :span="2"> </el-col>
          <el-col :span="20">
              <div class="card">
                  <el-card>
                    <div slot="header" class="cardheader">  
                      <span>标题</span>
                      <div class="operation">
                        <el-button size="mini">
                          <i class="el-icon-circle-plus"></i>收藏
                          </el-button>
                        <el-button size="mini" >
                          <i class="el-icon-remove"></i>取消收藏
                          </el-button>
                        <el-button size="mini" type="primary">回复</el-button>
                    </div>
                    </div>
                    <div class="content">
                      <p v-html="cardinfo.content"></p>
                    </div>
                    <el-col>
                      <el-row>
                        <div class="foot">
                          发表日期：{{cardinfo.time}}
                        </div>
                      </el-row>
                    </el-col>
                     <el-col>
                      <el-row>
                        <div class="foot">
                          发表日期：{{cardinfo.time}}
                        </div>
                      </el-row>
                    </el-col>
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
      cardinfo:{
        time:'2018-8-10',
        content:"  为庆祝新中国成立69周年，学习贯彻习近为庆祝新中国成立69周年，学习贯彻习近为庆祝新中国成立69周年，学习贯彻习近为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
      }
    };
  },
  methods: {
    getId() {
      console.log(this.$route.params.id);
    }
  },
  mounted() {
    this.getId();
  }
};
</script>



<style lang="scss">
.newscontent {
  margin-top: 10px;
  .card {
    min-height: 300px;
    .el-card {
      min-height: 160px;
    }
    .content {
      line-height: 20px;
    }
    .foot {
      float: right;
      right: 0;
      bottom: 20px;
      max-height: 20px;
      font-size: 10px;
      color: gray;
      font-family: 'Times New Roman', Times, serif
      //position: absolute;
    }
  }
  .cardheader {
    .operation {
      float: right;
      margin-right: 30px;
      margin-bottom: 20px;
    }
  }
}
</style>



