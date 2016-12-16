var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var DarkSky = require('DarkSky');
var GeoCoder = require('GeoCoder');
var Loading = require('react-loading');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  handleSearch : function(loc){

    this.setState({
      isLoading: true
    });

    GeoCoder(loc).then((res) =>{
      var lat = res.data.results[0].geometry.location.lat;
      var lng = res.data.results[0].geometry.location.lng;
      var address = res.data.results[0].formatted_address;
      DarkSky.getTemp(lat + "," + lng).then((res) =>{
        this.setState({
          temp: res.data.currently.temperature,
          location: address,
          time: res.data.currently.time,
          data: res.data.daily,
          isLoading: false
        });
      });
    }, (err) =>{
      this.setState({
        isLoading: false
      });
      alert(err);
    });

  },
  render: function(){
    var {temp,location,time,data,isLoading} = this.state;

    function renderResult(){
      if(isLoading){
        return <Loading type='spinningBubbles' color='#000000' />;
      }else if(temp && location){
        return <WeatherResult temp={temp} location={location} time={time} daily={data}/>;
      }
    };
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderResult()}
      </div>
    );
  }
});

module.exports = Weather;
