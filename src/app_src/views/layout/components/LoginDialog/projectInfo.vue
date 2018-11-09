<template>
    <div id="projectinfodialog">
        <el-dialog title="切换项目" class="projectdialog" :visible.sync="isvisibleProject" width="45%" @close='closeDialog'>
            <el-card class="box-card">
                <el-table :key='tableKey' :data="list" size="mini" :header-cell-class-name="tableRowClassName" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 100%;height:270px;">
                    <el-table-column align="center" label="项目名称">
                        <template slot-scope="scope">
                            <span>{{scope.row.PROJECT_NAME}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column width="120px" align="center" label="项目编号">
                        <template slot-scope="scope">
                            <span>{{scope.row.PROJECT_CODE}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column width="90px" align="center" label="项目负责人">
                        <template slot-scope="scope">
                            <span>{{scope.row.CONTACT_PARTYA_NAME}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button type="primary" size="text" @click="handleProject(scope.row)">切换</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pagination-container">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[5,10,20,40]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
                    </el-pagination>
                </div>
            </el-card>

        </el-dialog>
    </div>
</template>
<script>
import { getProjectInfo } from "@/app_src/api/user";

export default {
    data() {
        return {
            isvisibleProject: false,
            list: [],
            temp: {
                PROJECT_ID: "",
                PROJECT_NAME: "",
                PROJECT_CODE: "",
                CONTACT_PARTYA_NAME: ""
            },
            total: 5,
            listQuery: {
                page: 1,
                limit: 5,
                ProjectNama: ""
            },
            tableKey: 0,
            listLoading: false
        };
    },
    computed: {
        getProjectVisible() {
            return this.$store.state.user.dialogProjectInfoVisible;
        },
        getProjList() {
            return this.$store.state.user.projList;
        }
    },
    watch: {
        getProjectVisible(data) {
            //console.log(1)
            this.isvisibleProject = data;
        },
        getProjList(data) {
            this.list = data;
        }
    },
    methods: {
        getList() {
            this.list = this.getProjList;
            //console.log(this.isvisibleProject)
        },
        handleProject(row) {
            this.temp = Object.assign({}, row); // copy obj
            this.$store.dispatch("setCurrentProjID", this.temp.PROJECT_ID);
            this.$store.dispatch("setCurrentProjName", this.temp.PROJECT_NAME);
            this.$store.dispatch("setdialogProjectInfoVisible", false);
            this.$store.state.user.dialogProjectInfoVisible = false;
        },
        handleSizeChange(val) {
            this.listQuery.limit = val;
            this.getList();
        },
        handleCurrentChange(val) {
            this.listQuery.page = val;
            this.getList();
        },
        handleFilter() {
            this.listQuery.page = 1;
            this.getList();
        },
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 0) {
                return "el-button--primary is-active"; // 'warning-row'
            } // 'el-button--primary is-plain'// 'warning-row'
            return "";
        },
        closeDialog() {
            this.$store.state.user.dialogLoginVisible = false;
            this.$store.state.user.dialogProjectInfoVisible = false;
            if (this.$store.state.user.currentProjID === null) {
                this.$store.dispatch("setUserId", null);
                this.$store.dispatch("FedLogOut").then(() => {
                    this.$router.push({ path: "/home" });
                    location.reload();
                });
            }
        }
        // getProjList() {
        //     this.list = this.$store.state.user.projList;
        //     // console.log(this.list)
        // }
    },
    mounted() {
        this.getList();
    }
};
</script>
<style lang="scss" >
.projectdialog {
    .el-dialog {
        .el-dialog__header {
            padding: 15px;
        }
        .el-dialog__body {
            padding: 5px 10px 10px 10px;
            span {
                font-size: 17px;
            }
            .name {
                width: 100px;
            }
        }
    }
}
</style>