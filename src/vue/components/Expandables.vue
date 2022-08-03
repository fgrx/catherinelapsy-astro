<script setup>
import Expandable from "./Expandable.vue";

const { expandables } = defineProps({ expandables: Array });
</script>

<template>
  <div v-for="expandable in expandables" class="mb-3">
    <Expandable :expandable="expandable" />
  </div>
</template>

<style lang="scss" scoped></style>
