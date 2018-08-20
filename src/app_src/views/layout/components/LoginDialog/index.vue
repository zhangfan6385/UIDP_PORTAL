<template>
    <div id="logindialog">
        <el-dialog title="账号登录" :visible.sync="dialogLoginVisible" width="30%" :show-close="false">
            <el-form :model="form" ref="loginForm" :rules="loginRules" label-width="80px">
                <el-form-item label="账号：" prop="username">
                    <el-input v-model="form.username"  placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码:" prop="password">
                    <el-input v-model="form.password" type="password"  placeholder="密码不能小于六位"></el-input>
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
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error("密码不能小于6位！"));
            } else {
                callback();
            }
        };
        const validateUsername = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error("账号不能为空！"));
            } else {
                callback();
            }
        };
        return {
            dialogLoginVisible: false,
            form: {
                username: "",
                password: ""
            },
            loginRules: {
                username: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: validateUsername
                    }
                ],
                password: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: validatePassword
                    }
                ]
            }
        };
    },
    methods: {
        close() {
            this.$store.state.user.dialogLoginVisible = false;
        },
        login() {
            console.log(22)
            this.$store.state.user.token = "";
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    //   this.loading = true;
                    //   this.loginForm.userDomain = this.code;
                    //   this.$store
                    //     .dispatch("LoginByUsername", this.loginForm)
                    //     .then(response => {
                    //       this.$store.dispatch("setRoleLevel", response.data.roleLevel);
                    //       if (response.data.roleLevel === "admin") {
                    //         this.$store.dispatch("setUserId",null);
                    //         this.updateShowDialog("");
                    //       } else {
                    //         var userList = this.$store.state.user.userList;
                    //         if (userList.length === 1) {
                    //           // this.$store.dispatch('setDepartCode', orglist[0].orgId)
                    //           // this.$store.dispatch('setDepartName', orglist[0].orgName)
                    //           this.$store.dispatch("setUserId", userList[0].USER_ID);
                    //           this.updateShowDialog("");
                    //         } else {
                    //           this.showDialog = true;
                    //         }
                    //         this.loading = false;
                    //       }
                    //     })
                    //     .catch(err => {
                    //       this.loading = false;
                    //       Message.error(err);
                    //     });
                } else {
                    return false;
                }
            });

            this.$store.state.user.userId = "sdfdsf";
            this.$store.state.user.dialogLoginVisible = false;
        }
    },
    computed: {
        getLoginVisible() {
            return this.$store.state.user.dialogLoginVisible;
        }
    },
    watch: {
        getLoginVisible(data) {
            this.dialogLoginVisible = data;
        }
    }
};
</script>


<style lang="scss" scoped>
.dialog-footer {
    text-align: center;
}
</style>



