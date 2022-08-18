<script setup>
import NewsletterForm from "../NewsletterForm.vue";

//import emailIcon from "../../../assets/images/mail.png";

// https://res.cloudinary.com/dyyzsnhr4/image/upload/v1658388187/mail_596664d_5d9d09b680.png
const { title } = defineProps({
  title: { type: String, default: "S'abonner à la Lettre Psy" },
});
</script>

<template>
  <div
    class="bg-gradient-to-r from-primaryDark to-primary text-white py-8 px-5"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div class="flex md:col-span-7 lg:col-span-8 items-center">
          <img
            class="icon md:mr-10 hidden md:block"
            src="https://res.cloudinary.com/dyyzsnhr4/image/upload/v1658388187/mail_596664d_5d9d09b680.png"
            alt="Dessin de courrier"
            width="203"
            height="128"
          />
          <div class="">
            <h2 class="text-secondary text-3xl">{{ title }}</h2>
            <p>
              Une newsletter bimensuelle pour mieux comprendre la psychologie et
              la psychothérapie.
            </p>
          </div>
        </div>

        <div class="flex-1 md:col-span-5 lg:col-span-4">
          <NewsletterForm />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  max-height: 8em;
  fill: white;
  /*transform: rotate(25deg);*/
}
</style>
