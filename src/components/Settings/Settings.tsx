import {Button} from "../Button/Button";
import {SettingPanel} from "./SettingsPanel/SettingPanel";
import s from './Settings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "../State/Store";
import {InitialStateType, onSetPressHandlerAC, setMaxValueAC, setMinValueAC, setSetModeAC} from "../State/Reducer";


export const Settings = () => {

    const state = useSelector<AppRootStateType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()

    const handlerMin = (value: number) => {
        dispatch(setMinValueAC(value))
    }
    const handlerMax = (value: number) => {
        dispatch(setMaxValueAC(value))
    }
    const setHandler = (value: boolean) => {
        dispatch(setSetModeAC(value))
    }
    const onSetPressHandler = () => {
        dispatch(onSetPressHandlerAC())
        localStorage.setItem("app-state",JSON.stringify(store.getState()))
    }
    return (
        <div>
            <div className={s.box}>
                <SettingPanel
                    id={'maxSettings'}
                    title={'max value:'}
                    value={state.max}
                    callBack={handlerMax}
                    error={state.error}
                    setSetMode={setHandler}/>
                <SettingPanel
                    id={'minSettings'}
                    title={'min value:'}
                    value={state.min}
                    callBack={handlerMin}
                    error={state.error}
                    setSetMode={setHandler}/>
            </div>
            <div className={s.setButton}>
                <Button title={'set?'}
                        error={!state.setMode ? true : state.error} //FIX NAMING-FIX JSX
                        callBack={onSetPressHandler}/>

            </div>
        </div>

    )
}