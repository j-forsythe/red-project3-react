import React from 'react';
import { browserHistory } from 'react-router';
//
import Timer from './timer.jsx';
// import Welcome from 'welcome.jsx';

var Questions = React.createClass({

  getInitialState: function() {
    return {
      start: false
    }
  },

  beginTest: function() {
    this.setState( { start: true });
  },


  render: function() {
    return (
      <div className="test-area">
          <Timer start={this.state.start}/>
        { !this.state.start ? <button className="evaluate" onClick={this.beginTest}>Begin Evaluation</button> : ""}
      </div>
    );
  }

});

module.exports = Questions;
