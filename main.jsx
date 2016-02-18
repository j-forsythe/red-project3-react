var React = require('react');
var ReactDOM = require('react-dom');

var MarsApp = React.createClass({

  // getInitialState: function() {
  //   return ''
  // },

  render: function() {
    return (
      <div className="app">
        <header>
          <h1 className="title">Mars</h1>
          <div className="shuttle">
            <i className="fa fa-space-shuttle"></i>
          </div>
        </header>
        <section className="test-area">
          <button className="take-test">Take Test</button>
          <div className="timer">1:00</div>
        </section>
    </div>
    )
  }

});


ReactDOM.render(<MarsApp />, document.querySelector('#mars-node'));
