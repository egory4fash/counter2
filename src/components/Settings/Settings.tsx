import {Button} from "../Button/Button";
import {SettingPanel} from "./SettingsPanel/SettingPanel";
import s from './Settings.module.css'

type SettingsPropsType = {
    min: number,
    max: number,
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    error: boolean
    setSetMode: (value: boolean) => void
    setNumber: (value: number) => void
    setMode: boolean
    onSetPressHandler: () => void
}

export const Settings = (props: SettingsPropsType) => {


    return (
        <div>
            <div className={s.box}>
                <SettingPanel
                    id={'maxSettings'}
                    title={'max value:'}
                    value={props.max}
                    callBack={props.setMaxValue}
                    error={props.error}
                    setSetMode={props.setSetMode}/>
                <SettingPanel
                    id={'minSettings'}
                    title={'min value:'}
                    value={props.min}
                    callBack={props.setMinValue}
                    error={props.error}
                    setSetMode={props.setSetMode}/>
            </div>
            <div className={s.setButton}>
                <Button title={'set?'}
                        error={!props.setMode ? true : props.error}
                        callBack={props.onSetPressHandler}/>

            </div>
        </div>

    )
}