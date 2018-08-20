<template>
  <el-row type="flex">
    <el-col :span="2"> </el-col>
    <el-col :span="20">
      <el-card class="box-card">
        <el-card class="componentinfo">
          <ul>
            <li>
              <span>版　　本：</span>
              <span>简体中文版</span>
            </li>
            <li>
              <span>软件授权：</span>
              <span>免费软件</span>
            </li>
            <li>
              <span>软件类型：</span>
              <span>国外软件</span>
            </li>
            <li>
              <span>软件语言：</span>
              <span>简体中文</span>
            </li>
            <li>
              <span>更新时间：</span>
              <span>2010/10/13 16:55:30</span>
            </li>
            <li>
              <span>应用平台：</span>
              <span>WinXP</span>
            </li>
            <li>
              <span>软件官网：</span>
              <span>www.188soft.com</span>
            </li>
            <li>
              <span>软件大小：</span>
              <span>24.52M</span>
            </li>
            <li>
              <el-button size="mini" type="primary" @click="handleApply(obj.name)">申&nbsp;&nbsp;&nbsp;&nbsp;请</el-button>
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
          <div v-html="obj.content"></div>
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
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
        </div>
      </el-dialog>
    </el-col>
  </el-row>

</template>
<script>
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
                companyname: "XX公司",
                projectname: "xx项目",
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
            obj: {
                name: ".NET Framework 4.7",
                id: 1,
                download: "151",
                date: "2018-08-08",
                status: 0,
                content:
                    'Microsoft .NET Framework是用于Windows的新托管代码编程模型。它将强大的功能与新技术结合起来，用于构建具有视觉上引人注目的用户体验的应用程序，实现跨技术边界的无缝通信，并且能支持各种业务流程。.NET Framework就提供了一个这样的安全模型。<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">微软更新了.Net Framework，更新后版本号升至4.7，它也包含在这次的创意者更新里，开发者可以使用Visual Studio 2017进行.Net Framework 4.7项目的开发。Windows10</p><p><img class="large" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4069284240,3156467089&fm=170&s=F902E412ECB4F99054474CDC0300D0E2&w=600&h=230&img.JPG"/></p><p style="margin-top: 26px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">最新版的.Net Framework 4.7主要带来了以下方面的提升：</p><p style="margin-top: 22px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">为Win10上的WPF程序带来了触控支持;</p><p style="margin-top: 22px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">增强了加密支持；</p><p style="margin-top: 22px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">提升性能和稳定性。</p><p><br/></p>'
            }
        };
    },
    methods: {
        handleApply(name) {
            this.dialogFormVisible = true;
            this.dialogTitle = "组件" + name + "申请记录";
        },
        // goAnchor(selector) {
        //     document.getElementById(selector).scrollIntoView();
        // },
        handleDown(name) {
            alert("正在下载" + name + "文件");
        }
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
