import * as sysJson from '../sysJson'
import * as dataAcquisition from '../dataAcquisition'

// 获取人员列表数据
function findUser (params, getdata, err) {
  params.classid = sysJson.sysClassid.userClassid
  dataAcquisition.Column.CheckTable(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

// 查询管理列表数据
function findRoleList (params, getdata, err) {
  params.classid = sysJson.sysClassid.role_dictionaryClassid
  dataAcquisition.Column.CheckTable(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

function userList (params, getdata, bugerr) {
  params.classid = sysJson.sysClassid.userClassid
  dataAcquisition.Column.CheckTable(params, (res) => {
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

export {
  findUser,
  findRoleList,
  userList
}
