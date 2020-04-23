const axios = require('axios');

const geocode = async (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2FtdmFydW4iLCJhIjoiY2s5OWF5bjQ4MDI2bTNpbnJrdWUxMmU5ZSJ9.V6UT1vkU8Ch36ca-apuRJQ`;

  try {
    const response = await axios({
      method: 'GET',
      url,
    });
    if (response.data.features.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: response.data.features[0].center[0],
        longitude: response.data.features[0].center[1],
        location: response.data.features[0].place_name,
      });
    }
  } catch (err) {
    callback('Unable to connect to location services!', undefined);
  }
};

module.exports = geocode;
