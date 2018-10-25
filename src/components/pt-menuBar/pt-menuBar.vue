<template>
  <div class="pt-menuBar">
    <div class="box">
        <span class="title" v-for="(item,key) in menubar" :key='key' :style="{color:item.color}" @click="jump(item.url)">
          <img :src="item.img" alt="" srcset="" width="50px">
          <span style="font-size: 13px;"> {{item.title}}</span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ptMenuBar',
  props: {
    menubar: Array
  },
  methods: {
    // , query: { id: id }
    jump: function (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style>@import "./pt-menuBar.less";</style>
