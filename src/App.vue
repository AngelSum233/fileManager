<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  padding: 0%;
  margin: 0%;
}
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
