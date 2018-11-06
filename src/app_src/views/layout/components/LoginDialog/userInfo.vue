<template>
    <div id="userinfodialog">
        <el-dialog title="我的信息" class="themdialog" :visible.sync="isvisibleuser" width="30%" @close='closeDialog'>
            <el-card>
                <span class="name">姓名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>{{userinfo.USER_NAME}}</span><br>
                <span class="name">所属公司：</span>
                <span>{{userinfo.ORG_NAME}}</span><br>
                <span class="name"> 已选项目：</span>
                <span>{{currentProjName}}</span>
            </el-card>
        </el-dialog>
    </div>
</template>
<script>
import { getUserInfo } from "@/app_src/api/user";

export default {
    data() {
        return {
            isvisibleuser: false,
            userinfo:{},
            currentProjName:''
        };
    },
    methods: {
        closeDialog() {
            this.$store.state.user.dialogUserInfoVisible = false;
        },
        getInfo(){
            this.userinfo=this.getUserInfo
            this.currentProjName=this.getCurrentProj
        }
    },
    mounted() {
        this.getInfo();
    },
    computed:{
        getUserInfo(){
            return this.$store.state.user.userinfo[0]
        },
        getCurrentProj(){
            return this.$store.state.user.currentProjName
        },
        getInfoVis(){
            return this.$store.state.user.dialogUserInfoVisible
        }
    },
    watch:{
        getUserInfo(data){
            this.userinfo=data;
        },
        getCurrentProj(data){
            this.currentProjName=data
        },
        getInfoVis(data){
            this.isvisibleuser=data
        }
    }
};
</script>
<style lang="scss" >
.themdialog {
    .el-dialog{
    .el-dialog__header {
        padding: 15px;
    }
    .el-dialog__body {
        padding: 5px 15px 15px 15px;
        span{
            font-size: 17px;
        }
        .name{
            width: 100px;
        }
    }
}
}
</style>