import * as userLogic from '@/network/model/userLogic'

export default {
  data () {
    return {
      tableLoading: false,
      page: {
        pageSizes: [10, 20, 30, 40],
        total: 20,
        currentPage: 1,
        pageSize: 5
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
            label: '角色',
            prop: 'orgid',
            maxRow: 4,
            minRow: 4,
            span: 24,
            type: 'select',
            dicData: [
              {
                label: '超级管理员',
                value: 'B834D761-7BFB-A5F5-33F6-9C90EC3FC2D6'
              }, {
                label: '无权限',
                disabled: true,
                value: 0
              }
            ]
          },
          {
            label: '手机号',
            prop: 'ipone',
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            overHidden: true
          },
          {
            label: '密码',
            prop: 'password',
            disabled: true,
            editDisabled: true,
            hide: true,
            overHidden: true
          },
          {
            label: '用户名',
            prop: 'username',
            disabled: true,
            editDisabled: true,
            overHidden: true
          },
          {
            label: '昵称',
            prop: 'nickname'
          },
          {
            label: '邮箱',
            prop: 'e_mail',
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            overHidden: true
          },
          {
            label: '用户id',
            prop: 'rid',
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            overHidden: true,
            maxRow: 4,
            minRow: 4,
            span: 12
          },
          {
            label: 'ip地址',
            prop: 'last_login_ip',
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            overHidden: true,
            maxRow: 4,
            minRow: 4,
            span: 12
          },
          {
            label: '最后登录',
            prop: 'last_login_time',
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            overHidden: true,
            maxRow: 4,
            minRow: 4,
            span: 12
          },
          {
            label: '冻结',
            prop: 'freeze',
            type: 'select',
            maxRow: 4,
            minRow: 4,
            span: 12,
            dicData: [
              {
                label: '正常使用',
                value: 0
              }, {
                label: '冻结',
                value: 1
              }
            ]
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
      this.tableLoading = true
      let data = {
        'currentPage': this.page.currentPage,
        'pageSize': this.page.pageSize
      }
      userLogic.userList(data, (res) => {
        for (let index = 0; index < res.data.length; index++) {
          if (res.data[index].last_login_time != null) {
            res.data[index].last_login_time = this.timestampToTime(res.data[index].last_login_time)
          }
        }
        this.data = res.data
        this.page.total = res.total
        this.tableLoading = false
      })

      let data2 = {
        'currentPage': 1,
        'pageSize': 1000
      }
      userLogic.findRoleList(data2, (res) => {
        let roleList = []
        for (let index = 0; index < res.data.length; index++) {
          roleList[index] = {}
          roleList[index].label = res.data[index].roleName
          roleList[index].value = res.data[index].roleid
        }
        this.option.column[0].dicData = roleList
        this.tableLoading = false
      })
    },
    timestampToTime (timestamp) {
      var date = new Date(timestamp * 1000)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-'
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var D = date.getDate() + ' '
      var h = date.getHours() + ':'
      var m = date.getMinutes() + ':'
      var s = date.getSeconds()
      return Y + M + D + h + m + s
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
      console.log('====================================')
      console.log(row)
      console.log('====================================')
      this.$message({
        showClose: true,
        message: '添加成功',
        type: 'success'
      })
      done()
    },
    /**
     * @title 数据删除
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     *
     **/
    handleDel (row, index) {
      this.$confirm(`是否确认删除序号为${row.name}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.tableData.splice(index, 1)
          this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
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
      console.log('====================================')
      console.log(row)
      console.log('====================================')
      // this.tableData.splice(index, 1, row);
      this.$message({
        showClose: true,
        message: '修改成功',
        type: 'success'
      })
      done()
    }
  }
}
