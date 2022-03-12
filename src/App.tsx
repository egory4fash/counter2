import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {Display} from "./components/Counter/Display/Display";


function App() {

    return (
        <div className="App">
            <div className="settings">
                <div className="box">
                    <Settings/>
                </div>
            </div>
            <div className="counter" >
                <div className="box">
                    <Display/>
                    <Counter/>
                </div>
            </div>
        </div>
    );
}

export default App;
