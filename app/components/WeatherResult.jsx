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
        <div className="column">
          <WeatherPanel day={day} icon={icon} tempMin={tempMin} tempMax={tempMax}/>
        </div>
      );
    })
  }

  return (
    <div>
      <div className="text-center">
        <h2>{location}</h2>
        <h3>{time}</h3>
        <h3>{temp}°F</h3>
      </div>
      <div className="row medium-up-7">
        {generatePanel()}
      </div>
    </div>
  );
}

module.exports = WeatherResult;
