<template>
  <nav
    v-show="isVisible"
    :class="!isRaw ? 'absolute bg-dark px-1 z-20 rounded-md' : ''"
  >
    <ul :class="!isRaw ? 'divide-y divide-gray-800' : ''">
      <li
        :class="!isRaw ? 'px-4' : 'px-2'"
        class="text-base my-2"
        v-for="link in links"
        :key="link.title"
      >
        <a
          :href="link.to"
          :target="link.target === '_blank'?'_blank':'_self'"
          class="hover:text-secondary w-full py-2 block"
        >
          <span v-if="link.isLive">Atelier en live</span>
          {{ link.title }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default: {},
    },
    links: {
      type: Array,
      default: [],
    },
    toggle: {
      type: Boolean,
      default: false,
    },
    isDisplayed: {
      type: Object,
      default: false,
    },
    isRaw: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isVisible() {
      if (this.toggle) {
        return this.isDisplayed.id === this.menu.id ? true : false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
li .nuxt-link-active {
  color: #fdea43;
}
</style>
