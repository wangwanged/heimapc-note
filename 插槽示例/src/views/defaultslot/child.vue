<template>
  <div>
    <slot></slot>Hello World
    <!-- 插槽 => 相当于在组件中挖了一个坑 -->
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>