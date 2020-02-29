<template>
  <div>
    <h1>作用域插槽</h1>
    <!-- 组件之间的数据是独立的啊  只能读取本组件的中的数据 -->
    <child>
      <!-- slot-scope就是作用域插槽 目的是接收子组件通过 slot标签传出的内容 
         slot-scope="变量"  变量名可以随便取 
      -->
      <span slot-scope="abc">
        <!-- 用slot-scope标签取完值之后 就可以在标签内部 获取该变量 -->
        {{ abc.name1 }}
      </span>
    </child>
    <!-- 任务 -->
    <task>
      <!-- 读取 子组件中的name -->
      <span slot="header" slot-scope="obj" style="font-size:48px;color:red">{{ obj.abc }}</span>
      <!-- 读取子组件中的 list -->
      <template slot="body" slot-scope="obj">
        <!-- 如何遍历  -->
        <img
          style="width:200px;height:200px;border-radius:50%"
          v-for="(item,index) in obj.list"
          :src="item"
          :key="index"
          alt
        />
      </template>
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
  },
  data() {
    return {
      name: "张三"
    };
  }
};
</script>

<style>
</style>