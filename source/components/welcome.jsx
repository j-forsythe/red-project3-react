import React from 'react';
import { browserHistory } from 'react-router';

//welcome page
var Welcome = React.createClass({

//takes user to question page on button click
  _handleOnClick() {
    browserHistory.push('/mars-test');
  },

  render() {
    return (
      <div className="test-area">
        <button onClick={this._handleOnClick}>Take Test</button>
      </div>
    )
  }

});

module.exports = Welcome;
