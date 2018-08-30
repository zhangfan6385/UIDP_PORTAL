<template>
    <div id="newcard" class="newcard">
        <el-row :gutter="20" type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <div class="mainform">
                    <el-card>
                        <el-form ref="newcard" :model="newcard" label-width="80px">
                            <el-form-item label="标题" prop="TITLE_NAME" :rules="rules.title">
                                <el-input v-model="newcard.TITLE_NAME"></el-input>
                            </el-form-item>
                            <el-row type="flex">
                                <el-col :span="8">
                                    <el-form-item label="帖子类型" prop="POST_TYPE" :rules="rules.type">
                                        <el-radio v-model="newcard.POST_TYPE" label="1">经验分享</el-radio>
                                        <el-radio v-model="newcard.POST_TYPE" label="2">问题反馈</el-radio>
                                        <el-radio v-model="newcard.POST_TYPE" label="3">求助</el-radio>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4"></el-col>

                                <el-col :span="6">
                                    <div v-if="this.newcard.POST_TYPE==='3'">
                                        <el-form-item label="所需积分" prop="SCORE_POINT">
                                            <el-input v-model="newcard.SCORE_POINT"></el-input>
                                        </el-form-item>
                                    </div>

                                    <div v-else-if="this.newcard.POST_TYPE==='1'">
                                        <el-form-item label="悬赏积分" prop="SCORE_POINT">
                                            <el-input v-model="newcard.SCORE_POINT"></el-input>
                                        </el-form-item>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-form-item label="详细" :rules="rules.content">
                                <div class="editor">
                                    <quill-editor v-model="newcard.POST_CONTENT" ref="myQuillEditor" :options="newcard.editorOption" @ready="onEditorReady($event)" height="500px"></quill-editor>
                                </div>

                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">确认提交</el-button>
                                </el-form-item>

                            </el-form-item>
                        </el-form>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>



<script>
import { quillEditor } from "vue-quill-editor";
import { createCard } from "@/app_src/api/community";
export default {
    data() {
        return {
            newcard: {
                USER_ID: "",
                USER_NAME: "",
                TITLE_NAME: "",
                POST_TYPE: "",
                POST_CONTENT: "",
                //editorOption: {},
                SCORE_POINT: "",
                CREATER: ""
            },
            rules: {
                type: [
                    { required: true, message: "请输入标题", trigger: "blur" }
                ],
                title: [
                    { required: true, message: "请选择类型", trigger: "blur" }
                ],
                content: [
                    {
                        required: true,
                        message: "请输入详细内容",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods: {
        onEditorReady(editor) {},
        onSubmit() {
            //提交
            //this.$refs.infoForm.validate，这是表单验证
            if (this.$store.state.user.userID != null) {
                this.newcard.USER_ID = this.$store.state.user.userID;
                this.newcard.USER_NAME = this.$store.state.user.userinfo[0].USER_NAME;
                this.newcard.CREATER = this.newcard.USER_NAME;
                this.$refs.newcard.validate(valid => {
                    if (valid) {
                        createCard(this.newcard).then(response => {
                            if (response.data.code === 2000) {
                                this.$notify({
                                    position: "bottom-right",
                                    title: "成功",
                                    message: response.data.message,
                                    type: "success",
                                    duration: 2000
                                });
                                this.$router.push("/community/main/index");
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
            } else {
                this.$store.state.user.dialogLoginVisible = true;
            }
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        }
    },
    components: {
        quillEditor
    }
};
</script>



<style lang="scss">
.el-card {
    min-height: 500px;
}
.editor {
    min-height: 500px;
}
</style>

