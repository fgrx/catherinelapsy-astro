<script setup>
import Btn from "./Btn.vue";
import imageService from "../../services/imageService.js";
import { marked } from "marked";

const { contents } = defineProps({ contents: Object });

const rowNumbers = 6;
const defaultWidth = 3;
</script>

<template>
  <div class="lg:w-1/6 lg:w-2/6 lg:w-3/6 lg:w-4/6 lg:w-5/6 mt-8"></div>

  <div
    class="mb-20 lg:flex lg-flex-wrap"
    :class="content.position === 'right' ? 'flex-row-reverse' : ''"
    v-for="content in contents"
  >
    <div
      v-if="content.image"
      :class="`lg:w-${content.imageWidth}/${rowNumbers}`"
    >
      <div :class="content.position === 'left' ? 'lg:pr-7' : 'lg:pl-7'">
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
            :alt="content.image.data?.alternativeText || ''"
            :class="content.roundImage ? 'rounded-full' : ''"
          />
        </a>
      </div>
    </div>

    <div :class="`lg:w-${rowNumbers - content.imageWidth}/${rowNumbers}`">
      <div>
        <h2 class="text-primary text-3xl mb-2 mt-4 lg:mt-0">
          {{ content.title }}
        </h2>

        <p
          class="content"
          v-if="content?.content"
          v-html="marked(content.content)"
        ></p>

        <div
          v-if="content.url"
          class="mt-4 flex flex-col items-center lg:flex-none lg:block"
        >
          <a :href="content.url"
            ><Btn>{{ content.textURL }}</Btn></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
