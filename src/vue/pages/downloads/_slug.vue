<template>
  <div class="bg-gray-200">
    <article>
      <div>
        <HeaderPage :doc="doc" />
        <div
          class="container mx-auto bg-gray-100 -m-14 py-12 pb-24 px-5 md:px-12 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
        >
          <h2 v-if="file.title">
            {{ file.title }}
          </h2>
          <p class="my-3" v-if="file.description">
            Téléchargement du fichier "{{ file.title }}""
          </p>
          <p class="my-3">
            Pour télécharger ce fichier, cliquez sur le bouton ci-dessous :
          </p>

          <div class="text-center">
            <a download :href="`../../ressources/${file.url}`">
              <Btn class="mt-5 mb-4"> Télécharger </Btn>
            </a>
          </div>
        </div>
        <div
          class="container mx-auto bg-gray-100 -m-14 pb-14 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
        >
          <Newsletter />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Newsletter from "../../components/home/Newsletter";

export default {
  components: {
    Newsletter,
  },
  async asyncData({ $content, params }) {
    const file = await $content("downloads", params.slug).fetch();
    return { file };
  },
  data() {
    return {
      doc: {
        title: "Téléchargement",
        logo: "download.svg",
        colorBg1: "purple-900",
        colorBg2: "indigo-500",
        description: "Téléchargement de fichier",
        robot: "noindex, nofollow",
      },

      file: {},
    };
  },

  head() {
    return {
      title: "Téléchargement de fichiers",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Téléchargement",
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
