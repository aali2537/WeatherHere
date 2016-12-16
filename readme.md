## WeatherHere
WeatherHere is a single page React application that grabs weekly forecasts for weather based on user input.

## How To Run
After cloning the repository grab all dependencies by running:
```
npm install
```
The application is powered by the Dark Sky Weather api as well as Google's Geocoder api which can be found here:
* [DarkSky](https://darksky.net/dev/register)
* [Google Maps GeoCoding](https://developers.google.com/maps/documentation/geocoding/get-api-key)
After obtaining both api keys create a file named .env in the root directory with the following contents:
```
DARKSKY_KEY = Dark Sky api key goes here
GOOGLE_KEY = Google GeoCoder Api Key goes here
```
If you've made any changes to files rebuild the bundle.js file by running :
```
webpack
```
Lastly start the server by running :
```
node server.js
```
