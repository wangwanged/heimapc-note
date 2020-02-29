<template>
  <div>
    <h1>插槽后备内容-任务</h1>
    <p>
      用户名:
      <input type="text" />
    </p>
    <p>
      密码:
      <input type="text" />
    </p>
    <!-- 定义插槽  把登录放到坑里 -->
    <slot>
      <button>登录</button>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>