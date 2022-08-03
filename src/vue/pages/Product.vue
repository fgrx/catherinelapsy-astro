<script setup>
import { computed } from "vue";

import imageService from "../../services/imageService";
import HeaderPage from "../components/HeaderPage.vue";
import ContactButton from "../components/ContactButton.vue";
import Countdown from "../components/Countdown.vue";
import BuyBtn from "../components/BuyBtn.vue";
import NewsletterForm from "../components/NewsletterForm.vue";
import EmbedYoutube from "../components/EmbedYoutube.vue";
import PictosAteliers from "../components/PictosAtelier.vue";
import Testimonials from "../components/Testimonials.vue";
import Gallery from "../components/Gallery.vue";
import Expandables from "../components/Expandables.vue";

const { doc } = defineProps({ doc: Object });

const discount = computed(() => {
  return {
    discountTitle: "Réduction",
    discountTo: doc.discountPrice,
    hasDiscount: doc.hasDiscount || false,
  };
});
</script>

<template>
  <article>
    <div class="bg-gray-200">
      <HeaderPage :doc="doc" />

      <div
        class="container mx-auto bg-gray-100 -m-14 py-12 pb-24 px-5 md:px-12 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
      >
        <img
          :src="doc.image.url"
          class="mb-7"
          v-if="doc.image.url"
          :alt="doc.image.alt"
        />

        <div class="text-center" v-if="doc.purchaseURL && doc.isOpen">
          <div class="md:flex justify-center my-7">
            <BuyBtn
              :url="doc.purchaseURL"
              :isClosed="!doc.isOpen"
              :discount="discount"
              :price="doc.price"
              class="my-4 md:my-0"
            >
              <template v-if="doc.type === 'Atelier en live'">
                S'inscrire
              </template>
              <template v-else> Acheter </template>
            </BuyBtn>
            <ContactButton />
          </div>
        </div>

        <slot name="content1" />

        <EmbedYoutube :youtubeID="doc.youtubeURL"> </EmbedYoutube>

        <PictosAteliers :pictos="doc.picto" />

        <gallery :images="doc.gallery.data"></gallery>

        <slot name="content2" />

        <section v-if="doc.testimonial">
          <h2>Ce que pensent nos clients</h2>
          <Testimonials :testimonials="doc.testimonial" />
        </section>

        <slot name="content3" />

        <section v-if="doc.program.length">
          <h2>Programme de l'atelier</h2>
          <Expandables client:load :expandables="doc.program" />
        </section>

        <hr />
        <h1>Content 1</h1>
        <slot name="content1" />
        <hr />

        <hr />
        <h1>Content 2</h1>
        <slot name="content2" />
        <hr />

        <!-- <slot /> -->

        <!-- <div class="text-center" v-if="doc.purchaseURL && doc.isOpen">
          <div class="md:flex justify-center">
            <BuyBtn
              :url="doc.purchaseURL"
              :isClosed="!doc.isOpen"
              :discount="discount"
              :price="doc.price"
              class="my-7 md:mt-4"
            >
              <template v-if="doc.isLive"> S'inscrire </template>
              <template v-else> Acheter </template>
            </BuyBtn>
            <ContactButton class="md:ml-4 md:mt-4"></ContactButton>
          </div>
        </div> -->

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
                      <a class="underline" href="/emails-prives"
                        >la Lettre Psy</a
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

<style lang="scss">
.content {
  h3 {
    color: #177e84 !important;
  }
}
</style>
