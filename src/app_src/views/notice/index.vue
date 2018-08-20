<template>
    <div id="notice" class="notice">
        <el-row type="flex" :gutter="20">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <div class="noticecard">
                    <!-- <el-table :data="noticeList" style="width: 100%" @row-click="goToContent">
                        <el-table-column prop="title" label="标题" :show-overflow-tooltip="true"></el-table-column>
                        <el-table-column prop="writter" width="120px" label="发布人"></el-table-column>
                        <el-table-column prop="time" label="日期" width="120px"></el-table-column>
                    </el-table> -->
                    <el-card>
                        <el-card v-for="(item,key) in  noticeList" :key="key" @click.native="goToContent(item)">
                            <div slot="header" class="header">
                                {{item.title}}
                            </div>
                            <div class="content">
                                <el-row>
                                    <el-col :span="24">
                                        {{item.content}}
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24">
                                        <div class="foot">
                                            作者:{{item.writter}} 发表日期：{{item.time}}
                                        </div>

                                    </el-col>
                                </el-row>
                            </div>
                        </el-card>
                        <div class="page">
                            <el-pagination background layout="prev, pager, next" :total="1000">
                            </el-pagination>
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
        return {
            noticeList: [
                {
                    title:
                        "zhongyao1zhongyao1zhongyao1zhongyao1zhongyao1zhongyao1zhongyao1zhongyao1zhongyao1",
                    content: "123123123",
                    writter: "xiaozhang",
                    time: "2018-8-20",
                    id: 1
                },
                {
                    content: "123123123",
                    title: "zhongyao1",
                    writter: "xiaozhang",
                    time: "2018-8-20",
                    id: 2
                },
                {
                    content: "123123123",
                    title: "zhongyao1",
                    writter: "xiaozhang",
                    time: "2018-8-20",
                    id: 3
                },
                {
                    content: "123123123",
                    title: "zhongyao1",
                    writter: "xiaozhang",
                    time: "2018-8-20",
                    id: 4
                },
                {
                    content: "123123123",
                    title: "zhongyao1",
                    writter: "xiaozhang",
                    time: "2018-8-20",
                    id: 5
                }
            ]
        };
    },
    methods: {
        goToContent(data) {
            let id = data.id.toString();
            console.log(typeof id);
            this.$router.push({ path: "noticecontent/" + id });
        }
    }
};
</script>


<style lang="scss">
.noticecard {
    margin-top: 20px;
    .header {
        text-align: center;
    }
    .content {
        font-size: 20px;
        .foot {
            float: right;
            font-size: 10px;
            color: gray;
        }
    }
    .page{
        text-align: center;
    }
}
.el-card {
    font-family: "微软雅黑";
}
</style>


