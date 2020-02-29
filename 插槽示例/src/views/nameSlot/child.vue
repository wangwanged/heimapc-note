<template>
  <div>
    <!-- 定义具名插槽 挖坑的时候 给 slot一个记号 name属性 -->
    <p>
      张永涛最爱的女演员:
      <slot name="women"></slot>
    </p>
    <p>
      赵紫含 最尊敬的男演员:
      <slot name="man"></slot>
    </p>
    <p>
      杨佳豪 最想见的女演员
      <!-- 没有记号的插槽 叫匿名插槽 -->
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>