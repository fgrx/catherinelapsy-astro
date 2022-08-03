<script setup>
import { computed } from "vue";

const { youtubeID } = defineProps({ youtubeID: String });

const urlYoutube = computed(() => {
  const urlYoutube = `https://www.youtube.com/embed/${youtubeID}`;
  return urlYoutube;
});
</script>

<template>
  <div class="embed my-6 text-center">
    <iframe
      loading="lazy"
      width="560"
      height="315"
      title="Vidéo Youtube embarquée"
      :src="urlYoutube"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.embed {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.embed iframe,
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
