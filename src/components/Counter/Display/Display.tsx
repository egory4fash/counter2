import s from "./Display.module.css"

type displayPropsType = {
    number:number
    error:boolean
    setMode:boolean
}

export const Display = (props:displayPropsType) => {
    return (
        <div className = {s.display}>{props.error?"Incorrect value":
            props.setMode?"Set values and press 'set'" : props.number}</div>

    )
}