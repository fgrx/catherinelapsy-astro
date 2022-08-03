<template>
  <div class="bg-dark text-gray-200">
    <div class="container mx-auto text-center text-sm py-14">
      <div class="grid grid-cols-4">
        <div class="col-span-4 md:col-span-1 mb-8">
          <a href="/">
            <div class="title_site_1">Catherine</div>
            <div class="space-x-2">
              <div class="title_site_1 inline-block">la</div>
              <div class="title_site_2 inline-block">Psy</div>
            </div>
          </a>
        </div>
        <div class="mb-10 col-span-4 md:col-span-3">
          <nav>
            <ul class="grid grid-cols-2 md:grid-cols-3 gap-2">
              <li v-for="(link, index) in links" :key="index">
                <a :href="link.to" class="hover:text-secondary">{{
                  link.text
                }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="py-15 text-sm">
        <p>
          © 2021
          <a
            href="https://developpeurfullstack.fr"
            class="hover:text-secondary underline"
            >Fabien Grignoux</a
          >
          - Tous droits réservés
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: "Ateliers en ligne",
          to: "/ateliers",
        },
        {
          text: "Lettre Psy",
          to: "/emails-prives",
        },
        {
          text: "Vidéos",
          to: "/videos",
        },
        {
          text: "Podcast",
          to: "/podcast",
        },
        {
          text: "Articles",
          to: "/posts",
        },
        {
          text: "Qui sommes-nous ?",
          to: "/qui-sommes-nous",
        },
        {
          text: "Liens",
          to: "/liens",
        },
        {
          text: "Contact",
          to: "/contact",
        },
        {
          text: "Mentions légales",
          to: "/mentions-legales",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title_site_1 {
  padding-top: 0.5em;
  font-size: 1.8em;
  line-height: 0.5em;
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  transform: rotate(-11deg);
}
.title_site_2 {
  font-size: 2.3em;
  line-height: 1.1em;
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  transform: rotate(-15deg);
}

li {
  font-family: "Lexend Deca";
}

li .nuxt-link-active {
  color: #fdea43;
}
</style>
