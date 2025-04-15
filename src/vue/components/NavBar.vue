<template>
  <div>
    <nav class="w-full bg-dark py-1 mb-70 shadow-lg">
      <div class="container mx-auto flex justify-between">
        <div class="items-center px-5 py-2 mt-0">
          <div class="text-white font-medium text-lg hover:text-secondary">
            <a href="/">
              <div class="title_site_1">Catherine</div>
              <div class="space-x-2">
                <div class="title_site_1 inline-block">la</div>
                <div class="title_site_2 inline-block">Psy</div>
              </div>
            </a>
          </div>
        </div>

        <div class="flex items-center justify-end mr-0 lg:mr-4">
          <div
            class="hidden lg:block lg:flex lg:justify-between lg:bg-transparent"
          >
            <div
              class="flex hidden lg:flex lg:items-center order-3 lg:order-1"
              id="menu"
            >
              <nav>
                <ul
                  class="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0"
                >
                  <li
                    @mouseenter="displaySubMenu(link)"
                    @mouseleave="displaySubMenu({})"
                    v-for="(link, index) in linksWithSubMenu"
                    :key="index"
                  >
                    <a
                      :href="link.to"
                      class="inline-block no-underline hover:text-secondary font-medium text-lg py-2 px-4 lg:-ml-2"
                      >{{ link.text }}</a
                    >

                    <SubNav
                      client:load
                      :isDisplayed="linkToDisplay"
                      :menu="link"
                      :toggle="true"
                      :links="link.children"
                      v-if="link.meta?.subMenu"
                    />
                  </li>
                  <li class="ml-12">
                    <a href="https://ctpsy.podia.com/login">
                      <Btn>
                        <img
                          :src="loginImage.src"
                          width="24"
                          height="24"
                          alt="Image de connexion"
                          class="float-left mr-2"
                        />
                        Connexion
                      </Btn>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="items-center mr-0 lg:mr-4">
            <label for="menu-toggle" class="cursor-pointer lg:hidden block">
              <button
                class="mr-2 text-white"
                aria-label="Open Menu"
                @click="drawer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-8 h-8"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </label>

            <input class="hidden" type="checkbox" id="menu-toggle" />
          </div>
        </div>
      </div>

      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>
      <aside
        class="transform text-white top-0 left-0 w-64 bg-primaryDark fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div
          class="p-5 text-white font-medium text-lg hover:text-red-200 text-center"
        >
          <a href="/">
            <div class="title_site_1">Catherine</div>
            <div class="space-x-2 mt-3">
              <div class="title_site_1 inline-block">la</div>
              <div class="title_site_2 inline-block">Psy</div>
            </div>
          </a>
        </div>

        <ul class="px-4 mt-1">
          <li class="font-medium text-2xl my-5">
            <a
              href="https://ctpsy.podia.com/login"
              class="hover:text-secondary"
            >
              <img
                :src="loginImage.src"
                width="24"
                height="24"
                alt="Image de connexion"
                class="float-left mr-2 mt-1"
              />
              Connexion
            </a>
          </li>

          <li
            v-for="(link, index) in linksWithSubMenu"
            :key="index"
            class="font-medium text-2xl my-5"
            @click="isOpen = false"
          >
            <a class="hover:text-secondary" :href="link.to">{{ link.text }}</a>
            <SubNav
              client:load
              :isDisplayed="linkToDisplay"
              :menu="link"
              :toggle="false"
              :isRaw="true"
              :links="link.children"
              v-if="link.meta?.subMenu"
            />
          </li>
        </ul>

        <div class="fixed bottom-0 w-full"></div>
      </aside>
    </nav>
  </div>
</template>

<script is:inline>
import SubNav from "./SubNav.vue";
import Btn from "./Btn.vue";
import loginImage from "../../assets/images/login.png";

export default {
  components: {
    SubNav,
    Btn,
  },
  props: {
    links: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      isOpen: false,
      linkToDisplay: {},
      loginImage,
    };
  },
  computed: {
    linksWithSubMenu() {
      return this.links.map((link) => {
        switch (link.id) {
          case "ateliers":
            link.children = this.ateliersMenus;
            break;
          case "sejours":
            link.children = this.sejoursMenus;
            break;
          default:
            break;
        }
        return link;
      });
    },
  },

  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    displaySubMenu(link) {
      this.linkToDisplay = link;
    },
  },

  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>

<style scoped>
.title_site_1 {
  padding-top: 0.5em;
  font-size: 1em;
  line-height: 0.5em;
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  transform: rotate(-11deg);
}
.title_site_2 {
  font-size: 1.5em;
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
