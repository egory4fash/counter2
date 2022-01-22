import {Button} from "../Button/Button";
import {SettingPanel} from "./SettingsPanel/SettingPanel";
import s from './Settings.module.css'

export const Settings = () => {
    return (
        <div>
            <div className='Box'>
                <SettingPanel/>
                <SettingPanel/>
            </div>
            <div className={s.setButton}>
                <Button title={'set?'}/>

            </div>
        </div>

    )
}