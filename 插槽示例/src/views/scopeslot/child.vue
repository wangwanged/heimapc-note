<template>
  <div>
    <!-- 定义插槽内容 -->
    我的名字是:
    <!-- 将子组件 child 中的 李四 给了 插槽(坑) 的标签 -->
    <slot :name1="name"></slot>
    <!-- 组件内部的内容 第三方组件不会让我们修改 => 源代码  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "李四"
    };
  }
};
</script>

<style>
</style>