<template>
  <el-row type="flex">
    <el-col :span="2"> </el-col>
    <el-col :span="20">
      <el-card shadow="never">
        <el-card class="componentinfo"  shadow="never">
          <ul>
            <li>
              <span>服务地址：</span>
              <span>http://v.juhe.cn/historyWeather/province</span>
            </li>
            <li>
              <span>返回格式：</span>
              <span>json</span>
            </li>
            <li>
              <span>服务类型：</span>
              <span>内部服务</span>
            </li>
            <li>
              <span>请求方式：</span>
              <span>get</span>
            </li>
            <li>
              <span>更新时间：</span>
              <span>2010/10/13 16:55:30</span>
            </li>
            <li>
              <span>应用平台：</span>
              <span>ALL</span>
            </li>
            <li>
              <span>请求示例：</span>
              <span>www.188soft.com</span>
            </li>
            <li>
              <span>响应时间：</span>
              <span>小于1s</span>
            </li>
            <li>
              <el-button size="mini" type="primary" @click="handleApply(obj.name)">申&nbsp;&nbsp;&nbsp;&nbsp;请</el-button>
              <!-- <el-button size="mini" type="primary" @click="handleHistory(obj.name)">申请记录</el-button> -->
              <el-button size="mini" type="primary" @click="goAnchor">查看服务码</el-button>
            </li>
          </ul>
        </el-card>
        <el-card id="#anchor1" class="componentinfo" shadow="never">
          <div> 
            <h5>文件下载</h5>
            <a @click="handleDown('组件相关')">使用说明</a>
            <a @click="handleDown('组件相关')">案例</a>
            <a @click="handleDown('组件相关')">开发文档</a>
          </div>
        </el-card>
        <el-card class="componentinfo" shadow="never">
          <span style="font-size:18px;font-weight:bold"><img  style="width:20px;height:20px;" src="../../../app_src/imgs/title.png">服务介绍</span>
          <div v-html="obj.content"></div>
        </el-card>
      </el-card>

      <el-dialog title="服务码信息" :visible.sync="dialogCodeVisible">

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
    </el-col>
  </el-row>

</template>
<script>
export default {
    data() {
        return {
            gridData: [
                {
                    projectname: "xx管理系统",
                    applaydate: "2018-08-02",
                    purpose: "开发"
                },
                {
                    projectname: "xx管理系统",
                    applaydate: "2018-07-04",
                    purpose: "生产"
                },
                {
                    projectname: "xx管理系统",
                    applaydate: "2018-06-21",
                    purpose: "开发"
                },
                {
                    projectname: "xx管理系统",
                    applaydate: "2018-05-04",
                    purpose: "生产"
                }
            ],
            form: {
                companyname: "XX公司",
                projectname: "xx项目",
                purpose: "",
                type: "",
                contact: "",
                phone: "",
                email: ""
            },
            dialogCodeVisible: false,
            dialogFormVisible: false,
            componentName: "",
            dialogTitle: "",
            componentContent: "",
            formLabelWidth: "120px",
            formInline: {
                user: "",
                region: ""
            },
            obj: {
                name: "云组织推送服务",
                id: 1,
                download: "151",
                date: "2018-08-08",
                status: 0,
                content:
                    '<div data-v-70ced7be="" class="nav-right-mergin"><p style="line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">1.协议说明</span></p><table><tbody><tr class="firstRow"><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">名称</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">说明</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">协议</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">HTTPS &nbsp;POST</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">编码格式</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">UTF8</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">Content-Type</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">application/json</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">URL</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><a href="https://api.253.com/open/wool/wcheck" target="_self"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">https://api.253.com/open/wool/wcheck</span></a></p></td></tr></tbody></table><p><br></p><p style="line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">2.请求参数说明</span></p><p style="margin: 5px 0px; color: rgb(0, 0, 0); text-transform: none; line-height: 2em; text-indent: 0px; letter-spacing: normal; font-family: sans-serif; font-size: 16px; font-style: normal; font-weight: normal; word-spacing: 0px; white-space: normal; orphans: 2; widows: 2; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">请求参数Body以multipart/form-data方式提交</span></p><table><tbody><tr class="firstRow"><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">参数名<br></span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">说明</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">appId</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><span style="color: rgb(127, 127, 127); font-family: 宋体; font-size: 12px;"></span><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><span style="color: rgb(127, 127, 127); font-size: 14px;">请在</span><span style="color: rgb(127, 127, 127); font-size: 14px;">api.253.com</span><span style="color: rgb(127, 127, 127); font-size: 14px;">登录后获取</span></span></span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">appKey</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><span style="color: rgb(127, 127, 127); font-size: 14px;">请在</span><span style="color: rgb(127, 127, 127); font-size: 14px;">api.253.com</span><span style="color: rgb(127, 127, 127); font-size: 14px;">登录后获取</span></span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">mobile</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><span style="color: rgb(127, 127, 127); font-size: 14px;">检测手机号，限单个，仅支持国内号码，</span><span style="color: rgb(127, 127, 127); font-size: 14px;">11</span><span style="color: rgb(127, 127, 127); font-size: 14px;">位</span></span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">ip</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><span style="color: rgb(127, 127, 127); font-size: 14px;">检测手机号的</span><span style="color: rgb(127, 127, 127); font-size: 14px;">IP</span><span style="color: rgb(127, 127, 127); font-size: 14px;">地址，非必传</span><span style="color: rgb(127, 127, 127); font-size: 14px;">(</span><span style="color: rgb(127, 127, 127); font-size: 14px;">重要，建议传入</span><span style="color: rgb(127, 127, 127); font-size: 14px;">)</span></span></p><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><br></span></p></td></tr></tbody></table><p><br></p><p style="line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">3.响应参数说明</span></p><p style="margin: 5px 0px; color: rgb(0, 0, 0); text-transform: none; line-height: 2em; text-indent: 0px; letter-spacing: normal; font-family: sans-serif; font-size: 16px; font-style: normal; font-weight: normal; word-spacing: 0px; white-space: normal; orphans: 2; widows: 2; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">响应body数据为JSON格式</span></p><table><tbody><tr class="firstRow"><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">字段名</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">类型</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">说明</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">code</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">String</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">响应code码。200000：成功，其他失败。见附录5.1响应code码</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">message</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">String</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">响应code码解释</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">data</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">Object</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none;"><br></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">mobile</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">String</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">手机号，仅支持国内号码，11位</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">tradeNo</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">String</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">交易号，唯一。样例：18041109215057630</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">chargesStatus</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">String</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">是否收费，枚举值：</span></p><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">1&nbsp;：收费&nbsp;0：不收费</span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">status</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">String</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">检测结果，枚举值：</span></p><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 12px;">W1</span><span style="color: rgb(127, 127, 127); font-family: 宋体; font-size: 12px;">：白名单</span></span></p><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><span style="color: rgb(127, 127, 127); font-family: 宋体; font-size: 12px;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 12px;">B1&nbsp;</span><span style="color: rgb(127, 127, 127); font-family: 宋体; font-size: 12px;">：黑名单</span></span></span></span></p><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 12px;">B2&nbsp;</span><span style="color: rgb(127, 127, 127); font-family: 宋体; font-size: 12px;">：可信用度低</span></span></p><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">N<span style="color: rgb(127, 127, 127); font-family: Calibri, sans-serif; font-size: 12px;"></span><span style="color: rgb(127, 127, 127); font-family: 宋体; font-size: 12px;">：未找到</span></span></p></td></tr><tr><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">tag</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); border-image: none; -ms-word-break: break-all;"><p style="margin: 0px; padding: 0px; line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;">String</span></p></td><td valign="top" style="padding: 5px 10px; border: 1px solid rgb(242, 242, 242); word-break: break-all;"><p style="line-height: 2em;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 14px;"><span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 12px;">标签属性，判断的依据信息，用于可信用度低和黑名单。样例：批量操作;系统环境异常</span>&nbsp;<span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 12px;">信用低</span>&nbsp;<span style="color: rgb(127, 127, 127); font-family: 微软雅黑,Microsoft YaHei; font-size: 12px;">小号养号<br></span></span></p></td></tr></tbody></table><p><br></p><p><br></p></div>'
            }
        };
    },
    methods: {
        handleApply(name) {
            this.dialogFormVisible = true;
            this.dialogTitle = "组件" + name + "申请记录";
        },
        // handleHistory(name) {
        //   this.dialogTableVisible = true
        //   this.dialogTitle = '组件' + name + '申请记录'
        // },
        //锚点跳转
        goAnchor() {
            this.dialogCodeVisible = true;
        }
    }
};
</script>
<style scoped>
.componentinfo {
    margin-bottom: 5px;
 
}
 .el-card__body{
    padding:5px;}

/* .componentinfo li{float:left;width:100px;background:#CCC;margin-left:3px;line-height:30px;} */
.componentinfo ul {
    width: 100%;
    list-style: none;
    margin-bottom: 20px;
    padding-left: 0px;    
}
.componentinfo li {
    font-size: 14px;
    width: 45%; /*如果显示三列 则width改为70px*/
    float: left;
    display: block;
    margin-bottom: 5px;
}
</style>
