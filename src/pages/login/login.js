export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      imgsrc: 'http://localhost/demo/00.vipadmin/sever/think-admin/public/admin/AuthCode/ImageCode',
      username: '',
      password: '',
      activeName: 'emailLogin',
      yzm: '',
      enterUser: '请输入邮箱'
    }
  },
  created () {
  },
  mounted () {},
  computed: {
    // ...mapGetters(["website"])
  },
  props: [],
  methods: {
    reimg () {
      var img = this.$refs.img
      img.src = 'http://localhost/demo/00.vipadmin/sever/think-admin/public/admin/AuthCode/ImageCode'
    },
    login () {
      this.$router.push({path: '/ipage'})
      console.log('====================================')
      console.log(this.username)
      console.log(this.password)
      console.log('====================================')
    },
    handleClick (tab, event) {
      let enUser = {
        emailLogin: '邮箱',
        userLogin: '用户',
        phoneLogin: '手机'
      }
      this.enterUser = `请输入${enUser[this.activeName]}`
    //   console.log(tab)
    }
  }
}
