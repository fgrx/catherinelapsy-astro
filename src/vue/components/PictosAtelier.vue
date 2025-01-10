<script setup>
const { pictos } = defineProps({ pictos: Object });
</script>

<template>
  <div class="md:flex flex-wrap md:justify-arround mb-8">
    <div
      v-for="picto in pictos"
      class="md:flex-1 mt-5 px-5 text-center container"
    >
      <img
        :src="picto.image[0].url"
        class="mx-auto"
        alt=""
        width="80"
        height="80"
        loading="lazy"
      />

      <p class="mt-3">
        <span class="text-lg font-semibold text-primary">
          {{ picto.firstLine }} <br />
        </span>
        {{ picto.secondeLine }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
