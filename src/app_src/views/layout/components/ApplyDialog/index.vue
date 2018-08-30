<template>
    <div id="apply" class="apply">
        <el-dialog :title="dialogTitle" :visible.sync="applyDialogVisible">
            <el-form :model="form">
                <el-form-item label="公司名称" :label-width="formLabelWidth">
                    <el-input v-model="userinfo.ORG_NAME" auto-complete="off" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="承担项目" :label-width="formLabelWidth">
                    <el-select v-model="form.PROJECT_ID" placeholder="请选项目">
                        <el-option v-for="(item,key) in projList" :key="key" :label="item.PROJECT_NAME" :value="item.PROJECT_ID">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用途描述" :label-width="formLabelWidth">
                    <el-input v-model="form.USE_CONTENT" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="用途类型" :label-width="formLabelWidth">
                    <el-select v-model="form.USE_TYPE" placeholder="请选用途类型">
                        <el-option label="开发" :value="0"></el-option>
                        <el-option label="生产" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth">
                    <el-input v-model="form.APPLY_LINKMAN" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                    <el-input v-model="form.APPLY_PHONE" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.APPLY_EMAIL" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cencel">取 消</el-button>
                <el-button type="primary" @click="submit">提 交</el-button>
            </div>
        </el-dialog>
    </div>
</template>


<script>
import { fetchSeverList } from "@/app_src/api/sever";
import { fetchSeverComponentList } from "@/app_src/api/severcomponent";
export default {
    data() {
        return {
            dialogTitle: "平台申请",
            applyDialogVisible: false,
            //用户所有申请信息的表单
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
            userinfo: {},
            projList: [],
            formLabelWidth: "120px",
            //表单验证
            rules: {
                applyType: [
                    {
                        required: true,
                        message: "请选择项目类型",
                        trigger: "blur"
                    }
                ],
                applyProj: [
                    {
                        required: true,
                        message: "请选择具体项目",
                        trigger: "blur"
                    }
                ],
                applyContent: [
                    {
                        required: true,
                        message: "请输入申请描述",
                        trigger: "blur"
                    }
                ]
            },
            //服务或者组件的列表信息
            projList: [{ ID: "11", name: "fuwu" }],
            applyType: "项目类型",
            projName: "项目名称"
        };
    },
    methods: {
        handleCommandType(command) {
            this.applyType = command;
            this.applyInfo.applyType = command;
            //下一步发出请求查询对应的项目信息
            if (command === "服务") {
                console.log("1");
                this.getSeverList();
            } else if (command === "组件") {
                console.log("2");
                this.getSeverComponent();
            }
        },
        handleCommandProj(command) {
            this.projName = command.name;
            this.applyInfo.applyProj = command.ID;
        },
        submit() {
            this.form.APPLY_USERID = this.$store.state.user.userID;
            this.queryList.prjID = this.$store.state.user.currentProjID;
            this.queryList.ID = this.$route.params.id;
            fetchApply(this.form).then(response => {
                if (response.data.code === 2000) {
                    this.$notify({
                        position: "bottom-right",
                        title: "成功",
                        message: response.data.message,
                        type: "success",
                        duration: 2000
                    });
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
        },
        cencel() {
            this.resetForm();
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
        close() {
            this.$store.state.user.applyDialogVisible = false;
            //console.log(this.$store.state.user.applyDialogVisible);
        },
    },
    computed: {
        GetApplyDialogVisible() {
            return this.$store.state.user.applyDialogVisible;
        }
    },
    watch: {
        GetApplyDialogVisible(data) {
            this.applyDialogVisible = data;
        }
    }
};
</script>


<style lang="scss">
.apply {
    .formbutton {
        text-align: center;
    }
    .el-dialog__header {
        text-align: center;
        font-weight: bold;
    }
}
</style>


