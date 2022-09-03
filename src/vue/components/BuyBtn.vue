<script setup>
import Btn from "./Btn.vue";

const { url, isClosed, price, discount, label, textPrice } = defineProps({
  url: String,
  isClosed: Boolean,
  price: Number,
  discount: Object,
  label: String,
  textPrice: String,
});
</script>

<template>
  <div class="text-center" v-if="isClosed === false">
    <a :href="url">
      <Btn class="">
        {{ label }}

        <template v-if="price">
          <template v-if="discount && discount.hasDiscount">
            <strong>
              <s>{{ price }}</s
              >€ {{ discount.discountTo }}€</strong
            >
          </template>

          <template v-else> {{ price }}€ </template>
        </template>

        <div v-if="textPrice" class="text-xs">{{ textPrice }}</div>

        <div class="text-xs">(Vous serez redirigé sur podia.com)</div>
      </Btn>
    </a>
  </div>
</template>
