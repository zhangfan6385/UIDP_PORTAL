<template>
    <div id="messagetip" class="messagetip">
        <el-dialog :visible.sync="messagetipVisibile" title="信息提示" center @close="close">
            <el-card>
                <el-table :data="tableData5" @expand-change="sign">
                    <el-table-column type="expand">
                        <template template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="商品名称">
                                    <span>{{ props.row.name }}</span>
                                </el-form-item>
                                <el-form-item label="所属店铺">
                                    <span>{{ props.row.shop }}</span>
                                </el-form-item>
                                <el-form-item label="商品 ID">
                                    <span>{{ props.row.id }}</span>
                                </el-form-item>
                                <el-form-item label="店铺 ID">
                                    <span>{{ props.row.shopId }}</span>
                                </el-form-item>
                                <el-form-item label="商品分类">
                                    <span>{{ props.row.category }}</span>
                                </el-form-item>
                                <el-form-item label="店铺地址">
                                    <span>{{ props.row.address }}</span>
                                </el-form-item>
                                <el-form-item label="商品描述">
                                    <span>{{ props.row.desc }}</span>
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
import { fetchCheckInfo } from "@/app_src/api/message";
export default {
    data() {
        return {
            messagetipVisibile: false,
            messageList: [],
            tableData5: [
                {
                    id: "12987122",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333"
                },
                {
                    id: "12987123",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333"
                },
                {
                    id: "12987125",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333"
                },
                {
                    id: "12987126",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333"
                }
            ]
        };
    },
    methods: {
        getMesList() {
            this.messageList = this.$store.state.user.messageList;
        },
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
        this.getMesList();
    }
};
</script>

       
    