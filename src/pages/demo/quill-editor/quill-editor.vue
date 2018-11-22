<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <quill-editor
    v-model="content"
    :options="editorOption" style="height:400px">
    </quill-editor>
    <el-button style="margin-top: 55px;float: right;" type="primary" @click="submit">提交</el-button>
    <div>{{content}}</div>
  </div>
</template>
<script>
// import * as articleLogic from '@/network/model/articleLogic'
export default {
  name: 'editor',
  data () {
    return {
      content: '',
      editorOption: {
        modules: {toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block']
        ]
        }
      },
      identifies: '',
      fullscreenLoading: false
    }
  },
  created () {
    this.identifies = this.$route.query.identifies
    this.getArticle()
  },
  methods: {
    getArticle () {
      // this.fullscreenLoading = true
      // let from = {
      //   infoJson: {'identifies': this.identifies},
      //   currentPage: 1,
      //   pageSize: 100
      // }
      // articleLogic.findArticeInfo(from, (res) => {
      //   if (res.flag === 1) {
      //     this.fullscreenLoading = false
      //     this.content = res.msg[0].content
      //     this.loading = false
      //   }
      // })
    },
    submit () {
      // this.fullscreenLoading = true
      // let from = {
      //   infoJson: { 'content': this.content },
      //   mainKey: 'identifies',
      //   mainVal: this.identifies
      // }
      // articleLogic.editorArticeInfo(from, (res) => {
      //   if (res.flag === 1) {
      //     this.fullscreenLoading = false
      //     this.$router.push('/articleTable')
      //   }
      // })
    }
  }
}
</script>
<style src='./quill-editor.less'></style>
