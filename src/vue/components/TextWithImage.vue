<script setup>
import Btn from "./Btn.vue";

const { contents } = defineProps({ contents: Object });

const rowNumbers = 6;
const defaultWidth = 3;

const imageWidth = contents.imageWidth || defaultWidth;
const contentWidth = rowNumbers - contents.imageWidth || defaultWidth;
</script>

<template>
  <div
    class="mb-10 md:flex md-flex-wrap items-center"
    :class="content.position === 'right' ? 'flex-row-reverse' : ''"
    v-for="content in contents"
  >
    <div
      v-if="content.image"
      :class="`md:w-${imageWidth}/${rowNumbers} px-7 portrait-box`"
    >
      <img
        :src="
          content.image.data.attributes.formats?.small?.url ||
          content.image.data.attributes.url
        "
        :width="
          content.image.data.attributes.formats?.small?.width ||
          content.image.data.attributes.width
        "
        :height="
          content.image.data.attributes.formats?.small?.height ||
          content.image.data.attributes.height
        "
        alt=""
        :class="content.roundImage ? 'rounded-full' : ''"
      />
    </div>

    <div :class="`md:w-${contentWidth}/${rowNumbers}`">
      <h2>{{ content.title }}</h2>

      <p>{{ content.content }}</p>

      <div
        v-if="content.url"
        :class="content.position === 'left' ? 'text-right' : 'text-left'"
      >
        <a :href="content.url"
          ><Btn>{{ content.textURL }}</Btn></a
        >
      </div>
    </div>
  </div>
</template>
