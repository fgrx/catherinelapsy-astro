export default {
  formatImage: function (dataObject, format) {
    if (!dataObject.data) return false;

    const { url, width, height } = this.getImageFormat(dataObject, format);

    const { name, caption, alternativeText } = dataObject.data.attributes;
    const image = {
      url,
      width,
      height,
      name,
      caption,
      alt: alternativeText,
    };

    const imageWebp = image;

    imageWebp.url = image.url.replace(".png", ".webp");
    imageWebp.url = image.url.replace(".jpg", ".webp");
    imageWebp.url = image.url.replace(".jpeg", ".webp");

    return imageWebp;
  },

  getImageFormat(dataObject, format) {
    const formats = dataObject.data?.attributes.formats;

    if (formats && formats[format]) {
      const { url, width, height } = formats[format];
      return { url, width, height };
    }

    const { url, width, height } = dataObject.data.attributes;
    return { url, width, height };
  },
};
