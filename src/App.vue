<template>
  <div id="app">
    <!-- <img src="./common/images/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,ul{
  margin: 0;
  padding: 0;
}
ul {list-style:none;}
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
