import React from 'react';
import { browserHistory } from 'react-router';


var Welcome = React.createClass({

  _handleOnClick() {
    browserHistory.push('/mars-test');
  },

  render() {
    return (
      <div className="test-area">
        <button className="take-test" onClick={this._handleOnClick}>Take Test</button>
      </div>
    )
  }

});

module.exports = Welcome;
