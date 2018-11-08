<template>
    <div id="versiondetail" class="versiondetail">
        <el-row type="flex">
            <el-col :span="2"> </el-col>
            <el-col :span="20">
                <el-card shadow="never" style="height:100%">
                    <el-row>
                        <el-col :span="12">
                            <div class="breadcrumb">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item>开发平台</el-breadcrumb-item>
                                    <el-breadcrumb-item v-if="platInfo.PLAT_TYPE===0">C#历史版本</el-breadcrumb-item>
                                    <el-breadcrumb-item v-if="platInfo.PLAT_TYPE===1">GO#历史版本</el-breadcrumb-item>
                                    <el-breadcrumb-item>版本详情</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div style="width:100%;padding-left:10px">
                                
                                <a href="#" @click="back" title="后退" style="float:right" class="back"><img src="../../../app_src/imgs/back.png"></a>
                                <!-- <el-button size="mini" style="float:right" type="primary" @click="back">后 退</el-button> -->
                            </div>
                        </el-col>
                    </el-row>

                    <el-card class="componentinfo" shadow="never" style="width:95%;margin:0 auto;">
                    <!-- <div style="width:100%;padding:10px 0 0 5px;text-align:center;">
                        <span style="font-weight:bold">{{platInfo.PLAT_NAME}}</span>
                    </div>
                    
                        <ul style="width:40%;padding:10px 0 0 5px;margin:0 auto;">
                        <li>
                            <span>版　　本：</span>
                            <span>{{platInfo.PLAT_VERSION}}</span>
                        </li>
                        <li>
                            <span>发布日期：</span>
                            <span>{{platInfo.PLAT_PUBLISHDATE | parseTime}}</span>
                        </li>
                        <li>
                            <span>适用平台：</span>
                            <span>{{platInfo.SUIT_PLAT}}</span>
                        </li>
                        </ul>
                        <ul style="width:40%;padding:10px 0 0 5px;margin:0 auto;">
                        <li>
                            <span>使用环境：</span>
                            <span>{{platInfo.APPLICATION_BROWSER}}</span>
                        </li>
                          <li>
                                <span>平台大小：</span>
                                <span>{{platInfo.PLAT_SIZE}}</span>
                            </li>
                          <li>
                                <span>平台语言：</span>
                                <span>{{platInfo.SOFTWARE_LANGUAGE}}</span>
                            </li>
                        </ul> -->
                        <table border-collapse="collapse" align="center" cellspacing="5" cellpadding="5" width="750px;" style="font-family:'微软雅黑';font-size: 14px">
                            <caption><span style="font-weight:bold">{{platInfo.PLAT_NAME}}</span></caption>
                            <tr>
                                <td style="width:90px;"><span>版　　本：</span></td>
                                <td><span>{{platInfo.PLAT_VERSION}}</span></td>
                                <td style="width:90px;"><span>使用环境：</span></td>
                                <td><span>{{platInfo.APPLICATION_BROWSER}}</span></td>
                            </tr>
                            <tr>
                                <td><span>发布日期：</span></td>
                                <td><span>{{platInfo.PLAT_PUBLISHDATE | parseTime}}</span></td>
                                <td><span>平台大小：</span></td>
                                <td><span>{{platInfo.PLAT_SIZE}}</span></td>
                            </tr>
                            <tr>
                                <td><span>适用平台：</span></td>
                                <td><span>{{platInfo.SUIT_PLAT}}</span></td>
                                <td><span>平台语言：</span></td>
                                <td><span>{{platInfo.SOFTWARE_LANGUAGE}}</span></td>
                            </tr>
                        </table>
                        <div style="width:100%;clear:both;font-size: 14px;font-family:'微软雅黑';padding-left:10px" v-if="platInfo.CHECK_STATE===1">
                            <ul v-for="(item,key) in platInfo.children" :key="key">
                                <li>
                                    文件名称：
                                    <a :href="downloadurl+item.FILE_URL" target="_blank">{{item.FILE_NAME}}</a>
                                </li>
                                <li>
                                    文件大小：{{item.FILE_SIZE}}
                                </li>
                                <li>
                                    创建日期：{{item.CREATE_DATE|parseTime}}
                                </li>
                            </ul>
                        </div>
                        <!--style="text-align:center;float:left;width:45%;height:145px;padding-top:70px;"-->
                        <div style="text-align:center;clear:both">
                            <el-button type="primary" @click="handleApply()" v-if="platInfo.CHECK_STATE===-1||platInfo.CHECK_STATE===2">申&nbsp;请</el-button>
                            <el-button type="danger" @click="doNothing" v-else-if="platInfo.CHECK_STATE===0">待审核</el-button>
                            <!-- <el-button type="primary" v-else-if="platInfo.CHECK_STATE===1">通过</el-button> -->
                            <!-- <el-button type="danger" @click="handleApply()" v-if="severInfo.CHECK_STATE===2">已驳回</el-button> -->
                            <!-- <el-button size="mini" type="primary" @click="goAnchor">查看服务码</el-button> -->
                        </div>
                    </el-card>
                    <!-- <el-card id="#anchor1" class="componentinfo" v-for="(file,key) in platInfo.children" :key="key" v-if="platInfo.CHECK_STATE===1">
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
                        <div class="title" style="width:90%;margin:0 auto;padding-bottom:5px;">平台运行要求</div>
                        <div v-html="platInfo.PLAT_RUNREQUIRE" style="width:90%;margin:0 auto;"></div>
                    </el-card>
                </el-card>

                <el-dialog title="服务码信息" :visible.sync="dialogCodeVisible">
                    <span>{{platInfo.SERVICE_CODE}}</span>
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
    </div>
</template>
<script>
import { fetchGetPlatDetail } from "@/app_src/api/history";
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
                APPLY_TYPE: 0,
                USE_CONTENT: "",
                USE_TYPE: "",
                APPLY_LINKMAN: "",
                APPLY_PHONE: "",
                APPLY_EMAIL: ""
            },
            dialogCodeVisible: false,
            dialogFormVisible: false,
            platInfo: {},
            projList: [],
            userinfo: {},
            componentName: "",
            dialogTitle: "平台申请",
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
        parseTime
    },
    methods: {
        back() {
            this.$router.go(-1);
            //console.log(this.platInfo);
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
        getPlatDetail() {
            //this.queryList.userid='2a474344-0d65-48a4-8735-b8a2371160d4'
            this.queryList.userid = this.$store.state.user.userID;
            this.queryList.projectid = this.$store.state.user.currentProjID;
            //console.log(this.$route.params.id);
            this.queryList.resourceid = this.$route.params.id;
            fetchGetPlatDetail(this.queryList).then(response => {
                if (response.data.code === 2000) {
                    //console.log(response.data);
                    this.platInfo = response.data.items[0];
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
                            this.getPlatDetail();
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
            this.form.APPLY_TYPE = 0;
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
        this.getPlatDetail();
    },
    computed: {
        getCurrentProjId() {
            return this.$store.state.user.currentProjID;
        }
    },
    watch: {
        getCurrentProjId(data) {
            if (data != null) {
                this.getPlatDetail();
            }
        }
    }
};
</script>
<style lang="scss">
.versiondetail {
    margin-top: 20px;
    .componentinfo {
        margin-bottom: 5px;
        // padding-left: 30px;
    }
    .componentinfo1 {
        margin-bottom: 5px;
        // padding-left: 30px;
        min-height: 500px;
        line-height: 150%;
        .title {
            font-weight: bold;
        }
    }
    .el-card__body {
        padding: 5px;
    }
    .breadcrumb {
        margin-top:18px;
           font-family: "微软雅黑";
    font-size: 14px;
    }
    /* .componentinfo li{float:left;width:100px;background:#CCC;margin-left:3px;line-height:30px;} */
    .componentinfo ul {
        width: 50%;
        list-style: none;
        margin-bottom: 20px;
        padding-left: 0px;
        float: left;
    }
    .back {
        float: right;
        img {
            width: 50px;
            height: 50px;
        }
    }
    .componentinfo li {
        font-size: 14px;
        width: 100%; /*如果显示三列 则width改为70px*/
        line-height: 17px;
        display: block;
        margin-bottom: 5px;
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
}
</style>
