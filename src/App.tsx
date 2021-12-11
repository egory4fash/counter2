import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";



function App() {

    let [number, setNumber] = useState(0)

  return (
    <div className="App">
      <div>con
      <Counter number = {number}/>
      </div>
      <div>stngs
        <Settings />
      </div>
    </div>
  );
}

export default App;
