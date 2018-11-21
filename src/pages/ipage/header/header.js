export default {
  name: 'Vheader',
  props: {
    user: {
    }
  },
  data () {
    return {

    }
  },
  methods: {
    logout () {
      this.clearAllCookie()
      this.$router.push({path: '/'})
    },
    clearAllCookie () {
      /* eslint-disable */
      var keys = document.cookie.match(/[^ =;]+(?=\=)/g)
      if (keys) {
        for (var i = keys.length; i--;) { document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString() }
      }
    }
  }
}