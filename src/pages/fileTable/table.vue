<template>
  <section>
    <el-button class="bt-right" type="primary" @click="AdddialogVisible = true">增加栏目信息</el-button>
    <el-row>
      <el-col :span="24">
        <!--表格-->
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column type="selection">
          </el-table-column>
          <el-table-column
            prop="title"
            label="栏目标题">
          </el-table-column>

          <el-table-column
            prop="title"
            label="图片">
          </el-table-column>

           <el-table-column
            prop="title"
            label="pdf">
          </el-table-column>

           <el-table-column
            prop="title"
            label="栏目">
          </el-table-column>

          <el-table-column label="操作" width="350px">
            <template slot-scope="scope">
              <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
              <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">下载</el-button>
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
        <el-form-item label="pdf图片" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="党组织概况" value="shanghai"></el-option>
            <el-option label="工作计划/诊断回顾" value="beijing"></el-option>
            <el-option label="重点工程推进情况" value="beijing"></el-option>
            <el-option label="特色活动" value="beijing"></el-option>
            <el-option label="公告栏" value="beijing"></el-option>
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
<script type="text/ecmascript-6">
// const ERR_OK = '000'
export default {
  data () {
    return {
      formInline: {
        user: {
          name: '',
          date: '',
          address: [],
          place: ''
        }
      },
      tableData: [{
        title: '11',
        imgAddress: '33',
        pdfAddress: '22',
        belongColumn: '123',
        state: '123'
      }
      ],
      options: [],
      places: [],
      AdddialogVisible: false,
      editLoading: false,
      form: {
        name: '',
        address: '',
        date: ''
      },
      currentPage: 4,
      table_index: 999,
      formLabelWidth: '100px',
      userForm: {

      }
    }
  },
  created () {
    // this.$http.get('/api/getTable').then((response) => {
    //   response = response.data
    //   if (response.code === ERR_OK) {
    //     this.tableData = response.datas
    //   }
    // })
    // this.$http.get('/api/getOptions').then((response) => {
    //   response = response.data
    //   if (response.code === ERR_OK) {
    //     this.options = response.datas
    //     this.places = response.places
    //   }
    // })
  },
  methods: {
    onSubmit () {
      this.$message('模拟数据，这个方法并不管用哦~')
    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
      this.$message({
        message: '操作成功！',
        type: 'success'
      })
    },
    handleEdit (index, row) {
      this.AdddialogVisible = true
      this.form = Object.assign({}, row)
      this.table_index = index
    },
    handleSave () {
      this.$confirm('确认提交吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        cancelButtonClass: 'cancel'
      }).then(() => {
        this.editLoading = true
        let date = this.form.date
        if (typeof date === 'object') {
          date = [date.getFullYear(), (date.getMonth() + 1), (date.getDate())].join('-')
          this.form.date = date
        }
        //          this.tableData[this.table_index] = this.form;
        this.tableData.splice(this.table_index, 1, this.form)
        this.$message({
          message: '操作成功！',
          type: 'success'
        })
        this.editLoading = false
        this.AdddialogVisible = false
      }).catch(() => {

      })
    },
    download: function () {
      console.log('xiazai')
      var obj = document.getElementById('download')
      var str = '姓名,出生日期,地址\n'
      for (var i = 0; i < this.tableData.length; i++) {
        var item = this.tableData[i]
        str += item.name + ',' + item.date + ',' + item.address
        str += '\n'
      }
      console.log(obj)
      str = encodeURIComponent(str)
      console.log(str)
      obj.href = 'data:text/csv;charset=utf-8,\ufeff' + str
      obj.download = 'download.csv'
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style>
@import "./table.less";
</style>
