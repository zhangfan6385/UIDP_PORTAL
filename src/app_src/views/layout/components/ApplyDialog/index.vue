<template>
    <div id="apply" class="apply">
        <el-dialog :title="dialogtitle" :visible.sync="applyDialogVisible" @close="close">
            <el-form label-position="left" label-width="80px" ref="applyInfo" :model="applyInfo" :rules="rules">
                <el-form-item label="用户姓名">
                    <span>{{applyInfo.userName}}</span>
                </el-form-item>
                <el-form-item label="项目类型" prop="applyType">
                    <el-dropdown size="medium" split-button type="primary" @command="handleCommandType">
                        {{applyType}}
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="服务">服务</el-dropdown-item>
                            <el-dropdown-item command="组件">组件</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-form-item>
                <el-form-item label="申请项目" prop="applyProj">
                    <el-dropdown size="medium" split-button type="primary" @command="handleCommandProj">
                        {{projName}}
                        <el-dropdown-menu slot="dropdown">
                            <div v-for="(item,key) in projList" :key=key>
                                <el-dropdown-item :command="item">{{item.name}}</el-dropdown-item>
                            </div>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-form-item>
                <el-form-item label="申请描述" prop="applyContent">
                    <el-input type="textarea" v-model="applyInfo.applyContent"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="formbutton">
                        <el-button type="primary" @click="submit">提交</el-button>
                        <el-button type="info" @click="cancel">取消</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>


<script>
import { fetchSeverList } from "@/app_src/api/sever";
import { fetchSeverComponentList } from "@/app_src/api/severcomponent";
export default {
    data() {
        return {
            dialogtitle: "下载申请",
            applyDialogVisible: false,
            //用户所有申请信息的表单
            applyInfo: {
                userID: "",
                userName: "123",
                applyType: "",
                applyProj: "",
                applyContent: "",
                applyTime: ""
            },
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
            //console.log(this.$store.state.user.userID);
            if (this.$store.state.user.userID === null) {
                this.$store.state.user.dialogLoginVisible = true;
            } else {
                this.$refs["applyInfo"].validate(valid => {
                    if (valid) {
                        console.log("提交用户信息");
                    }
                });
            }
        },
        cancel() {
            this.resetForm();
            this.$refs["applyInfo"].resetFields();
        },
        resetForm() {
            this.applyInfo.applyType = "";
            this.applyInfo.applyProj = "";
            this.applyInfo.applyContent = "";
            this.applyInfo.applyTime = "";
        },
        close() {
            this.$store.state.user.applyDialogVisible = false;
            //console.log(this.$store.state.user.applyDialogVisible);
        },
        getSeverList() {
            fetchSeverList().then(response => {
                if (response.data.code === 2000) {
                    this.projList = response.data;
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
        getSeverComponent() {
            fetchSeverComponentList().then(response => {
                if (response.data.code === 2000) {
                    this.projList = response.data;
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


