import * as dataLink from './dataLink'
import * as sysJson from './sysJson'

// let findFrontInforListInterface = sysJson.address + 'admin/loanmgmt/v1/getLoanByFirmId' // 前端列表接口地址-例子
let CheckTableInforListInterface = sysJson.address.url + 'admin/Column/CheckTable' // 查询列表接口地址
let loginEmailInterface = sysJson.address.url + 'admin/People/loginEmail' // 登录接口
let databaseListInterface = sysJson.address.url + 'admin/Column/CheckTableList' // 查询所有接口
let newTableInterface = sysJson.address.url + 'admin/Column/newTable' // 新建数据库
let updateTableInterface = sysJson.address.url + 'admin/Column/updateTable' // 修改数据库
let deleTableInterface = sysJson.address.url + 'admin/Column/deleTable' // 修改数据库
let checkFieldInterface = sysJson.address.url + 'admin/Program/checkField' // 通过字段查询
let addInfosInterface = sysJson.address.url + 'admin/Program/addInfos' // 增加信息接口
let deleInfosInterface = sysJson.address.url + 'admin/Program/deleInfos' // 增加信息接口
let updateInfosInterface = sysJson.address.url + 'admin/Program/updateInfos' // 更新信息接口

// 获取前端列表-例子
// function findFrontInforList (params, callback, err) {
//   dataLink.dataLinkPostJson(findFrontInforListInterface, params, callback, err)
// }
// 获取人员列表
function findUserList (params, callback, err) {
  dataLink.dataLinkPostJson(CheckTableInforListInterface, params, callback, err)
}

// 通过邮箱登录
function loginEmailList (params, callback, err) {
  dataLink.dataLinkPostJson(loginEmailInterface, params, callback, err)
}

// 查询数据库列表
function databaseList (params, callback, err) {
  dataLink.dataLinkPostJson(databaseListInterface, params, callback, err)
}

// 新建数据库
function newTableOperation (params, callback, err) {
  dataLink.dataLinkPostJson(newTableInterface, params, callback, err)
}

// 修改数据库
function updateTableOperation (params, callback, err) {
  dataLink.dataLinkPostJson(updateTableInterface, params, callback, err)
}

// 修改数据库
function deleTableOperation (params, callback, err) {
  dataLink.dataLinkPostJson(deleTableInterface, params, callback, err)
}

function checkField (params, callback, err) {
  dataLink.dataLinkPostJson(checkFieldInterface, params, callback, err)
}

function addInfos (params, callback, err) {
  dataLink.dataLinkPostJson(addInfosInterface, params, callback, err)
}

function deleInfos (params, callback, err) {
  dataLink.dataLinkPostJson(deleInfosInterface, params, callback, err)
}

function updateInfos (params, callback, err) {
  dataLink.dataLinkPostJson(updateInfosInterface, params, callback, err)
}

export {
  // findFrontInforList,
  findUserList,
  loginEmailList,
  databaseList,
  newTableOperation,
  updateTableOperation,
  deleTableOperation,
  checkField,
  addInfos,
  deleInfos,
  updateInfos
}
