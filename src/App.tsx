import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {Display} from "./components/Counter/Display/Display";


function App() {

    let [min, setMin] = useState(0)
    let [max, setMax] = useState(5)
    let [error, setError] = useState(false)
    let [setMode, setSetMode] = useState(false)

    useEffect(() => {
        let minValueString = localStorage.getItem("MinValue")
        if (minValueString) {
            setMin(JSON.parse(minValueString))
            setDisplayedValue(JSON.parse(minValueString))
        }
        let maxValueString = localStorage.getItem("MaxValue")
        if (maxValueString) {
            setMax(JSON.parse(maxValueString))}
    },[])



    let [displayedValue, setDisplayedValue] = useState(min)



    const increaseCounter = () => {
        if (displayedValue !== max) {
            setDisplayedValue(displayedValue + 1)
        } else {
            setDisplayedValue(displayedValue)
        }
    }
    const resetCounter = () => {
        setDisplayedValue(min)
    }

    const setMaxValue = (value: number) => {
        if (value <= 0) {
            setMax(0)
            setError(true)
        } else if (value > min) {
            setMax(value)
            setError(false)
        } else {
            setMax(value)
            setError(true)
        }
    }

    const setMinValue = (value: number) => {
        if (value <= 0) {
            setMin(0)
            if (max === 1) {
                setError(false)
            }
        } else if (value >= max) {
            setMin(value)
            return setError(true)
        } else {
            setMin(value)
            setError(false)
        }
    }

    const onSetPressHandler = () => {
        setSetMode(false)
        setDisplayedValue(min)
        localStorage.setItem("MinValue",JSON.stringify(min))
        localStorage.setItem("MaxValue",JSON.stringify(max))
    }

    const incrementOff = displayedValue === max


    return (
        <div className="App">
            <div className="settings">
                <div className="box">
                    <Settings
                        min={min}
                        max={max}
                        setMaxValue={setMaxValue}
                        setMinValue={setMinValue}
                        error={error}
                        setSetMode={setSetMode}
                        setNumber={setDisplayedValue}
                        setMode={setMode}
                        onSetPressHandler={onSetPressHandler}
                    />
                </div>

            </div>
            <div className="counter" id={'box'}>
                <div className="box">
                    <Display
                        displayedValue={displayedValue}
                        error={error}
                        setMode={setMode}
                        max={max}/>
                    <Counter
                        error={incrementOff}
                        increaseCounter={increaseCounter}
                        resetCounter={resetCounter}
                        setMode={setMode}/>
                </div>
            </div>
        </div>
    );
}

export default App;
