<template>
  <div>
    <div
      v-if="display === 'important'"
      :class="
        `my-7 mx-5 text-${color} text-2xl important text-center font-semibold`
      "
    >
      <slot></slot>
    </div>

    <div
      v-if="display === 'frame'"
      :class="
        `my-5 py-5 px-5 text-gray-800 text-lg important font-semibold border-gray-300 border rounded-md`
      "
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    display: {
      type: String,
      default: "important"
    },
    color: {
      type: String,
      default: "rose-600"
    }
  }
};
</script>

<style scoped></style>
