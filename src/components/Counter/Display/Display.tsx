

type displayPropsType = {
    number:number
}

export const Display = (props:displayPropsType) => {
    return (
        <div>{props.number}</div>

    )
}