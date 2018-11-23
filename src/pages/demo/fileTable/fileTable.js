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
    handledownload (index, row) {
      console.log('====================================')
      console.log(index, row)
      console.log('====================================')
      this.$message({
        message: '下载成功',
        type: 'success'
      })
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
