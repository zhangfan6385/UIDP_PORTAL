<template>
    <div id="notice" class="notice">
        <el-row type="flex" :gutter="20">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <div class="noticecard"></div>
                <el-card></el-card>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {};
</script>


<style lang="scss">
.noticecard {
    margin-top: 20px;
}
</style>


