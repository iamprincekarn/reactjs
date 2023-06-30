//app.js file
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name="Prince" bhagwanName="Ram" >
        hello this is para under greet opening and closing tag
      </Greet>
      <Greet name="Clarke" bhagwanName="Krishna">
        <button>this is button </button>
      </Greet>
      <Greet name="Aman" bhagwanName="Varah" />
    </div>
  );
}

export default App;




//Greet.js file
import React from "react";
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        hello {props.name} says by {props.bhagwanName}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
