import React, { Component } from 'react';

export default class RecursiveComponent extends Component {
  // write recursive method here
  recursive = n => {
    // return this.props.components.map(comp => {
    const Comp = this.props.components[n];
    if (n <= 0) {
      return <Comp />;
    } else {
      return <Comp>{this.recursive(n - 1)}</Comp>;
    }
  };
  // );
  // };

  render() {
    return (
      <div>
        {/* invoke recursive method here */}
        {this.recursive(2)}
      </div>
    );
  }
}
