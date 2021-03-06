var axios = require('axios');

const DARK_SKY_URL = '/api/DarkSky?';

module.exports = {
  getTemp: function(location){
    var requestUrl = `${DARK_SKY_URL}${location}`;
    return axios.get(requestUrl).then(function(res){
      if(res.data.status === "error"){
        throw new Error("Failed to get weather.");
      }
      return res;
    }, function(err){
      throw new Error("Failed to get weather.");
    });
  }
};
