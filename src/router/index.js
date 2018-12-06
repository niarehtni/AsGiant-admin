import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 懒加载
const routes = [
  {
    path: '/',
    name: '登录',
    component: () =>
            import('@/pages/system/login/login.vue'),
    hidden: true
  },
  {
    path: '/ipage',
    name: 'ipage',
    component: () =>
            import('@/pages/system/ipage/ipage.vue'),
    hidden: true
  },
  {
    path: '/demo',
    name: '模板',
    component: () =>
            import('@/pages/system/ipage/ipage.vue'),
    iconCls: 'fa fa-clone',
    children: [{
      path: '/avue',
      name: '表格',
      component: () =>
                  import('@/pages/demo/table/table.vue')
    }, {
      path: '/form',
      name: '表单',
      component: () =>
                import('@/pages/demo/form/form.vue')
    },
    {
      path: '/quill-editor',
      name: '富文本',
      component: () =>
                import('@/pages/demo/quill-editor/quill-editor.vue')
    },
    {
      path: '/fileTable',
      name: '上传图片',
      component: () =>
                import('@/pages/demo/fileTable/fileTable')
    }]
  },
  {
    path: '/manage',
    name: '管理员',
    component: () =>
            import('@/pages/system/ipage/ipage.vue'),
    iconCls: 'fa fa-users',
    children: [
      {
        path: '/database',
        component: () =>
                import('@/pages/manage/database/database.vue'),
        name: '数据库'
      }, {
        path: '/tableField',
        component: () =>
          import('@/pages/manage/tableField/tableField.vue'),
        name: '字段管理',
        hidden: true
      },
      {
        path: '/usermanage',
        component: () =>
                import('@/pages/manage/usermanage/index.vue'),
        name: '用户管理'
      },
      {
        path: '/role',
        component: () =>
                import('@/pages/manage/role/role.vue'),
        name: '角色管理'
      }
    ]
  }]

// 实例化
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  if (to.name) { // 判断是否有标题
    document.title = to.name
  }
  next() // 执行进入路由，如果不写就不会进入目标页
})

export default router
