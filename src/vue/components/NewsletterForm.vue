<script setup>
import { computed, ref } from "vue";

const { codeList } = defineProps({
  codeList: {
    type: String,
    default: "qD1uT",
  },
});

const falseCodeList = "ABCD";

const newSubscriber = ref({ name: "", email: "" });

const isValidEmail = computed(() => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(newSubscriber.value.email);
});

const isValidForm = computed(() => {
  if (isValidEmail && newSubscriber.value.email && !newSubscriber.value.name)
    return true;
  return false;
});
</script>

<template>
  <form
    action="https://app.getresponse.com/add_subscriber.html"
    accept-charset="utf-8"
    method="post"
  >
    <div>
      <label class="block font-medium" for="email"
        >Saisissez votre adresse email :</label
      >
      <div class="flex">
        <input
          type="text"
          name="name"
          v-show="false"
          v-model="newSubscriber.name"
          id="name"
          class="flex-1 required email input w-full px-3 py-2 pb-2 text-dark"
          placeholder="Milton Erickson"
        />
        <input
          type="text"
          name="email"
          v-model="newSubscriber.email"
          id="email"
          class="flex-1 required email input w-full px-3 py-2 pb-2 text-dark"
          placeholder="martin.dubois@gmail.com"
        />
        <input
          type="submit"
          :disabled="!isValidForm"
          value="s'inscrire"
          id="mc-embedded-subscribe"
          class="flex font-bold bg-dark text-white hover:bg-secondary px-5 py-3 cursor-pointer hover:text-dark text-bold"
        />
        <input
          type="hidden"
          name="campaign_token"
          :value="isValidEmail ? codeList : falseCodeList"
        />
        <input type="hidden" name="start_day" value="0" />
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
