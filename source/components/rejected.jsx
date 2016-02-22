var React = require('react');
import { browserHistory } from 'react-router';

var Rejected = React.createClass({

  componentDidMount() {
    setTimeout(function () {
      browserHistory.push('/welcome')
    }, 6000)
  },

  render: function() {
    return (
      <div className="result">
        <h2>Rejected!!</h2>
        <p>Consider joining the darkside...</p>
      </div>
    );
  }
});

module.exports = Rejected;
