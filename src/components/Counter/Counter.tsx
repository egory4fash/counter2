
import {Button} from "../Button/Button";
import s from "./Counter.module.css"



export const Counter = () => {
    return (
        <div className={s.box}>
            <div>
            </div>
            <div className = {s.buttons}>
                <Button title={'add'}/>

                <Button title={'reset'}/>
            </div>
        </div>
    )
}