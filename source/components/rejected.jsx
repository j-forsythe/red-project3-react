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
      <div className="failure">
        <h2>Rejected!!</h2>
      </div>
    );
  }
});

module.exports = Rejected;
