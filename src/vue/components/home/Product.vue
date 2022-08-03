<script setup>
import TextOverImage from "../components/TextOverImage.vue";
import Btn from "../components/Btn.vue";
const { product } = defineProps({ product: Object });
</script>

<template>
  <div :class="product.image ? 'bg-opacity-40 bg-black' : 'bg-gray-200'">
    <TextOverImage :image="product.image">
      <div
        :class="product.image ? 'text-white' : 'text-black'"
        class="md:h-2/3 md:w-2/3 px-5 md:px-0 container mx-auto py-28 items-center"
      >
        <h2 class="text-center text-shadow">{{ product.titleSection }}</h2>
        <h3 class="text-center text-shadow text-4xl md:text-5xl lg:text-7xl">
          {{ product.title }}
        </h3>
        <p class="mt-5 text-lg md:text-2xl text-center text-shadow">
          {{ product.description }}
        </p>
        <p
          class="text-4xl text-center my-12 text-shadow"
          v-if="product.displayPrice"
        >
          <span v-if="product.promo">Réduction : </span>
          <span
            v-if="product.promo"
            class="text-white bg-rose-600 rounded-full px-4 py-2 text-4xl mr-4"
          >
            {{ product.promo }}€
          </span>

          <span :class="product.promo ? 'line-through' : ''">
            {{ product.price }}€
          </span>
        </p>
        <div class="flex mt-12 justify-center">
          <a v-if="product.target" :target="product.target" :href="product.url">
            <Btn color="rose-600">En savoir plus</Btn>
          </a>
          <a v-else :href="product.url">
            <Btn color="rose-600">En savoir plus</Btn>
          </a>

          <a v-if="product.urlAllProducts" href="/ateliers">
            <Btn class="ml-5" color="rose-600">Tous les ateliers</Btn>
          </a>
        </div>
      </div>
    </TextOverImage>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-family: "Lexend Deca", sans-serif;
}
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
