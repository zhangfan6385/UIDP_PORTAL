<template>
    <div id="logindialog">
        <el-dialog title="账号登录"  :visible.sync="dialogLoginVisible" width="30%" :show-close="false">
            <el-form :model="form" ref="form"  label-width="80px">
                <el-form-item label="账号：">
                    <el-input v-model="form.username"  auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码:" >
                    <el-input v-model="form.password" type="password" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="login">登 录</el-button>
            </div>
        </el-dialog>
    </div>
</template>


<script>
export default {
    data() {
        return {
            dialogLoginVisible: false,
            form: {
                username: "",
                password: ""
            },
        };
    },
    methods: {close(){
            this.$store.state.user.dialogLoginVisible=false
        },
        login(){
            this.$store.state.user.userId='sdfdsf'
            this.$store.state.user.dialogLoginVisible=false
        }
    },
    computed:{
        getLoginVisible(){
            return this.$store.state.user.dialogLoginVisible
        }
    },
    watch:{
        getLoginVisible(data){
            this.dialogLoginVisible=data
        }
    }
};
</script>


<style lang="scss" scoped>
.dialog-footer{
    text-align: center;
}
</style>



