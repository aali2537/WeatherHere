var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit : function(e){
    e.preventDefault();
    var loc = this.refs.location.value.trim();
    if(loc.length){
      this.refs.location.value = '';
      this.props.onSearch(loc);
    }
  },
  render: function(){
    return (
    <form onSubmit={this.onFormSubmit}>
      <div className="input-group">
          <input className="input-group-field" type="search" placeholder="Enter City Name" ref="location"></input>
          <div className="input-group-button">
            <input type="submit" className="alert button" value="Get Weather"/>
          </div>
      </div>
    </form>
    );
  }
});

module.exports = WeatherForm;
