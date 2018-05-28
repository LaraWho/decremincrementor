import React, { Component } from 'react';

export default class About extends React.Component {
  render() {
      const {greeting} = this.props;
    return (
      <div>
        <p>{greeting}</p>
      </div>
    );
  }
}