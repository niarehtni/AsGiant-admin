import * as sysJson from '../sysJson'
import * as dataAcquisition from '../dataAcquisition'

// 获取新闻列表数据
function finddatabase (params, getdata, bugerr) {
  dataAcquisition.databaseList(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function newTable (params, getdata, bugerr) {
  dataAcquisition.newTableOperation(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function updateTable (params, getdata, bugerr) {
  dataAcquisition.updateTableOperation(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function deleTable (params, getdata, bugerr) {
  dataAcquisition.deleTableOperation(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function programList (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.programClassid
  dataAcquisition.checkField(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function roleList (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.roleClassid
  dataAcquisition.checkField(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function roleTitleaddInfos (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.role_dictionaryClassid
  dataAcquisition.addInfos(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function deleRole (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.role_dictionaryClassid
  dataAcquisition.deleInfos(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function updateRole (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.role_dictionaryClassid
  dataAcquisition.updateInfos(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

export {
  finddatabase,
  newTable,
  updateTable,
  deleTable,
  programList,
  roleList,
  roleTitleaddInfos,
  deleRole,
  updateRole
}
