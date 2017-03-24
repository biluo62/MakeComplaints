import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import Container from './containers/Container/Container.jsx';
import App from './containers/App/App.jsx';
// import ObjectUtils from './utils/ObjectUtils';
import './scss/index.scss';
import './scss/abc.css';

render(
  <Provider store={ store }>
    <Container><App /></Container>
  </Provider>,
  document.getElementById('root')
);
