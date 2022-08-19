<script setup>
import { computed } from "vue";

const { video } = defineProps({ video: Object });

const url = computed(() => `https://www.youtube.com/embed/${video.url}`);
</script>

<template>
  <div class="mb-8">
    <h3 class="text-2xl text-primary py-3" v-if="video.title">
      {{ video.title }}
    </h3>
    <p v-if="video.description">{{ video.description }}</p>
    <lite-youtube videoid="{video.url}" playlabel="{video.title}" />
  </div>
</template>
