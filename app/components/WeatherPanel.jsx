var React = require('react');

var WeatherPanel = (props) => {
  var {day,tempMin,tempMax,icon} = props;
  return (
    <div className="callout">
      <h5>{day}</h5>
      <h5>{icon}</h5>
      <p>{tempMin}°F - {tempMax}°F</p>
    </div>
  );
}

module.exports = WeatherPanel;
