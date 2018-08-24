<template>
    <div id="dialoglogin" class="logindialog-container">
        <el-dialog :visible.sync="dialogLoginVisible" width="30%" @close="closeDiolog">
            <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
                <div class="logo title">
                    <img src="@/app_src/imgs/logo.png">
                    <span>大港油田软件工厂</span>
                </div>
                <el-form-item prop="username">
                    <span class="svg-container svg-container_login">
                        <svg-icon icon-class="user" />
                    </span>
                    <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="账号" />

                </el-form-item>
                <el-form-item prop="password">
                    <span class="svg-container">
                        <svg-icon icon-class="password" />
                    </span>
                    <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="密码" />
                    <span class="show-pwd" @click="showPwd">
                        <svg-icon icon-class="eye" />
                    </span>
                </el-form-item>
                <br>
                <el-button type="primary" v-waves style="width:86%;margin-bottom:30px;margin-left:30px;background-color:#409EFF;border-color:#409EFF" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>


<script>
import { loginByUsername } from "@/app_src/api/login";
import waves from "@/app_src/directive/waves"; // 水波纹指令
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
            passwordType: "password",
            loading: false,
            dialogLoginVisible: false,
            loginForm: {
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

    directives: {
        waves
    },
    methods: {
        showPwd() {
            if (this.passwordType === "password") {
                this.passwordType = "";
            } else {
                this.passwordType = "password";
            }
        },
        closeDiolog() {
            this.resetForm("loginForm");
            this.$store.state.user.dialogLoginVisible = false;
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //登录功能
        // handleLogin() {
        //     this.loading = true;
        //     // this.$store.state.user.token = "";
        //     // this.$store.state.user.userID = "sdfdsf";
        //     // this.$store.state.user.dialogLoginVisible = false;
        //     this.$refs.loginForm.validate(valid => {
        //         if (valid) {
        //             this.loading = true;
        //             this.$store
        //                 .dispatch("LoginByUsername", this.loginForm)
        //                 .then(response => {
        //                     this.$store.dispatch(
        //                         "setProjList",
        //                         response.data.ProjList
        //                     );
        //                     if (this.$store.state.user.ProjList.length != 0) {
        //                         this.$store.state.user.dialogProjectInfoVisible = true;
        //                     } else {
        //                         alert("登录失败");
        //                     }
        //                 })
        //                 .catch(err => {
        //                     this.loading = false;
        //                     Message.error(err);
        //                 });
        //                 this.loading = false;
        //         } else {
        //             console.log("error submit!!");
        //             return false;
        //         }
        //     });
        // }
        handleLogin() {
            this.loading = true;
            if ( this.$store.state.user.length != 0) {
                this.$store.state.user.dialogProjectInfoVisible = true;
            } else {
                alert("登录失败");
            }
            this.loading = false;
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
$dark_gray: #252020;
$light_gray: #252020;
$bg: rgb(22, 86, 155);
.dialog-footer {
    text-align: center;
}
.logindialog-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
            &:-webkit-autofill {
                -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: #fff !important;
            }
        }
    }
}
.logo {
    text-align: center;
    line-height: 50px;
    padding-bottom: 30px;
    span {
        margin-left: 8px;
        font-size: 18px;
        font-weight: bold;
    }
}
.svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
        font-size: 20px;
    }
}
img {
    vertical-align: middle;
    height: 50px;
    width: 50px;
}
.show-pwd {
    cursor: pointer;
}
</style>



