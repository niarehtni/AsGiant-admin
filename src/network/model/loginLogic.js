// import * as sysJson from '../sysJson'
import * as dataAcquisition from '../dataAcquisition'

function loginEmail (params, getdata, bugerr) {
  console.log('准备请求')
  dataAcquisition.People.loginEmail(params, (res) => {
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
