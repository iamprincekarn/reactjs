// destruturing object means storing value of different properties of object into different variables

//App.js file
import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet';
class App extends Component{
  render(){
    return (
      <div className="App">
      <Greet name="Prince" bhagwanName="Ram" >
        hello this is para under greet opening and closing tag
      </Greet>
    </div>
    )
  }
}
export default App;


//Greet.js file
import React from "react";
// const Greet = (props) => {
const Greet = ({name,bhagwanName,children}) => {
  return (
    <div>
      <h1>
        {/* hello {props.name} says by {props.bhagwanName} */}
        hello {name} says by {bhagwanName}
      </h1>
      {children}
    </div>
  );
};
export default Greet; 




