<template>
  <div>
    <!-- 定义插槽 -->
    <slot></slot>我的爱人:
    <slot>
      <!-- 在插槽里 写入默认内容  假如你没有填坑  默认内容就会显示 假如你填坑了 默认内容就不显示 
       就会显示你填坑的内容
      -->
      <span style="color: red; font-weight:bold">如花</span>
      <img
        style="width:100px;height:100px;border-radius:50%"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582882693763&di=61391e44504be277568a9bfd0956c5f3&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88345741.jpeg"
      />
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>