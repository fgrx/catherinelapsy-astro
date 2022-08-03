<script setup>
const { contents } = defineProps({ contents: Object });
</script>

<template>
  <div
    class="mb-10 md:flex md-flex-wrap items-center"
    :class="content.position === 'right' ? 'flex-row-reverse' : ''"
    v-for="content in contents"
  >
    <div class="md:w-1/2 px-7 portrait-box" v-if="content.image">
      <img
        :src="content.image.data.attributes.formats.small.url"
        :width="content.image.data.attributes.formats.small.width"
        :height="content.image.data.attributes.formats.small.height"
        alt=""
        :class="content.roundImage ? 'rounded-full' : ''"
      />
    </div>

    <div class="md:w-1/2">
      <h2>{{ content.title }}</h2>

      <p>{{ content.content }}</p>
    </div>
  </div>
</template>
