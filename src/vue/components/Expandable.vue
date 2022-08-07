<script setup is:inline>
import { ref } from "vue";
import { marked } from "marked";

import arrowRight from "../../assets/images/arrow-right.svg";
import arrowDown from "../../assets/images/arrow-down.svg";

const { expandable } = defineProps({ expandable: Object });

expandable.content = marked.parse(expandable.content);

const isExpanded = ref(false);
</script>

<template>
  <div
    @click="isExpanded = !isExpanded"
    class="flex justify-between bg-primary rounded-sm font-semibold text-white p-5 cursor-pointer"
  >
    <div>{{ expandable.title }}</div>

    <img :src="arrowRight" alt="" height="30" width="30" v-if="!isExpanded" />
    <img :src="arrowDown" alt="" height="30" width="30" v-if="isExpanded" />
  </div>

  <div
    v-if="isExpanded"
    v-html="expandable.content"
    class="p-5 text-gray-800 bg-gray-200"
  ></div>
</template>
