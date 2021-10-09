const axios = require('axios');
const transformCarData = require('./data/utils/transform-car-data');

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  responseType: 'json',
  headers: {
    Authorization: 'Client-ID t_ZYi37EH_7j9uKjIlNFDtrzguz6MT5IFthUQVCSDFs'
  }
});
// note: search queries need to be url encoded, i.e. encodeURIComponent('red roses')

const handler = async parameters => {
  const { perPage, query, page } = parameters;

  const url = query.length ? '/search/photos' : '/photos';

  try {
    const unsplashResponse = await unsplashApi.get(url, {
      params: { page, per_page: perPage, query: encodeURIComponent(query) }
    });
    console.log('====', unsplashResponse.data.results[2]);
    return unsplashResponse.data.results.map(item => transformCarData(item));
  } catch (error) {
    return { error };
  }
};

module.exports = handler;
