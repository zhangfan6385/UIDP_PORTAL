<template>
    <div id="messagetip" class="messagetip">
        <el-dialog :visible.sync="messagetipVisibile" title="信息提示" center @close="close" width="70%">
            <el-card>
                <el-card>
                    <el-table :data="messageList" @expand-change="sign">
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <el-form label-position="left">
                                    <el-row>
                                        <el-col :span="24">
                                            <el-form-item label="标题">
                                                <div v-html="props.row.RECORD_TITLE"></div>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="24">
                                            <el-form-item label="审核内容">
                                                <div  v-html="props.row.RECORD_CONTENT">
                                                </div>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-form>
                            </template>
                        </el-table-column>
                        <el-table-column label="状态" width="50px">
                            <template slot-scope="scope">
                                <span v-if="scope.row.RECORD_ISREAD===0" class="noread">未读</span>
                                <span v-if="scope.row.RECORD_ISREAD!=0" class="read">已读</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="RECORD_TITLE" label="标题"></el-table-column>
                        <el-table-column prop="CREATER" label="创建人" width="140px"></el-table-column>
                        <el-table-column label="审核时间" width="150px">
                            <template slot-scope="scope">
                                {{scope.row.CREATE_DATE | parseTime}}
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
                <div class="page">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="msgform.page" :page-sizes="[5, 15, 20, 25]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
                    </el-pagination>
                </div>
            </el-card>
        </el-dialog>
    </div>
</template>



<script>
import { fetchCheckInfo, fetchMessageList } from "@/app_src/api/message";
import { parseTime } from "@/app_src/utils/index.js";
export default {
    data() {
        return {
            messagetipVisibile: false,
            total: 0,
            messageList: [],
            checkList: {
                RECORD_ID: ""
            },
            msgform: {
                limit: 5,
                page: 1,
                userId: ""
            }
        };
    },
    methods: {
        close() {
            this.$store.state.user.messageDialogVisible = false;
            this.msgform.userId = this.$store.state.user.userinfo[0].USER_ID;
            this.$store.dispatch("GetUserMsg", this.msgform);
        },
        sign(row) {
            if (row.RECORD_ISREAD === 0) {
                this.checkList.RECORD_ID = row.RECORD_ID;
                fetchCheckInfo(this.checkList).then(response => {
                    if (response.data.code === 2000) {
                        row.RECORD_ISREAD = 1;
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
        handleSizeChange(val) {
            this.msgform.limit = val;
            this.msgform.userId = this.$store.state.user.userinfo[0].USER_ID;
            this.$store.dispatch("GetUserMsg", this.msgform);
        },
        handleCurrentChange(val) {
            this.msgform.page = val;
            this.msgform.userId = this.$store.state.user.userinfo[0].USER_ID;
            this.$store.dispatch("GetUserMsg", this.msgform);
        },
        getMesList() {
            if (this.getMesListChange != null) {
                this.messageList = this.getMesListChange;
                this.total = this.getTotal;
            } else {
                this.messageList = [];
            }
        }
    },
    filters: {
        parseTime
    },
    computed: {
        getMesListChange() {
            return this.$store.state.user.msgInfo;
        },
        getReadCount() {
            return this.$store.state.user.noReadCount;
        },
        getTotal() {
            return this.$store.state.user.total;
        },
        getMesVisiblie() {
            return this.$store.state.user.messageDialogVisible;
        }
    },
    watch: {
        getMesListChange(data) {
            this.messageList = data;
        },
        getReadCount(data) {
            this.messageList = this.$store.state.user.msgInfo;
        },
        getTotal(data) {
            this.total = data;
        },
        getMesVisiblie(data) {
            this.messagetipVisibile = data;
        }
    },
    mounted() {
        this.getMesList();
    }
};
</script>


<style lang="scss" scoped>
.messagetip {
    .noread {
        color: red;
        font-weight: bold;
    }
    .read {
        color: greenyellow;
        font-weight: bold;
    }
    .page {
        text-align: center;
    }
}
</style>


       
    