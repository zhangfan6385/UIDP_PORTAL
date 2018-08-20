<template>
    <div id="noticecontent">
        <el-row type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <div class="noticecontent">
                    <el-card>
                        <div slot="header" class="header">
                            123
                        </div>
                        <div class="content">
                            <el-row>
                                <el-col :span="24">
                                    123
                                </el-col>
                            </el-row>
                        </div>
                        <div class="foot">
                            <el-row>
                                <el-col :span="24">
                                    123
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {}
};
</script>



<style lang="scss">
.noticecontent {
    margin-top: 20px;
    .header {
        font-size: 25px;
        font-weight: bold;
    }
    .content {
        font-size: 18px;
        min-height: 400px;
    }
    .foot {
        float: right;
        font-size: 12px;
        color: gray;
    }
}
.el-card {
    font-family: "微软雅黑";
}
</style>
