<script>
import Alert from "./Alert.vue";
import Btn from "./Btn.vue";

export default {
  transition: {
    name: "slide",
    mode: "out-in",
  },
  components: {
    Alert,
    Btn,
  },
  props: {
    hasCloseButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      color: "rose-600",
      cssFormLayout: `block w-full py-3 px-1 mt-2 text-gray-800  rounded  focus:${this.color}`,
      isSent: false,
      name: "",
      email: "",
      message: "",
      object: "renseignement_atelier",
      error: false,
    };
  },
  computed: {
    isFormCompleted() {
      if (
        this.object &&
        this.name.length > 3 &&
        this.message.length > 5 &&
        this.isValidEmail(this.email)
      )
        return true;
      return false;
    },
  },
  methods: {
    async sendMessage() {
      if (this.isFormCompleted) {
        const formData = {
          "form-name": "contact",
          name: this.name,
          email: this.email,
          message: this.message,
        };

        try {
          const res = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            formData,
            body: new URLSearchParams(formData).toString(),
          });

          this.isSent = true;
        } catch (error) {
          console.error(error);
          this.error =
            "Une erreur s'est produite... N'hésitez pas à me contacter par Instagram ! Merci pour votre patience :) .";
        }
      } else {
        this.error = "Veuillez remplir tous les champs s'il vous plait.";
      }
    },
    closeAction() {
      this.$emit("close-form");
    },
    isValidEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<template>
  <div class="mt-5">
    <transition name="slide">
      <div>
        <Alert v-if="isSent" type="success" title="Message envoyé"
          >Merci pour votre message, nous nous efforcerons de vous répondre le
          plus rapidement possible.</Alert
        >

        <Alert v-if="error" type="error" title="Erreur : Message non envoyé">{{
          error
        }}</Alert>
      </div>
    </transition>

    <transition name="slide">
      <div>
        <form
          v-if="!isSent"
          class="text-left"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <p>
            <label class="block font-semibold"
              >Objet de votre message :
              <select
                v-model="object"
                type="text"
                name="object"
                :class="`${cssFormLayout}`"
                required
              >
                <option value="renseignement_atelier">
                  Renseignement sur les ateliers
                </option>
                <option value="aide_commande">Aide sur une commande</option>
                <option value="autre">Autre</option>
              </select></label
            >
          </p>

          <p class="mt-5">
            <label class="block font-semibold"
              >Votre nom :
              <input
                v-model="name"
                type="text"
                name="name"
                :class="`${cssFormLayout}`"
                required
            /></label>
          </p>
          <p class="mt-5">
            <label class="block font-semibold"
              >Votre adresse email :
              <input
                v-model="email"
                type="email"
                name="email"
                :class="`${cssFormLayout}`"
            /></label>
          </p>
          <p class="mt-5">
            <label class="block font-semibold"
              >Votre message :
              <textarea
                v-model="message"
                rows="8"
                name="message"
                :class="`${cssFormLayout}`"
              ></textarea>
            </label>
          </p>
          <p>
            <div class="flex">
              <Btn
                @click="sendMessage"
                typeButton="button"
                class="mt-5 mr-2"
                :disabled="!isFormCompleted"
                >Envoyer</Btn
              >

              <Btn
                v-if="hasCloseButton"
                @click="closeAction"
                typeButton="button"
                class="mt-5 mr-2"
                color="black"
                >Fermer</Btn
              >

            </div>
            
          </p>
        </form>
      </div>
    </transition>
  </div>
</template>


