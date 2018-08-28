<template>
  <el-row type="flex">
    <el-col :span="2"> </el-col>
    <el-col :span="20">
      <el-card shadow="never">
        <el-card class="componentinfo" shadow="never">
          <ul>
            <li>
              <span>服务地址：</span>
              <span>{{severInfo.SERVICE_URL}}</span>
            </li>
            <li>
              <span>返回格式：</span>
              <span>{{severInfo.DATAFORMAT}}</span>
            </li>
            <li>
              <span>创建日期：</span>
              <span>{{severInfo.CREATE_DATE}}</span>
            </li>
            <li>
              <span>请求方式：</span>
              <span>{{severInfo.REQUEST_METHOD}}</span>
            </li>
            <li>
              <span>更新时间：</span>
              <span>{{severInfo.SERVICE_URL}}</span>
            </li>
            <li>
              <span>应用平台：</span>
              <span>{{severInfo.SUIT_PLAT}}</span>
            </li>
            <li>
              <el-button size="mini" type="primary" @click="handleApply(severInfo.COMPONENT_NAME)" v-if="severInfo.CHECK_STATE===-1">申请</el-button>
              <el-button size="mini" type="danger" v-else-if="severInfo.CHECK_STATE===0">待审核</el-button>
              <el-button size="mini" type="info" v-else-if="severInfo.CHECK_STATE===1">下载</el-button>
              <el-button size="mini" type="primary" @click="goAnchor">查看服务码</el-button>
            </li>
          </ul>
        </el-card>
        <el-card id="#anchor1" class="componentinfo" shadow="never">
          <div>
            <h5>文件下载</h5>
            <a @click="handleDown('组件相关')">使用说明</a>
            <a @click="handleDown('组件相关')">案例</a>
            <a @click="handleDown('组件相关')">开发文档</a>
          </div>
        </el-card>
        <el-card class="componentinfo" shadow="never">
          <span style="font-size:18px;font-weight:bold"><img style="width:20px;height:20px;" src="../../../app_src/imgs/title.png">服务介绍</span>
          <!-- <div v-html="obj.content"></div> -->
          <div v-html="severInfo.SERVICE_CONTENT"></div>
        </el-card>
      </el-card>

      <el-dialog title="服务码信息" :visible.sync="dialogCodeVisible">
        <span>{{severInfo.SERVICE_CODE}}</span>
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
import { fetchSeverDetail } from "@/app_src/api/sever";
import { fetchApply } from "@/app_src/api/apply";
export default {
    data() {
        return {
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
            dialogCodeVisible: false,
            dialogFormVisible: false,
            severInfo: {},
            componentName: "",
            dialogTitle: "下载申请",
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
            list1: {
                code: 2000,
                message: "",
                items: {
                    SERVICE_ID: "dddd",
                    SERVICE_CODE: "sdf",
                    SERVICE_NAME: "sdf",
                    REQUEST_METHOD: null,
                    SERVICE_TIMES: 0,
                    SERVICE_CONTENT: "SERVICE_CONTENT",
                    MANAGE_ORG_ID: "MANAGE_ORG_ID",
                    MANAGE_TEL: "",
                    MANAGE_ROLE_ID: "",
                    SUIT_PLAT: "SUIT_PLA",
                    SERVICE_URL: "SERVICE_URL",
                    DATA_FORMAT: "DATA_FORMAT",
                    IS_DELETE: 0,
                    CREATER: "",
                    CREATE_DATE: "2018-08-25T15:47:15.3041516+08:00",
                    CHECK_STATE: -1,
                    children: [
                        {
                            SERVICE_DETAIL_ID: "sdfs",
                            SERVICE_ID: "dddd",
                            FILE_NAME: "df",
                            FILE_TYPE: 1,
                            FILE_URL: "sfdds",
                            FILE_SIZE: 2,
                            CREATER: "sdf",
                            CREATE_DATE: "2018-08-01T15:03:21"
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
        // handleHistory(name) {
        //   this.dialogTableVisible = true
        //   this.dialogTitle = '组件' + name + '申请记录'
        // },
        //锚点跳转
        goAnchor() {
            this.dialogCodeVisible = true;
        },
        getSever() {
            this.queryList.userid='2a474344-0d65-48a4-8735-b8a2371160d4'
            //this.queryList.ID = this.$store.state.user.userID;
            this.queryList.projectid = this.$store.state.user.currentProjID;
            this.queryList.resourceid = this.$route.params.id;
            fetchSeverDetail(this.queryList ).then(response => {
                if (response.data.code === 2000) {
                  console.log(response.data)
                    this.severInfo = response.data.items;
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
        // getDetail() {
        //     //获取详细信息
        //     var id = this.$route.params;
        //     fetchSeverDetail(id).then(response => {
        //         if (response.data.code === 2000) {
        //             this.obj.content = response.data.item.SERVICE_CONTENT;
        //         } else {
        //             this.$notify({
        //                 position: "bottom-right",
        //                 title: "失败",
        //                 message: response.data.message,
        //                 type: "error",
        //                 duration: 2000
        //             });
        //         }
        //     });
        // },
        submit() {
            this.form.userID = this.$store.state.user.userID;
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
            this.form.companyname = "";
            this.form.projectname = "";
            this.form.purpose = "";
            this.form.type = "";
            this.form.contact = "";
            this.form.phone = "";
            this.form.email = "";
        },
        test() {
            this.severInfo = this.list1.items;
            console.log(this.severInfo);
        }
    },
    mounted() {
        this.getSever();
    }
};
</script>
<style scoped>
.componentinfo {
    margin-bottom: 5px;
}
.el-card__body {
    padding: 5px;
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
    margin-bottom: 5px;
}
</style>
