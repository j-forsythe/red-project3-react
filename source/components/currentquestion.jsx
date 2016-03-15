var React = require('react');

//iterate through question array and capture user answer
var CurrentQuestion = React.createClass({

  render: function() {
    return (
      <div>
        <p>{this.props.currentQuestion.question}</p>
        <input ref="userInput" type="text" placeholder="true or false?" required/>
        <button onClick={this._answer}>Submit Answer</button>
      </div>
    );
  },

  _answer(){
    this.props.onAnswer(this.refs.userInput.value);
    this.refs.userInput.value = '';
  }

});

CurrentQuestion.propTypes = {
  currentQuestion: React.PropTypes.shape({
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired
  }),
  onAnswer: React.PropTypes.func.isRequired,
};

module.exports = CurrentQuestion;
