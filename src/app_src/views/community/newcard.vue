<template>
    <div id="newcard" class="newcard">
        <el-row :gutter="20" type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <div class="mainform">
                    <el-card>
                        <el-form ref="newcard" :model="newcard" label-width="80px">
                            <el-form-item label="标题" prop="title" :rules="rules.title">
                                <el-input v-model="newcard.title"></el-input>
                            </el-form-item>
                            <el-row type="flex">
                                <el-col :span="8">
                                    <el-form-item label="帖子类型" prop="type" :rules="rules.type">
                                        <el-radio v-model="newcard.type" label="1">经验分享</el-radio>
                                        <el-radio v-model="newcard.type" label="2">问题反馈</el-radio>
                                        <el-radio v-model="newcard.type" label="3">求助</el-radio>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4"></el-col>

                                <el-col :span="6">
                                    <div v-if="this.newcard.type==='3'">
                                        <el-form-item label="所需积分" prop="needscore">
                                            <el-input v-model="newcard.needscore"></el-input>
                                        </el-form-item>
                                    </div>

                                    <div v-else-if="this.newcard.type==='1'">
                                        <el-form-item label="悬赏积分" prop="getscore">
                                            <el-input v-model="newcard.getscore"></el-input>
                                        </el-form-item>
                                    </div>
                                </el-col>
                            </el-row>
        
                            <el-form-item label="详细" :rules="rules.content">
                                <div class="editor">
                                    <quill-editor v-model="newcard.content" ref="myQuillEditor" :options="newcard.editorOption" @ready="onEditorReady($event)"></quill-editor>                                     
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
export default {
  data() {
    return {
      newcard: {
        title: "",
        type: "",
        content: "",
        editorOption: {},
        needscore:'',
        getscore:''
      },
      rules: {
        type:[{ required: true, message: "请输入标题", trigger: "blur" }],
        title: [{ required: true, message: "请选择类型", trigger: "blur" }],
        content: [
          { required: true, message: "请输入详细内容", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onEditorReady(editor) {},
    onSubmit() {
      //提交
      //this.$refs.infoForm.validate，这是表单验证
      this.$refs.newcard.validate(valid => {
        if (valid) {
          this.$post("m/add/about/us", this.infoForm).then(res => {
            if (res.errCode == 200) {
              this.$message({
                message: res.errMsg,
                type: "success"
              });
              this.$router.push("/community/main/newcard");
            } else {
              this.$message({
                message: res.errMsg,
                type: "error"
              });
            }
          });
        }
      });
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

</style>

