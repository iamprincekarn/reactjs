//App.js file
import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import FunctionClick from './components/FunctionClick';
class App extends Component{
  render(){
    return (
      <div className="App">
      <FunctionClick />
    </div>
    )
  }
}

export default App;



//FunctionClick.js file
import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('clicked')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick

