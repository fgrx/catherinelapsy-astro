<script setup>
const { testimonials } = defineProps({ testimonials: Array });
</script>

<template>
  <div class="w-full md:flex flex-wrap md:justify-arround mb-8">
    <div
      v-for="testimonial in testimonials"
      class="testimonial md:flex-1 mt-5 text-center container"
    >
      <div class="center">
        <img
          :src="testimonial.image.data.attributes.formats.small.url"
          alt=""
          height="150"
          width="150"
          loading="lazy"
          class="object-center"
        />
      </div>
      <blockquote class="text-center">
        <p class="italic">"{{ testimonial.content }}"</p>
        <p v-if="testimonial.atelier">{{ testimonial.atelier }}</p>
        <cite class="not-italic font-semibold">{{ testimonial.name }}</cite>
      </blockquote>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testimonial {
  border: 1px solid rgb(213, 213, 213);
  background-color: rgb(236, 236, 236);
  padding: 1em;
  margin-right: 1em;

  img {
    text-align: center;
    margin: auto;
  }
}
</style>
