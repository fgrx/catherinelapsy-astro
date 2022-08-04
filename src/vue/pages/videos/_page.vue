<template>
  <div>
    <div class="bg-gray-100">
      <article>
        <HeaderPage :doc="doc" />
        <div
          class="container mx-auto py-5 px-5 md:w-10/12 lg:w-10/12 xl:w-10/12 content"
        >
          <h2>Nos vidéos sur la psychologie</h2>
          <p>
            Nous publions des vidéos sur le thème de la psychologie sur Youtube.
            Vous pouvez vous abonner à ma chaîne en allant sur
            <a
              class="underline text-rose-700 font-semibold"
              href="https://www.youtube.com/channel/UCuocS66l-pMtFcaP3L01z5Q"
              >ma chaîne Youtube</a
            >.
          </p>
          <ListAlternate :items="items" textBtn="Voir sur Youtube">
          </ListAlternate>
        </div>
      </article>
      <Pagination :pagination="pagination" />
    </div>
  </div>
</template>

<script>
import imageService from "../../services/imageService";

export default {
  async asyncData({ $config: { serverAPI }, $content, params }) {
    const currentPage = parseInt(params.page) || 1;
    const itemsPerPage = 5;

    const { meta } = await fetch(
      `${serverAPI}/youtube-videos?sort=date:desc`
    ).then((res) => res.json());

    const nbItems = meta.pagination.total;
    const nbPages = Math.ceil(nbItems / itemsPerPage);

    const startAt = () => {
      return (currentPage - 1) * itemsPerPage;
    };

    const { data } = await fetch(
      `${serverAPI}/youtube-videos?sort=date:desc&populate=image&pagination[start]=${startAt()}&pagination[limit]=${itemsPerPage}`
    ).then((res) => res.json());

    const itemsToDisplay = data.map((element) => {
      const video = element.attributes;
      video.dir = "videos";
      video.image = imageService.formatImage(video.image, "medium");

      return video;
    });

    const nextPage = currentPage < nbPages ? currentPage + 1 : null;
    const previousPage = currentPage - 1 > 0 ? currentPage - 1 : null;

    const pagination = {
      url: "videos",
      currentPage,
      nextPage,
      previousPage,
      nbPages,
      itemsPerPage,
    };

    return {
      items: itemsToDisplay,
      pagination,
    };
  },

  // export default {
  //   async asyncData({ $content, params }) {
  //     const targetToFetch = "videos";
  //     const currentPage = parseInt(params.page) || 1;
  //     const itemsPerPage = 5;

  //     const allItems = await $content(targetToFetch)
  //       .sortBy("order", "desc")
  //       .fetch();

  //     const nbItems = allItems.length;
  //     const nbPages = Math.ceil(nbItems / itemsPerPage);

  //     const startAt = () => {
  //       return (currentPage - 1) * itemsPerPage;
  //     };

  //     const itemsToDisplay = await $content(targetToFetch)
  //       .sortBy("order", "desc")
  //       .limit(itemsPerPage)
  //       .skip(startAt())
  //       .fetch();

  //     itemsToDisplay.map(
  //       (item) => (item.url = `https://www.youtube.com/watch?v=${item.video}`)
  //     );

  //     const nextPage = currentPage < nbPages ? currentPage + 1 : null;
  //     const previousPage = currentPage - 1 > 0 ? currentPage - 1 : null;

  //     const pagination = {
  //       url: "videos",
  //       currentPage,
  //       nextPage,
  //       previousPage,
  //       nbPages,
  //       itemsPerPage,
  //     };

  //     return {
  //       items: itemsToDisplay,
  //       allItems,
  //       pagination,
  //     };
  //   },
  data() {
    return {
      doc: {
        title: "Mes vidéos",
        logo: "video.svg",
        description:
          "Nous produisons des vidéos sur la psychologie pour vous faire découvrir le monde de la psychothérapie. Nous nous efforçons d'expliquer simplement des concepts parfois complexes afin de vous aider à mieux vous comprendre.",
      },
    };
  },
  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.description,
        },
      ],
    };
  },
};
</script>

<style scoped>
h3 {
  font-family: "Lexend Deca", sans-serif;
}
</style>
