<template>
  <el-row class="container" style="height: 100%">
    <Vheader :user="user"></Vheader>
    <el-col :span="24" class="main">
      <el-row>
        <el-menu background-color="#20222A" text-color="#fff" active-text-color="#009688" :default-active="$route.path" class="mar-l el-menu-vertical-demo el-col el-col-3" light router>
          <template v-for="(item,index) in list" v-if="!item.hidden" v-bind="index">
            <el-menu-item :index="item.path" :key="index"><i class="fa" :class="item.class"></i>{{item.name}}</el-menu-item>
          </template>
        </el-menu>
        <section class="contentCon">
          <el-col :span="21" :offset="3" class="content-wrapper">
            <transition>
              <router-view></router-view>
            </transition>
          </el-col>
        </section>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
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
      list: []
    }
  },
  created () {
    this.list = this.$router.options.routes[2].children
    this.$router.push({path: '/userTable'})
    console.log('====================================')
    console.log(this.list)
    console.log('====================================')
  },
  methods: {

  }
}
</script>
<style>@import "./ipage.less";</style>
