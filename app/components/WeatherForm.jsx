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
        <input type="text" placeholder="Enter City Name" ref="location"></input>
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
