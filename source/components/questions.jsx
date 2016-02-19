import React from 'react';
import { browserHistory } from 'react-router';
//
import Timer from './timer.jsx';
// import Welcome from 'welcome.jsx';

var Questions = React.createClass({

  getInitialState: function() {
    return {
      startup: false
    }
  },

  beginTest: function() {
    this.setState( { startup: true });
  },


  render: function() {
    return (
      <div className="test-area">
          <Timer start={this.state.startup} startTime={1}/>
        { !this.state.startup ? <button className="evaluate" onClick={this.beginTest}>Begin Evaluation</button> : ""}
      </div>
    );
  }

});

module.exports = Questions;
