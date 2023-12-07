<script setup>
import Btn from "./Btn.vue";
import imageService from "../../services/imageService.js";
import { marked } from "marked";

const { contents } = defineProps({ contents: Object });

const rowNumbers = 6;
const defaultWidth = 3;

const contentWidth = rowNumbers - contents.imageWidth || defaultWidth;
</script>

<template>
  <div class="md:w-1/6 md:w-2/6 md:w-3/6 md:w-4/6 md:w-5/6 mt-8"></div>

  <div
    class="mb-20 md:flex md-flex-wrap"
    :class="content.position === 'right' ? 'flex-row-reverse' : ''"
    v-for="content in contents"
  >
    <div
      v-if="content.image"
      :class="`md:w-${content.imageWidth}/${rowNumbers}`"
    >
      <div :class="content.position === 'left' ? 'md:pr-7' : 'md:pl-7'">
        <a :href="content.url">
          <img
            class="mx-auto w-full h-auto"
            :src="
              content.imageWidth >= 3
                ? imageService.formatImage(content.image, 'large').url
                : imageService.formatImage(content.image, 'small').url
            "
            :width="
              content.imageWidth >= 3
                ? imageService.formatImage(content.image, 'large').width
                : imageService.formatImage(content.image, 'small').width
            "
            :height="
              content.imageWidth >= 3
                ? imageService.formatImage(content.image, 'large').height
                : imageService.formatImage(content.image, 'small').height
            "
            :alt="content.image.data?.attributes?.alternativeText || ''"
            :class="content.roundImage ? 'rounded-full' : ''"
          />
        </a>
      </div>
    </div>

    <div :class="`md:w-${rowNumbers - content.imageWidth}/${rowNumbers}`">
      <div>
        <h2 class="text-primary text-3xl mb-2">{{ content.title }}</h2>

        <p
          class="content"
          v-if="content?.content"
          v-html="marked(content.content)"
        ></p>

        <div v-if="content.url" class="mt-4">
          <a :href="content.url"
            ><Btn>{{ content.textURL }}</Btn></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
