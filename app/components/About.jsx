var React = require('react');

var About = (props) =>{
  return (
    <div className="columns medium-6 large-4 small-centered text-center">
      <h1>About</h1>
      <p>WeatherHere is an application that can grab weekly and current weather forecasts from anywhere in the world! WeatherHere is
        <a href="https://darksky.net/poweredby/"> powered by DarkSky</a>.</p>
    </div>
  );
}

module.exports = About;
