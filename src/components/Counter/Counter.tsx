import {Display} from "./Display/Display";
import {Button} from "../Button/Button";

type counterPropsType = {
    number:number
}

export const Counter = (props:counterPropsType) => {
    return (
        <div className='Box'>
            <div>display
                <Display number = {props.number}/>
            </div>
            <div>
                <Button title={'add'}/>

                <Button title={'reset'}/>
            </div>
        </div>
    )
}