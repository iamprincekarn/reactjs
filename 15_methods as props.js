//App.js file
import React,{Component} from 'react';
import './App.css';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
class App extends Component{
  render(){
    return (
      <div className="App">
      <ParentComponent/>
    </div>
    )
  }
}

export default App;



//ParentComponent.js file
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName) {
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent



//ChildComponent.js file
import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>
        Greet Parent
      </button>
    </div>
  )
}
export default ChildComponent
