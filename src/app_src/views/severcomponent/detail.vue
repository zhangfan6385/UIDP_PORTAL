<template>
    <el-row type="flex" style="margin-top:20px;">
        <el-col :span="2"> </el-col>
        <el-col :span="20">
            <el-card class="box-card" style="margin-bottom:10px;">
                <el-row>
                    <el-col :span="12">
                        <div class="breadcrumb">
                            <el-breadcrumb separator="/">
                                <el-breadcrumb-item>组件目录</el-breadcrumb-item>
                                <el-breadcrumb-item>组件详情</el-breadcrumb-item>
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
                    <!-- <div style="width:100%;padding:10px 0 0 5px;">
                        <span style="font-weight:bold">{{obj.COMPONENT_NAME}}</span>
                    </div>
                    <ul style="width:40%;padding:10px 0 0 5px;">
                        <li>
                            <span>版　　本：</span>
                            <span>{{obj.COMPONENT_VERSION}}</span>
                        </li>
                        <li>
                            <span>发布日期：</span>
                            <span>{{obj.COMPONENT_PUBLISHDATE | parseTime}}</span>
                        </li>
                        <li>
                            <span>上 传 人：</span>
                            <span>{{obj.CREATER}}</span>
                        </li>

                        <li>
                            <span>下载次数：</span>
                            <span>{{obj.DOWNLOAD_TIMES}}</span>
                        </li>
                        <li>
                            <span>软件大小：</span>
                            <span>{{obj.COMPONENT_SIZE}}</span>
                        </li>

                    </ul>
                    <ul style="width:40%;padding:10px 0 0 5px;">
                        <li>
                            <span>软件大小：</span>
                            <span>{{obj.COMPONENT_SIZE}}</span>
                        </li>
                        <li>
                            <span>开发语言：</span>
                            <span>{{obj.SOFTWARE_LANGUAGE}}</span>
                        </li>
                        <li>
                            <span>联系电话：</span>
                            <span>{{obj.MANAGE_TEL }}</span>
                        </li>
                        <li>
                            <span>应用平台：</span>
                            <span>{{obj.SUIT_PLAT}}</span>
                        </li>
                        <li>
                            <span>适用浏览器：</span>
                            <span>{{obj.APPLICATION_BROWSER}}</span>
                        </li>
                    </ul>
                    <div style="width:40%;padding:10px 0 10px 8px;">
                        <el-row>
                            <el-col :span="24">
                                <span>管理部门：</span>
                                <span>{{obj.MANAGE_ORG_NAME}}</span>
                            </el-col>
                        </el-row>
                    </div> -->
                    <!-- <div style="text-align:center;float:left;width:45%;height:145px;padding-top:70px;"> -->
                    <table border-collapse="collapse" align="center" cellspacing="5" cellpadding="5" width="750px;" style="font-family:'微软雅黑';font-size: 14px;line-height:25px;">
                        <caption><span style="font-weight:bold;font-size:17px;">{{obj.COMPONENT_NAME}}</span></caption>
                        <tr>
                            <td style="width:95px;"><span>版　　本：</span></td>
                            <td><span>{{obj.COMPONENT_VERSION}}</span></td>
                            <td style="width:95px;"><span>软件大小：</span></td>
                            <td><span>{{obj.COMPONENT_SIZE}}</span></td>
                        </tr>

                        <tr>
                            <td><span>发布日期：</span></td>
                            <td><span>{{obj.COMPONENT_PUBLISHDATE | parseTime}}</span></td>
                            <td><span>开发语言：</span></td>
                            <td><span>{{obj.SOFTWARE_LANGUAGE}}</span></td>
                        </tr>
                        <tr>
                            <td><span>上 传 人：</span></td>
                            <td><span>{{obj.CREATER}}</span></td>
                            <td><span>联系电话：</span></td>
                            <td><span>{{obj.MANAGE_TEL }}</span></td>
                        </tr>
                        <tr>
                            <td><span>申请次数：</span></td>
                            <td><span>{{obj.DOWNLOAD_TIMES}}</span></td>
                            <td><span>应用平台：</span></td>
                            <td><span>{{obj.SUIT_PLAT}}</span></td>
                        </tr>
                        <tr>
                            <td><span>软件大小：</span></td>
                            <td><span>{{obj.COMPONENT_SIZE}}</span></td>
                            <td><span>适用浏览器：</span></td>
                            <td><span>{{obj.APPLICATION_BROWSER}}</span></td>
                        </tr>
                        <tr>
                            <td><span>管理部门：</span></td>
                            <td colspan="3"><span>{{obj.MANAGE_ORG_NAME}}</span></td>

                        </tr>
                    </table>
                    <div style="text-align:center;clear:both;padding-left:10px;" v-if="obj.CHECK_STATE!=1">
                        <el-button type="primary" @click="handleApply" v-if="obj.CHECK_STATE===-1||obj.CHECK_STATE===-2">申 请</el-button>
                        <el-button type="danger" @click="doNothing" v-else-if="obj.CHECK_STATE===0">待审核</el-button>
                        <el-button type="primary" v-else-if="obj.CHECK_STATE===1" @click="download(obj.URL)">下 载</el-button>
                        <!-- <el-button type="danger" @click="handleApply" v-if="obj.CHECK_STATE===2">已驳回</el-button> -->
                    </div>
                    <div style="width:100%;clear:both;padding-left:12px;" v-if="obj.CHECK_STATE===1 && obj.packages.length>0">
                        <span>程序包：</span>

                        <a style="font-size:14px;" :href="downloadurl+item.PACKAGE_URL" target="_blank" v-for="(item,key) in obj.packages" :key=key>
                            {{item.PACKAGE_NAME}}({{item.PACKAGE_SIZE}})
                        </a>

                        <!-- <span v-else-if="obj.URL===null" style="color:red;">暂无下载</span> -->
                    </div>
                    <div v-if="obj.CHECK_STATE===1 && obj.children.length>0" style="width:100%;padding-left:13px;clear:both;padding-top:10px">
                        <span>文档:
                            <a style="font-size:14px;;" :href="downloadurl+file.FILE_URL" target="_blank" v-for="(file,key) in obj.children" :key="key">{{file.FILE_NAME}}({{file.FILE_SIZE}})</a>
                        </span>
                    </div>
                </el-card>
                <!-- <el-card id="#anchor1" class="componentinfo" v-for="(file,key) in obj.children" :key="key" v-if="obj.CHECK_STATE===1">
                    <div style="float:left;">
                        <h5>文件下载:
                            <a :href="downloadurl+file.FILE_URL" target="_blank">{{file.FILE_NAME}}</a>
                        </h5>
                        <h5>文件大小：{{file.FILE_SIZE}}</h5>
                        <h5>发布日期：{{file.CREATE_DATE | parseTime}}</h5>
                    </div>
                </el-card> -->
                <el-card class="componentinfo1" shadow="never" style="width:95%;margin:0 auto;margin-top:10px;">
                    <span class="title">详细说明</span>
                    <div class="divcontent" style="padding-right:30px;padding-left:6px;word-wrap:break-word;" v-html="obj.COMPONENT_CONTENT"></div>
                </el-card>

            </el-card>

            <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible">
                <el-table :data="gridData">
                    <el-table-column property="applaydate" label="申请日期" width="150"></el-table-column>
                    <el-table-column property="projectname" label="项目名称" width="200"></el-table-column>
                    <el-table-column property="purpose" label="用途类型"></el-table-column>
                </el-table>
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
                    <el-button @click="cencel()">取 消</el-button>
                    <el-button type="primary" @click="submit">提 交</el-button>
                </div>
            </el-dialog>
        </el-col>
    </el-row>

</template>
<script>
import { fetchSeverComponentDetail } from "@/app_src/api/severcomponent";
import { fetchApply } from "@/app_src/api/apply";
import { parseTime } from "@/app_src/utils/index.js";
export default {
    filters: {
        parseTime
    },
    data() {
        return {
            downloadurl: process.env.BASE_DOWNLOAD,
            gridData: [],
            form: {
                APPLY_USERID: "",
                APPLY_ORG_NAME: "",
                PROJECT_ID: "",
                PROJECT_NAME: "",
                APPLY_ORG_ID: "",
                APPLY_RESOURCE_ID: "",
                APPLY_TYPE: 1,
                USE_CONTENT: "",
                USE_TYPE: "",
                APPLY_LINKMAN: "",
                APPLY_PHONE: "",
                APPLY_EMAIL: ""
            },
            userinfo: {},
            projList: [],
            dialogTableVisible: false,
            dialogFormVisible: false,
            componentName: "",
            dialogTitle: "组件申请",
            componentContent: "",
            formLabelWidth: "120px",
            formInline: {
                user: "",
                region: ""
            },
            obj: {},
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
    methods: {
        back() {
            this.$router.go(-1);
        },
        download(URL) {
            window.open(this.downloadurl + URL);
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
        handleDown(name) {
            alert("正在下载" + name + "文件");
        },
        getSeverComponent() {
            this.queryList.userid = this.$store.state.user.userID;
            this.queryList.projectid = this.$store.state.user.currentProjID;
            this.queryList.resourceid = this.$route.params.id;
            fetchSeverComponentDetail(this.queryList).then(response => {
                if (response.data.code === 2000) {
                    this.obj = response.data.items; //获取的为1个对象不是数组
                    //console.log(this.obj.packages);
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
        submit() {
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
                            this.getSeverComponent();
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
            this.form.APPLY_TYPE = 1;
            this.form.USE_CONTENT = "";
            this.form.USE_TYPE = "";
            this.form.APPLY_LINKMAN = "";
            this.form.APPLY_PHONE = "";
            this.form.APPLY_EMAIL = "";
        },
        getProjInfo() {
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
        this.getSeverComponent();
    },
    computed: {
        getCurrentProjId() {
            return this.$store.state.user.currentProjID;
        }
    },
    watch: {
        getCurrentProjId(data) {
            if (data != null) {
                this.getSeverComponent();
            }
        }
    }
};
</script>
<style lang="scss">
.componentinfo {
    margin-bottom: 15px;
    padding-bottom: 10px;
    padding-left: 30px;
    clear: both;
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
/* .componentinfo li{float:left;width:100px;background:#CCC;margin-left:3px;line-height:30px;} */
.componentinfo ul {
    width: 50%;
    list-style: none;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 0px;
    float: left;
}
.componentinfo li {
    font-size: 15px;
    //width: 45%; /*如果显示三列 则width改为70px*/
    line-height: 23px;
    display: block;
    margin: 5px;
}
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
/* a:active{text-decoration:none;color:yellow;}
       a:visited {text-decoration:none;color:green;} */
</style>
