let pageConfig = {
  // align: 'center',
  menuAlign: 'center',
  border: true,
  index: true,
  column: [{
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
      message: '数据库的名字必须是zmyq_开头,后面为小写字母,例子[zmyq_a]'
    }
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

export {
  pageConfig
}
