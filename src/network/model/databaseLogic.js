import * as sysJson from '../sysJson'
import * as dataAcquisition from '../dataAcquisition'

function findDatabase (params, getdata, bugerr) {
  dataAcquisition.Column.CheckTableList(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function newTable (params, getdata, bugerr) {
  dataAcquisition.DataCenter.newTable(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function updateTable (params, getdata, bugerr) {
  dataAcquisition.DataCenter.updateTable(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function deleTable (params, getdata, bugerr) {
  dataAcquisition.DataCenter.deleTableField(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function programList (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.programClassid
  dataAcquisition.Info.checkField(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function roleList (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.roleClassid
  dataAcquisition.Info.checkField(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function roleTitleaddInfos (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.role_dictionaryClassid
  dataAcquisition.Info.addInfos(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function deleRole (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.role_dictionaryClassid
  dataAcquisition.Info.deleInfos(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function updateRole (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.role_dictionaryClassid
  dataAcquisition.Info.updateInfos(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

export {
  findDatabase,
  newTable,
  updateTable,
  deleTable,
  programList,
  roleList,
  roleTitleaddInfos,
  deleRole,
  updateRole
}
