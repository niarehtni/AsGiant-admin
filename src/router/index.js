import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
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
      children: [{
        path: '/userTable',
        name: '用户管理',
        component: () =>
          import('@/pages/userTable/table'),
        class: 'fa-users'
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
    }
  ]
})
