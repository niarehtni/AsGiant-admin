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

<script src='./role.js'></script>
<style src='./role.less'></style>
