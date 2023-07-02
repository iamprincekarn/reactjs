props vs state
props passed to the component        state is managed within the component

state

// app.js file
import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message_using_class from './components/Message_using_class'
import Message_using_function from './components/Message_using_function'
class App extends Component{
  render(){
    return (
      <div className='App'>
        <Message_using_class/>
        <Message_using_function/>
      </div>
    )
  }
}

export default App;


// Message_using_class file
import React,{Component} from "react";
class Message extends Component{
    constructor() {
        super()
        this.state = {
            message: 'welcome visitor class me aaye ho'
        }
    }
    changeMessage() {
        this.setState({
            message: 'thank you for subscribing'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}
export default Message;


// Message_using_function file
import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState('welcome visitor function me aaye ho');

  const changeMessage = () => {
    setMessage('thank you for subscribing');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>subscribe</button>
    </div>
  );
};

export default Message;


