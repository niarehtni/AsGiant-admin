import * as sysJson from '../sysJson'
import * as dataAcquisition from '../dataAcquisition'

// 获取新闻列表数据
function findNewsList (params, getdata, bugerr) {
  params.ll = sysJson.sysClassid.newsClassid
  dataAcquisition.findFrontInforList(params, (res) => {
    if (res.data.result.flag !== 1) {
      getdata('获取数据失败')
    };
    let Jsondata = res.data.infos
    getdata(Jsondata)
  }, (bugerr) => {
    console.log('获取数据失败')
  })
}

export {
  findNewsList
}
