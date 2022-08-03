<template>
  <div class="flex my-10 items-center">
    <img
      width="80"
      height="80"
      class=""
      :src="require('@/assets/tips.png')"
      alt="Idée intéressante"
    />
    <div class="font-semibold">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
