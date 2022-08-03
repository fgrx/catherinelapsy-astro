<template>
  <a
    class="
      bg-gray-200
      border-solid border-2 border-gray-300
      px-4
      py-2
      font-semibold
      text-gray-600 text-center
      rounded
      mr-5
      mb-5
      flex
      items-center
    "
    :href="url"
  >
    <img
      :src="require(`@/static/logos/podcasts_icons/${image}`)"
      alt=""
      height="32"
      width="32"
      class="mr-3"
    />
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
  width: 220px;
}
</style>