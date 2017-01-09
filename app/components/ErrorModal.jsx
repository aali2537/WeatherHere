var React = require('react');
var ReactDOM = require('react-dom')
var ReactDOMServer = require('react-dom/server')

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: "Error"
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var modal;
    var {title,message} = this.props;

    var modalMarkup =  (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4 id="error-title">{title}</h4>
        <p>{message}</p>
        <p>
          <button id="errorButton" className="alert button" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    /*Foundation removes the error modal from the dom which causes React to error out trying to find the removed component
    so we bypass this by simply rendering an empty div instead of the modal and manually adding the error modal to the
    empty div using jQuery*/
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    //Remove reveal-overlay div before creating another to avoid duplicates
    $(".reveal-overlay").remove();
    modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div/>
    )
  }
});

module.exports = ErrorModal;
