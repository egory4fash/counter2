import s from './Button.module.css'


type buttonPropsType = {
    title: string,
    error: boolean,
    callBack: () => void

}

export const Button = (props: buttonPropsType) => {
    return (
        <div>
            <button className={s.button}
                    disabled={props.error}
                    onClick={props.callBack}>
                {props.title}
            </button>
        </div>
    )
}