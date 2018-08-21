<template>
    <div id="userinfodialog">
        <el-dialog title="我的信息" class="themdialog" :visible.sync="isvisibleuser" width="30%" @close='closeDialog'>
            <el-card>
                <span class="name">姓名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>张三</span><br>
                <span class="name">所属公司：</span>
                <span>乐山大佛</span><br>
                <span class="name"> 已选项目：</span>
                <span>项目二</span>
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
            pwdForm: {}
        };
    },
    computed: {
        getPassword() {
            return this.$store.state.user.dialogUserInfoVisible;
        }
    },
    watch: {
        getPassword(data) {
            this.isvisibleuser = data;
        }
    },
    methods: {
        closeDialog() {
            this.$store.state.user.dialogUserInfoVisible = false;
        }
    },
    created() {}
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