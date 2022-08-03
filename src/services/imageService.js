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

    return image;
  },

  getImageFormat(dataObject, format) {
    const formats = dataObject.data?.attributes.formats;

    if (!formats) return false;

    if (formats[format]) {
      const { url, width, height } = formats[format];
      return { url, width, height };
    } else {
      const { url, width, height } = dataObject.data.attributes;
      return { url, width, height };
    }
  },
};
