<template>
  <section>
    <el-card class="box-card">
      <avue-crud :data="data" :option="option" v-model="obj"></avue-crud>
      <br>
      <el-tag>当前弹出框表单中的数据{{obj}}</el-tag>
    </el-card>
  </section>
</template>

<script>
export default {
  name: 'ceshi',
  data () {
    return {
      obj: {},
      data: [
        {
          name: '张三',
          sex: '男',
          date: '1994-02-23 00:00:00'
        }, {
          name: '李四',
          sex: '女',
          date: '1994-02-23 00:00:00'
        }, {
          name: '王五',
          sex: '女',
          date: '1994-02-23 00:00:00'
        }, {
          name: '赵六',
          sex: '男',
          date: '1994-02-23 00:00:00'
        }
      ],
      option: {
        title: '表格的标题',
        page: false,
        align: 'center',
        menuAlign: 'center',
        column: [
          {
            label: '姓名',
            prop: 'name'
          },
          {
            label: '性别',
            prop: 'sex'
          }, {
            label: '日期',
            prop: 'date',
            type: 'date',
            format: 'yyyy-MM-dd hh:mm:ss',
            valueFormat: 'yyyy-MM-dd hh:mm:ss'
          }
        ]
      }
    }
  }
}
</script>
<style src='./table.less'></style>
