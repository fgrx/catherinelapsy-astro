<script setup>
import Btn from "./Btn.vue";
const { title, content, logo, link } = defineProps({
  title: String,
  content: String,
  logo: Object,
  link: Object,
  isShown: Boolean,
});
</script>

<template>
  <section v-if="isShown" class="bg-secondary text-dark">
    <div class="shadow-2xl">
      <div class="container mx-auto py-5 px-5">
        <div class="md:flex items-center">
          <div class="hidden md:block flex-initial">
            <img
              v-if="logo"
              style="width: 96px; height: 96px"
              :width="logo?.width || 96"
              :height="logo?.height || 96"
              :src="logo.url"
              alt=""
              class="mr-8"
            />
          </div>
          <div class="md:flex-grow">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
          </div>
          <div class="md:flex-1 md:pl-4 mt-3 md:mt-0 justify-items-end">
            <a
              v-if="link.url"
              :href="link.url"
              :target="link.isBlank ? '_blank' : '_self'"
            >
              <Btn color="dark">
                {{ link.text }}
              </Btn>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
