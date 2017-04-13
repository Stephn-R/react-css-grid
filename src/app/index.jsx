import React, { Component, PropTypes } from 'react';

const styles = {};

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   title: 'Hello World!',
    // };
  }

  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
