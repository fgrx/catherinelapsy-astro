<script setup>
import { ref } from "vue";

import ContactForm from "./ContactForm.vue";
import Btn from "./Btn.vue";

const showModal = ref(false);

const toggleModal = () => (showModal.value = !showModal.value);
</script>

<template>
  <div class="md:ml-4">
    <btn color="gray-200" textColor="dark" @click="toggleModal()">
      <span class="uppercase">Une question ?</span>
      <span class="text-xs"><div>Nous contacter</div></span>
    </btn>

    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto mx-4 fixed inset-0 z-50"
    >
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg bg-gray-100">
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 class="text-3xl font-semibold">Contactez-nous</h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
              v-on:click="toggleModal()"
            >
              ×
            </button>
          </div>
          <!--body-->
          <div class="p-6 flex-auto items-start">
            <ContactForm
              :hasCloseButton="true"
              @close-form="toggleModal()"
              class="text-left items-start"
            ></ContactForm>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<style scoped>
label {
  font-weight: bold;
}
</style>
