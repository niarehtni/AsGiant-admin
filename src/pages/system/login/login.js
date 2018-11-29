import * as loginLogic from '@/network/model/loginLogic'
import * as sysJson from '@/network/sysJson'
import { debug } from 'util'

export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      imgsrc: sysJson.address.url + 'admin/Code/ImageCode',
      loginForm: {
        username: '954663633@qq.com',
        password: '123456',
        code: ''
      },
      activeName: 'emailLogin',
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
      img.src = sysJson.address.url + 'admin/Code/ImageCode'
    },
    login () {
      let data = {
        'code': this.loginForm.code,
        'e_mail': this.loginForm.username,
        'password': this.loginForm.password
      }
      loginLogic.loginEmail(data, (res) => {
        if (res.flag === 0) {
          this.$message({
            message: res.msg,
            type: 'error'
          })
          this.refreshCode()
        }
        if (res.flag === 1) {
          sessionStorage.setItem('Authorization', res.msg)
          this.$router.push({path: '/ipage'})

          // this.$store.dispatch('LoginByUsername', this.loginForm).then(res => {
          //   this.$router.push({
          //     path: this.tagWel.value
          //   })
          // })
        }
      })
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
