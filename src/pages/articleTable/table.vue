<template>
  <section>
    <el-row>
      <el-col :span="24">
        <!--表格-->
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <!-- <el-table-column type="selection">
          </el-table-column> -->
          <el-table-column
            prop="title"
            label="文章题目"
            width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="success" size="small" @click="uploadArticle(scope.$index, scope.row)">修改文章</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div> -->
      </el-col>
    </el-row>

    <el-dialog title="修改文章" :visible.sync="AdddialogVisible">
      <el-form :model="userForm">
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input v-model="userForm.title" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="AdddialogVisible = false">取 消</el-button>
        <el-button type="primary"  @click="AdddialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script type="text/ecmascript-6">
/* eslint-disable */
import UE from '../../components/ue/ue.vue'

// const ERR_OK = '000'
export default {
  name: 'userTable',
  components: {UE},
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
        title: '入党誓词'
      }, {
        title: '党员的权利'
      }, {
        title: '党员的义务'
      }
      ],
      userForm: {
      },
      options: [],
      places: [],
      dialogFormVisible: false,
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
    uploadArticle (index, row) {
      this.$router.push({path: '/editor'})
      // this.AdddialogVisible = true
      // this.form = Object.assign({}, row)
      // this.table_index = index
    },
    handleSave () {
      this.$confirm('确认提交吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        cancelButtonClass: 'cancel'
      }).then(() => {
        this.editLoading = true
        console.log('====================================')
        console.log(this.userForm)
        console.log('====================================')
        // let date = this.form.date
        // if (typeof date === 'object') {
        //   date = [date.getFullYear(), (date.getMonth() + 1), (date.getDate())].join('-')
        //   this.form.date = date
        // }
        //          this.tableData[this.table_index] = this.form;
        this.tableData.splice(this.table_index, 1, this.form)
        this.$message({
          message: '操作成功！',
          type: 'success'
        })
        this.editLoading = false
        this.dialogFormVisible = false
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
    },
    getUEContent () {
      let content = this.$refs.ue.getUEContent() // 调用子组件方法
      this.$notify({
        title: '获取成功，可在控制台查看！',
        message: content,
        type: 'success'
      })
      console.log(content)
    },
    getUEContentTxt () {
      let content = this.$refs.ue.getUEContentTxt() // 调用子组件方法
      this.$notify({
        title: '获取成功，可在控制台查看！',
        message: content,
        type: 'success'
      })
      console.log(content)
    }
  }
}
</script>
<style>
@import "./table.less";
</style>
