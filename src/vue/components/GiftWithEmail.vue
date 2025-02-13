<script lang="ts" setup>
import { computed, ref } from "vue";
import Btn from "./Btn.vue";
import Alert from "./Alert.vue";

interface Gift {
  title: string;
  url: string;
  docName: string;
}

const cssFormLayout = `block w-full py-3 px-1 mt-2 text-gray-800  rounded`;

const email = ref<string>();
const isConsent = ref<boolean>(false);
const isDownloadable = ref(false);

//honeypot
const name = ref("");

const isValidEmail = computed(() => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.value);
});

const { gift } = defineProps<{ gift: Gift }>();

const isFormCompleted = computed(() => {
  if (isValidEmail.value && isConsent.value) return true;
  return false;
});

const subscribeToMailingList = async (email: string) => {
  const API_URL = "https://app.getresponse.com/add_subscriber.html";
  const CAMPAIGN_ID = "ABCD";

  const data = {
    email,
    campaign: { campaignId: CAMPAIGN_ID },
    dayOfCycle: 0,
  };

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const validationAction = () => {
  if (isFormCompleted && !name.value) {
    subscribeToMailingList(email.value);
    isDownloadable.value = true;
  }
};
</script>

<template>
  <div>
    <form v-if="!isDownloadable">
      <p class="mt-5">
        <label class="block font-semibold"
          >Pour télécharger "{{ gift.title }}", veuillez saisir votre adresse
          email :
          <input
            v-model="email"
            type="text"
            name="name"
            :class="`${cssFormLayout}`"
            required
            placeholder="monemail@mail.com"
        /></label>
      </p>

      <p class="mt-5 hidden">
        <label class="block font-semibold"
          >Nom :
          <input
            v-model="name"
            type="text"
            name="name"
            :class="`${cssFormLayout}`"
            required
        /></label>
      </p>

      <p class="mt-5">
        <label class="block font-semibold">
          <input
            v-model="isConsent"
            type="checkbox"
            value=""
            class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          En cliquant sur "Valider" vous acceptez de vous inscrire à notre
          Lettre Psy, notre email gratuit avec 3 articles et 1 citation qui
          parait toutes les 2 semaines.
        </label>
      </p>

      <p class="flex flex-col items-center">
        <Btn
          @click="validationAction"
          typeButton="button"
          class="mt-5 mr-2"
          :disabled="!isFormCompleted"
          >Valider</Btn
        >
      </p>
    </form>

    <section v-if="isDownloadable">
      <p>
        <Alert type="success"
          >En cliquant sur le bouton télécharger, une nouvelle fenêtre s'ouvrira
          avec votre exercice. Cliquez ensuite sur le bouton de téléchargement
          pour sauvegarder le fichier PDF.</Alert
        >
      </p>
      <p class="flex flex-col items-center">
        <a :href="gift.url" target="blank" :download="gift.docName">
          <Btn>Télécharger l'exercice</Btn></a
        >
      </p>
    </section>
  </div>
</template>
