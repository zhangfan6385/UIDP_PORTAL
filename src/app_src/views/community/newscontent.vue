<template>
                  <!--主贴界面-->
    <div id="newscontent" class="newscontent">
        <el-row :gutter="20" type="flex">
          <el-col :span="2"> </el-col>
          <el-col :span="20">
              <div class="card" >
                <!--主楼标题按钮界面-->
                  <el-card>
                    <div slot="header" class="cardheader">  
                      <span>{{cardinfo.title}}</span>
                      <div class="operation">
                        <el-button size="mini">
                          <i class="el-icon-circle-plus"></i>收藏
                          </el-button>
                        <el-button size="mini" >
                          <i class="el-icon-remove"></i>取消收藏
                          </el-button>
                        <el-button size="mini" type="info">回复</el-button>
                    </div>
                     <!--主贴头像界面-->
                    </div>
                    <el-col :span="4">
                      <div class="userhead">
                         <img src="../../../app_src/imgs/userHead.png">
                         <div class="logo">
                           <el-button type="primary" size="mini">楼主</el-button>
                         </div> 
                      </div>
                    </el-col>
                    <el-col :span="20">
                      <div class="content">
                        <p v-html="cardinfo.content"></p>
                      </div>
                      <div class="foot">
                        <el-row>
                          <el-col>   
                              发表日期：{{cardinfo.upTime}} <el-button type="text" @click="getcomment" >{{mainCardMsg}}({{cardinfo.commentNumber}})</el-button>                   
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                    <!--主贴评论界面-->
                    <div class="commit" v-if="commitVisibility">
                      <el-card>
                        <div v-for="(item,key) in commitinfo" :key="key">
                           <el-row>
                            <el-col :span="3">
                              <div class="commithead">
                                  <img src="../../../app_src/imgs/userHead.png">
                                </div>
                            </el-col>
                            <el-col :span="21">
                              <div class="commitcontent">
                                {{commitinfo[key].writter}}:{{commitinfo[key].content}}
                              </div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <div class="commitfoot">
                              <el-col :span="24">
                                发表日期：{{commitinfo[key].upTime}} <el-button type="text" @click="commitToPerson(item)" >回复</el-button>
                              </el-col>
                              </div>
                          </el-row>
                        </div>
                        <!-- 开启回复评论界面-->
                        <el-row>
                          <div class="commitfootbutton">
                            <el-col :span="24">
                              <el-button type="info" size="mini" @click="openCommit">{{commitcardMsg}}</el-button>
                            </el-col>
                            </div>
                        </el-row>
                        <div v-if="commitfootinputVisibility">                    
                          <el-row>
                          <div class="commitfootinput">
                            <el-col :span="24">
                              <el-input placeholder="请输入内容" v-model="commitcontent" ></el-input>
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
                    </div>
                  </el-card>
              </div>
          </el-col>
        </el-row>



<!--
        <el-row :gutter="20" type="flex">
          <el-col :span="2"> </el-col>
          <el-col :span="20">
              <div class="card" >
                  <el-card>
                    <div slot="header" class="cardheader">  
                      <span>{{cardinfo.title}}</span>
                      <div class="operation">
                        <el-button size="mini">
                          <i class="el-icon-circle-plus"></i>收藏
                          </el-button>
                        <el-button size="mini" >
                          <i class="el-icon-remove"></i>取消收藏
                          </el-button>
                        <el-button size="mini" type="info">回复</el-button>
                    </div>
                    </div>
                    <el-col :span="4">
                      <div class="userhead">
                         <img src="../../../app_src/imgs/userHead.png">
                         <div class="logo">
                           <el-button type="primary" size="mini">{{Num}}}楼</el-button>
                         </div> 
                      </div>
                    </el-col>
                    <el-col :span="20">
                      <div class="content">
                        <p v-html="cardinfo.content"></p>
                      </div>
                      <div class="foot">
                        <el-row>
                          <el-col>   
                              发表日期：{{cardinfo.upTime}} <el-button type="text" @click="getcomment" >回复({{cardinfo.commentNumber}})</el-button>                   
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                    <div class="commit" v-if="commitVisibility">
                      <el-card>
                        <div v-for="(item,key) in commitinfo" :key="key">
                           <el-row>
                            <el-col :span="3">
                              <div class="commithead">
                                  <img src="../../../app_src/imgs/userHead.png">
                                </div>
                            </el-col>
                            <el-col :span="21">
                              <div class="commitcontent">
                                {{commitinfo[key].writter}}:{{commitinfo[key].content}}
                              </div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <div class="commitfoot">
                              <el-col :span="24">
                                发表日期：{{commitinfo[key].upTime}}
                              </el-col>
                              </div>
                          </el-row>
                        </div>
                      </el-card>             
                    </div>
                  </el-card>
              </div>
          </el-col>
        </el-row>
-->
    </div>
</template>


<script>
export default {
  data() {
    return {
      cardList:[],    
      cardinfo: {
        id: 1,
        writter: "小李",
        type: 1,
        title: "为祖国庆生",
        upTime: "2018-8-8",
        readNumber: 200,
        offer: 200,
        commentNumber: 200,
        content:
          "为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。为庆祝新中国成立69周年，学习贯彻习近平总书记在文艺座谈会上的讲话精神，展现“党的十八大”以来中国文艺大发展、大繁荣，传递正能量，提振精气神，激发广大诗人作家的创作激情，推动诗歌散文创作的更好更快发展，特举办第四届“中华情”全国诗歌散文联赛。"
      },
      commitVisibility: false,
      commitfootinputVisibility:false,
      commitcontent:'',
      mainCardMsg:'回复',
      commitcardMsg:'收起回复',
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
    };
  },
  methods: {
    getId() {
      console.log(this.$route.params.id);
    },
    getcomment() {
      this.commitVisibility = !this.commitVisibility;
      if(this.commitVisibility=true){
        this.mainCardMsg='收起回复';
      }
      else{
        this.mainCardMsg='回复';
      }
    },
    openCommit(){
      this.commitfootinputVisibility=!this.commitfootinputVisibility;
      if(this.commitVisibility=true){
        this.commitcardMsg='收起回复';
      }
      else{
        this.commitcardMsg='我也说一句';
      }
    },
    commitToPerson(data){
      this.commitfootinputVisibility=true;
      this.commitcontent='回复'+data.writter+':';
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
    margin-top: 30px;
  }
  .commitcontent {
    font-size: 12px;
    color: gray;
  }
  .commitfoot {
    float: right;
    bottom: 0;
    font-size: 8px;
    right: 0;
  }
  .commitfootbutton{
    float: right;
    margin-top: 20px;
  }
  .commitfootinput{
    margin-top: 20px;
  }
  .commithead {
    text-align: center;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .post{
    margin-top: 20px;
  }
}
</style>



