const transformCarDataPixabay = rawData => ({
  id: rawData.id,
  image: rawData.previewURL,
  title: 'sample',
  imageWidth: rawData.previewWidth,
  imageHeight: rawData.previewHeight,
  tags: rawData.tags,
  webFormatURL: rawData.webformatURL
});

const transformCarData = rawData => ({
  id: rawData.id,
  image: rawData.urls.regular,
  color: rawData.color,
  description: rawData.description || rawData.alt_description,
  title: 'sample',
  imageWidth: rawData.width,
  imageHeight: rawData.height,
  tags: rawData.tags.map(el => el.title).join(', '),
  webFormatURL: rawData.urls.small,
  link: rawData.links.self
});

module.exports = transformCarData;
