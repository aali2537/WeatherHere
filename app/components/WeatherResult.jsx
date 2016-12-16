var React = require('react');
var WeatherPanel = require('WeatherPanel');
var convertTime = require('convertTime');

var WeatherResult = (props) => {
  var {temp,location,time,daily} = props;
  time = convertTime.convertFull(time);
  daily.data.pop();
  function generatePanel(){
    return daily.data.map(function(currVal,index,arr){
      var day = convertTime.getDay(currVal.time);
      var icon = currVal.icon;
      var tempMin = currVal.temperatureMin;
      var tempMax = currVal.temperatureMax;
      return (
        <WeatherPanel day={day} icon={icon} tempMin={tempMin} tempMax={tempMax}/>
      );
    })
  }

  return (
    <div>
      <h2>{location}</h2>
      <h3>{time}</h3>
      <h3>{temp}°F</h3>
      {generatePanel()}
    </div>
  );
}

module.exports = WeatherResult;
