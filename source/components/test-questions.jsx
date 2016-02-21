import React from 'react';
import { browserHistory } from 'react-router';
//
// import Timer from './timer.jsx';
// import Welcome from 'welcome.jsx';

var TestQuestions = React.createClass({

  getInitialState: function() {
    return {
      questionArray: {},
      user_answers: [],
      step: 0
    };
  },

  nextStep: function(){
  this.setState({step: (this.state.step + 1)});
},

// onSubmit: function(e) {
//   e.preventDefault();
//   this.setState({ questions: this.state.questions})
// },


  render: function() {
    return (
      <div className="test-area">
          <form className="test-questions" onSubmit={this.onSubmit}>
            {Object.keys(questionArray).map(function(result) {
                return <p key={1}>{questionArray[result].text}</p>
            })}
          <input type="text"/>
        </form>

      </div>
    );
  }

});


var questionArray = {
    1: {
      text: "how you doin?",
      answer: 42,
      id: 1
    },
    2: {
      text:"sup fool?",
      answer: 42,
      id: 2
    },
    3: {
      text: "yo ho?",
      answer: 42,
      id: 3
    }

};

module.exports = TestQuestions;
