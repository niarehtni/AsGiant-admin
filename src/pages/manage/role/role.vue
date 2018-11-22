<template>
  <section>
    <el-card class="box-card">
      <avue-crud :option="tableOption"
                 :data="tableData"
                 :table-loading="tableLoading"
                 :page="page"
                 ref="crud"
                 width="290"
                 @row-save="handleSave"
                 @row-update="handleUpdate"
                 @row-del="handleDel">
        <template slot-scope="scope"
                  slot="menu">
          <el-button icon="el-icon-check"
                     size="small"
                     @click="handleGrade(scope.row,0)">增加权限</el-button>
          <el-button icon="el-icon-check"
                     size="small"
                     @click="handleGrade(scope.row,1)">删除权限</el-button>
          <el-button icon="el-icon-check"
                     size="small"
                     @click="handleGrade(scope.row,2)">修改权限</el-button>
          <el-button icon="el-icon-check"
                     size="small"
                     @click="handleGrade(scope.row,3)">查询权限</el-button>
        </template>
      </avue-crud>
      <el-dialog title="权限"
                 :visible.sync="grade.box"
                 width="60%">
        <el-row :gutter="20">
          <!-- 侧边栏 -->
          <el-col :span="5">
            <div class="grid-content bg-purple-dark">
              <el-row class="tac z-overflow">
                <el-col :span="24">
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo">
                    <el-menu-item :index=item.columnid v-for="(item,index) in roleList" :key=index @click="getProgram(item.column,item.columnid)">
                      <span slot="title">{{item.columnName}}</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
              </el-row>

            </div>
          </el-col>
          <!-- 表单 -->
          <el-col :span="19">

            <el-row type="flex" class="row-bg" justify="center">
               <el-table
                v-loading="loading"
                ref="multipleTable"
                :data="fieldData"
                tooltip-effect="dark"
                @selection-change="handleSelectionChange"
                class="z-overflow"
                style="width: 80%">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="field"
                  label="字段"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="field_annotation"
                  label="字段注释"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </el-row>

          </el-col>

        </el-row>

        <span slot="footer"
              class="dialog-footer">
          <el-button type="primary"
                     @click="handleGradeUpdate">确定</el-button>
        </span>
        <!-- <el-tree :data="menuAll"
                 :default-checked-keys="grade.check"
                 :default-expanded-keys="grade.check"
                 show-checkbox
                 node-key="id"
                 @check-change="handleGradeCheckChange">
        </el-tree> -->
        <!-- <avue-form v-model="form" :option="option" @submit="submit"></avue-form> -->

      </el-dialog>
    </el-card>
  </section>
</template>

<script>
import * as userLogic from '@/network/model/userLogic'
import * as databaseLogic from '@/network/model/databaseLogic'
// import { mapGetters } from 'vuex'
// import { roleOption } from '@/const/admin/adminTabelOption.js'
export default {
  name: 'role',
  components: {},
  data () {
    return {
      fieldData: [],
      chooseField: [],
      roleList: {},
      tableOption: {
        border: true,
        index: true,
        selection: false,
        calcHeight: 320,
        menuAlign: 'center',
        menuWidth: 700,
        column: [
          {
            label: '角色名称',
            prop: 'roleName',
            disabled: true,
            overHidden: true
          },
          {
            label: '角色id',
            prop: 'roleid',
            disabled: true,
            editDisabled: true,
            addDisabled: true,
            overHidden: true
          }
        ]
      }, // 表格设置属性
      tableData: [], // 表格的数据
      tablePage: 1,
      tableLoading: false,
      tabelObj: {},
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10 // 每页显示多少条
      },
      grade: {
        box: false,
        check: []
      },
      loading: false,
      addField: {
        infoJson: {
          table: '',
          classid: '',
          field: '',
          roleid: '',
          roleName: '',
          control: ''
        }
      },
      checkRole: {
        infoJson: {
          classid: '',
          roleid: '',
          control: ''
        }
      }
    }
  },
  created () {
    // 初始化数据格式
    // this.tableOption = roleOption;
    this.handleList()
  },
  watch: {},
  mounted () {},
  computed: {
    // ...mapGetters(['permission', 'menuAll'])
  },
  props: [],
  methods: {
    /**
     * @title 权限更新
     *
     **/
    handleGradeUpdate () {
      console.log('====================================')
      console.log(this.addField)
      console.log('====================================')
      // this.tabelObj.check = [].concat(this.grade.check);
      // this.tabelObj = {};
      // this.grade.check = [];
      this.grade.box = false
    },
    /**
     * @title 权限选择
     *
     **/
    handleGradeCheckChange (data, checked, indeterminate) {
      if (checked) {
        this.grade.check.push(data.id)
      } else {
        this.grade.check.splice(this.grade.check.indexOf(data.id), 1)
      }
    },
    /**
     * @title 打开权限
     */
    handleGrade (row, index) {
      this.getRoleList()
      this.fieldData = []
      this.addField.infoJson.control = index
      this.addField.infoJson.roleid = row.roleid
      this.addField.infoJson.roleName = row.roleName

      this.checkRole.infoJson.roleid = row.roleid
      this.checkRole.infoJson.control = index

      // this.$store.dispatch("GetMenuAll").then(data => {
      this.grade.box = true
      // this.tabelObj = row;
      // this.grade.check = this.tabelObj.check;
      // });
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
      let data = {
        currentPage: 1,
        pageSize: 1000
      }
      userLogic.findRoleList(data, res => {
        this.tableData = res.data
        this.page.total = res.total
        this.tableLoading = false
      })

      // this.$store
      //   .dispatch("GetRoleData", { page: `${this.tablePage}` })
      //   .then(data => {
      //     setTimeout(() => {
      //       this.tableData = data.tableData;
      //       this.page = {
      //         total: data.total,
      //         pageSize: data.pageSize
      //       };
      //       this.tableLoading = false;
      //     }, 1000);
      //   });
    },

    getRoleList () {
      let data = {
        currentPage: 1,
        pageSize: 1000
      }
      databaseLogic.finddatabase(data, res => {
        this.roleList = res.data
      })

      // fieldData
    },
    /**
     * @title 数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave (row, done) {
      // console.log('====================================');
      // console.log(row);
      // console.log('====================================');

      let data = {
        infoJson: {'roleName': row.roleName, 'roleid': this.generateUUID()},
        send: {'send': 0, 'email': 'BBA6E0E3-442E-6666-6B6B-53639CD557CC'}
      }
      databaseLogic.roleTitleaddInfos(data, res => {
        // this.roleList = res.data;
        // console.log('====================================');
        // console.log(res);
        // console.log('====================================');
        this.handleList()
      })

      // this.tableData.push(row);
      // this.$message({
      //   showClose: true,
      //   message: "添加成功",
      //   type: "success"
      // });
      done()
    },
    generateUUID () {
      var d = new Date().getTime()
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      })
      return uuid
    },
    /**
     * @title 数据删除
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     *
     **/
    handleDel (row, index) {
      this.$confirm(`是否确认删除  ${row.roleName}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          let data = {
            mainKey: 'roleid',
            mainVal: row.roleid
          }
          databaseLogic.deleRole(data, res => {
            if (res.flag === 1) {
              this.$message({
                showClose: true,
                message: '删除成功',
                type: 'success'
              })
              this.handleList()
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
      // updateRole
      let data = {
        infoJson: {
          roleName: row.roleName,
          roleid: row.roleid
        },
        mainKey: 'roleid',
        mainVal: row.roleid
      }

      databaseLogic.updateRole(data, res => {
        if (res.flag === 1) {
          this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
          })
          this.handleList()
        } else {
          this.$message({
            showClose: true,
            message: res.msg,
            type: 'error'
          })
        }
      })
      done()

      // this.tableData.splice(index, 1, row);
    },

    /**
     * @title 更新按钮
     **/

    submit () {
      this.$message.success('当前数据' + JSON.stringify(this.form))
    },
    getProgram (table, classid) {
      this.addField.infoJson.table = table
      this.addField.infoJson.classid = classid
      this.loading = true
      // 获取table信息
      let data = {
        'infoJson': {'table_form': table}
      }
      databaseLogic.programList(data, res => {
        this.fieldData = res.msg === '' ? [] : res.msg

        this.checkRole.infoJson.classid = classid

        databaseLogic.roleList(this.checkRole, res => {
          if (res.msg === '') {

          } else {
            this.chooseField = res.msg[0].field.split('||&&||')

            if (this.chooseField) {
              this.chooseField.forEach(row => {
                for (let index = 0; index < this.fieldData.length; index++) {
                  if (this.fieldData[index].field === row) {
                    this.$refs.multipleTable.toggleRowSelection(this.fieldData[index])
                  }
                }
              })
            } else {
              this.$refs.multipleTable.clearSelection()
            }
          }
        })
        this.loading = false
      })
    },
    handleSelectionChange (val) {
      let setField = ''
      for (let index = 0; index < val.length; index++) {
        setField = setField + '||&&||' + val[index].field
      }
      this.addField.infoJson.field = setField.substr(6)
    }
  }
}
</script>

<style>
.table-container {
  padding: 8px 10px;
}
.z-overflow {
  height: 400px;
  overflow: scroll;
}
</style>
