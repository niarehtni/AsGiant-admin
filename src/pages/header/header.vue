<template>
    <el-row>

      <el-col :span="21">
        <header>
          <ul class="header-operations">
            <li>
              <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                  <!-- <el-dropdown-item>查看</el-dropdown-item> -->
                  <!-- <el-dropdown-item>新增</el-dropdown-item> -->
                  <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span class="header-lang is-active">{{user.name}}</span>
              <span class="header-opacity">({{user.role}})</span>
            </li>
            <li></li>
          </ul>
        </header>
      </el-col>

      <el-col class="logo" :span="3"></el-col>

    </el-row>
</template>
<script>
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
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style>
  header {
    background:#fff;
    height: 50px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: 999;
    box-sizing: border-box;
    position: fixed;
    border-bottom: none;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  }
  .logo{
    background-color: rgb(32, 34, 42);
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: 999;
    box-sizing: border-box;
    position: fixed;
  }

  .header-logo {
    display: inline-block;
    vertical-align: middle;
  }
  .header-operations {
    display: inline-block;
    float: right;
    padding-right: 30px;
    height: 100%;
  }
  .header-operations li {
    color: #333;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 50px;
    cursor: pointer;
  }
  .header-operations li:first-child{
    cursor: default
  }
  .header-opacity{
    opacity: .7;
  }
  .header-operations:after, header:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
</style>
