<script setup>
import { computed } from "vue";

const { podcast } = defineProps({ podcast: Object });

const url = computed(
  () => `https://anchor.fm/catherine-la-psy/embed/episodes/${podcast.url}`
);
</script>

<template>
  <div>
    <h3 v-if="podcast.title">{{ podcast.title }}</h3>
    <p v-if="podcast.description">{{ podcast.description }}</p>
    <iframe
      :src="url"
      height="102px"
      width="400px"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>
