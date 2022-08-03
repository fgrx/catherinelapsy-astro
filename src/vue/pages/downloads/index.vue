<template>
  <article>
    <div class="bg-gray-100">
      <HeaderPage :doc="doc" />
      <div
        class="
          container
          mx-auto
          py-5
          px-5
          md:w-10/12
          lg:w-9/12
          xl:w-7/12
          content
        "
      >
        <ListAlternate textBtn="voir" :items="downloads"> </ListAlternate>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const downloads = await $content("downloads").fetch();
    return { downloads };
  },
  data() {
    return {
      doc: {
        title: "Tous les téléchargements",
        logo: "download.svg",
        colorBg1: "purple-900",
        colorBg2: "indigo-500",
        description: " Voici quelques outils qui pourraient vous intéresser. ",
      },
    };
  },
  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.description,
          robot: "noindex, nofollow",
        },
      ],
    };
  },
};
</script>

<style scoped>
h3 {
  font-family: "Lexend Deca", sans-serif;
}
</style>
