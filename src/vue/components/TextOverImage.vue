<script setup>
const { image } = defineProps({ image: String });
</script>

<template>
  <div class="container-block">
    <div class="container-block-text">
      <slot></slot>
    </div>

    <img
      v-if="image"
      :src="image"
      :alt="image.alt"
      class="w-full container-block-image object-cover"
    />
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-family: "Lexend Deca", sans-serif;
}

.container-block {
  position: relative;
  height: 100%;
}

.container-block-text {
  top: 0;
}

.container-block-image {
  z-index: -1;
  top: 0;
  position: absolute !important;
  height: 100%;
  width: 100%;
}
</style>
