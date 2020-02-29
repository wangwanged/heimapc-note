<template>
  <div class="name-slot">
    <h1>具名插槽任务</h1>
    <!-- header -->
    <slot name="header"></slot>
    <!-- body -->
    <slot name="body"></slot>
    <!-- footer -->
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.name-slot {
  width: 500px;
  height: 300px;
  margin: 10px auto;
  background-color: red;
}
</style>