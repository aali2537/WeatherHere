var React = require('react');

var WeatherPanel = (props) => {
  var {day,tempMin,tempMax,icon} = props;
  return (
    <div>
      <h3>{day}</h3>
      <h3>{icon}</h3>
      <p>{tempMin}°F - {tempMax}°F</p>
    </div>
  );
}

module.exports = WeatherPanel;
