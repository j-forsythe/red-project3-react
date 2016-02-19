import React from 'react';

// import Questions from 'questions.jsx';
// import Welcome from 'welcome.jsx';


var Timer = React.createClass({

  getInitialState: function() {
    return {
      timeElapsed: 6000,
      secondsElapsed: 60,
      minutesElapsed: 1
    }
  },

  tick: function(){
    this.setState({secondsElapsed: this.state.secondsElapsed - 1})
      if (this.state.secondsElapsed <=0) {
        clearInterval(this.interval);
      }
  },

  componentDidMount: function(){
     this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    var seconds = this.state.secondsElapsed;
    return (
      <div className="timer">{this.state.minutesElapsed}:{seconds < 10 ? '0' + seconds : seconds}</div>
    )
  }

});


module.exports = Timer;
