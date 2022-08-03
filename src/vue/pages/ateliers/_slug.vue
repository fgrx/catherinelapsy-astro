<template>
  <article>
    <div class="bg-gray-200">
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

        <div class="text-center" v-if="doc.purchaseURL && doc.isOpen">
          <div class="md:flex justify-center my-7">
            <BuyBtn
              :url="doc.purchaseURL"
              :isClosed="!doc.isOpen"
              :discount="discount"
              :price="price"
              class="my-4 md:my-0"
            >
              <template v-if="doc.type === 'Atelier en live'">
                S'inscrire
              </template>
              <template v-else> Acheter </template>
            </BuyBtn>
            <ContactButton></ContactButton>
          </div>
        </div>

        <nuxt-content
          class="content"
          :document="contentInMarkdown"
        ></nuxt-content>

        <div class="text-center" v-if="doc.purchaseURL && doc.isOpen">
          <div class="md:flex justify-center">
            <BuyBtn
              :url="doc.purchaseURL"
              :isClosed="!doc.isOpen"
              :discount="discount"
              :price="price"
              class="my-7 md:mt-4"
            >
              <template v-if="doc.isLive"> S'inscrire </template>
              <template v-else> Acheter </template>
            </BuyBtn>
            <ContactButton class="md:ml-4 md:mt-4"></ContactButton>
          </div>
        </div>

        <!-- <div
          v-if="!doc.isOpen"
          class="bg-dark text-secondary py-8 px-5 mt-10 rounded-md"
        >
          <div class="container mx-auto">
            <h2 class="mb-5">
              Les inscriptions à cet atelier sont actuellement fermées
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div class="flex md:col-span-7 lg:col-span-7 items-center">
                <div>
                  <p>
                    <span class="font-semibold text-lg"
                      >Pas de panique, l'atelier ouvrira prochainement !
                    </span>
                    <span v-if="doc.codeMailingList">
                      <br />Pour être tenu au courant de l'actualité de l'
                      atelier "{{ doc.title }}", saisissez ici votre adresse
                      email. Vous ne recevrez que les informations concernant
                      cet atelier et vous ne serez pas abonné automatiquement à
                      <nuxt-link class="underline" to="/emails-prives"
                        >la Lettre Psy</nuxt-link
                      >.
                    </span>
                  </p>
                </div>
              </div>

              <div
                v-if="doc.codeMailingList"
                class="flex-1 md:col-span-5 lg:col-span-5"
              >
                <NewsletterForm :codeList="doc.codeMailingList" />
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </article>
</template>

<script>
import imageService from "../../services/imageService";
import { parseMarkdown } from "../../utils/parseMarkdown";

import ContactButton from "../../components/ContactButton.vue";
import Countdown from "../../components/Countdown.vue";

export default {
  components: {
    ContactButton,
    Countdown,
  },
  async asyncData({ $config: { serverAPI }, params }) {
    const { data } = await fetch(
      `${serverAPI}/products/?filters[slug]=${params.slug}&populate=*`
    ).then((res) => res.json());

    const doc = data[0].attributes;
    doc.image = imageService.formatImage(doc.image, "large");

    const contentInMarkdown = await parseMarkdown(doc.content);

    return { doc, contentInMarkdown };
  },
  computed: {
    discount() {
      return {
        discountTitle: "Réduction",
        discountTo: this.doc.discountPrice,
        hasDiscount: this.doc.hasDiscount || false,
      };
    },
    price() {
      return this.doc.price;
    },
  },
  head() {
    const ogImage = this.doc.imageOG || this.doc.image;

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
          content: `https://catherinelapsy.com${ogImage}`,
        },
        {
          name: "og:image:alt",
          content: `Vignette de présentation de l'atelier`,
        },
        {
          name: "og:description",
          content: this.doc.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.content {
  h3 {
    color: #177e84 !important;
  }
}
</style>
