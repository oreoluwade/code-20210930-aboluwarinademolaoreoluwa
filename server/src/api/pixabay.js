const axios = require('axios');
const transformCarData = require('./data/utils/transform-car-data');

const pixa = axios.create({
  baseURL: 'https://pixabay.com/api',
  responseType: 'json'
});
pixa.interceptors.request.use(config => {
  config.params = {
    key: '23725427-83518c8ad47f32f804e1929da',
    ...config.params
  };
  return config;
});
// note: search queries need to be url encoded, i.e. encodeURIComponent('red roses')

const handler = async parameters => {
  const { perPage, query, page } = parameters;

  try {
    const pixabayResponse = await pixa.get('', {
      params: { page, per_page: perPage, q: encodeURIComponent(query) }
    });

    console.log(pixabayResponse.data.hits[4]);
    return pixabayResponse.data.hits
      .filter(
        el =>
          el.tags.split(',').includes('car') ||
          el.tags.split(',').includes('automobile')
      )
      .map(item => transformCarData(item));
  } catch (error) {
    return error;
  }
};

module.exports = handler;
