<template>
    <div id="newcard" class="newcard">
        <el-row :gutter="20" type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <div class="mainform">
                    <el-card>
                        <el-form ref="newcard" :model="newcard" label-width="80px" :rules="rules">
                            <el-form-item label="标题" prop="TITLE_NAME" :rules="rules.TITLE_NAME">
                                <el-input v-model="newcard.TITLE_NAME"></el-input>
                            </el-form-item>
                            <el-row type="flex">
                                <el-col :span="10">
                                    <el-form-item label="帖子类型" prop="POST_TYPE" :rules="rules.POST_TYPE">
                                        <el-radio v-model="newcard.POST_TYPE" label="1">经验分享</el-radio>
                                        <el-radio v-model="newcard.POST_TYPE" label="2">问题反馈</el-radio>
                                        <el-radio v-model="newcard.POST_TYPE" label="3">求助</el-radio>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="2"></el-col>

                                <el-col :span="6">
                                    <div v-if="this.newcard.POST_TYPE==='3'">
                                        <el-form-item label="所需积分" prop="SCORE_POINT" >
                                            <el-input v-model.number="newcard.SCORE_POINT"></el-input>
                                        </el-form-item>
                                    </div>

                                    <div v-else-if="this.newcard.POST_TYPE==='1'">
                                        <el-form-item label="悬赏积分" prop="SCORE_POINT" >
                                            <el-input v-model.number="newcard.SCORE_POINT"></el-input>
                                        </el-form-item>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-form-item label="详细" :rules="rules.POST_CONTENT">

                                <div class="editor">
                                    <!-- <quill-editor v-model="newcard.POST_CONTENT" ref="myQuillEditor" :options="newcard.editorOption" @ready="onEditorReady($event)" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" height="500px">
                                    </quill-editor> -->
                                    <quillEditor @listenToEditorChange="EditorChange" v-bind:content="newcard.POST_CONTENT" v-bind:apiUrl="urlPicUpload">
                                    </quillEditor>
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
// import { quillEditor } from "vue-quill-editor";
import quillEditor from "@/app_src/components/QuillEditor";
import { createCard } from "@/app_src/api/community";
export default {
    data() {
        return {
            urlPicUpload: process.env.BASE_API + "home/uploadCommunityPic",
            newcard: {
                USER_ID: "",
                USER_NAME: "",
                TITLE_NAME: "",
                POST_TYPE: "",
                POST_CONTENT: "",
                //editorOption: {},
                SCORE_POINT: 0,
                CREATER: ""
            },
            rules: {
                POST_TYPE: [
                    { required: true, message: "请输入类型", trigger: "blur" }
                ],
                TITLE_NAME: [
                    { required: true, message: "请输入标题", trigger: "blur" }
                ],
                SCORE_POINT: [
                    {
                        required: true,
                        message: "分数不能为空！",
                        trigger: "blur"
                    },
                    { type: 'number', message: '分值必须为数字值'}
                ],
                POST_CONTENT: [
                    {
                        required: true,
                        message: "请输入详细内容",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
      components: {
        quillEditor
    },
    methods: {
        // onEditorReady(editor) {},
          EditorChange(data){
            this.newcard.POST_CONTENT=data.editorContent
        },
          resetTemp(){  
             this.newcard={
                USER_ID: "",
                USER_NAME: "",
                TITLE_NAME: "",
                POST_TYPE: "",
                POST_CONTENT: "",
                //editorOption: {},
                SCORE_POINT: 0,
                CREATER: ""
            }
        },
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
                                this.resetTemp()
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
        // editor() {
        //     return this.$refs.myQuillEditor.quill;
        // }
    },
    components: {
        quillEditor
    }
};
</script>



<style lang="scss">
.newcard {
    .el-card {
        min-height: 500px;
    }
}
</style>

