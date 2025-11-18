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

const urlParams = new URLSearchParams(window.location.search);
const coupon = urlParams.get("coupon");
const newPrice = urlParams.get("price");

const urlLink = coupon ? `${url}?coupon=${coupon}` : url;
</script>

<template>
  <div class="text-center" v-if="isClosed === false">
    <a :href="urlLink">
      <Btn class="">
        {{ label }}
        <template v-if="price">
          <template v-if="(discount && discount.hasDiscount) || newPrice">
            <span class="text-xs">
              <s>{{ price }}€ </s>
            </span>
            <strong> {{ discount.discountTo || newPrice }}€</strong>
          </template>

          <template v-else> {{ price }}€ </template>
        </template>

        <div v-if="textPrice" class="text-xs">{{ textPrice }}</div>

        <div class="text-xs">(Vous serez redirigé sur podia.com)</div>
      </Btn>
    </a>
  </div>
</template>
