<template>
  <section>
    <el-card class="box-card">
      <el-button class="bt-right" type="primary" @click="AdddialogVisible = true">增加栏目信息</el-button>
      <el-row>
        <el-col :span="24">
          <!--表格-->
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column type="selection"/>
            <el-table-column prop="title" label="栏目标题"/>
            <el-table-column prop="title" label="图片"/>
            <el-table-column prop="title" label="pdf"/>
            <el-table-column prop="title"
              label="栏目">
            </el-table-column>

            <el-table-column
              prop="title"
              label="状态">
            </el-table-column>

            <el-table-column label="操作" width="350px">
              <template slot-scope="scope">
                <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                <el-button type="primary" size="small" @click="handledownload(scope.$index, scope.row)">下载</el-button>
                <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog title="增加栏目信息" :visible.sync="AdddialogVisible">
      <el-form :model="userForm">
        <el-form-item label="栏目标题" :label-width="formLabelWidth">
          <el-input v-model="userForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <form method="post" id="myForm" action="http://localhost/demo/00.vipadmin/sever/think-admin/public/admin/Program/uploadFile" enctype="multipart/form-data">
              <input type="file" id="myFile" multiple>
              <!-- 上传的文件列表 -->
              <table id="upload-list">
                  <thead>
                  <tr>
                      <th width="35%">文件名</th>
                      <th width="15%">文件类型</th>
                      <th width="15%">文件大小</th>
                      <th width="20%">上传进度</th>
                      <th width="15%">
                          <input type="button" id="upload-all-btn" value="全部上传">
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
              </table>
          </form>
        </el-form-item>
        <el-form-item label="pdf图片" :label-width="formLabelWidth">
          <form method="post" id="myForm" action="http://localhost/demo/00.vipadmin/sever/think-admin/public/admin/Program/uploadFile" enctype="multipart/form-data">
              <input type="file" id="myFile" multiple>
              <!-- 上传的文件列表 -->
              <table id="upload-list">
                  <thead>
                  <tr>
                      <th width="35%">文件名</th>
                      <th width="15%">文件类型</th>
                      <th width="15%">文件大小</th>
                      <th width="20%">上传进度</th>
                      <th width="15%">
                          <input type="button" id="upload-all-btn" value="全部上传">
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
              </table>
          </form>
        </el-form-item>
        <el-form-item label="栏目选择" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="党组织概况" value="shanghai"></el-option>
            <el-option label="工作计划/诊断回顾" value="gongzuo"></el-option>
            <el-option label="重点工程推进情况" value="zhongdian"></el-option>
            <el-option label="特色活动" value="tese"></el-option>
            <el-option label="公告栏" value="gonggao"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上架" :label-width="formLabelWidth">
          <el-select v-model="form.aa" placeholder="请选择是否上架">
            <el-option label="上架" value="cc"></el-option>
            <el-option label="下架" value="gongzuo"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="AdddialogVisible = false">取 消</el-button>
        <el-button type="primary"  @click="handleSave">确 定</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script src="./fileTable.js"></script>
<style src="./fileTable.less"></style>
