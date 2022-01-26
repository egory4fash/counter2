
import {Button} from "../Button/Button";
import s from "./Counter.module.css"

type CounterPropsType = {
    error:boolean
}


export const Counter = (props:CounterPropsType) => {
    return (
        <div className={s.box}>
            <div>
            </div>
            {/*<div className = {s.buttons}>*/}
            {/*    <Button error={props.error} title={'add'}/>*/}

            {/*    <Button */}
            {/*        error={props.error}*/}
            {/*        title={'reset'}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    )
}