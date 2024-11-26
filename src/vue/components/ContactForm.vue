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
      content:"",
      object: "renseignement_atelier",
      error: false,
      messageTherapie:""
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
          if(this.content.length===0){
            await fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              formData,
              body: new URLSearchParams(formData).toString(),
            });

            this.isSent = true;
          }
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
          netlify-honeypot="bot-field"
        >
          <p>
            <label class="block font-semibold"
              >Objet de votre message :
              <select
                v-model="object"
                type="text"
                name="subject"
                :class="`${cssFormLayout}`"
                required
              >
                <option value="renseignement_atelier">
                  Renseignement sur les ateliers
                </option>
                <option value="aide_commande">Aide sur une commande</option>
                <option value="therapie">Demande de thérapie</option>
                <option value="autre">Autre</option>
              </select></label
            >
          </p>

          <Alert type="warning" v-if="object==='therapie'">
            <p class="text-xl">Catherine ne propose plus de consultation en présentiel ou en visio.</p>
            <p>En revanche, Fabien propose des accompagnements en <b>hypnose Eriksonienne et en thérapie Mosaic</b> (proche de l'EMDR).</p>
            <p> Si vous appréciez l’approche de Catherine, nous vous suggérons de consulter les annuaires du CEFTI ou de l’IFEMDR qui proposent des thérapeutes qui ont suivi des formations de qualité identiques à Catherine.</p>
          
          </Alert>

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

          <p class="lePotDeMiel">
            <input name="bot-field" />
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


<style lang="scss" scoped>
.lePotDeMiel {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
}
</style>

