var axios = require('axios');

const GOOGLE_GEOCODE_URL = '/api/GeoCode?'

var GeoCoder = function(address){
  address = encodeURIComponent(address);
  var requestUrl = GOOGLE_GEOCODE_URL + address;

  return axios.get(requestUrl).then(function(res){
    if(res.data.status !== "OK"){
      throw new Error(res.data.status);
    }
    return res;
  }, function(err){
    throw new Error(res.data.message);
  })
};

module.exports = GeoCoder;
