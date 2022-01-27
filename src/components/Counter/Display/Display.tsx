import s from "./Display.module.css"

type displayPropsType = {
    displayedValue: number
    error: boolean
    setMode: boolean
    max: number
}


export const Display = (props: displayPropsType) => {

    const style = `${props.displayedValue === props.max ? s.red : s.display}`

    return (
        <div>
            {props.setMode ? <p>Set values and press 'set'</p> : ''}
            {props.error ? <p className={s.incorrect}>Incorrect value</p> : ''}
            {!props.error && !props.setMode &&
                <div className={style}>
                    {props.displayedValue}
                </div>}
        </div>

    )
}