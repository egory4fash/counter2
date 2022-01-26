import {Button} from "../Button/Button";
import {SettingPanel} from "./SettingsPanel/SettingPanel";
import s from './Settings.module.css'

type SettingsPropsType = {
    min: number,
    max: number,
    setMin: (value: number) => void,
    setMax: (value: number) => void,
    error: boolean
    setError: (value:boolean) => void
    setSetMode:(value:boolean) => void
    setNumber:(value:number) => void
}

export const Settings = (props: SettingsPropsType) => {

    const onSetPressHandler = () => {
        props.setMax(props.max)
        props.setMin(props.min)
        props.setSetMode(false)
        props.setNumber(props.min)

    }

    return (
        <div>
            <div className={s.box}>
                <SettingPanel
                    id={'maxSettings'}
                    title={'max value:'}
                    minValue={props.min}
                    maxValue={props.max}
                    callBack={props.setMax}
                    error={props.error}
                    setError={props.setError}
                setSetMode = {props.setSetMode}/>
                <SettingPanel
                    id={'minSettings'}
                    title={'min value:'}
                    minValue={props.min}
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