import React, { Component, PropTypes } from 'react';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props;

    return (
      <div className="main-container">
        { children && children }
      </div>
    );
  }
}

export default Container;
