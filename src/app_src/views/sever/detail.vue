<template>
    <el-row type="flex" style="margin-top:20px;margin-bottom:17px">
        <el-col :span="2"> </el-col>
        <el-col :span="20">
            <el-card shadow="never" style="height:100%;">
                <el-row>
                    <el-col :span="12">
                        <div class="breadcrumb">
                            <el-breadcrumb separator="/">
                                <el-breadcrumb-item>服务目录</el-breadcrumb-item>
                                <el-breadcrumb-item>服务详情</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="back">
                            <!-- <el-button type="primary" @click="back" size="mini">后退</el-button> -->
                            <a href="#" title="后退" @click="back" style="float:right"><img src="../../../app_src/imgs/back.png"></a>
                        </div>
                    </el-col>
                </el-row>
                <el-card class="componentinfo" shadow="never" style="width:95%;margin:0 auto;">
                    <!-- <div style="width:100%;padding:10px 0 10px 10px;">
                        <span style="font-weight:bold;">{{severInfo.SERVICE_NAME}}</span>
                     
                    </div>
                    <div style="width:100%;clear:both;font-size: 15px;padding-left:8px;line-height:25px;">
                        <span>服务地址：</span>
                        <span v-if="severInfo.CHECK_STATE===1">{{severInfo.SERVICE_URL}}</span>
                        <span v-else>{{severInfo.SERVICE_URL | strSplit}}</span><br>
                        <span v-if="severInfo.CHECK_STATE===1">X-Token：</span>
                        <span v-if="severInfo.CHECK_STATE===1">{{severInfo.SERVER_TOKEN}}</span>
                    </div> -->
                    <!-- <div style="width:100%;font-size: 15px;line-height: 16px;padding-left:10px" v-if="severInfo.CHECK_STATE===1">
                        <span>X-Token：</span>
                        <span>{{severInfo.SERVICE_CODE}}</span>
                    </div> -->
                    <!-- <ul style="width:40%;padding:10px 0 0 5px;">
                        <li>
                            <span>请求方式：</span>
                            <span>{{severInfo.REQUEST_METHOD}}</span>
                        </li>
                        <li>
                            <span>数据格式：</span>
                            <span>{{severInfo.DATA_FORMAT}}</span>
                        </li>
                        <li>
                            <span>发布日期：</span>
                            <span>{{severInfo.SERVICE_PUBLISHDATE | parseTime}}</span>
                        </li>
                        <li>
                            <span>下载次数：</span>
                            <span>{{severInfo.SERVICE_TIMES}}</span>
                        </li>
                    </ul>
                    <ul style="width:40%;padding:10px 0 0 5px;">
                        <li>
                            <span>服务版本：</span>
                            <span>{{severInfo.SERVER_VERSION}}</span>
                        </li>
                        <li>
                            <span>开发语言：</span>
                            <span>{{severInfo.SERVER_LANGUAGE}}</span>
                        </li>
                        <li>
                            <span>管理部门：</span>
                            <span>{{severInfo.MANAGE_ORG_NAME}}</span>
                        </li>
                        <li>
                            <span>联系方式：</span>
                            <span>{{severInfo.MANAGE_TEL}}</span>
                        </li>
                    </ul> -->
                    <table border-collapse="collapse" align="center" cellspacing="5" cellpadding="5" width="850px;" style="font-family:'微软雅黑';font-size:14px;line-height:25px;">
                        <caption><span style="font-weight:bold;font-size:17px;">{{severInfo.SERVICE_NAME}}</span></caption>
                        <tr>
                            <td><span>服务地址：</span></td>
                            <td colspan="3" v-if="severInfo.CHECK_STATE===1">{{severInfo.SERVICE_URL}}</td>
                            <td colspan="3" v-else>{{severInfo.SERVICE_URL | strSplit}}</td>
                        </tr>
                        <tr v-if="severInfo.CHECK_STATE===1">
                            <td><span>X-Token：</span></td>
                            <td colspan="3"><span>{{severInfo.SERVER_TOKEN}}</span></td>
                        </tr>
                        <tr>
                            <td style="width:90px;"><span>请求方式：</span></td>
                            <td><span>{{severInfo.REQUEST_METHOD}}</span></td>
                            <td style="width:90px;"><span>服务版本：</span></td>
                            <td><span>{{severInfo.SERVER_VERSION}}</span></td>
                        </tr>
                        <tr>
                            <td><span>数据格式：</span></td>
                            <td><span>{{severInfo.DATA_FORMAT}}</span></td>
                            <td><span>开发语言：</span></td>
                            <td><span>{{severInfo.SERVER_LANGUAGE}}</span></td>
                        </tr>
                        <tr>
                            <td><span>发布日期：</span></td>
                            <td><span>{{severInfo.SERVICE_PUBLISHDATE | parseTime}}</span></td>
                            <td><span>管理部门：</span></td>
                            <td><span>{{severInfo.MANAGE_ORG_NAME}}</span></td>
                        </tr>
                        <tr>
                            <td><span>申请次数：</span></td>
                            <td><span>{{severInfo.SERVICE_TIMES}}</span></td>
                            <td><span>联系方式：</span></td>
                            <td><span>{{severInfo.MANAGE_TEL}}</span></td>
                        </tr>
                    </table>
                    <!--style="text-align:center;float:left;width:45%;height:145px;padding-top:70px;"-->
                    <div style="text-align:center;clear:both;padding-left:10px;" v-if="severInfo.CHECK_STATE!=1">
                        <el-button type="primary" @click="handleApply()" v-if="severInfo.CHECK_STATE===-1||severInfo.CHECK_STATE===2">申&nbsp;请</el-button>
                        <el-button type="danger" @click="doNothing" v-else-if="severInfo.CHECK_STATE===0">待审核</el-button>
                        <el-button type="primary" v-else-if="severInfo.CHECK_STATE===1">通过</el-button>
                        <!-- <el-button type="danger" @click="handleApply()" v-if="severInfo.CHECK_STATE===2">已驳回</el-button> -->
                        <!-- <el-button size="mini" type="primary" @click="goAnchor">查看服务码</el-button> -->
                    </div>
                    <div style="width:100%;padding-left:8px;clear:both;">
                        <span v-if="severInfo.CHECK_STATE===1 && severInfo.children.length>0 ">附件下载：
                            <a style="font-size:14px;" :href="downloadurl+file.FILE_URL" target="_blank" v-if="file.FILE_URL!=null" v-for="(file,key) in severInfo.children" :key="key">{{file.FILE_NAME}}({{file.FILE_SIZE}})</a>
                        </span>
                    </div>
                </el-card>
                <!-- <el-card id="#anchor1" class="componentinfo" v-for="(file,key) in severInfo.children" :key="key" v-if="severInfo.CHECK_STATE===1">
                    <div style="float:left;">
                        <h5>文件下载
                            <a :href="downloadurl+file.FILE_URL" target="_blank">{{file.FILE_NAME}}</a>
                        </h5>
                        <h5>文件大小：{{file.FILE_SIZE}}</h5>
                        <h5>发布日期：{{file.CREATE_DATE | parseTime}}</h5>
                    </div>
                </el-card> -->
                <el-card class="componentinfo1" shadow="never" style="width:95%;margin:0 auto;margin-top:10px;">
                    <!-- <span style="font-size:18px;font-weight:bold"><img style="width:20px;height:20px;" src="../../../app_src/imgs/title.png">服务介绍</span> -->
                    <!-- <div v-html="obj.content"></div> -->
                    <span class="title">详细说明</span>
                    <div class="divcontent" style="padding-right:30px;padding-left:6px;word-wrap:break-word" v-html="severInfo.SERVICE_CONTENT"></div>
                </el-card>
            </el-card>

            <el-dialog title="服务码信息" :visible.sync="dialogCodeVisible">
                <span>{{severInfo.SERVICE_CODE}}</span>
            </el-dialog>

            <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
                <el-form :model="form" :rules="rules" ref="form">
                    <el-form-item label="公司名称" :label-width="formLabelWidth">
                        <el-input v-model="userinfo.ORG_NAME" auto-complete="off" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="承担项目" :label-width="formLabelWidth">
                        <!-- <el-select v-model="form.PROJECT_ID" placeholder="请选项目">
                                <el-option v-for="(item,key) in projList" :key="key" :label="item.PROJECT_NAME" :value="item.PROJECT_ID">
                                </el-option>
                            </el-select> -->
                        <el-input v-model="form.PROJECT_NAME" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="用途描述" prop="USE_CONTENT" :label-width="formLabelWidth">
                        <el-input v-model="form.USE_CONTENT" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="用途类型" prop="USE_TYPE" :label-width="formLabelWidth">
                        <el-select v-model="form.USE_TYPE" placeholder="请选用途类型">
                            <el-option label="开发" :value="0"></el-option>
                            <el-option label="生产" :value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="联系人" prop="APPLY_LINKMAN" :label-width="formLabelWidth">
                        <el-input v-model="form.APPLY_LINKMAN" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="APPLY_PHONE" :label-width="formLabelWidth">
                        <el-input v-model="form.APPLY_PHONE" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="APPLY_EMAIL" :label-width="formLabelWidth">
                        <el-input v-model="form.APPLY_EMAIL" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="cencel">取 消</el-button>
                    <el-button type="primary" @click="submit">提 交</el-button>
                </div>
            </el-dialog>
        </el-col>
    </el-row>

</template>
<script>
import { fetchSeverDetail } from "@/app_src/api/sever";
import { fetchApply } from "@/app_src/api/apply";
import { parseTime } from "@/app_src/utils/index.js";
export default {
    data() {
        return {
            downloadurl: process.env.BASE_DOWNLOAD,
            form: {
                APPLY_USERID: "",
                APPLY_ORG_NAME: "",
                PROJECT_ID: "",
                PROJECT_NAME: "",
                APPLY_ORG_ID: "",
                APPLY_RESOURCE_ID: "",
                APPLY_TYPE: 2,
                USE_CONTENT: "",
                USE_TYPE: "",
                APPLY_LINKMAN: "",
                APPLY_PHONE: "",
                APPLY_EMAIL: ""
            },
            dialogCodeVisible: false,
            dialogFormVisible: false,
            severInfo: {},
            projList: [],
            userinfo: {},
            componentName: "",
            dialogTitle: "服务申请",
            componentContent: "",
            formLabelWidth: "120px",
            formInline: {
                user: "",
                region: ""
            },
            queryList: {
                userid: null,
                projectid: null,
                resourceid: null
            },
            rules: {
                USE_CONTENT: [
                    {
                        required: true,
                        message: "内容不能为空",
                        trigger: "blur"
                    }
                ],
                USE_TYPE: [
                    {
                        required: true,
                        message: "类型不能为空",
                        trigger: "blur"
                    }
                ],
                APPLY_LINKMAN: [
                    {
                        required: true,
                        message: "联系人不能为空",
                        trigger: "blur"
                    }
                ],
                APPLY_PHONE: [
                    {
                        required: true,
                        message: "电话不能为空",
                        trigger: "blur"
                    }
                ],
                APPLY_EMAIL: [
                    {
                        required: true,
                        message: "邮箱不能为空",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message: "请输入正确的邮箱地址",
                        trigger: "blur,changer"
                    }
                ]
            }
        };
    },
    filters: {
        parseTime,
        strSplit: function(val) {
            return val ? val.substr(0, val.length / 2) + "..." : "";
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        doNothing() {},
        handleApply() {
            if (this.$store.state.user.userID != null) {
                this.dialogFormVisible = true;
                this.getProjInfo();
            } else {
                this.$store.state.user.dialogLoginVisible = true;
            }
        },
        // handleHistory(name) {
        //   this.dialogTableVisible = true
        //   this.dialogTitle = '组件' + name + '申请记录'
        // },
        //锚点跳转
        goAnchor() {
            this.dialogCodeVisible = true;
        },
        getSever() {
            //this.queryList.userid='2a474344-0d65-48a4-8735-b8a2371160d4'
            this.queryList.userid = this.$store.state.user.userID;
            this.queryList.projectid = this.$store.state.user.currentProjID;
            this.queryList.resourceid = this.$route.params.id;
            fetchSeverDetail(this.queryList).then(response => {
                if (response.data.code === 2000) {
                    //console.log(response.data);
                    this.severInfo = response.data.items;
                } else {
                    // this.$notify({
                    //     position: "bottom-right",
                    //     title: "失败",
                    //     message: response.data.message,
                    //     type: "error",
                    //     duration: 2000
                    // });
                }
            });
        },
        //提交申请
        submit() {
            //this.queryList.prjID = this.$store.state.user.currentProjID;
            //this.queryList.ID = this.$route.params.id;
            this.$refs.form.validate(valid => {
                if (valid) {
                    fetchApply(this.form).then(response => {
                        if (response.data.code === 2000) {
                            this.$notify({
                                position: "bottom-right",
                                title: "成功",
                                message: response.data.message,
                                type: "success",
                                duration: 2000
                            });
                            this.getSever();
                            this.dialogFormVisible = false;
                        } else {
                            this.$notify({
                                position: "bottom-right",
                                title: "失败",
                                message: response.data.message,
                                type: "error",
                                duration: 2000
                            });
                        }
                    });
                }
            });
        },
        cencel() {
            this.resetForm();
            this.$refs.form.resetFields();
            this.dialogFormVisible = false;
        },
        resetForm() {
            this.form.APPLY_TYPE = 2;
            this.form.USE_CONTENT = "";
            this.form.USE_TYPE = "";
            this.form.APPLY_LINKMAN = "";
            this.form.APPLY_PHONE = "";
            this.form.APPLY_EMAIL = "";
        },
        test() {
            this.severInfo = this.list1.items;
            //console.log(this.severInfo);
        },
        getProjInfo() {
            //this.projList = this.$store.state.user.projList;
            this.form.APPLY_RESOURCE_ID = this.$route.params.id;
            this.form.PROJECT_ID = this.$store.state.user.currentProjID;
            this.form.PROJECT_NAME = this.$store.state.user.currentProjName;
            this.userinfo = this.$store.state.user.userinfo[0];
            this.form.APPLY_USERID = this.userinfo.USER_ID;
            this.form.APPLY_ORG_NAME = this.userinfo.ORG_NAME;
            this.form.APPLY_ORG_ID = this.userinfo.ORG_ID;
            this.form.APPLY_USERID = this.$store.state.user.userID;
        }
    },
    mounted() {
        this.getSever();
    },
    computed: {
        getCurrentProjId() {
            return this.$store.state.user.currentProjID;
        }
    },
    watch: {
        getCurrentProjId(data) {
            if (data != null) {
                this.getSever();
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.componentinfo {
    margin-bottom: 5px;
    padding-left: 30px;
}
.componentinfo1 {
    margin-bottom: 5px;
    padding-left: 30px;
    min-height: 500px;
    line-height: 150%;
    .title {
        font-weight: bold;
        padding-left: 6px;
        font-size: 17px;
    }
}

.el-card__body {
    padding: 5px;
}

/* .componentinfo li{float:left;width:100px;background:#CCC;margin-left:3px;line-height:30px;} */

.breadcrumb {
    margin-top: 15px;
    margin-left: 5%;
}
.back {
    float: right;
    img {
        width: 50px;
        height: 50px;
    }
}

a {
    text-decoration: none;
    color: blue;
    font-size: 10px;
    margin-right: 20px;
}
a:link {
    text-decoration: none;
    color: blue;
}
a:hover {
    text-decoration: none;
    color: blue;
}
.divcontent {
    p {
        text-indent: 2em;
    }
}
.breadcrumb {
    margin-top: 15px;
    margin-left: 5%;
}
</style>
