<template>
  <div>
    <div id="box"></div>
    <div class="cent-box">
      <div class="cent-box-header">
        <h1 class="main-title">AsGiant</h1>
        <h2 class="sub-title">站在巨人的肩膀上  -myq</h2>
      </div>

      <div class="cont-main clearfix">
        <div class="index-tab">
          <el-tabs  v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="邮箱登录" name="emailLogin"></el-tab-pane>
            <el-tab-pane label="用户登录" name="userLogin"></el-tab-pane>
            <el-tab-pane label="手机登录" name="phoneLogin"></el-tab-pane>
          </el-tabs>
        </div>

          <div class="login form">
            <div class="group">
              <div class="group-ipt email">
                <input type="text" name="email" id="email" class="ipt" :placeholder="enterUser" v-model="loginForm.username" required>
              </div>
              <div class="group-ipt password">
                <input type="password" name="password" id="password" class="ipt" placeholder="请输入密码" v-model="loginForm.password" required>
              </div>
              <div class="group-ipt verify">
                <input type="text" name="verify" id="verify" class="ipt" placeholder="输入验证码" v-model="loginForm.code" required>
                <img class="imgcode" ref="img" :src="imgsrc" alt="验证码" @click="reimg()"/>
              </div>
            </div>
          </div>

        <div class="button">
          <button type="submit" class="login-btn register-btn" id="button" @click="login">登录</button>
        </div>

      </div>
    </div>

    <div class="footer">
      <!-- <p>Credan - Thousands Find</p> -->
      <p>Designed By AsGiant 2018</p>
    </div>
  </div>
</template>

<script src='./login.js'></script>
<style src='./login.less'></style>
