<template>
    <el-row>
      <el-col :span="21">
        <header>
          <ul class="header-operations">
            <li>
              <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
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

    </el-row>
</template>

<script src='./header.js'></script>
<style src='./header.less'></style>
