<template>
  <section v-if="message && message.display" class="bg-secondary text-dark">
    <div class="shadow-2xl">
      <div class="container mx-auto py-5 px-5">
        <div class="md:flex items-center">
          <div class="hidden md:block flex-initial"></div>
          <div class="md:flex-grow">
            <h2>{{ message.title }}</h2>
            <p>{{ message.content }}</p>
          </div>
          <div class="md:flex-1 md:pl-4 mt-3 md:mt-0 justify-items-end">
            <a v-if="message.buttonUrl" :href="message.buttonUrl">
              <Btn :color="message.buttonColor || 'rose-600'">
                {{ message.buttonTitle }}
              </Btn>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    message() {
      return this.general.message;
    },
  },
  data() {
    return {
      general: {},
    };
  },
  async fetch() {
    this.general = await this.$content("general").fetch();
  },
  fetchOnServer: true,
};
</script>

<style scoped></style>
