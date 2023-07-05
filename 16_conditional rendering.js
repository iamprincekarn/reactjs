//App.js file
import React,{Component} from 'react';
import './App.css';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
class App extends Component{
  render(){
    return (
      <div className="App">
      <UserGreeting/>
    </div>
    )
  }
}

export default App;


//UserGreeting.js file
import React, { Component } from "react";
class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    //approach-1
    return this.state.isLoggedIn && <div>Welcome Prince</div>

    //approach-2
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Prince</div> :
    //     <div>Welcome Guest</div>
    // )

    //approach-3
    // let message
    // if(this.state.isLoggedIn) message = <div>Welcome Prince</div>
    // else message = <div>Welcome Guest</div>
    // return message

    //approach-4
    // if (this.state.isLoggedIn) return <div>Welcome Prince</div>;
    // else return <div>Welcome Guest</div>;
  }
}
export default UserGreeting;
