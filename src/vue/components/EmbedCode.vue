<template>
  <div class="embed my-6 text-center">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.embed {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.embed iframe,
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
