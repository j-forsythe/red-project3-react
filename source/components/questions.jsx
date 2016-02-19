import React from 'react';
//
import Timer from './timer.jsx';
// import Welcome from 'welcome.jsx';

var Questions = React.createClass({


  render: function() {
    return (
      <div className="test-area">
          <Timer />
        <button className="evaluate" onClick={this.takeTest}>Begin Evaluation</button>
      </div>
    );
  }

});

module.exports = Questions;
