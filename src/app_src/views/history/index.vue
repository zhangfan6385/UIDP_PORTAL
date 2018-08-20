<template>
    <div id="histiory" class="history">
        <el-row gutter="20" type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="10">
                <el-card>
                    <div class="title">
                        当前版本
                    </div>
                    <el-table :data="currentEdition">
                        <el-table-column prop="type" label="类型"></el-table-column>
                        <el-table-column prop="title" label="名称"></el-table-column>
                        <el-table-column prop="content" label="更新内容"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" v-if="!power">申请下载</el-button>
                                <el-button type="text" v-else-if="power">下载</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card>
                    <div class="title">
                        历史版本
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    data(){
        return{
            currentEdition:[
                {type:'pro',title:'新版本',id:1,content:'更新内容1'},
                {type:'doc',title:'新版本',id:2,content:'更新内容2'},
                {type:'doc',title:'新版本',id:3,content:'更新内容3'}
            ],
            histroyEdition:[
                {type:'pro',title:'新版本',id:1,content:'更新内容1'},
                {type:'doc',title:'新版本',id:2,content:'更新内容2'},
                {type:'doc',title:'新版本',id:3,content:'更新内容3'}
            ],
            power:false
        }
    },
    methods:{

    },

}
</script>


<style lang="scss">
.history{
    margin-top: 20px;
}
</style>


