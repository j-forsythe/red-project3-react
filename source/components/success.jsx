var React = require('react');

var Accepted = React.createClass({

  render: function() {
    return (
      <div className="result">
        <h2>Accepted!</h2>
        <p>Congratulations, you did it!</p>
      </div>
    );
  }

});

module.exports = Accepted;
