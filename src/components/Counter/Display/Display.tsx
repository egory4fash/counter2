import s from "./Display.module.css"

type displayPropsType = {
    number:number
    error:boolean
    setMode:boolean
    max:number
}


export const Display = (props:displayPropsType) => {

const style = `${props.number !==props.max ? s.display: s.red}`

    return (
        <div className = {style}>
            {props.error?"Incorrect value":
            props.setMode?"Set values and press 'set'" : props.number}</div>

    )
}