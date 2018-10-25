// import * as sysJson from '../sysJson'
import * as dataAcquisition from '../dataAcquisition'

// 获取新闻列表数据
// function userList (params, getdata, bugerr) {
//   console.log('准备请求')
//   // params.classId = sysJson.sysClassid.userClassid
//   console.log('获取栏目id:  ' + params.classId)
//   dataAcquisition.findFrontInforList(params, (res) => {
//     if (res.status !== 200) {
//       getdata('获取数据失败')
//     };
//     let Jsondata = res.data
//     getdata(Jsondata)
//   }, (bugerr) => {
//     console.log('获取数据失败')
//   })
// }

function loginEmail (params, getdata, bugerr) {
  console.log('准备请求')
  dataAcquisition.loginEmailList(params, (res) => {
    if (res.status !== 200) {
      getdata('获取数据失败')
    };
    let Jsondata = res.data
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

export {
  // userList,
  loginEmail
}
