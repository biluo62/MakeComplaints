import React from 'react';
import { render } from 'react-dom';

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
  <CommentBox />,
  document.getElementById('root')
);
