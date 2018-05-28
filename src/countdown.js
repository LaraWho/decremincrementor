import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import MyHeader from './header';
import About from './about';
import './inc.css';

export default class Countdown extends Component {
  constructor(){
    super();
    this.state={
      number: 0
    }
  }
  countUp() {
    const {number} = this.state;
    var incNum = number+1
    this.setState({
      number: incNum
    })
  }
  countDown() {
    const {number} = this.state;
    var decNum = number-1
    this.setState({
      number: decNum
    })
  }
  reset() {
    this.setState({
      number: 0
    })
  }
  render() {
    var {number} = this.state;
    return (
      <div>
        <MyHeader />
        <About 
        greeting = {'Welcome to my DecremIncrementor!'}
        />
        <p className = 'button'>{number}</p>
        <Button
        onClick={() => this.countUp()}
        >Inc Me!</Button>
        <Button
        onClick={() => this.countDown()}
        >Dec Me!</Button>
        <Button
        onClick={() => this.reset()}
        >Reset Me!</Button>
      </div>
    );
  }
}