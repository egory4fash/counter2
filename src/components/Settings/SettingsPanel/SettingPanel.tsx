import s from './SettingaPanel.module.css'
import React from "react";


type SettingPanelPropsType = {
    id: string

    title: string,
    callBack: (value: number) => void
    error: boolean,
    setError: (value: boolean) => void
    setSetMode: (value: boolean) => void
    value:number
}

export const SettingPanel = (props: SettingPanelPropsType) => {


    return (
        <div>
            <p>{props.title}</p>
        <div className={props.error ? s.error : s.main}>

            <input className={s.input} type={"number"} value={props.value}/>

        </div>
        </div>
    )
}