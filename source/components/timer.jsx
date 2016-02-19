import React from 'react';

import Questions from './questions.jsx';
// import Welcome from 'welcome.jsx';


var Timer = React.createClass({


  getInitialState: function() {
    // var seconds = this.getSeconds();

    return {
      secondsElapsed: 60,
      // minutesElapsed: 1
    }
  },

  getSeconds: function() {
    return (this.state.secondsElapsed >= 60 ? Math.floor(this.state.secondsElapsed % 60) : 60
  );
  },

  minutesLeft: function () {
    return Math.floor(this.state.secondsElapsed / 60)
  },


  tick: function(){
    // this.setState({minutesElapsed: this.state.minutesElapsed - 1})
    // if (this.state.minutesElapsed === 0) {
    //   clearInterval(this.interval);
    // }
    this.setState({secondsElapsed: this.state.secondsElapsed - 1})
    if (this.state.secondsElapsed === 0){
      clearInterval(this.interval)
    }

  },

  componentDidMount: function(props){
     this.interval = setInterval(this.tick, 1000);
     if(this.props.beginTest && this.interval){
       this.tick(); }
  },

  clearTimer: function() {
    clearInterval(this.interval);
  },

  showHideTimer: function() {
    return this.props.start ? "timer" : "timer hidden"
  },

  render: function() {
    var seconds = this.state.secondsElapsed;
    return (
      <div className={this.showHideTimer()}>
        {this.minutesLeft}:{seconds < 10 ? '0' + seconds : seconds}
      </div>
    )
  }

});


module.exports = Timer;
