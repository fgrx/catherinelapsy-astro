<template>
  <div
    class="mb-16 md:flex md-flex-wrap items-center"
    :class="side === 'right' ? 'flex-row-reverse' : ''"
  >
    <div class="md:w-1/3 px-5 portrait-box" v-if="image">
      <nuxt-picture
        :src="`/images/${image}`"
        format="webp"
        height="400"
        width="400"
        alt="Portrait"
        class="rounded-full"
      ></nuxt-picture>
    </div>

    <div class="md:w-2/3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },

    side: {
      type: String,
      default: "left",
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Lexend Deca", sans-serif;
}
</style>
