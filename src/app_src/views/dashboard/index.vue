<template>
  <div id="index" class="index">
    <el-row type="flex">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <div class="platform">
          <el-carousel :interval="5000" arrow="always" height="650px" :initial-index="index">
            <el-carousel-item>
              <div class="cSharpPlatform">
                <el-row>
                  <el-col :span="24">
                    <div class="info">
                      <div class="title">
                        C#平台
                      </div>
                      <div class="content">
                        运行环境：.Net Core 2.0<br> 运行服务器：Windows Server 2008 sp1
                      </div>
                      <div class="button">
                        <img src="../../../app_src/imgs/ButtonWhite.png" alt="" title="点击下载">
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="GOPlatform">
                <el-row>
                  <el-col :span="24">
                    <div class="info">
                      <div class="title">
                        GOLANG平台
                      </div>
                      <div class="content">
                        运行环境：.Net Core 2.0<br> 运行服务器：Windows Server 2008 sp1
                      </div>
                      <div class="button">
                        <img src="../../../app_src/imgs/ButtonBlack.png" alt="" title="点击下载">
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>

    </el-row>

  </div>
</template>


<script>
export default {
  data(){
    return{
      index:0
    }
  },
  methods:{
    getindex(){
      let dashaboardindex=this.$store.state.user.dashaboardindex
      // console.log('ling'+dashaboardindex)
      // console.log('yi'+this.$store.state.user.dashaboardindex)
      // console.log(typeof(this.$store.state.user.dashaboardindex))
      // console.log('er'+this.$store.state.user.dashaboardindex)
      this.index=dashaboardindex 
      //console.log('san'+this.dashboardindex)
      //console.log(this.dashboardindex)
    }
  },
  mounted() {
    this.getindex();
  },
};
</script>


<style lang="scss">
.index {
    .platform {
        .cSharpPlatform {
            border-radius: 0.83em;
            background-image: url(../../../app_src/imgs/CSharpBackground.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            font-family: "微软雅黑";
            height: 95%;
            color: white;
            .info {
                margin-left: 45%;
                margin-top: 16%;
            }
            .title {
                margin-left: 50px;
                font-size: 30px;
                font-weight: bold;
            }
            .content {
                margin-top: 20px;
                line-height: 30px;
                font-weight: 10px;
            }
            .button {
                margin-top: 10px;
                margin-left: 20px;
                img {
                    width: 230px;
                    height: 70px;
                }
            }
        }
    }

    .el-carousel {
        min-height: 600px;
    }
    .GOPlatform {
        border-radius: 0.83em;
        background-image: url(../../../app_src/imgs/GOBackground.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        min-height: 95%;
        .info {
            margin-left: 15%;
            margin-top: 20%;
        }
        .title {
            margin-left: 50px;
            font-size: 30px;
            font-weight: bold;
        }
        .content {
            margin-top: 20px;
            line-height: 30px;
            font-weight: 10px;
        }
        .button {
            margin-top: 10px;
            margin-left: 20px;
            img {
                width: 230px;
                height: 70px;
            }
        }
    }
}
</style>


