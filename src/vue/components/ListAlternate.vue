<script setup>
import Btn from "./Btn.vue";
import Ribbon from "./Ribbon.vue";

const { items, textBtn } = defineProps({ items: Array, textBtn: String });
</script>

<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="item.order"
      :class="[
        Number.isInteger(index / 2)
          ? 'flex-row-reverse my-7 md:flex mb-20'
          : 'my-7 md:flex mb-20',
      ]"
    >
      <div
        :class="[
          Number.isInteger(index / 2) ? 'md:ml-5 flex-1' : 'md:pr-5 flex-1',
        ]"
      >
        <!-- <EmbedYoutube v-if="item.video">{{ item.video }}</EmbedYoutube> -->

        <a v-if="item.image.url" :href="`${item.dir}/${item.slug}`">
          <div class="relative overflow-hidden">
            <Ribbon v-if="item.isPro">Atelier pro</Ribbon>

            <img
              :src="item.image.url"
              :width="item.image.width"
              class="mb-7"
              :alt="item.image.alt"
            />
          </div>
        </a>
      </div>

      <div class="flex-1">
        <h3 class="text-2xl mb-2 mt-0 pt-0">
          {{ item.title }}
        </h3>

        <p v-if="item.description && !item.menuDescription" class="text-md">
          {{ item.description }}
        </p>

        <p v-if="item.hasDiscount">
          <strong>
            <template v-if="item.discountTitle"
              >{{ item.discountTitle }} :
            </template>
            <s>{{ item.price }}</s
            >€ {{ item.discountTo }}€</strong
          >
        </p>

        <a v-if="item.dir !== '/videos'" :href="`${item.dir}/${item.slug}`">
          <Btn class="mt-3">{{ textBtn }}</Btn>
        </a>

        <a v-if="item.dir === '/videos'" :href="item.url" target="blank">
          <Btn class="mt-3">{{ textBtn }}</Btn>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
