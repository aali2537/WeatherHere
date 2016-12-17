var express = require('express');
var axios = require('axios');
var app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const GOOGLE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const DARK_SKY_URL = 'https://api.darksky.net/forecast/';

app.use(express.static('public'));
var router = express.Router();
//Query api calls through server to avoid CORS policy violation
router.get('/:hostName', function(req, res) {
  var {hostName} = req.params;

  if(hostName === "DarkSky"){
    var requestUrl = DARK_SKY_URL + process.env.DARKSKY_KEY + "/" +  Object.getOwnPropertyNames(req.query)[0];
  }else{
    var requestUrl = GOOGLE_URL + Object.getOwnPropertyNames(req.query)[0] + "&key=" + process.env.GOOGLE_KEY;
  }

  axios.get(requestUrl).then(function(axiosRes){
    res.json(axiosRes.data);
  }, function(err){
    res.json({status: "error"});
  });
});

// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(PORT, function(){
  console.log("Express server is now running on port" + PORT);
});
