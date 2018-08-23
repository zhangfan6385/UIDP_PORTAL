<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <div class="logo title">
        <img src="../../../app_src/imgs/logo.png">
        <span>大港油田软件开发平台</span>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="password" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">登 录</el-button>

    </el-form>
    <el-dialog width="40%" title="请选择用户！" :visible.sync="showDialog" append-to-body>
      <log-in-user :updateShowDialog='updateShowDialog' />
    </el-dialog>
  </div>
</template>

<script>
// import { isvalidUsername } from '@/app_src/utils/validate'
import LogInUser from "./logInUser";
import { Message } from "element-ui";
export default {
    components: { LogInUser },
    name: "login",
    data() {
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error("密码不能少于6位"));
            } else {
                callback();
            }
        };
        return {
            loginForm: {
                username: "UIDPAdmin",
                password: "UIDPAdmin",
                userDomain: ""
            },
            loginRules: {
                // username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: validatePassword
                    }
                ]
            },
            passwordType: "password",
            loading: false,
            showDialog: false,
            radio: "user"
        };
    },
    methods: {
        showPwd() {
            if (this.passwordType === "password") {
                this.passwordType = "";
            } else {
                this.passwordType = "password";
            }
        },
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$store
                        .dispatch("LoginByUsername", this.loginForm)
                        .then(response => {
                            this.$store.dispatch(
                                "setprojList",
                                response.data.projList
                            );
                        })
                        .catch(err => {
                            this.loading = false;
                            Message.error(err);
                        });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        updateShowDialog(val) {
            this.showDialog = false;
            this.$router.push({ path: "/" });
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: rgb(22, 86, 155);
$light_gray: #eee;

/* reset element-ui css */
.login-container {
    padding: 100px 0;
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
    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }

    .logo {
        text-align: center;
        line-height: 50px;
        span {
            margin-left: 8px;
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
        }

        img {
            vertical-align: middle;
            height: 30px;
            width: 30px;
        }
    }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: rgb(22, 86, 155);
$dark_gray: #dee7e8; // #889aa4;
$light_gray: #eee;

.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 520px;
        padding: 35px 35px 15px 35px;
        margin: 30px auto;
    }
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
        span {
            &:first-of-type {
                margin-right: 16px;
            }
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

    .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
    .thirdparty-button {
        position: absolute;
        right: 35px;
        bottom: 28px;
    }
}
</style>
