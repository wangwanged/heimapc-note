<template>
  <div>
    <h1>插槽的后备内容</h1>
    <!-- 如果 标签内部什么都不写 就 表示不填坑 -->
    <child></child>
    <child></child>
    <child></child>
    <child></child>
    <child></child>
    <child></child>
    <child></child>

    <child>
      <span style="color: red; font-weight:bold">林志玲</span>
      <img
        style="width:100px;height:100px;border-radius:50%"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582882825218&di=c9a9a7424c03111c959243be7d7aaba1&imgtype=0&src=http%3A%2F%2Fp3.ifengimg.com%2Fhaina%2F2017_16%2F5a5329229979231_w600_h400.jpg"
      />
    </child>
    <!-- 任务 -->
    <task></task>
    <task>
      <!-- 插槽内容 传了内容 就会覆盖 后备内容 -->
      <button>注册</button>
    </task>
  </div>
</template>

<script>
import child from "./child";
import task from "./task";
export default {
  components: {
    child,
    task
  }
};
</script>

<style>
</style>