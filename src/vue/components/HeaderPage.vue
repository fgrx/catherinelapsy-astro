<script setup>
import { computed } from "vue";

const { doc } = defineProps({ doc: Object });

const logo = computed(() => doc.logo?.data?.attributes?.url || doc.logo);
</script>

<template>
  <div
    class="header pb-14 md:py-10 mb-5 bg-gradient-to-r from-primary to-primaryDark"
  >
    <div class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12">
      <div class="flex">
        <template v-if="logo?.length">
          <div class="hidden align-top md:block flex-initial">
            <img :src="logo" alt="" class="logo-header pr-5 object-contain" />
          </div>
        </template>

        <div class="flex-initial">
          <h1
            data-v-a2b46a4c=""
            :class="`text-left text-4xl md:text-5xl lg:text-6xl mb-5 text-${
              doc.colorText || 'white'
            }`"
          >
            {{ doc.title }}
          </h1>

          <h2 class="text-secondary text-2xl" v-if="doc.subtitle">
            {{ doc.subtitle }}
          </h2>
          <p
            :class="`text-left text-xl text-${doc.colorText || 'white'}`"
            v-if="doc.description"
          >
            {{ doc.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-header {
  height: 130px;
  width: auto;
  transform: rotate(0deg);
}
</style>
