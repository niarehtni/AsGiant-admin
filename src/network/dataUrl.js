import * as sysJson from './sysJson'

let ColumnInterface = {
  // 查询所有表接口
  CheckTableList: sysJson.address.url + 'admin/Column/CheckTableList',
  // 查询表内容的接口
  CheckTable: sysJson.address.url + 'admin/Column/CheckTable'
}

let DataCenterInterface = {
  // 新建数据库
  newTable: sysJson.address.url + 'admin/DataCenter/newTable',
  // 修改数据库
  deleTable: sysJson.address.url + 'admin/DataCenter/deleTable',
  // 修改数据库
  updateTable: sysJson.address.url + 'admin/DataCenter/updateTable',
  // 增加字段接口
  addTableField: sysJson.address.url + 'admin/DataCenter/addTableField',
  // 删除字段接口
  deleTableField: sysJson.address.url + 'admin/DataCenter/deleTableField'
}

let InfoInterface = {
  // 通过字段查询信息
  checkField: sysJson.address.url + 'admin/Info/checkField',
  // 通过表和字段，给字段添加信息
  addInfos: sysJson.address.url + 'admin/Info/addInfos',
  // 删除数据
  deleInfos: sysJson.address.url + 'admin/Info/deleInfos',
  // 更新数据
  updateInfos: sysJson.address.url + 'admin/Info/updateInfos'
}

let PeopleInterface = {
  // 电话/邮箱  注册接口
  registered: sysJson.address.url + 'admin/People/registered',
  // 用户名注册接口
  registeredUser: sysJson.address.url + 'admin/People/registeredUser',
  // 手机号登录
  loginTel: sysJson.address.url + 'admin/People/loginTel',
  // 邮箱登录
  loginEmail: sysJson.address.url + 'admin/People/loginEmail', // 登录接口
  // 用户登录
  loginUserName: sysJson.address.url + 'admin/People/loginUserName', // 登录接口

  loginImg: sysJson.address.url + 'admin/Code/ImageCode'
}

export {
  ColumnInterface,
  DataCenterInterface,
  InfoInterface,
  PeopleInterface
}
