import s from './SettingaPanel.module.css'
import React from "react";


type SettingPanelPropsType = {
    id: string

    title: string,
    callBack: (value: number) => void
    error: boolean,

    setSetMode: (value: boolean) => void
    value:number
}

export const SettingPanel = (props: SettingPanelPropsType) => {

    const onChangeHandler = (e:any) => {
        props.callBack(e.currentTarget.value)
        props.setSetMode(true)
    }

    return (
        <div>
            <p>{props.title}</p>
        <div >

            <input className={props.error ? s.error : s.input} type={"number"} value={props.value} onChange={onChangeHandler}/>

        </div>
        </div>
    )
}