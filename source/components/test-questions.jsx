import React from 'react';
import { browserHistory } from 'react-router';
//
import CurrentQuestion from './currentquestion.jsx';
// import Welcome from 'welcome.jsx';

var TestQuestions = React.createClass({

  getInitialState: function() {
    return {
      questionIndex: 0,
      correctCount: 0
    }
  },

  componentWillUpdate(nextProps, nextState) {
    if (nextState.questionIndex === nextProps.questions.length) {
      this.state.correctCount === 2
      ? this.props.onSuccess()
      : this.props.onReject();
    }

  },

  render: function() {
    return (
      <div className="test-questions">
        <CurrentQuestion
          currentQuestion={this.props.questions[this.state.questionIndex]}
          onAnswer={this._handleUserAnswer} />
      </div>

    );
  },

  _handleUserAnswer(userAnswer) {
    var correctAnswer = this.props.questions[this.state.questionIndex].answer;
    var currentCorrectCount = this.state.correctCount;

    if (correctAnswer === userAnswer) {
      currentCorrectCount  = currentCorrectCount + 1;
    }
    this.setState({
      correctCount: currentCorrectCount,
      questionIndex: this.state.questionIndex + 1
    });
  },

});

//define proptypes to use universally
TestQuestions.propTypes = {
  questions: React.PropTypes.arrayOf(React.PropTypes.shape({
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.bool.isRequired
  }).isRequired)
};

module.exports = TestQuestions;
