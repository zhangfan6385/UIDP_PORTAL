<template>
    <div id="messagetip" class="messagetip">
        <el-dialog :visible.sync="messagetipVisibile" title="信息提示" center @close="close">
            <el-card>
                <el-table :data="messageList" @expand-change="sign">
                    <el-table-column type="expand">
                        <template template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="标题">
                                    <span>{{ props.row.name }}</span>
                                </el-form-item>
                                <el-form-item label="审核状态">
                                    <span>{{ props.row.shop }}</span>
                                </el-form-item>
                                <el-form-item label="审核时间">
                                    <span>{{ props.row.id }}</span>
                                </el-form-item>
                                <el-form-item label="审核内容">
                                    <span>{{ props.row.shopId }}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column label="标题"></el-table-column>
                    <el-table-column label="审核状态"></el-table-column>
                    <el-table-column label="审核时间"></el-table-column>
                </el-table>
            </el-card>

        </el-dialog>
    </div>
</template>



<script>
import { fetchCheckInfo, fetchMessageList } from "@/app_src/api/message";
export default {
    data() {
        return {
            messagetipVisibile: false,
            messageList: [],
            querylist:{
                limit:5,
                page:1,
                userId:'',
            }
        };
    },
    methods: {
        close() {
            this.$store.state.user.messageDialogVisible = false;
        },
        sign(row) {
            console.log(row.id);
            if (row.id != "12987125") {
                fetchCheckInfo(row.id).then(response => {
                    if (response.data.code === 2000) {
                        this.$notify({
                            position: "bottom-right",
                            title: "成功",
                            message: response.data.message,
                            type: "succes",
                            duration: 2000
                        });
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
            } else {
                console.log("bu");
            }
        }
    },
    computed: {
        getMesListChange() {
            return this.$store.state.user.messageList;
        },
        getMesVisiblie() {
            return this.$store.state.user.messageDialogVisible;
        }
    },
    watch: {
        getMesListChange(data) {
            this.messageList = data;
        },
        getMesVisiblie(data) {
            this.messagetipVisibile = data;
        }
    },
    mounted() {
        //this.getMesList();
    }
};
</script>

       
    