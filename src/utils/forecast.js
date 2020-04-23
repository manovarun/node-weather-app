const axios = require('axios');

const forecast = async (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/55203fae97505dda457c1d3a8ca60c39/${latitude},${longitude}`;

  try {
    const response = await axios({
      method: 'GET',
      url,
    });

    callback(
      undefined,
      `${response.data.daily.data[0].summary}It is currently ${response.data.currently.temperature} degrees out. There is a ${response.data.currently.precipProbability}% chance of rain.`
    );
  } catch (error) {
    callback('Unable to connect to weather service!.', undefined);
  }
};

module.exports = forecast;
