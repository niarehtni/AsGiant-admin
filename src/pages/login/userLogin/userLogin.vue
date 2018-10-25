<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入邮箱">
        <i slot="prefix" class="icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
        <i slot="prefix" class="icon-mima"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-row :span="24">
        <el-col :span="14">
          <el-input size="small" @keyup.enter.native="handleLogin" :maxlength="code.len" v-model="loginForm.code" auto-complete="off" placeholder="请输入验证码">
            <i slot="prefix" class="icon-yanzhengma"></i>
          </el-input>
        </el-col>
        <el-col :span="10">
          <div class="login-code">
            <!-- <span class="login-code-img" @click="refreshCode" v-if="code.type == 'text'">{{code.value}}</span> -->
            <!-- <img :src="code.src" class="login-code-img" @click="refreshCode" v-else/> -->
            <img src="http://localhost/demo/00.vipadmin/sever/think-admin/public/admin/AuthCode/ImageCode" class="login-code-img" @click="refreshCode" id="img"/>

            <!-- <i class="icon-shuaxin login-code-icon" @click="refreshCode"></i> -->
          </div>
        </el-col>
      </el-row>

    </el-form-item>
    <el-checkbox v-model="checked">记住账号</el-checkbox>
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin('loginForm')" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import {loginEmail} from '@/network/model/loginLogic'
export default {
  name: 'userlogin',
  data () {
    const validateUsername = (rule, value, callback) => {
      var reg = new RegExp('^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$')
      // if (!isvalidUsername(value)) {
      if (!reg.test(value)) {
        callback(new Error('请输入正确的邮箱名'))
      } else {
        callback()
      }
    }
    const validateCode = (rule, value, callback) => {
      // if (this.code.value != value) {
      //   this.loginForm.code = "";
      //   this.refreshCode();
      if (value.length < 4) {
        // this.refreshCode();
        callback(new Error('请输入正确的验证码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '954663633@qq.com',
        password: '123456',
        code: '',
        redomStr: ''
      },
      checked: false,
      code: {
        src: '',
        value: '',
        len: 4,
        type: 'text'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '验证码长度为4位', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validateCode }
        ]
      },
      passwordType: 'password'
    }
  },
  created () {
    this.refreshCode()
  },
  mounted () {},
  computed: {
    // ...mapGetters(['tagWel'])
  },
  props: [],
  methods: {
    refreshCode () {
      document.getElementById('img').src = 'http://localhost/demo/00.vipadmin/sever/think-admin/public/admin/AuthCode/ImageCode'
      // this.loginForm.redomStr = randomLenNum(this.code.len, true);
      // this.code.type == "text"
      //   ? (this.code.value = randomLenNum(this.code.len))
      //   : (this.code.src = `${this.codeUrl}/${this.loginForm.redomStr}`);
      // this.loginForm.code = this.code.value;
    },
    showPassword () {
      this.passwordType === ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    handleLogin (loginForm) {
      this.$refs.loginForm.validate(valid => {
        this.$router.push({path: '/ipage'})
      //   if (valid) {
      //     // 登录
      //     let data = {
      //       'code': this.loginForm.code,
      //       'e_mail': this.loginForm.username,
      //       'password': this.loginForm.password
      //     }
      //     loginEmail(data, (res) => {
      //       if (res.flag === 0) {
      //         this.$message({
      //           message: res.msg,
      //           type: 'error'
      //         })
      //         this.refreshCode()
      //       }
      //       if (res.flag === 1) {
      //         sessionStorage.setItem('Authorization', res.msg)
      //         this.$store.dispatch('LoginByUsername', this.loginForm).then(res => {
      //           this.$router.push({ path: this.tagWel.value })
      //         })
      //       }
      //     })
      //   }
      })
    }
  }
}
</script>
<style>@import "./userLogin.less";</style>
