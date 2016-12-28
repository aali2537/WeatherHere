var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <div className="title-bar" data-responsive-toggle="menu">
        <button className="menu-icon" type="button" data-toggle></button>
        <div className="title-bar-title">Menu</div>
      </div>
      <div className ="top-bar" id="menu">
        <div className="top-bar-left">
          <ul className="dropdown vertical medium-horizontal menu">
            <li className="menu-text">WeatherHere</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="dropdown vertical medium-horizontal menu">
            <li>
              <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

module.exports = Nav;
