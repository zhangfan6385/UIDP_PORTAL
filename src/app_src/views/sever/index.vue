<template>
    <div id="severcomponent" class="component">
        <el-row :gutter="20" type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" shadow="never">
                        <div style="text-align: center">
                            <img style="width:200px;height:45px;" src="../../../app_src/imgs/title.png">
                            <br>
                            <!--TOP排行榜-->
                            <el-table :data="tableDataTop" size="mini">
                                <el-table-column label="排名" width="50" align="center" type="index">
                                    <template slot-scope="scope">
                                        <span :class="addclass(scope.$index+1)">{{scope.$index+1}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="name" label="服务名称" :show-overflow-tooltip="true" align="center"></el-table-column>
                                <el-table-column prop="download" label="使用次数" width="80" align="center"></el-table-column>
                            </el-table>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" shadow="never" style="min-height:600px" >
                        <div class="filter-container">
                            <el-input style="width: 420px;" v-model="queryList.name" class="filter-item">
                            </el-input>
                            <el-button class="filter-item" type="primary" icon="el-icon-search" @click="getSeverList">搜索</el-button>
                        </div>
                        <el-card  v-for="(component,key) in tableData" :key="key" shadow="never" class="content">
                            <ul>
                                <li>
                                    <div class="left"><img style="width:35px;height:28px;" src="../../../app_src/imgs/service.png" alt=""></div>
                                    <div class="right">
                                        <div class="right_top" @click="getcontent(component.SERVICE_ID)">
                                            {{component.SERVICE_NAME}}
                                        </div>
                                        <div class="right_bottom_left">
                                            <span>发布者：</span>
                                            <span>{{component.CREATER}}</span> &nbsp;|&nbsp;
                                            <span>发布时间：</span>
                                            <span>{{component.SERVICE_PUBLISHDATE | parseTime}}</span>
                                            <span>下载次数：</span>
                                            <span>{{component.SERVICE_TIMES}}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </el-card>
                        <div class="pagination-container">
                            <a href="#" @click="getmore">点击加载更多</a>
                        </div>
                    </el-card>
                    <!-- <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible">
                        <el-table :data="gridData">
                            <el-table-column property="applaydate" label="申请日期" width="150"></el-table-column>
                            <el-table-column property="projectname" label="项目名称" width="200"></el-table-column>
                            <el-table-column property="purpose" label="用途类型"></el-table-column>
                        </el-table>
                    </el-dialog> -->
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
import { fetchSeverList } from "@/app_src/api/sever";
import { parseTime } from "@/app_src/utils/index.js";
export default {
    data() {
        return {
            value5: 3.7,
            tableDataTop: [],
            tableData: [],
            dialogTableVisible: false,
            dialogDetailVisible: false,
            dialogFormVisible: false,
            componentName: "",
            dialogTitle: "",
            componentContent: "",
            formLabelWidth: "120px",
            form: {
                companyname: "XX公司",
                projectname: "xx项目",
                purpose: "",
                type: "",
                contact: "",
                phone: "",
                email: ""
            },
            queryList: {
                limit: 10,
                page: 1,
                name:''
            },
            queryList1: {
                limit: 10,
                page: 1,
                name:''
            }
        };
    },
    filters: {
        parseTime
    },
    methods: {
        addclass(i) {
            switch (i) {
                case 1:
                    return "top1";
                case 2:
                    return "top2";
                case 3:
                    return "top3";
                default:
                    return "top";
            }
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleDetail(index, row) {
            this.dialogDetailVisible = true;
            this.dialogTitle = "组件" + row.name + "详情";
            this.componentContent = row.content;
        },
        handleApply(index, row) {
            this.dialogFormVisible = true;
            this.dialogTitle = "组件" + row.name + "申请记录";
        },
        handleHistory(index, row) {
            this.dialogTableVisible = true;
            this.dialogTitle = "组件" + row.name + "申请记录";
        },
        handleExamine(index, row) {
            this.$alert(
                "组件" + row.name + "信息审核中，请耐心等待！",
                "消息提示",
                {
                    confirmButtonText: "确定"
                    // callback: action => {
                    //   this.$message({
                    //     type: 'info',
                    //     message: `action:${action}`
                    //   })
                    // }
                }
            );
        },
        handleDown(index, row) {
            alert("正在下载rar文件");
        },
        getcontent(data) {
            // alert("aaaa");
            let id = data.toString();
            this.$router.push({ path: "/sever/" + id });
        },
        getSeverList() {
            fetchSeverList(this.queryList).then(response => {
                if (response.data.code === 2000) {
                    this.tableData = response.data.items;
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
        getSeverListTop() {
            fetchSeverList(this.queryList1).then(response => {
                if (response.data.code === 2000) {
                    for (var i = 0; i < response.data.items.length; i++) {
                        if (i == 10) {
                            break;
                        } else {
                            this.tableDataTop.push({
                                name: response.data.items[i].SERVICE_NAME,
                                id: response.data.items[i].SERVICE_ID,
                                date: response.data.items[i].CREATE_DATE,
                                content: response.data.items[i].SERVICE_CONTENT,
                                download: response.data.items[i].SERVICE_TIMES
                            });
                        }
                    }
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
        getmore() {
            this.queryList.limit += 10;
            this.getSeverList();
        }
    },
    mounted() {
        this.getSeverListTop();
        this.getSeverList();
    }
};
</script>


<style lang="scss" scoped>
.content {
    margin-top: 15px;
}
.content ul,
li {
    margin: 0px;
    padding: 0px;
}
.content ul li img:hover {
    transform: scale(1.2); /*当鼠标移动到图片上时实现放大功能*/
}
.content ul li {
    // height: 100px;
    overflow: hidden;
    // border-bottom: 1px solid lavender;
    background: white;
    list-style-type: none;
    transition-duration: 0.5s;
    margin: 5px 5px 2px 0;
}

// .content ul li:hover{
//           background-color: lavender;
//           transition-duration: 0.5s;
//       }

.content .left {
    overflow: hidden; /*隐藏溢出图片内容*/
    transition-duration: 0.5s;
    width: 36px;
    height: 40px;
    /*background: green;*/
    float: left;
    margin-right: 20px;
}
.content .right {
    // width:400px ;
    width: 90%;
    float: left;
    /*background: pink;*/
}
.right_top {
    margin: 0px;
    padding: 0px;
    text-align: left;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
}
.right_bottom {
    margin-top: 50px;
    text-align: right;
}
.right_bottom_left {
    float: left;
    padding-top: 15px;
    width: 100%;
    text-align: right;
    color: darkgray;
    font-size: 14px;
}
.top {
    font-weight: bold;
    color: white;
    text-align: center;
    width: 25px;
    line-height: 25px;
    background-color: #7f7f7f;
    border-radius: 5px;
    display: -moz-inline-box; /* css注释：for ff2 */
    display: inline-block;
}
.top1 {
    font-weight: bold;
    color: white;
    text-align: center;
    width: 25px;
    line-height: 25px;
    background-color: #c00000;
    border-radius: 5px;
    display: -moz-inline-box; /* css注释：for ff2 */
    display: inline-block;
}

.top2 {
    font-weight: bold;
    color: white;
    text-align: center;
    width: 25px;
    line-height: 25px;
    background-color: #00b050;
    border-radius: 5px;
    display: -moz-inline-box; /* css注释：for ff2 */
    display: inline-block;
}
.top3 {
    font-weight: bold;
    color: white;
    text-align: center;
    width: 25px;
    line-height: 25px;
    background-color: #ffc000;
    border-radius: 5px;
    display: -moz-inline-box; /* css注释：for ff2 */
    display: inline-block;
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

.name {
    display: -moz-inline-box;
    float: left;
    width: 100%;
    height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    cursor: pointer;
}
.spandownload {
    width: 30px;
    height: 25px;
    margin-left: 8px;
    color: #99a9bf;
    text-align: center;
    font-size: 10px;
}
.pagination-container {
    margin-top: 15px;
    font-size: 13px;
    text-align: center;
    text-decoration: none;
    color: blue;
}
.pagination-container:hover {
    text-decoration: underline;
    color: red;
}
.pagination-container:active {
    text-decoration: none;
    color: yellow;
}
.pagination-container:visited {
    text-decoration: none;
    color: green;
}
</style>