import React from 'react';
import { browserHistory } from 'react-router';
//
import Timer from './timer.jsx';
import TestQuestions from './test-questions.jsx';

var questionArray = [
    {
      question: "The answer to every is 42",
      answer: true
    },
    {
      question:"Life on mars?",
      answer: true
    },
    {
      question: "I'm blue, if I was green I would die",
      answer: false
    }
];

var Questions = React.createClass({

  getInitialState: function() {
    return {
      startup: false,
    }
  },

  _handleReject() {
    browserHistory.push('/rejected')
  },

  _handleSuccess() {
    browserHistory.push('/accepted')
  },

  _handleBeginTest() {
    this.setState( { startup: true });
  },

  render: function() {
    return (
      <div className="test-area">
          <Timer  start={this.state.startup}
                  startTimer={60}
                  onTimerFinished={this._handleReject}/>
        { !this.state.startup
          ? <button className="evaluate"
                    onClick={this._handleBeginTest}>Begin Evaluation</button>
          : ""}
        { !this.state.startup
          ? ""
          : <TestQuestions  questions={questionArray}
                            onSuccess={this._handleSuccess}
                            onReject={this._handleReject}/> }
      </div>
    );
  }

});

module.exports = Questions;
