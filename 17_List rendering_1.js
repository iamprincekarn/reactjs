//App.js file
import React,{Component} from 'react';
import './App.css';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
class App extends Component{
  render(){
    return (
      <div className="App">
      <NameList/>
    </div>
    )
  }
}

export default App;


//NameList.js file
import React from 'react'

function NameList() {
    const names = ['Prince', 'Aman', 'Manish']
    const nameList = names.map(name => <h2>{name}</h2>)
  return (
    <div>
      {/* method-1 */}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}


      {/* method-2 */}
      {/* {names} */}


      {/* method-3 */}
      {/* {
        names.map(name => <h2>{name}</h2>)
      } */}


      {/* method-4 */}
      {nameList}

    </div>
  )
}

export default NameList
