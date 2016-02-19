import React from 'react';

var Welcome = React.createClass({

  evaluateButton() {
    this.props.history.push('/mars-test');
  },

  render: function() {
    return (
      <div class="test-area">
        <button className="take-test" onClick={this.evaluateButton}>Take Test</button>
      </div>
    )
  }

});

module.exports = Welcome;
