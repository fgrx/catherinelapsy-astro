<script setup>
import { computed, ref } from "vue";

const { codeList } = defineProps({
  codeList: {
    type: String,
    default: "qD1uT",
  },
});

const falseCodeList = "ABCD";

const newSubscriber = ref({ pot: "", email: "" });

const isValidEmail = computed(() => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(newSubscriber.value.email);
});

const isValidForm = computed(() => {
  if (isValidEmail && newSubscriber.value.email && !newSubscriber.value.pot)
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
          name="simplename"
          v-model="newSubscriber.pot"
          id="simplename"
          class="lePotDeMiel"
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
