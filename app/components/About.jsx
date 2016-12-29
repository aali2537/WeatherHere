var React = require('react');

var About = (props) =>{
  return (
    <div className="columns medium-6 large-4 small-centered text-center">
      <h1 className="page-title">About</h1>
      <p>WeatherHere is an application that can grab weekly and current weather forecasts from anywhere in the world! WeatherHere is
         fully open-source and can be found at <a className="active" href="https://github.com/aali2537/WeatherHere"> github</a>. Additionally WeatherHere
          is powered by the Dark Sky Api which can be found <a className="active" href="https://darksky.net/poweredby/"> here</a>  .</p>
    </div>
  );
}

module.exports = About;
