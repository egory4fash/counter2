import {Button} from "../Button/Button";
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../State/Store";
import {increaseCounterAC, InitialStateType, resetCounterAC} from "../State/Reducer";


export const Counter = () => {

    const state = useSelector<AppRootStateType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()

    const increaseHandler = () => {
        dispatch(increaseCounterAC())
    }
    const resetHandler = () => {
        dispatch(resetCounterAC())
    }
    const incrementOff = state.displayedValue === state.max

    return (
        <div className={s.box}>
            <div>
            </div>
            <div className={s.buttons}>
                <Button
                    error={incrementOff || state.setMode}
                    title={'add'}
                    callBack={increaseHandler}/>

                <Button
                    error={state.setMode}
                    title={'reset'}
                    callBack={resetHandler}
                />
            </div>
        </div>
    )
}