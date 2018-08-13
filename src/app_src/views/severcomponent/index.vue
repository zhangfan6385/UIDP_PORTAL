<template>
    <div id="severcomponent" class="component">
      <el-row :gutter="20" type="flex"> 
        <el-col :span="2"></el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
               <!-- <div style="text-align: center"><img style="width:200px;height:45px;" src="../../../app_src/imgs/title.png"></div>                      
               <ul v-for="(item,index) in TopList" :key="index" class="text">
                 <li style="padding:7px 0;float:left;width:10%;line-height:30px;"><span :class="addclass(index+1)">{{index+1}}</span></li>
                 <li style="padding:7px 0;float:left;width:65%;line-height:30px;"><span class="name" :title="item.name">{{item.name }}</span></li>
                 <li style="padding:7px 0;float:left;width:25%;line-height:30px;"><span class="spandownload">{{item.download}}</span></li>
                </ul> -->
                <div style="text-align: center">
                          <img  style="width:200px;height:45px;" src="../../../app_src/imgs/title.png">
                          <br>
                          <el-table :data="TopList"  >
                              <el-table-column prop="id" label="排名" width="50" align="center">
                                  <template slot-scope="scope">
                                    <span :class="addclass(scope.row.id+1)">{{scope.row.id}}</span>
                                  </template>
                              </el-table-column>

                              <el-table-column prop="name" label="服务名称" :show-overflow-tooltip="true" align="center"></el-table-column>
                              <el-table-column prop="download" label="使用次数" width="50" align="center"></el-table-column>
                          </el-table>
                </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
                <div class="filter-container">
                    <el-input style="width: 420px;" class="filter-item"  >
                    </el-input>
                    <el-button class="filter-item" type="primary" icon="el-icon-search" >搜索</el-button>
                </div>
              <el-card v-for="(component,key) in tableData" :key="key"  class="content" @click.native="getcontent(component.id)">
                <ul>
                  <li>
                  <div class="left"><img style="width:140px;height:80px;" src="../../../app_src/imgs/feedback.png" alt=""></div>
                  <div class="right">
                    <div class="right_top">
                        <h3>{{component.name}}</h3>
                    </div>
                    <div style="font-size:10px;width:140px;float:left;">
                      <el-rate
                        v-model="value5"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}"> 
                      </el-rate>
                    </div>
                <div style="font-size:10px;float:left;margin:4px;">大小：5.9MB 更新时间：2018-08-07 软件授权：免费软件</div>
                    <div class="name">{{component.content}}</div>
                    <div class="right_bottom">
                        <div class="right_bottom_left">
                            <span>发布单位：</span><span>微软公司</span>  <span>下载次数：</span><span>71</span>
                        </div>
                    </div>
                  </div>
                  </li>
                </ul>
              </el-card>
              <div class="pagination-container">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="100">
                </el-pagination>
              </div>
            </el-card>
            <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible">
              <el-table :data="gridData">
                <el-table-column property="applaydate" label="申请日期" width="150"></el-table-column>
                <el-table-column property="projectname" label="项目名称" width="200"></el-table-column>
                <el-table-column property="purpose" label="用途类型"></el-table-column>
              </el-table>
            </el-dialog>
            <el-dialog :title="dialogTitle" :visible.sync="dialogDetailVisible">
            <el-form :model="form">
            <!-- <el-form-item label="组件名称">
              <div>{{componentName}}</div>
            </el-form-item> -->
            <el-form-item label="组件说明">
            <div v-html="componentContent"></div>
            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogDetailVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogDetailVisible = false">确 定</el-button>
            </div>
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
          </div>
        </el-col>
                
      </el-row>
    </div>
</template>


<script>
export default {
  data() {
    return {
       value5: 3.7,
      TopList: [
        { name: '.NET Framework 4.7', id: 1, download: '151' },
        { name: 'NPOI 2.3', id: 2, download: '71' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 3, download: '71' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 4, download: '53' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 5, download: '47' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 6, download: '32' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 7, download: '27' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 8, download: '25' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 9, download: '22' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 10, download: '19' }
      ],
      tableData: [
        { name: '.NET Framework 4.7', id: 1, download: '151', date: '2018-08-08', status: 0, content: 'Microsoft .NET Framework是用于Windows的新托管代码编程模型。它将强大的功能与新技术结合起来，用于构建具有视觉上引人注目的用户体验的应用程序，实现跨技术边界的无缝通信，并且能支持各种业务流程。.NET Framework就提供了一个这样的安全模型。<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">微软更新了.Net Framework，更新后版本号升至4.7，它也包含在这次的创意者更新里，开发者可以使用Visual Studio 2017进行.Net Framework 4.7项目的开发。Windows10</p><p><img class="large" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4069284240,3156467089&fm=170&s=F902E412ECB4F99054474CDC0300D0E2&w=600&h=230&img.JPG"/></p><p style="margin-top: 26px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">最新版的.Net Framework 4.7主要带来了以下方面的提升：</p><p style="margin-top: 22px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">为Win10上的WPF程序带来了触控支持;</p><p style="margin-top: 22px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">增强了加密支持；</p><p style="margin-top: 22px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">提升性能和稳定性。</p><p><br/></p>' },
        { name: 'NPOI 2.3', id: 2, download: '71', date: '2018-08-08', status: 1 },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 3, download: '71', date: '2018-08-08', status: 2, content: '' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 4, download: '53', date: '2018-08-08', status: 0, content: '' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 5, download: '47', date: '2018-08-07', status: 1, content: '' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 6, download: '32', date: '2018-08-06', status: 2, content: '' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 7, download: '27', date: '2018-08-05', status: 0, content: '' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 8, download: '25', date: '2018-08-04', status: 1, content: '' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 9, download: '22', date: '2018-08-03', status: 0, content: '' },
        { name: 'UIDP开发平台V3.5.1(测试版)', id: 10, download: '19', date: '2018-08-02', status: 2, content: '' }
      ],
      currentPage: 1,
      gridData: [{
        projectname: 'xx管理系统',
        applaydate: '2018-08-02',
        purpose: '开发'
      }, {
        projectname: 'xx管理系统',
        applaydate: '2018-07-04',
        purpose: '生产'
      }, {
        projectname: 'xx管理系统',
        applaydate: '2018-06-21',
        purpose: '开发'
      }, {
        projectname: 'xx管理系统',
        applaydate: '2018-05-04',
        purpose: '生产'
      }],
      dialogTableVisible: false,
      dialogDetailVisible: false,
      dialogFormVisible: false,
      componentName: '',
      dialogTitle: '',
      componentContent: '',
      formLabelWidth: '120px',
      form: {
        companyname: 'XX公司',
        projectname: 'xx项目',
        purpose: '',
        type: '',
        contact: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {
    addclass(i) {
      switch (i) {
        case 1:
          return 'top1'
        case 2:
          return 'top2'
        case 3:
          return 'top3'
        default:
          return 'top'
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleDetail(index, row) {
      this.dialogDetailVisible = true
      this.dialogTitle = '组件' + row.name + '详情'
      this.componentContent = row.content
    },
    handleApply(index, row) {
      this.dialogFormVisible = true
      this.dialogTitle = '组件' + row.name + '申请记录'
    },
    handleHistory(index, row) {
      this.dialogTableVisible = true
      this.dialogTitle = '组件' + row.name + '申请记录'
    },
    handleExamine(index, row) {
      this.$alert('组件' + row.name + '信息审核中，请耐心等待！', '消息提示', {
        confirmButtonText: '确定'
        // callback: action => {
        //   this.$message({
        //     type: 'info',
        //     message: `action:${action}`
        //   })
        // }
      })
    },
    handleDown(index, row) {
      alert('正在下载rar文件')
    },
    getcontent(data) {
      // alert("aaaa");
       let id =data.toString();
       this.$router.push({path:'/componentdetail/'+id})
    }
  }
}
</script>


<style lang="scss">
.content{
  margin-top: 15px;
}
.content ul,li{
    margin: 0px;
    padding: 0px;
}
.content ul li img:hover{
    transform: scale(1.2);/*当鼠标移动到图片上时实现放大功能*/
}
 .content ul li{
            // height: 100px;
            overflow: hidden;
            // border-bottom: 1px solid lavender;
            background: white;
            list-style-type: none;
            transition-duration: 0.5s;
             margin: 10px 10px 5px 0;
 
        }

  .content ul li:hover{
            background-color: lavender;
            transition-duration: 0.5s;
        }
        .content .left{
            overflow: hidden;/*隐藏溢出图片内容*/
            transition-duration: 0.5s;
            width: 20%;
            height:80px;
            /*background: green;*/
            float: left;
            margin-right:20px;
        }
        .content .right{
            // width:400px ;
            width: 75%;
            float: left;
            /*background: pink;*/
        }
        .right_top h3{
          margin: 0px;
          padding: 0px;
          text-align: center;
            // height:60px;
        }
        .right_bottom{
            margin-top:50px;
            text-align: right;
        }
        .right_bottom_left span{

            color: darkgray;
            font-size: 12px;
        }
.top{
  font-weight:bold;
  color: white;
  text-align: center;
  width:25px;
  line-height:25px;
  background-color:#7F7F7F;
  border-radius:5px;
  display:-moz-inline-box; /* css注释：for ff2 */ 
  display:inline-block; 
}
.top1{  
  font-weight:bold;
  color: white;
  text-align: center;
  width:25px;
  line-height:25px;
  background-color:#C00000;
  border-radius:5px;
  display:-moz-inline-box; /* css注释：for ff2 */ 
  display:inline-block; 
}

.top2{  
    font-weight:bold;
  color: white;
  text-align: center;
  width:25px;
  line-height:25px;
  background-color:#00B050;
  border-radius:5px;
  display:-moz-inline-box; /* css注释：for ff2 */ 
  display:inline-block; 
}
.top3{
    font-weight:bold;
  color: white;
  text-align: center;
  width:25px;
  line-height:25px;
  background-color:#FFC000;
  border-radius:5px;
  display:-moz-inline-box; /* css注释：for ff2 */ 
  display:inline-block; 
}

.component {
  // margin: 0 auto;
  // width: 980px;
  margin: 30px;
  // background: #f3f3f3;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
 .text {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 14px;
    width: 100%;
  }

.name{ 
  display:-moz-inline-box;
  float:left;
  width:100%; 
  height:25px;
  overflow:hidden; 
  text-overflow:ellipsis; 
  white-space:nowrap; 
  word-break:keep-all; 
  cursor: pointer;
  } 
.spandownload{
width:30px;
height:25px;
margin-left:8px;
color:#99a9bf;
text-align:center;
font-size:10px;
}
.pagination-container{
  float:right;
}
</style>