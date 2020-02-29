<template>
  <div>
    <h1>具名插槽样式</h1>
    <child>
      <!-- 如果要给某个具名插槽(带记号的坑)传值 需要 slot="记号"形式 -->
      <!-- 张永涛 -->
      <template slot="women">
        <!-- template不生成任何实质标签 但是可以做判断 -->
        <img
          style="width:200px;height:200px;border-radius:50%"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582885553534&di=ffcaad71ff5308feab3a0a3f9040ca71&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F04%2F20180604154411_EBEKc.jpeg"
          alt
        />
        <img
          style="width:200px;height:200px;border-radius:50%"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582886099640&di=c34caf2f3696c3de0dae19a00efaab09&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn15%2F126%2Fw690h1036%2F20180829%2F4441-hikcahf3625873.jpg"
          alt
        />
        <img
          style="width:200px;height:200px;border-radius:50%"
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2501625024,2256577737&fm=26&gp=0.jpg"
          alt
        />
      </template>
      <!-- 赵紫含 -->
      <img
        slot="man"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582885812073&di=321f96b19b3b63e231bc5d30c87df4ce&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F1114%2F8C29B6C328320E1F24E4E7910D75C2B7B84C2C45_size53_w600_h600.jpeg"
        alt
        style="width:200px;height:200px;border-radius:50%"
      />
      <img
        slot="man"
        style="width:200px;height:200px;border-radius:50%"
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1779183442,1473224648&fm=26&gp=0.jpg"
        alt
      />
      <!-- 杨佳豪 -->
      <img
        style="width:200px;height:200px;border-radius:50%"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582885997123&di=77dc5f09373ee74809b55ef20afd9348&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20181029%2F20181029140929_866909e643d2796430e566d21f6974ba_1.jpeg"
        alt
      />
    </child>
    <!-- 任务 -->
    <!-- 第一个组件实例 -->
    <task>
      <div slot="header" style="height:20px;background-color:blue"></div>
      <div slot="body" style="color:#fff">我是body</div>
      <div slot="footer" style="color:green">我是footer</div>
    </task>
    <!-- 第二个组件实例 -->
    <task>
      <div slot="header" style="height:40px;background-color:yellow"></div>
      <div slot="body" style="color:green">我是body</div>
      <div slot="footer" style="color:#fff">我是footer</div>
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