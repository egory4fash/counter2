import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {Display} from "./components/Counter/Display/Display";


function App() {

    let [min, setMin] = useState(0)
    let [max, setMax] = useState(5)
    let [error, setError] = useState(false)
    let [setMode, setSetMode] = useState(false)

    let [number,setNumber] = useState(min)



    return (
        <div className="App">
            <div className="settings">
                <div className="box">
                    <Settings
                        min={min}
                        max={max}
                        setMax={setMax}
                        setMin={setMin}
                        error={error}
                        setError={setError}
                        setSetMode={setSetMode}
                        setNumber={setNumber}
                    />
                </div>

            </div>
            <div className="counter">
                <div className="box">
                    <Display
                        number={number}
                        error={error}
                        setMode={setMode}/>
                    <Counter error={error}/>
                </div>
            </div>
        </div>
    );
}

export default App;
