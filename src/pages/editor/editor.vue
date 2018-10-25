<template>
  <div>
    <quill-editor
    v-model="content"
    :options="editorOption" style="height:400px">
    </quill-editor>
    <el-button style="margin-top: 55px;float: right;" type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script>
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
      }
    }
  },
  methods: {
    submit () {
      if (this.$route.query.goindex === 'true') {
        this.$router.push('/')
      } else {
        this.$router.back(-1)
      }
    }
  }
}
</script>
