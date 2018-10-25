<template>
  <div class="pt-banner">
    <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" :style="{height:banheight+'px'}" dots-class="custom-bottom" dots-position="center"></swiper>
  </div>
</template>

<script>
import { Swiper } from 'vux'

export default {
  name: 'pt-banner',
  components: {
    Swiper
  },
  props: {
    banner: Array,
    banheight: String
  },
  data () {
    return {
      demo03_list: []
    }
  },
  created () {
    let imgList = this.banner

    this.demo03_list = imgList.map((item, index) => ({
      url: item.url,
      img: item.img,
      fallbackImg: item.fallbackImg,
      title: `${item.title}`
    }))
  },
  methods: {}
}
</script>
<style>
@import "./pt-banner.less";
</style>
