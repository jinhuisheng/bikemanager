<template>
  <div id="app">
    <el-menu default-active="home" router class="el-menu-demo" mode="horizontal">
      <el-menu-item index="/home">主页</el-menu-item>
      <el-menu-item index="/data">管理</el-menu-item>
      <el-menu-item index="/status">统计</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
