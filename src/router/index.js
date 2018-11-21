import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: () =>
        import('@/pages/login/login')
    },
    {
      path: '/ipage',
      name: 'ipage',
      component: () =>
        import('@/pages/ipage/ipage')
    },
    {
      path: '/page',
      component: () =>
        import('@/pages/ipage/ipage'),
      name: '信息管理',
      class: 'fa-users',
      children: [
        {
          path: '/home',
          component: () =>
            import('@/pages/home/home'),
          name: '首页',
          class: 'fa-book'
        },
        {
          path: '/articleTable',
          component: () =>
          import('@/pages/articleTable/table'),
          name: '文章管理',
          class: 'fa-book'
        }, {
          path: '/fileTable',
          component: () =>
          import('@/pages/fileTable/table'),
          name: '栏目管理',
          class: 'fa-file-text-o'
        },
        {
          path: '/editor',
          name: 'editor',
          component: () =>
          import('@/pages/editor/editor'),
          hidden: true
        } ]
    },
    {
      path: '/page',
      component: () =>
        import('@/pages/ipage/ipage'),
      class: 'fa-users',
      name: '栏目管理',
      children: [
        {
          path: '/articleTable1',
          component: () =>
            import('@/pages/articleTable/table'),
          name: '文章管理1',
          class: 'fa-book'
        }, {
          path: '/fileTable1',
          component: () =>
            import('@/pages/fileTable/table'),
          name: '栏目管理1',
          class: 'fa-file-text-o'
        },
        {
          path: '/editor1',
          name: 'editor1',
          component: () =>
            import('@/pages/editor/editor'),
          hidden: true
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
//   if (to.name) { // 判断是否有标题
//     document.title = to.name
//   }
//   next() // 执行进入路由，如果不写就不会进入目标页
// })

export default router
