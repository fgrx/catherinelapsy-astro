<script setup>
import { ref } from "vue";
import chatImage from "../../assets/images/chat.svg";

import ContactForm from "./ContactForm.vue";
import Btn from "./Btn.vue";

const showModal = ref(false);

const toggleModal = () => (showModal.value = !showModal.value);
</script>

<template>
  <button
    @click="toggleModal"
    title="Contact Sale"
    class="fixed z-90 bottom-10 right-8 bg-primary w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 hover:drop-shadow-4xl hover:animate-bounce duration-300"
  >
    <img :src="chatImage" alt="icone de chat" height="32px" width="32px" />
  </button>

  <div
    v-if="showModal"
    class="overflow-x-hidden overflow-y-auto mx-4 fixed inset-0 z-50 animate pop"
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
            @close-form="toggleModal()"
            class="text-left items-start"
            :hasCloseButton="true"
          ></ContactForm>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<style scoped>
.animate.pop {
  animation-duration: 0.5s;
  animation-name: animate-pop;
  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
}

@keyframes animate-pop {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}
</style>
