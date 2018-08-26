<template>
    <el-row type="flex">
        <el-col :span="2"> </el-col>
        <el-col :span="20">
            <el-card class="box-card">
                <el-card class="componentinfo">
                    <ul>
                        <li>
                            <span>版　　本：</span>
                            <span>{{obj.SOFTWARE_LANGUAGE}}</span>
                        </li>
                        <li>
                            <span>软件语言：</span>
                            <span>{{obj.SOFTWARE_LANGUAGE}}</span>
                        </li>
                        <li>
                            <span>上传人：</span>
                            <span>{{obj.CREATER}}</span>
                        </li>
                        <li>
                            <span>更新时间：</span>
                            <span>{{obj.CREATE_DATE}}</span>
                        </li>
                        <li>
                            <span>应用平台：</span>
                            <span>{{obj.SUIT_PLAT}}</span>
                        </li>
                        <li>
                            <span>软件大小：</span>
                            <span>{{obj.COMPONENT_SIZE}}</span>
                        </li>
                        <li>
                            <el-button size="mini" type="primary" @click="handleApply(obj.COMPONENT_NAME)" v-if="obj.CHECK_STATE===-1">申请</el-button>
                            <el-button size="mini" type="danger" v-else-if="obj.CHECK_STATE===0">待审核</el-button>
                            <el-button size="mini" type="info" v-else-if="obj.CHECK_STATE===1">下载</el-button>
                        </li>
                    </ul>
                </el-card>
                <el-card id="#anchor1" class="componentinfo">
                    <div style="float:left;width:20%;height:120px;">
                        <h5>组件下载</h5>
                        <a @click="handleDown('rar')">.NET Framework 4.7</a>
                    </div>
                    <div style="float:left;">
                        <h5>文件下载</h5>
                        <a @click="handleDown('组件相关')">使用说明</a>
                        <a @click="handleDown('组件相关')">案例</a>
                        <a @click="handleDown('组件相关')">开发文档</a>
                    </div>
                </el-card>
                <el-card class="componentinfo">
                    组件简介
                    <div v-html="obj.COMPONENT_CONTENT"></div>
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
                <el-form :model="form">
                    <el-form-item label="公司名称" :label-width="formLabelWidth">
                        <el-input v-model="form.companyname" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="承担项目" :label-width="formLabelWidth">
                        <el-input v-model="form.projectname" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="用途" :label-width="formLabelWidth">
                        <el-input v-model="form.purpose" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="用途类型" :label-width="formLabelWidth">
                        <el-select v-model="form.type" placeholder="请选用途类型">
                            <el-option label="开发" value="kaifa"></el-option>
                            <el-option label="生产" value="shengchan"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="联系人" :label-width="formLabelWidth">
                        <el-input v-model="form.contact" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" :label-width="formLabelWidth">
                        <el-input v-model="form.phone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input v-model="form.email" auto-complete="off"></el-input>
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
import { fetchSeverComponentDetail } from "@/app_src/api/severcomponent";
import { fetchApply } from "@/app_src/api/apply";
export default {
  data() {
    return {
      gridData: [
        {
          projectname: "xx管理系统",
          applaydate: "2018-08-02",
          purpose: "开发"
        },
        {
          projectname: "xx管理系统",
          applaydate: "2018-07-04",
          purpose: "生产"
        },
        {
          projectname: "xx管理系统",
          applaydate: "2018-06-21",
          purpose: "开发"
        },
        {
          projectname: "xx管理系统",
          applaydate: "2018-05-04",
          purpose: "生产"
        }
      ],
      form: {
        userID: "",
        companyname: "",
        projectname: "",
        purpose: "",
        type: "",
        contact: "",
        phone: "",
        email: ""
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      componentName: "",
      dialogTitle: "",
      componentContent: "",
      formLabelWidth: "120px",
      formInline: {
        user: "",
        region: ""
      },
      obj: {},
      queryList: {
        ID: null,
        objID: null,
        prjID: null
      },
      list1: {
        code: 2000,
        message: "",
        items: {
          COMPONENT_ID: "dddd",
          COMPONENT_CODE: "sd",
          COMPONENT_NAME: "dsf",
          COMPONENT_CONTENT: "sdf",
          DOWNLOAD_TIMES: 23,
          MANAGE_ORG_ID: "MANAGE_ORG_ID",
          MANAGE_ORG_NAME: " MANAGE_ORG_NAME",
          CHECK_STATE: 1,
          MANAGE_TEL: "MANAGE_TEL",
          MANAGE_ROLE_ID: "2",
          COMPONENT_SIZE: 0,
          SOFTWARE_LANGUAGE: "SOFTWARE_LANGUAGE",
          SUIT_PLAT: "SUIT_PLAT",
          APPLICATION_BROWSER: "APPLICATION_BROWSER",
          IS_DELETE: 0,
          CREATER: "CREATER",
          CREATE_DATE: "2018-08-25T14:40:04",
          children: [
            {
              COMPONENT_DETAIL_ID: "ccc",
              COMPONENT_ID: "dddd",
              FILE_NAME: "sd",
              FILE_TYPE: 1,
              FILE_URL: "sdf",
              FILE_SIZE: 2,
              CREATER: "sdf",
              CREATE_DATE: "2018-08-14T11:26:44"
            },
            {
              COMPONENT_DETAIL_ID: "ccc",
              COMPONENT_ID: "dddd",
              FILE_NAME: "sd",
              FILE_TYPE: 1,
              FILE_URL: "sdf",
              FILE_SIZE: 2,
              CREATER: "sdf",
              CREATE_DATE: "2018-08-14T11:26:44"
            }
          ]
        }
      }
    };
  },
  methods: {
    handleApply() {
      console.log(this.$store.state.user.userID);
      if (this.$store.state.user.userID != null) {
        this.dialogFormVisible = true;
        this.dialogTitle = "组件" + name + "申请记录";
      } else {
        this.$store.state.user.dialogLoginVisible = true;
      }
    },
    // goAnchor(selector) {
    //     document.getElementById(selector).scrollIntoView();
    // },
    handleDown(name) {
      alert("正在下载" + name + "文件");
    },
    getSeverComponent() {
      this.queryList.ID = this.$store.state.user.userID;
      this.queryList.prjID = this.$store.state.user.currentProjID;
      this.queryList.ID = this.$route.params.id;
      fetchSeverComponentDetail(this.queryList).then(response => {
        if (response.data.code === 2000) {
          this.obj = response.data.items; //获取的为1个对象不是数组
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
    test() {
      this.obj = this.list1.items;
    },
    submit() {
      this.form.userID = this.$store.state.user.userID;
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
      this.form.companyname = "";
      this.form.projectname = "";
      this.form.purpose = "";
      this.form.type = "";
      this.form.contact = "";
      this.form.phone = "";
      this.form.email = "";
    }
  },
  mounted() {
    //this.test();
    this.getSeverComponent();
  }
};
</script>
<style scoped>
.componentinfo {
  margin-bottom: 15px;
  padding-bottom: 10px;
}
/* .componentinfo li{float:left;width:100px;background:#CCC;margin-left:3px;line-height:30px;} */
.componentinfo ul {
  width: 100%;
  list-style: none;
  margin-bottom: 20px;
  padding-left: 0px;
}
.componentinfo li {
  font-size: 14px;
  width: 45%; /*如果显示三列 则width改为70px*/
  float: left;
  display: block;
  margin: 5px;
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
/* a:active{text-decoration:none;color:yellow;}
       a:visited {text-decoration:none;color:green;} */
</style>
