import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import Questions from './components/questions.jsx';
import Welcome from './components/welcome.jsx';
import Timer from './components/timer.jsx';
import NotFound from './components/notfound.jsx';

var MarsApp = React.createClass({

  render: function() {
    return (
      <Router history={browserHistory}>
        <Redirect from='/' to='/welcome' />
        <Route path='/welcome' component={Welcome} />
        <Route path='/mars-test' component={Questions} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }

});


ReactDOM.render(<MarsApp />, document.querySelector('#mars-node'));
