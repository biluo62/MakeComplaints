import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setState } from '../../actions/homepage';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    content: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(setState({ content: 'Modified Redux Data' }));
    }, 5000);
  }

  render() {
    const { children, content } = this.props;

    return (
      <div className="main-container">
        { children && children }
        <h1>{ content }</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.homepage.content
  };
};

export default connect(mapStateToProps)(Container);
