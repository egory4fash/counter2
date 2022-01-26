import s from './SettingaPanel.module.css'
import React from "react";


type SettingPanelPropsType = {
    id: string
    minValue: number,
    maxValue: number,
    title: string,
    callBack: (value: number) => void
    error: boolean,
    setError: (value: boolean) => void
    setSetMode:(value:boolean) => void
}

export const SettingPanel = (props: SettingPanelPropsType) => {

    const onClickHandler = (e: React.MouseEvent) => {
        props.setSetMode(true)
        if (props.id === "maxSettings") {
            if (e.currentTarget.id === 'increment') {
                props.callBack(props.maxValue + 1)
                props.setError(false)
            } else
            if (props.maxValue === props.minValue ){
                 props.callBack(props.maxValue)
            props.setError(true)}
            else {props.callBack(props.maxValue - 1)
            }
        } else {
            if (e.currentTarget.id === 'increment') {
                if (props.minValue !== props.maxValue) {
                    props.callBack(props.minValue + 1)
                } else {
                    props.callBack(props.minValue)
                    props.setError(true)
                }
            } else {
                props.minValue === 0 ?
                    props.callBack(props.minValue) :
                    props.callBack(props.minValue - 1)
                props.setError(false)
            }
        }


    }


    return (
        <div className={props.error  ? s.error : s.main}>

            <button id={'decrement'}
                    className={`${s.panel} ${s.button} ${s.left}`}
                    onClick={onClickHandler}>
                -
            </button>
            <div className={s.panel}>
                {`${props.title} ${props.id === "maxSettings" ? props.maxValue : props.minValue}`}
            </div>
            <button id={'increment'}
                    className={`${s.panel}  ${s.button} ${s.right} `} onClick={onClickHandler}>
                +
            </button>

        </div>
    )
}