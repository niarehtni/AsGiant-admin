import * as databaseLogic from '@/network/model/databaseLogic'
export default {
  data () {
    return {
      page: {
        pageSizes: [10, 20, 30, 40],
        total: 20,
        currentPage: 1,
        pageSize: 10
      },
      data: [
        {
          nickname: '张三',
          ipone: '111'
        }
      ],
      option: {
        align: 'center',
        menuAlign: 'center',
        border: true,
        index: true,
        column: [
          {
            label: '数据库名',
            prop: 'column',
            span: 20,
            placeholder: '请输入数据库名,创建的表，格式:"[zmyq_a]"',
            rules: [{
              required: true,
              message: '数据库名不能为空',
              trigger: 'blur'
            },
            {
              pattern: /^.*zmyq_.*[a-z]$/,
              message: '数据库的名字必须是zmyq_开头,后面为小写字母,例子[zmyq_a]'}
            ]
          },
          {
            label: '中文名',
            prop: 'columnName',
            span: 20,
            rules: [{
              required: true,
              message: '数据库中文名不能为空',
              trigger: 'blur'
            }]
          },
          {
            label: '数据编号',
            prop: 'columnid',
            maxRow: 4,
            minRow: 4,
            span: 20,
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            hide: true,
            overHidden: true
          }
        ]
      }
    }
  },
  created () {
    this.loadUserList()
  },
  methods: {
    loadUserList () {
      let data = {
        'currentPage': this.page.currentPage,
        'pageSize': this.page.pageSize
      }
      databaseLogic.finddatabase(data, (res) => {
        this.data = res.data
        this.page.total = res.total
      })
    },
    sizeChange (val) {
      this.page.pageSize = val
      this.loadUserList()
      // this.$message.success("行数" + val);
    },
    currentChange (val) {
      this.page.currentPage = val
      this.loadUserList()
      this.$message.success('页码' + val)
    },
    /**
     * @title 打开新增窗口
     * @detail 调用crud的handleadd方法即可
     *
     **/
    handleAdd () {
      this.$refs.crud.rowAdd()
    },
    /**
     * @title 获取数据
     * @detail 赋值为tableData表格即可
     *
     **/
    handleList () {
      this.tableLoading = true
      this.$store
        .dispatch('GetUserData', { page: `${this.tablePage}` })
        .then(data => {
          setTimeout(() => {
            this.tableData = data.tableData
            this.page = {
              total: data.total,
              pageSize: data.pageSize
            }
            this.tableLoading = false
          }, 1000)
        })
    },
    /**
     * @title 数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave (row, done) {
      // this.tableData.push(row);
      let data = {
        'column': row.column.slice(5),
        'columnName': row.columnName
      }
      databaseLogic.newTable(data, (res) => {
        if (res.flag === 1) {
          this.$message({
            showClose: true,
            message: '添加成功',
            type: 'success'
          })
          done()
          this.loadUserList()
        } else {
          this.$message({
            showClose: true,
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    /**
     * @title 数据删除
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     *
     **/
    handleDel (row, index) {
      this.$confirm(`是否确认删除数据库名${row.column}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          let data = {
            column: row.column.slice(5)
          }
          databaseLogic.deleTable(data, (res) => {
            if (res.flag === 1) {
              this.$message({
                showClose: true,
                message: '删除成功',
                type: 'success'
              })
              this.loadUserList()
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: 'error'
              })
            }
          })
        })
        // .catch(err => {})
    },
    /**
     * @title 数据更新
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     * @param done 为表单关闭函数
     *
     **/
    handleUpdate (row, index, done) {
      let data = {
        'infoJson': {
          'column': row.column.slice(5),
          'columnName': row.columnName
        },
        'columnid': row.columnid
      }
      databaseLogic.updateTable(data, (res) => {
        if (res.flag === 1) {
          this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
          })
          done()
          this.loadUserList()
        } else {
          this.$message({
            showClose: true,
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    /**
     * @title 刷新数据
     *
     **/
    handlerefreshChange (page) {
      let data = {
        'currentPage': 1,
        'pageSize': 10
      }
      databaseLogic.finddatabase(data, (res) => {
        this.data = res.data
        this.page.total = res.total
      })
    }

  }
}
