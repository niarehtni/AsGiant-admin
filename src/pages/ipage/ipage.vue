<template>
  <el-row class="container" style="height: 100%">
    <Vheader :user="user" @sendiptVal='setColumn'></Vheader>
      <el-row>
        <el-col :xs=0 :sm=3 :lg=4>
          <el-menu class="el-menu-vertical-demo" :collapse="isCollapse"  background-color="#20222A" text-color="#fff" active-text-color="#009688" :default-active="$route.path" light router>
            <template v-for="(item,index) in list" v-if="!item.hidden" v-bind="index">
              <el-menu-item :index="item.path" :key="index"><i class="fa" :class="item.class"></i><span slot="title">{{item.name}}</span></el-menu-item>
            </template>
          </el-menu>
        </el-col>

        <el-col :xs=2 :sm=0 :lg="0">
          <el-menu class="el-menu-vertical-demo" :collapse="isCollapseMin"  background-color="#20222A" text-color="#fff" active-text-color="#009688" :default-active="$route.path" light router>
            <template v-for="(item,index) in list" v-if="!item.hidden" v-bind="index">
              <el-menu-item :index="item.path" :key="index"><i class="fa" :class="item.class"></i><span slot="title">{{item.name}}</span></el-menu-item>
            </template>
          </el-menu>
        </el-col>

        <section class="contentCon">
          <el-col :span="21" :offset="3" class="content-wrapper">
            <transition>
              <router-view></router-view>
            </transition>
          </el-col>
        </section>
      </el-row>

  </el-row>
</template>

<script src='./ipage.js'></script>
<style src='./ipage.less'></style>
