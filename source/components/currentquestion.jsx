var React = require('react');

var CurrentQuestion = React.createClass({

  render: function() {
    return (
      <div>
        <p>{this.props.currentQuestion.question}</p>
        <button onClick={() => this.props.onAnswer(true)}>True</button>
        <button onClick={() => this.props.onAnswer(false)}>False</button>
      </div>
    );
  }

});

CurrentQuestion.propTypes = {
  currentQuestion: React.PropTypes.shape({
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.bool.isRequired
  }).isRequired,
  onAnswer: React.PropTypes.func.isRequired
};

module.exports = CurrentQuestion;
