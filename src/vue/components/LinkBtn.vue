<script setup>
import Btn from "./Btn";

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
    <a v-if="url" :href="url" :target="target">
      <Btn :color="color" :textColor="text">
        <slot></slot>
      </Btn>
    </a>

    <a v-if="to" :href="to">
      <Btn :color="color" :textColor="text">
        <slot></slot>
      </Btn>
    </a>
  </div>
</template>
