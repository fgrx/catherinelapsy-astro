<template>
  <div class="overflow-hidden bg-gradient-to-r from-primaryDark to-primary">
    <div class="container text-center md:text-left mx-auto mt-8 md:mt-0 px-5">
      <div class="md:flex items-center">
        <div class="flex-1">
          <h1 class="text-white">
            <div class="title_site_1 max-w-xl">Catherine</div>
            <div class="space-x-1">
              <div class="title_site_1 inline-block">la</div>
              <div class="title_site_2 inline-block">Psy</div>
            </div>
            <div class="mt-10 text-white subtitle md:max-w-lg">
              <h1 class="text-3xl md:text-4xl">
                {{ subtitle }}
                <p class="text-lg md:text-xl">{{ explanation }}</p>
              </h1>
            </div>
          </h1>
        </div>
        <div class="flex-1">
          <nuxt-picture
            src="images/catefab-photo-small.webp"
            height="650"
            format="webp"
            width="650"
            size=""
            quality="70"
            fit="fill"
            alt="Portraits de Catherine et Fabien"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      default: "",
    },
    explanation: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  filter: drop-shadow(30px 0px 30px rgb(1, 88, 55));
  width: 100%;
}

.title_site_1 {
  font-size: 5em;
  line-height: 0.5em;
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  transform: rotate(-5deg);
}
.title_site_2 {
  font-size: 11em;
  line-height: 1.1em;
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  transform: rotate(-7deg);
}

@media screen and (max-width: 640px) {
  .title_site_1 {
    font-size: 2.5em;
  }

  .title_site_2 {
    font-size: 5.5em;
  }

  .portrait-cate {
    height: 200px;
    width: auto;
  }
}
</style>
