<template>
  <div class="container mx-auto px-5 pt- pb-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div
        v-for="sn in ressources"
        :key="sn.order"
        class="text-white bg-black bg-opacity-60"
      >
        <a :href="sn.url" class="no-underline">
          <TextOverImage :image="sn.image">
            <div class="py-10 px-6">
              <img
                :src="require(`@/assets/${sn.logo}`)"
                :alt="'Retrouvez moi sur' + sn.title"
                class="w-20 l-20 mx-auto"
                widh="40"
                height="40"
              />
              <div class="">
                <h3 class="text-2xl text-center">{{ sn.title }}</h3>
                <p class="font-medium">{{ sn.description }}</p>
              </div>
            </div>
          </TextOverImage>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ressources: {},
    };
  },

  async fetch() {
    const general = await this.$content("general", { deep: true }).fetch();
    this.ressources = general.ressources;
  },
};
</script>

<style scoped></style>
