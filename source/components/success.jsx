var React = require('react');

var Accepted = React.createClass({

  render: function() {
    return (
      <div className="testing">
        <i className="fa fa-space-shuttle icon"></i>
        <div className="result">
          <h2>Accepted!</h2>
        </div>
      </div>
    );
  }

});

module.exports = Accepted;
