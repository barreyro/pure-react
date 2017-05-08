'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var style = {
  backgroundColor: '#151837',
  color: 'white',
  fontFamily: 'verdana'
};

render(React.createElement(
  'h1',
  { id: 'title',
    className: 'header',
    style: style },
  'Hello World'
), document.getElementById('react-container'));
