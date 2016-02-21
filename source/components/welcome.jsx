import React from 'react';
import { browserHistory } from 'react-router';


var Welcome = React.createClass({

  evaluateButton() {
    browserHistory.push('/mars-test');
  },

  render: function() {
    return (
      <div className="test-area">
        <button className="take-test" onClick={this.evaluateButton}>Take Test</button>
      </div>
    )
  }

});

module.exports = Welcome;
