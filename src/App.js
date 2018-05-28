import React, { Component } from 'react';
import Countdown from './countdown';
import MyHeader from './header';
import About from './about';
import { Button } from 'semantic-ui-react';
import './inc.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Countdown/>
      </div>
    );
  }
}

export default App;

