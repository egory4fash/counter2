import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {Display} from "./Display";



function App() {

    let [number, setNumber] = useState(0)

  return (
    <div className="App">
        <div className = "settings">
            <div className = "box">
                <Settings />
            </div>

        </div>
        <div className = "counter">
            <div className = "box">
                <Display number={number} />
                <Counter number={number} />
            </div>
        </div>
    </div>
  );
}

export default App;
