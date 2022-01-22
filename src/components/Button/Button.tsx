
type buttonPropsType = {
    title:string
}

export const Button = (props: buttonPropsType) => {
    return (
        <div>
            <button
                title={props.title} >{props.title}</button>
        </div>

    )
}