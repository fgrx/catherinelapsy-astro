<script setup>
import Question from "./FaqQuestion.vue";

const { questions } = defineProps({ questions: Array });
</script>

<template>
  <div v-for="question in questions" class="mb-3">
    <Question :question="question" />
  </div>
</template>

<style lang="scss" scoped></style>
