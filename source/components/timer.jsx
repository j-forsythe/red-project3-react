import React from 'react';

import Questions from './questions.jsx';

var Timer = React.createClass({
  getInitialState: function() {
    return {
      secondsElapsed: this.props.startTimer,
    }
  },

  getSeconds: function() {
    if (this.props.startTime >= 1) {
      return this.props.startTime * 60;
    }
    else {
      return 60;
    }
  },

  secondsLeft: function () {
    return Math.floor(this.state.secondsElapsed % 60);
  },

  minutesLeft: function () {
    return Math.floor(this.state.secondsElapsed / 60);
  },

  tick: function(){
    this.setState({secondsElapsed: this.state.secondsElapsed - 1})
  },

  _startTime(){
    this.interval = setInterval(this.tick, 1000);
  },

  //starts timer on button click
  componentWillReceiveProps: function(props) {
    if(props.start === true){
      this._startTime();
    }
  },

  //takes user to rejected screen at end of timer
  componentDidUpdate() {
    if (this.state.secondsElapsed === 0) this.props.onTimerFinished();
  },

  //prevents memory leak
  componentWillUnmount() {
    clearInterval(this.interval);
  },

  render() {
    var seconds = this.secondsLeft();
    return (
      <div className={this.props.start ? "timer" : "timer hidden"}>
        {this.minutesLeft()}:{seconds < 10 ? '0' + seconds : seconds}
      </div>
    )
  }

});

Timer.protoTypes = {
  startTimer: React.PropTypes.number.isRequired,
  onTimerFinished: React.PropTypes.func.isRequired
};
Timer.defaultProps = {
  startTimer: 60
};

module.exports = Timer;
