<template>
  <div id="index" class="index">

    <el-row type="flex">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <div class="platform">
          <el-carousel :interval="5000" arrow="always" height="650px">
            <el-carousel-item>
              <div class="cSharpPlatform">

              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="GOPlatform">

              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>

    </el-row>

  </div>
</template>


<script>
export default {};
</script>


<style lang="scss">
.index {
    .platform {
        min-height: 600px;
    }
    .el-carousel {
        min-height: 600px;
    }
    .cSharpPlatform {
        background-image: url(../../../app_src/imgs/CSharpBackground.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        min-height: 600px;
    }
    .GOPlatform {
        background-image: url(../../../app_src/imgs/GOBackground.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        min-height: 600px;
    }
}
</style>


