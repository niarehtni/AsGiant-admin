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
      message: '请输入排序',
      trigger: 'blur'
    }],
    hide: true
  },
  {
    label: '字段',
    prop: 'field',
    span: 20,
    placeholder: '请输入字段名',
    rules: [{
      required: true,
      message: '数据库名不能为空',
      trigger: 'blur'
    }]
  },
  {
    label: '字段类型',
    prop: 'fieldType',
    span: 20,
    type: 'select',
    dicData: [{
      label: 'varchar(字符型0-255字节)',
      value: 'varchar'
    }, {
      label: 'int(大数值型)',
      value: 'int'
    }, {
      label: 'char(定长字符型0-255字节)',
      value: 'char'
    }, {
      label: 'text(小型字符型)',
      value: 'text'
    }, {
      label: 'mediumtext(中型字符型)',
      value: 'mediumtext'
    }, {
      label: 'longtext(大型字符型)',
      value: 'longtext'
    }, {
      label: 'tinyint(小数值型)',
      value: 'tinyint'
    }, {
      label: 'smallint(中数值型)',
      value: 'smallint'
    }, {
      label: 'bigint(超大数值型)',
      value: 'bigint'
    }, {
      label: 'float(数值浮点型)',
      value: 'float'
    }, {
      label: 'date(日期型)',
      value: 'date'
    }, {
      label: 'datetime(日期时间型)',
      value: 'datetime'
    }],
    rules: [{
      required: true,
      message: '请选择数据类型',
      trigger: 'blur'
    }]
  },
  {
    label: '字段大小',
    prop: 'fieldSize',
    span: 20,
    rules: [{
      required: true,
      message: '请输入字段大小',
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
