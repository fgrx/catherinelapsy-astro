<template>
  <div class="container-block">
    <div class="container-block-text">
      <slot></slot>
    </div>

    <nuxt-img
      v-if="image"
      :src="imageURL"
      format="webp"
      quality="70"
      class="w-full container-block-image"
      sizes="300:500,600:800,800:1200"
      fit="cover"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
  },
  computed: {
    imageURL() {
      return `images/ressources-psy/${this.image}`;
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Lexend Deca", sans-serif;
}

.container-block {
  position: relative;
  height: 100%;
}

.container-block-text {
  top: 0;
}

.container-block-image {
  z-index: -1;
  top: 0;
  position: absolute !important;
  height: 100%;
  width: 100%;
}
</style>
