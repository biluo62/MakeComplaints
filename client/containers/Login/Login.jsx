import React, { Component, PropTypes } from 'react';
import { connectAdvanced } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLang } from 'redux-pagan';

import * as loginActions from '../../actions/login';
import ObjectUtils from '../../utils/ObjectUtils';

import './Login.scss';

class Login extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    i18n: PropTypes.func.isRequired
  }

  render() {
    const { i18n } = this.props;
    return (
      <div className="login-main">
        { i18n('login', 'content').s }
        <div className="login-mask">
          <div className="background-mask" />
        </div>
      </div>
    );
  }
}

const selectorFactory = (dispatch) => {
  let result = {};

  const loginDispatchActions = bindActionCreators(loginActions, dispatch);
  return (nextState, nextOwnProps) => {
    const loginState = nextState.login;
    const i18n = getLang(nextState.i18n, 'app');
    const nextResult = { ...nextOwnProps, ...loginState, i18n, ...loginDispatchActions };
    result = ObjectUtils.shallowEqual(result, nextResult) ? result : nextResult;
    return result;
  };
};

export default connectAdvanced(selectorFactory)(Login);
