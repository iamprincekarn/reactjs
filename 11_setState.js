// App.js file
import React,{Component} from 'react';
import './App.css';
import Counter from './components/Counter';
class App extends Component{
  render(){
    return (
      <div className='App'>
        <Counter/>
      </div>
    )
  }
}

export default App;


//Counter.js file
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    //we should pass first parameter as a function as react make one call of setState over numerous call of react then problem arise refer codeevolution tut11 11:00
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('callback value:', this.state.count) //this will run after running setState function
    // })

    this.setState(
      (prevState,props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("callback value:", this.state.count); //this will run after running setState function
      }
    );
    console.log(this.state.count); //this will run before running setState function
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        count = {this.state.count}
        <button onClick={() => this.incrementFive()}>increase count</button>
      </div>
    );
  }
}

export default Counter;
