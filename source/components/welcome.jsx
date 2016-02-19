import React from 'react';

var Welcome = React.createClass({

  takeTest() {
    this.props.history.push('/questions');
  },

  render: function() {
    return (
      <button className="take-test" onClick={this.takeTest}>Take Test</button>
    )
  }

});

module.exports = Welcome;
