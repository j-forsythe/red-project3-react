import React from 'react';

// import Questions from 'questions.jsx';
// import Welcome from 'welcome.jsx';


var Timer = React.createClass({

  getInitialState: function() {
    return {
      secondsElapsed: 10
    }
  },

  tick: function(){
    this.setState({secondsElapsed: this.state.secondsElapsed - 1})
  },

  componentDidMount: function(){
     this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    this.clearInterval = clearInterval(this.secondsElapsed <= 0);
  },

  render: function() {
    return (
      <div className="timer">:{this.state.secondsElapsed}</div>
    )
  }

});


module.exports = Timer;
