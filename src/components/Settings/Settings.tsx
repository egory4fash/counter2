import {Button} from "../Button/Button";
import {SettingPanel} from "./SettingsPanel/SettingPanel";
import s from './Settings.module.css'

type SettingsPropsType = {
    min: number,
    max: number,
    setMaxValue:(value:number) => void
    error: boolean
    setError: (value:boolean) => void
    setSetMode:(value:boolean) => void
    setNumber:(value:number) => void
}

export const Settings = (props: SettingsPropsType) => {



    return (
        <div>
            <div className={s.box}>
                <SettingPanel
                    id={'maxSettings'}
                    title={'max value:'}
                   value = {props.max}
                    callBack={props.setMaxValue}
                    error={props.error}
                    setError={props.setError}
                setSetMode = {props.setSetMode}/>
                <SettingPanel
                    id={'minSettings'}
                    title={'min value:'}

                    maxValue={props.max}
                    callBack={props.setMin}
                    error={props.error}
                    setError={props.setError}
                    setSetMode = {props.setSetMode}/>
            </div>
            <div className={s.setButton}>
                <Button title={'set?'} error = {props.error} callBack={onSetPressHandler}/>

            </div>
        </div>

    )
}