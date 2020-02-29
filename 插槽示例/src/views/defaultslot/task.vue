<template>
  <div>
    <h1>匿名插槽的任务</h1>
    <!-- 插槽技术 -->
    <!-- 第一步 需要定义插槽的位置 挖坑 放置一个slot标签就是一个坑 -->
    <p>
      我来到
      <slot></slot>学习前端技术
    </p>
    <p>
      在
      <slot></slot>有很多可爱的同学
    </p>
    <p>
      希望离开
      <slot></slot>时我们能一起吃个饭
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>