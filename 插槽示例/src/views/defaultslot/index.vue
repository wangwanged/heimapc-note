<template>
  <div>
    <h1>默认插槽</h1>
    <child>
      <!-- 组件标签内部的内容就是插槽内容 也就是填坑内容 -->
      <img
        style="width:200px;height:200px;border-radius:50%"
        src="http://b-ssl.duitang.com/uploads/item/201510/24/20151024160112_uYtPB.jpeg"
        alt
      />
      <img
        style="width:200px;height:200px;border-radius:50%"
        src="http://pic4.zhimg.com/50/v2-841b01a622ea06ce2fcb99dccf626eb8_hd.jpg"
        alt
      />
    </child>
    <!-- 任务 -->
    <!-- 第二步 填坑 填坑的位置就是 组件标签内部 -->
    <task>
      <!-- 填坑的内容 -->
      <span style="color:red; font-weight:bold">黑马</span>
      <img
        style="background: #000;border-radius:10px"
        src="http://www.itheima.com/special/brandzly/images/logo.png"
        alt
      />
    </task>
  </div>
</template>

<script>
import child from "./child";
import task from "./task";
export default {
  //局部组件注册
  components: {
    child, // es6省略属性名的方式
    task
  }
};
</script>

<style>
</style>