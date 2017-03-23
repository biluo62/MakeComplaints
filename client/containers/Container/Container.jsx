import React, { Component, PropTypes } from 'react';

class Container extends Component {
  static propsTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props);
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
