import s from "./Display.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/Store";
import {InitialStateType} from "../../State/Reducer";


export const Display = () => {

    const state = useSelector<AppRootStateType, InitialStateType>(state => state.counter)

    const style = state.displayedValue === state.max ? s.red : s.display

    return (
        <div>

            {state.setMode ? <p>Set values and press 'set'</p> : ''}
            {state.error ? <p className={s.incorrect}>Incorrect value</p> : ''}
            {!state.error && !state.setMode &&
                <div className={style}>
                    {state.displayedValue}
                </div>}
        </div>

    )
}