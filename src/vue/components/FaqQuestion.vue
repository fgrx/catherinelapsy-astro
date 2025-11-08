<script setup is:inline>
import { ref } from "vue";
import { marked } from "marked";

import arrowRight from "../../assets/images/arrow-right.svg";
import arrowDown from "../../assets/images/arrow-down.svg";

const { question } = defineProps({ question: Object });

question.response = marked.parse(question.response);

const isExpanded = ref(false);
</script>

<template>
  <div
    @click="isExpanded = !isExpanded"
    class="flex bg-gray-300 rounded-sm font-semibold text-gray-900 p-2 cursor-pointer"
  >
    <img
      :src="arrowRight.src"
      alt=""
      height="20"
      width="20"
      v-if="!isExpanded"
    />
    <img :src="arrowDown.src" alt="" height="20" width="20" v-if="isExpanded" />

    <div>{{ question.question }}</div>
  </div>

  <div
    v-if="isExpanded"
    v-html="question.response"
    class="p-5 text-gray-800 bg-gray-200"
  ></div>
</template>
