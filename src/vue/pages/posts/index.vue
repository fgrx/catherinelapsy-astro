<template>
  <article>
    <div class="bg-gray-100">
      <HeaderPage :doc="doc" />
      <div
        class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
      >
        <h2>Articles sur la psychologie & psychothérapie</h2>
        <ListAlternate textBtn="Lire l'article" :items="posts"> </ListAlternate>
      </div>
    </div>
  </article>
</template>

<script>
import imageService from "../../services/imageService";

export default {
  async asyncData({ $config: { serverAPI }, $content, params }) {
    const { data } = await fetch(
      `${serverAPI}/posts?sort=date:desc&pagination[limit]=10000&fields=title,description,slug&populate=image`
    ).then((res) => res.json());

    const posts = data.map((element) => {
      const post = element.attributes;
      post.dir = "posts";
      post.image = imageService.formatImage(element.attributes.image, "small");
      return post;
    });

    return { posts };
  },
  data() {
    return {
      doc: {
        title: "Tous les articles",
        logo: "post.svg",
        description:
          "Vous voulez en savoir un plus sur la psychologie et la psychothérapie ? Voici quelques articles qui pourraient vous intéresser. ",
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
