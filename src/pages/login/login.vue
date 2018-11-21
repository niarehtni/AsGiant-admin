<template>
  <div>
    <div id="box"></div>
    <div class="cent-box">
      <div class="cent-box-header">
        <h1 class="main-title">千寻</h1>
        <h2 class="sub-title">生活热爱分享 - Thousands Find</h2>
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
                <input type="text" name="email" id="email" class="ipt"  v-model="username" placeholder="邮箱地址" required>
              </div>
              <div class="group-ipt password">
                <input type="password" name="password" id="password" class="ipt"  v-model="password" :placeholder="enterPssword" required>
              </div>
              <div class="group-ipt verify">
                <input type="text" name="verify" id="verify" class="ipt" placeholder="输入验证码" v-model="yzm" required>
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
      <p>千寻 - Thousands Find</p>
      <p>Designed By ZengRong & <a href="zrong.me">zrong.me</a> 2016</p>
    </div>
  </div>
</template>

<script src='./login.js'></script>
<style src='./login.less'></style>
