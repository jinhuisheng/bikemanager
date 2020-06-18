<template>
  <div>
    <el-menu router mode="vertical" default-active="users" class="el-menu-vertical-demo">
      <el-menu-item index="/data/users">
        用户
      </el-menu-item>
      <el-menu-item index="/data/bikes">
        车辆
      </el-menu-item>
      <el-menu-item index="/data/rider">
        骑手
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "data"
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
