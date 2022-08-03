<template>
  <div
    class="bg-gradient-to-r from-primaryDark to-primary text-white py-8 px-5"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div class="flex md:col-span-7 lg:col-span-8 items-center">
          <img
            class="icon md:mr-10 hidden md:block"
            src="@/assets/mail.png"
            alt=""
            width="200"
            height="100"
          />
          <div class="">
            <h2 class="text-secondary">{{ title }}</h2>
            <p>
              Abonnez-vous gratuitement à notre email bimensuel pour comprendre
              sa psychologie et mieux se connaitre.
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

<script>
export default {
  props: {
    title: {
      type: String,
      default: "S'abonner à la Lettre Psy",
    },
  },
};
</script>

<style scoped>
.icon {
  max-height: 8em;
  fill: white;
  /*transform: rotate(25deg);*/
}
</style>
