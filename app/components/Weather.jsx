var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var ErrorModal = require('ErrorModal');
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
      isLoading: true,
      errorMsg: ''
    });

    GeoCoder(loc).then( (res) => {
      var lat = res.data.results[0].geometry.location.lat;
      var lng = res.data.results[0].geometry.location.lng;
      var address = res.data.results[0].formatted_address;

      DarkSky.getTemp(lat + "," + lng).then( (res) => {
        this.setState({
          temp: res.data.currently.temperature,
          location: address,
          time: res.data.currently.time,
          data: res.data.daily,
          isLoading: false
        });
      });
    }, (err) => {
      this.setState({
        isLoading: false,
        errorMsg : err.message
      });
    });

  },
  render: function () {
    var {temp,location,time,data,isLoading,errorMsg} = this.state;

    function renderResult () {
      if (isLoading) {
        return (
          <div className="row">
            <div className="row small-up-1">
              <div className="column">
                <center>
                  <Loading type='bars' color='#000000' />
                </center>
              </div>
            </div>
          </div>
        );
      }else if (temp && location) {
        return <WeatherResult temp={temp} location={location} time={time} daily={data}/>;
      }
    };

    function renderError () {
      if (errorMsg) {
        return <ErrorModal message={errorMsg}/>;
      }
    }

    return (
      <div>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered text-center">
            <h1>WeatherHere</h1>
            <h5>Weather at your fingertips</h5>
            <WeatherForm onSearch={this.handleSearch}/>
          </div>
        </div>
        <div className="row">
          <div className="columns large-12 medium-10 small-centered">
            {renderResult()}
            {renderError()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Weather;
