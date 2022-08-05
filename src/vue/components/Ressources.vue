<script setup>
import imageService from "../../services/imageService.js";
import TextOverImage from "./TextOverImage.vue";
const { ressources } = defineProps({ ressources: Array });
</script>

<template>
  <div class="container mx-auto px-5 pt- pb-10">
    <h2 class="mb-3">Nos contenus psy</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div
        v-for="ressource in ressources"
        :key="ressource.id"
        class="text-white bg-black bg-opacity-60"
      >
        <a :href="ressource.url" class="no-underline">
          <TextOverImage
            :image="imageService.formatImage(ressource.image, 'medium').url"
          >
            <div class="py-10 px-6">
              <img
                :src="
                  imageService.formatImage(ressource.logo, 'thumbnails').url
                "
                :alt="'Retrouvez moi sur' + ressource.title"
                class="w-20 l-20 mx-auto mb-3"
                widh="40"
                height="40"
              />
              <div class="">
                <h3 class="text-2xl text-center">{{ ressource.title }}</h3>
                <p class="font-medium">{{ ressource.content }}</p>
              </div>
            </div>
          </TextOverImage>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
