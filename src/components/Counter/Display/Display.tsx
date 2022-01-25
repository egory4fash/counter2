import s from "./Display.module.css"

type displayPropsType = {
    number:number
}

export const Display = (props:displayPropsType) => {
    return (
        <div className = {s.display}>{props.number}</div>

    )
}