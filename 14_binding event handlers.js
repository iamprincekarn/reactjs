//thik se ye smjh nhi aaya ki bind ka akhir use hi kyu krte hai, bs yd rkho


//App.js file
import React,{Component} from 'react';
import './App.css';
import EventBind from './components/EventBind';
class App extends Component{
  render(){
    return (
      <div className="App">
      <EventBind />
    </div>
    )
  }
}
export default App;



//EventBind.js file
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }

    //   we have to write this line during third approach
      this.clickHandler = this.clickHandler.bind(this)

    }
    clickHandler()
      {
        this.setState({
            message: 'Good Bye!'
        })
      }
    
  render() {
    return (
      <div>
      <div>{this.state.message}</div>
      {/* first approach */}
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

      {/* second approach */}
        {/* <button onClick={() => this.clickHandler()}>click</button> */}

      {/* third approach */}
        <button onClick={this.clickHandler}>click</button>
        
      </div>
    )
  }
}
export default EventBind
