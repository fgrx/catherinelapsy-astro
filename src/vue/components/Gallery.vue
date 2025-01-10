<script setup>
const { images } = defineProps({ images: Array });
</script>

<template>
  <section v-if="images">
    <div :class="`grid md:grid-cols-${images?.length} gap-2 my-4`">
      <div class="flex justify-center" v-for="image in images" :key="image">
        <img
          :src="image.formats.small.url"
          :alt="image.alternativeText"
          :width="image.width"
          :height="image.height"
          format="webp"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
</style>
