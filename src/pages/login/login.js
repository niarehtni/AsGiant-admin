export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      imgsrc: 'http://localhost/demo/00.vipadmin/sever/think-admin/public/admin/AuthCode/ImageCode',
      username: '',
      password: '',
      activeName: 'first',
      yzm: '',
      enterPssword: ''
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
      // if () {
      //     enterPssword
      // }
      console.log('====================================')
      console.log(this.activeName)
      console.log('====================================')
    //   console.log(tab)
    }
  }
}
