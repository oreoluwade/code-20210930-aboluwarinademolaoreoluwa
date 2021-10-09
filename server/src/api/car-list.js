const unsplashAPI = require('./unsplash');

async function getCarList() {
  return unsplashAPI({ query: 'vehicle', page: 1, perPage: 50 })
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}

module.exports = getCarList;
