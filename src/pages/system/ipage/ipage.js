export default {
  data () {
    return {
      vheight: document.documentElement.offsetHeight - 60 || document.body.offsetHeight - 60,
      sysName: 'AsGiant-admin',
      collapsed: false,
      sysUserName: '',
      sysUserAvatar: require('./images/img.jpg'),
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      collapsedIcon: false
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleOpen () {
      // console.log('handleOpen')
    },
    handleClose () {
      // console.log('handleClose')
    },
    // 退出登录
    logout: function () {
      var _this = this
      this.$confirm('确认退出吗?', '提示', {
        // type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem('user')
          _this.$router.push('/')
        })
        .catch(() => {})
    },
    // 折叠导航栏
    collapse: function () {
      this.collapsed = !this.collapsed
    },
    showMenu (i, status) {
      this.$refs.menuCollapsed.getElementsByClassName(
        'submenu-hook-' + i
      )[0].style.display = status ? 'block' : 'none'
    }
  },
  mounted () {
    var windowWidth = document.body.clientWidth
    if (windowWidth >= 1000) {
      this.collapsed = false
      this.collapsedIcon = false
      console.log('============大屏==============')
    } else {
      this.collapsed = true
      this.collapsedIcon = true
      console.log('============小屏==============')
    }

    var user = sessionStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.sysUserName = user.name || ''
      this.sysUserAvatar = user.avatar || ''
    }
  }
}
