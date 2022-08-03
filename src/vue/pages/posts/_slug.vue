<template>
  <div class="bg-gray-200">
    <article>
      <div>
        <HeaderPage :doc="doc" />

        <div
          class="container mx-auto bg-gray-100 -m-14 py-12 pb-24 px-5 md:px-12 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
        >
          <nuxt-img
            :src="doc.image.url"
            format="webp"
            sizes="850px"
            fit="inside"
            class="mb-7"
            v-if="doc.image.url"
            :alt="doc.image.alt"
          ></nuxt-img>

          <nuxt-content
            class="content"
            :document="contentInMarkdown"
          ></nuxt-content>
        </div>
      </div>
    </article>
    <div
      class="container mx-auto bg-gray-100 -m-14 pb-14 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
    ></div>
    <Newsletter title="Envie d'en savoir plus ? Abonnez-vous à la Lettre Psy" />
  </div>
</template>

<script>
import Newsletter from "../../components/home/Newsletter";
import imageService from "../../services/imageService";

export default {
  async asyncData({ $config: { serverAPI }, params }) {
    const { data } = await fetch(
      `${serverAPI}/posts/?filters[slug]=${params.slug}&populate=*`
    ).then((res) => res.json());

    const doc = data[0].attributes;
    doc.image = imageService.formatImage(doc.image, "large");

    // const contentInMarkdown = await parseMarkdown(doc.content);

    return { doc, contentInMarkdown: content.doc };
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
        { name: "og:title", content: this.doc.title },
        { name: "og:type", content: "article" },
        { name: "og:site_name", content: "catherine La Psy" },
        {
          name: "og:image",
          content: `https://catherinelapsy.com${this.doc.image}`,
        },
        {
          name: "og:description",
          content: this.doc.description,
        },
      ],
    };
  },

  components: {
    Newsletter,
  },
};
</script>

<style lang="scss">
.content {
  h3 {
    color: #177e84 !important;
    font-size: 1.4em;
  }
}
</style>
