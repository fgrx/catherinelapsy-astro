<script setup>
import Btn from "./Btn.vue";

const { url, color, text, to, target, position } = defineProps({
  url: String,
  color: String,
  text: String,
  to: String,
  target: String,
  position: String,
});
</script>

<template>
  <div :class="position">
    <a :href="url" :target="target">
      <Btn :color="color" :textColor="text">
        <slot></slot>
      </Btn>
    </a>
  </div>
</template>
