import {Button} from "../Button/Button";
import s from "./Counter.module.css"

type CounterPropsType = {
    error: boolean,
    increaseCounter: () => void,
    resetCounter: () => void
    setMode: boolean
}


export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.box}>
            <div>
            </div>
            <div className={s.buttons}>
                <Button
                    error={props.error || props.setMode}
                    title={'add'}
                    callBack={props.increaseCounter}/>

                <Button
                    error={props.setMode}
                    title={'reset'}
                    callBack={props.resetCounter}
                />
            </div>
        </div>
    )
}