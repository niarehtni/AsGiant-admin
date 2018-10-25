// GET
// 参数 - URL上
// 返回 - String
// import Vue from 'vue'

import axios from 'axios'
// Vue.prototype.$http = axios
function dataLinkGetJson (url, callback, err) {
  var Authorization = sessionStorage.getItem('Authorization')
  axios({
    method: 'get',
    url: url,
    headers: {
      'Authorization': Authorization
    },
    data: {}
  }).then(function (res) {
    callback(res)
  }).catch(function (err) {
    console.log(err)
  })
}

// POST
// 参数 - URL上
// 返回 - String
function dataLinkPostJson (url, params, callback, err) {
  var Authorization = sessionStorage.getItem('Authorization')
  axios({
    method: 'post',
    url: url,
    headers: {
      'Authorization': Authorization
    },
    data: params
  }).then(function (res) {
    callback(res)
  }).catch(function (err) {
    console.log(err)
  })
}
export {
  dataLinkPostJson,
  dataLinkGetJson
}
