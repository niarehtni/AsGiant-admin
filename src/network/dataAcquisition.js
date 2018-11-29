import * as dataLink from './dataLink'
import * as dataUrl from './dataUrl'

let Column = {
  // 查询所有表接口
  CheckTableList: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.ColumnInterface.CheckTableList, params, callback, err)
  },
  // 查询表内容的接口
  CheckTable: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.ColumnInterface.CheckTable, params, callback, err)
  }
}

let DataCenter = {
  // 新建数据库
  newTable: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.DataCenterInterface.newTable, params, callback, err)
  },
  // 修改数据库
  deleTable: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.DataCenterInterface.deleTable, params, callback, err)
  },
  // 修改数据库
  updateTable: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.DataCenterInterface.updateTable, params, callback, err)
  },
  // 增加字段接口
  addTableField: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.DataCenterInterface.addTableField, params, callback, err)
  },
  // 删除字段接口
  deleTableField: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.DataCenterInterface.deleTableField, params, callback, err)
  }
}

let Info = {
  // 通过字段查询信息
  checkField: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.InfoInterface.checkField, params, callback, err)
  },
  // 通过表和字段，给字段添加信息
  addInfos: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.InfoInterface.addInfos, params, callback, err)
  },
  // 删除数据
  deleInfos: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.InfoInterface.deleInfos, params, callback, err)
  },
  // 更新数据
  updateInfos: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.InfoInterface.updateInfos, params, callback, err)
  }
}

let People = {
  // 电话/邮箱  注册接口
  registered: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.PeopleInterface.updateInfos, params, callback, err)
  },
  // 用户名注册接口
  registeredUser: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.PeopleInterface.registeredUser, params, callback, err)
  },
  // 手机号登录
  loginTel: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.PeopleInterface.loginTel, params, callback, err)
  },
  // 邮箱登录
  loginEmail: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.PeopleInterface.loginEmail, params, callback, err)
  },
  // 用户登录
  loginUserName: (params, callback, err) => {
    dataLink.dataLinkPostJson(dataUrl.PeopleInterface.loginUserName, params, callback, err)
  }
}

export {
  Column,
  People,
  DataCenter,
  Info
}
