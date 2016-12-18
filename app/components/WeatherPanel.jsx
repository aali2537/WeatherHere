var React = require('react');
import SVGInline from "react-svg-inline"
import clearDay from "./icons/Sun.svg"
import clearNight from "./icons/Moon.svg"
import rain from "./icons/Cloud-Rain.svg"
import snow from "./icons/Cloud-Snow.svg"
import sleet from "./icons/Cloud-Hail-Alt.svg"
import wind from "./icons/Cloud-Wind.svg"
import fog from "./icons/Cloud-Fog.svg"
import cloud from "./icons/Cloud.svg"
import cloudyDay from "./icons/Cloud-Sun.svg"
import cloudyNight from "./icons/Cloud-Moon.svg"

var WeatherPanel = (props) => {
  var {day,tempMin,tempMax,icon} = props;
  var determineIcon = (icon) => {
    switch(icon){
      case "clear-day":
        return clearDay;
        break;
      case "clear-night":
        return clearNight;
        break;
      case "rain":
        return rain;
        break;
      case "snow":
        return snow;
        break;
      case "sleet":
        return sleet;
        break;
      case "wind":
        return wind;
        break;
      case "fog":
        return fog;
        break;
      case "cloudy":
        return cloud;
        break;
      case "partly-cloudy-day":
        return cloudyDay;
        break;
      case "partly-cloudy-night":
        return cloudyNight;
        break;
    }
  }
  return (
    <div className="callout text-center">
      <h5>{day}</h5>
      <SVGInline svg={determineIcon(icon)}/>
      <p>{tempMin}°F - {tempMax}°F</p>
    </div>
  );
}

module.exports = WeatherPanel;
