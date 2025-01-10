export default {
  formatImage: function (dataObject, format) {
    if (!dataObject) return false;

    const { url, width, height } = this.getImageFormat(dataObject, format);

    const { name, caption, alternativeText } = dataObject;
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
    const formats = dataObject.formats;

    if (formats && formats[format]) {
      const { url, width, height } = formats[format];
      return { url, width, height };
    }

    const { url, width, height } = dataObject;
    return { url, width, height };
  },
};
