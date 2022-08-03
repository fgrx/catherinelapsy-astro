<template>
  <div class="md:grid md:grid-cols-3 md:gap-10">
    <div
      class="col-span-1 mb-10 flex flex-col text-white bg-gradient-to-r bg-primary p-5 rounded-md transition-all transform ease-in-out duration-300 hover:scale-105"
      v-for="lettrePsy in lettresPsys"
      :key="lettrePsy.id"
    >
      <a target="blank" :href="lettrePsy.url" class="text-white">
        <h3 class="text-xl">
          <img
            :src="require('~/assets/chain.svg')"
            width="30"
            alt=""
            class="float-left mr-2"
          />{{ lettrePsy.title }}
        </h3>
        <p>Sommaire</p>
        <ul class="flex-1">
          <li
            class="list-decimal"
            v-for="(item, index) in lettrePsy.programme"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>

        <Btn color="dark" text-color="white">Lire la Lettre Psy</Btn>
      </a>
    </div>
  </div>
</template>

<script>
import Btn from "./components/Btn.vue";

export default {
  components: {
    Btn,
  },
  data() {
    return {
      lettresPsys: [
        {
          id: 1,
          title: "Lettre Psy #1",
          url: "https://app.getresponse.com/view.html?x=a62b&m=BCljPQ&mc=Iw&s=Byr7n5t&u=QCxx3&z=EJgpPD&",
          programme: [
            "Est-ce vraiment possible de quitter nos addictions au réseaux sociaux",
            "Finalement c'est quoi l'hypnose ?",
            "Atelier s'installer en libéral et en vivre",
          ],
        },
        {
          id: 2,
          title: "Lettre Psy #2",
          url: "https://app.getresponse.com/view.html?x=a62b&m=BMvfWT&mc=It&s=Byr7n5t&u=QCxx3&z=ECu6SaZ&",
          programme: [
            "Une série pour mieux comprendre l'autisme",
            "Concours : BD d'une auteur qu'on adore",
            "Le bouquin de dev' perso à lire",
          ],
        },
        {
          id: 3,
          title: "Lettre Psy #3",
          url: "https://app.getresponse.com/view.html?x=a62b&m=BQxv81&mc=Iq&s=Byr7n5t&u=QCxx3&z=ESR5hcK&",
          programme: [
            "Les psychothérapies qui marchent",
            "Avez-vous la chance d'être multi-tâche ?",
            "Notre alimentation impacte aussi notre cerveau",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
