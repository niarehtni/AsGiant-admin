import Vheader from '../header/header.vue'
export default {
  name: 'ipage',
  components: {
    Vheader
  },
  data () {
    return {
      user: {
        name: '某某',
        role: '超级管理员'
      },
      list: [],
      isCollapse: false,
      isCollapseMin: true
    }
  },
  created () {
    this.list = this.$router.options.routes[2].children
    this.$router.push({
      path: `${this.list[0].path}`
    })
  },
  methods: {
    setColumn (num) {
      this.$nextTick(() => {
        this.list = this.$router.options.routes[num + 2].children
        this.$router.push({
          path: `${this.list[0].path}`
        })
      })
    }

  }
}
