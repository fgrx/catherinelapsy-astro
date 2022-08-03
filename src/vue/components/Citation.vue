<template>
  <div class="my-8 px-8">
    <div>
      <div class="text-5xl text-primary text-left leading-tight h-3">“</div>

      <p class="text-gray-500 text-xl italic text-center px-5 content-citation">
        <slot></slot>
      </p>

      <div class="text-5xl text-primary text-right leading-tight h-3 -mt-3">
        ”
      </div>
    </div>

    <div v-if="author" class="mt-8 text-md text-primary text-right">
      <p>- {{ author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.content-citation {
  font-family: "Playfair Display", sans-serif;
}
</style>
