import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: () =>
        import('@/pages/login/login.vue'),
      hidden: true
    },
    {
      path: '/ipage',
      name: 'ipage',
      component: () =>
        import('@/pages/ipage/ipage.vue'),
      hidden: true
    },
    {
      path: '/demo',
      name: '模板',
      component: () =>
        import('@/pages/ipage/ipage.vue'),
      iconCls: 'fa fa-users',
      children: [{
        path: '/avue',
        name: '表格',
        component: () =>
            import('@/pages/demo/avue/avue.vue')
      },
      {
        path: '/quill-editor',
        name: '富文本',
        component: () =>
          import('@/pages/demo/quill-editor/quill-editor.vue')
      }
      // ,
      // {
      //   path: '/echarts',
      //   name: '图表',
      //   component: () =>
      //       import('@/pages/demo/echarts/index.vue')
      // }
      // , {
      //   path: '/fileTable',
      //   component: () =>
      //       import('@/pages/fileTable/table.vue'),
      //   name: '栏目管理'
      // }
      // ,
      // {
      //   path: '/editor',
      //   name: 'editor',
      //   component: () =>
      //       import('@/pages/editor/editor.vue')
      // }
      ]
    },
    {
      path: '/page',
      component: () =>
        import('@/pages/ipage/ipage.vue'),
      name: '信息管理',
      iconCls: 'fa fa-users',
      children: [
        {
          path: '/home',
          component: () =>
            import('@/pages/home/home.vue'),
          name: '首页',
          iconCls: 'fa fa-book'
        },
        {
          path: '/articleTable',
          component: () =>
          import('@/pages/articleTable/table.vue'),
          name: '文章管理',
          iconCls: 'fa fa-book'
        }, {
          path: '/fileTable',
          component: () =>
          import('@/pages/fileTable/table.vue'),
          name: '栏目管理',
          iconCls: 'fa fa-file-text-o'
        },
        {
          path: '/editor',
          name: 'editor',
          component: () =>
          import('@/pages/editor/editor.vue'),
          hidden: true
        }]
    }
  ]
})

router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  if (to.name) { // 判断是否有标题
    document.title = to.name
  }
  next() // 执行进入路由，如果不写就不会进入目标页
})

export default router
