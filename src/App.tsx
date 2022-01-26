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
    let [redLight, setRedLight] = useState(false)

    let [number, setNumber] = useState(min)

    const increaseCounter = () => {
        if (number !== max) {
            setNumber(number + 1)

        } else {
            setNumber(number)
            setRedLight(true)
        }
    }


    const resetCounter = () => {
        setNumber(min)
    }


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
                        setMode={setMode}
                        max={max}/>
                    <Counter error={redLight}
                             increaseCounter={increaseCounter}
                             resetCounter={resetCounter}/>
                </div>
            </div>
        </div>
    );
}

export default App;
