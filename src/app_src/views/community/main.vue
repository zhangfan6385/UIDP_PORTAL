<template>
    <div id="community" class="community">
       <el-row :gutter="20" type="flex">  
            <el-col :span="2"></el-col>     
            <el-col :span="20">
              
                  <div class="headerItem">
                      <el-button type="primary" plain >我的积分:{{score}}</el-button>
                      <el-button @click="goIndex" plain >社区首页</el-button>
                      <el-button type="success" plain @click="goToMycard">我的帖子</el-button>
                      <el-button type="info" plain @click="goToCollection">我的收藏</el-button>
                      <el-button type="warning" plain @click="newCard">发布帖子</el-button>
                  </div>                  
              
            </el-col>      
        </el-row>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
  name: "communitymain",
  data() {
    return {
      score: "1000"
    };
  },
  methods: {
    goIndex() {
      this.$router.push({ path: "/community/main" });
    },
    goToMycard() {
      this.$router.push({ path: "/community/main/mycard" });
    },
    goToCollection() {
      this.$router.push({ path: "/community/main/mycollection" });
    },
    newCard() {
      this.$router.push({ path: "/community/main/newcard" });
    }
  }
};
</script>

<style lang="scss">
.community {
  min-height: 200px;
  margin-top: 10px;
  border-radius: 0.5em;
  //background: rgb(194, 206, 195);
  .headerItem {
    float: right;
    padding-right: 20px;
    margin-left: 40px;
    margin-bottom: 5px;
  }
}
</style>

