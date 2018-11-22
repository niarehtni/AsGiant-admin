exports.vue = function (pageName) {
  var tpl = `<template>
  <section>
    <el-card class="box-card ${pageName}">
      ${pageName}
    </el-card>
  </section>
</template>

<script>
export default {
  name: '${pageName}',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>
<style>@import "./${pageName}.less";</style>
`
  return tpl
}

exports.less = function (pageName) {
//   var tpl = `.${pageName}{

    
// }`
var tpl = ``
  return tpl
}

// exports.js = `import { utils } from 'libs';

// const page = {

//     data() {

//         return {

//         }
//     },

//     methods: {
        
//     }
// }

// `

// exports.mockData = `module.exports = {
    
    
// }
// `

// exports.pageNav = function (data) {
//   if (process.env.NODE_PLATFORM != 'app') return

//   var backIcon = typeof data.isHasBack === 'undefined' ? '<span class="back-icon" id="back-icon"></span>' : ''

//   var tpl = `<!-- 导航 -->
//     <div class="nav db">
//         <div class="left bm">
//             ${backIcon}
//         </div>
//         <div class="middle db1" id="nav-title">${data.title}</div>
//         <div class="right bm br">
          
//         </div>
//     </div>`

//   return tpl
// }

// exports.pageTabBar = function (data) {
//   let highlightFirst = data.highlightFirst ? 'selected' : ''
//   let highlightSecond = data.highlightSecond ? 'selected' : ''
//   let highlightThree = data.highlightThree ? 'selected' : ''

//   return `
//         <div class="global-tab-bar-wrap" style="display:none">
//             <div class="global-tab-bar db">
//                 <div class = "db1 bc bm fc home ${highlightFirst} tabbar one">
//                     <span class="icon one"></span> 
//                     <span class="one">首页</span>
//                 </div>

//                 <div class = "db1 bc bm fc order-icon ${highlightSecond} tabbar two">
//                     <span class="icon two"></span>
//                     <span class="two">订单</span>
//                 </div>

//                 <div class = "db1 bc bm my fc ${highlightThree} tabbar three">
//                     <span class="icon three"></span>
//                     <span class="three">我的</span>
//                 </div>

//             </div>
//         </div>
//     `
// }

// exports.demoIntro = "<div id='app-demo'>demo版</div>"
