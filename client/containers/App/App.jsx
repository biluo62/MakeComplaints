import React, { Component, PropTypes } from 'react';

import LifeCycle from '../../test/components/LifeCycle/LifeCycle.jsx';

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props);

    this.state = {
      content: 'life cycle component props content 0'
    }
  }

  onChangeContent = () => {
    const { content: preContent } = this.state;

    const nextContent = preContent.replace(/(\d+)/, function (search, group) {
      return parseInt(group, 10) + 1;
    });
    console.log(nextContent, '-----------------')

    this.setState({ content: nextContent });
  }

  render() {
    const { children } = this.props;
    const { content } = this.state;

    return (
      <div className="main">
        { children && children }
        <LifeCycle content={ content } onChangeContent={this.onChangeContent}></LifeCycle>
      </div>
    );
  }
}

export default App;
