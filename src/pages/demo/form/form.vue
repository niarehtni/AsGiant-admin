<template>
  <section>
    <el-card class="box-card">
    <el-row style="margin-bottom:20px">
      <el-radio-group v-model="sizeValue">
        <el-radio label="">默认</el-radio>
        <el-radio label="small">small</el-radio>
        <el-radio label="mini">mini</el-radio>
      </el-radio-group>
    </el-row>
    <avue-form ref="form" v-model="obj" :option="option" @reset-change="emptytChange" @submit="submit">
      <template slot-scope="scope" slot="menuForm">
          <el-button @click="tip">自定义按钮</el-button>
      </template>
    </avue-form>
    </el-card>
  </section>
</template>

<script>
const DIC = {
  VAILD: [{
    label: '真',
    value: 'true'
  }, {
    label: '假',
    value: 'false'
  }],
  SEX: [{
    label: '男',
    value: 0
  }, {
    label: '女',
    value: 1
  }]
}
export default {
  data () {
    return {
      obj: {},
      sizeValue: ''
    }
  },
  computed: {
    option () {
      return {
        size: this.sizeValue,
        mock: true,
        dicData: DIC,
        submitText: '完成',
        column: [{
          label: '用户名',
          prop: 'username',
          tip: '这是信息提示',
          span: 8,
          maxlength: 3,
          suffixIcon: 'el-icon-tickets',
          prefixIcon: 'el-icon-tickets',
          minlength: 2,
          mock: {
            type: 'name',
            en: true
          },
          rules: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          change: ({value, column}) => {
            // this.obj.address = value
            this.$message.success('address change')
          },
          click: ({value, column}) => {
            this.$message.success('click')
          }
        },
        {
          label: '姓名',
          prop: 'name',
          mock: {
            type: 'name'
          },
          span: 8
        },
        {
          label: '类型',
          prop: 'type',
          type: 'select',
          dicData: 'VAILD',
          span: 6,
          mock: {
            type: 'dic'
          }
        },
        {
          label: '权限',
          prop: 'grade',
          span: 6,
          type: 'checkbox',
          dicData: 'VAILD',
          mock: {
            type: 'dic'
          }
        },
        {
          label: '开关',
          prop: 'switch',
          span: 6,
          type: 'switch',
          dicData: 'SEX',
          mock: {
            type: 'dic'
          },
          hide: true,
          row: true
        },
        {
          label: '性别',
          prop: 'sex',
          span: 6,
          type: 'radio',
          dicData: 'SEX',
          mock: {
            type: 'dic'
          },
          valueDefault: 0,
          change: ({value, column}) => {
            this.$message.success('change')
          }
        },
        {
          label: '数字',
          prop: 'number',
          type: 'number',
          span: 6,
          precision: 2,
          mock: {
            type: 'number',
            max: 1,
            min: 2,
            precision: 2
          },
          valueDefault: 3,
          minRows: 0,
          maxRows: 3,
          row: true
        },
        {
          label: '网站',
          span: 12,
          prop: 'url',
          prepend: 'http://',
          mock: {
            type: 'url',
            header: false
          },
          append: 'com',
          row: true
        },
        {
          label: '日期',
          prop: 'date',
          type: 'date',
          span: 8,
          format: 'yyyy-MM-dd',
          valueFormat: 'yyyy-MM-dd',
          mock: {
            type: 'datetime',
            format: 'yyyy-MM-dd'
          }
        },
        {
          label: '日期时间',
          prop: 'datetime',
          type: 'datetime',
          span: 8,
          format: 'yyyy-MM-dd hh:mm:ss',
          valueFormat: 'yyyy-MM-dd hh:mm:ss',
          mock: {
            type: 'datetime',
            format: 'yyyy-MM-dd hh:mm:ss',
            now: true
          }
        },
        {
          label: '时间',
          prop: 'time',
          type: 'time',
          span: 8,
          format: 'hh:mm:ss',
          valueFormat: 'hh:mm:ss',
          mock: {
            type: 'datetime',
            format: 'hh:mm:ss'
          }
        },
        {
          label: '地址',
          span: 24,
          prop: 'address',
          mock: {
            type: 'county'
          }
        }, {
          label: '建议',
          span: 24,
          prop: 'adit',
          mock: {
            type: 'word',
            min: 10,
            max: 30
          }
        }, {
          label: '手机号',
          mock: {
            type: 'phone'
          },
          span: 12,
          prop: 'phone',
          type: 'phone'
        }]
      }
    }
  },
  created () {
    this.obj.username = 'smallwei'
    this.obj.switch = 0
    this.obj.phone = '17547400800'
  },
  methods: {
    emptytChange () {
      this.$message.success('清空方法回调')
    },
    submit () {
      this.$message.success('当前数据' + JSON.stringify(this.obj))
    },
    tip () {
      this.$message.success('自定义按钮')
    }
  }
}
</script>
