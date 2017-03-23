import React from 'react';
import { render } from 'react-dom';

import Container from './containers/Container/Container.jsx';
import App from './containers/App/App.jsx';
import ObjectUtils from './utils/ObjectUtils';
import './scss/index.scss';
import './scss/abc.css';

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="content">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

render(
  <Container><App/></Container>,
  document.getElementById('root')
);
