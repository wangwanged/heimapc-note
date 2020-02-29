<template>
  <div id="app">
    <!-- 视图容器  必不可少 -->
    <router-link class="menu" to="/defaultSlot">默认插槽</router-link>
    <router-link class="menu" to="/bakSlot">后备内容</router-link>
    <router-link class="menu" to="/nameSlot">具名插槽</router-link>
    <router-link class="menu" to="/scopeSlot">作用域插槽</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {
  font-size: 20px;
  margin: 10px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  padding: 0 20px;
  background-color: coral;
  color: #fff;
  text-align: center;
  text-decoration: none;
}
.router-link-active {
  color: red;
}
</style>
