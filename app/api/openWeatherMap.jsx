var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9874b7c1381ebeb96c49bc5238de8f42&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (response) {
      if (response.data.cod && response.data.message) {
        throw new Error("Unable to fetch weather");
      } else {
        return response.data.main.temp;
      }
    }, function(err) {
      throw new Error("ERROR: " + err.response.data.message);
    });
  }
}
