<template>
  <!-- 
      1. 定义一个子组件 组件中的list数据为 ["北京","上海","天津"]  name数据为 Hello world
  2. 定义具名插槽 header 和 body 
  3. header插槽中读取 子组件中的name  颜色为红色 字体大小48px  
  4. body插槽中遍历 子组件中的list 


  -->
  <div>
    <h1>作用域插槽的任务</h1>
    <!-- 定义插槽 -->
    <slot name="header" :abc="name"></slot>
    <slot name="body" :list="list"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Hello world",
      list: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582890557716&di=b392b8519d132617f831e603b9643089&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20150410%2Ftooopen_sy_117774495169.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582890557718&di=57f4bf66b274a80140708c6f4c8452cf&imgtype=0&src=http%3A%2F%2Fimg.meitumeixiu.com%2FImages%2FDongWu%2FImages%2F25%2F255.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582890557717&di=803914c61b39889f935cb5edd2c844b1&imgtype=0&src=http%3A%2F%2Fimg.dahepiao.com%2Fuploads%2Fallimg%2F190817%2F134594-1ZQG4442C20.jpg"
      ]
    };
  }
};
</script>

<style>
</style>