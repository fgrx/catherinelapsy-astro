<template>
  <article>
    <div v-if="doc" class="bg-gray-100 pb-14 content-page">
      <HeaderPage :doc="doc" />

      <div
        class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
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
</template>

<script>
import imageService from "../services/imageService";
// import { parseMarkdown } from "@/utils/parseMarkdown";

export default {
  async asyncData({ $config: { serverAPI }, params, app }) {
    const { data } = await fetch(
      `${serverAPI}/pages/?filters[slug]=${params.slug}&populate=*`
    ).then((res) => res.json());

    const doc = data[0].attributes;

    doc.image = imageService.formatImage(doc.image, "large");

    // const contentInMarkdown = await parseMarkdown(doc.content);
    return { doc, contentInMarkdown: doc.content };
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
          name: "og:description",
          content: this.doc.description,
        },
      ],
    };
  },
};
</script>

<style scoped>
.content-page {
  min-height: 90vh;
}
</style>
