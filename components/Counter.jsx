import React, { Component } from 'react';

class Counter extends Component {
  render(props) {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default Counter;
