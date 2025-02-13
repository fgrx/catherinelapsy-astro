<script lang="ts" setup>
import Btn from "./Btn.vue";
import NewsletterForm from "./NewsletterForm.vue";

interface Gift {
  title: string;
  url: string;
  docName: string;
}

const { gift, totalSubscribers } = defineProps<{
  gift: Gift;
  totalSubscribers: number;
}>();
</script>

<template>
  <div>
    <section>
      <p>
        En cliquant sur le bouton télécharger, une nouvelle fenêtre s'ouvrira
        avec votre exercice. Cliquez ensuite sur le bouton de téléchargement
        pour sauvegarder le fichier PDF.
      </p>
      <div class="flex flex-col items-center">
        <a :href="gift.url" target="blank" :download="gift.docName">
          <Btn>Télécharger l'exercice</Btn></a
        >
      </div>
    </section>

    <div
      class="bg-gradient-to-r from-primaryDark to-primary text-white mt-12 py-8"
    >
      <div class="container mx-auto">
        <div class="flex-none md:flex gap-5 items-center px-5">
          <img
            class="md:mr-1 hidden md:block object-scale-down"
            src="https://res.cloudinary.com/dyyzsnhr4/image/upload/v1658388187/mail_596664d_5d9d09b680.png"
            alt="Dessin de courrier"
            width="180"
            height="156"
          />

          <div class="flex-1">
            <h2 class="text-secondary text-3xl">
              Abonnez-vous à la Lettre Psy
            </h2>
            <p>
              Une newsletter bimensuelle pour mieux comprendre la psychologie et
              la psychothérapie avec 3 articles exclusifs !
            </p>

            <NewsletterForm client:load codeList="qD1uT" />
            <p class="text-xl">
              Rejoignez les {{ totalSubscribers }} personnes inscrites !
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
