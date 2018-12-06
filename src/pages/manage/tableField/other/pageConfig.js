let pageConfig = {
  page: false,
  menuAlign: 'center',
  border: true,
  index: true,
  column: [{
    label: '排序',
    prop: 'sort',
    span: 20,
    rules: [{
      required: true,
      message: '数据库中文名不能为空',
      trigger: 'blur'
    }],
    hide: true
  },
  {
    label: '字段',
    prop: 'field',
    span: 20,
    placeholder: '请输入数据库名,创建的表，格式:"[zmyq_a]"',
    rules: [{
      required: true,
      message: '数据库名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^.*zmyq_.*[a-z]$/,
      message: '数据库的名字必须是zmyq_开头,后面为小写字母,例子[zmyq_a]'
    }
    ]
  },
  {
    label: '字段类型',
    prop: 'fieldType',
    span: 20,
    rules: [{
      required: true,
      message: '数据库中文名不能为空',
      trigger: 'blur'
    }]
  },
  {
    label: '字段大小',
    prop: 'fieldSize',
    span: 20,
    rules: [{
      required: true,
      message: '数据库中文名不能为空',
      trigger: 'blur'
    }]
  },
  {
    label: '说明',
    prop: 'field_annotation',
    span: 20,
    rules: [{
      required: true,
      message: '数据库中文名不能为空',
      trigger: 'blur'
    }]
  }
  ]
}

export {
  pageConfig
}
