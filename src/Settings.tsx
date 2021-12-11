import {Button} from "./Button";
import {Input} from "./Input";

export const Settings = () => {
    return (
        <div>
            <div className='Box'>
                <Input/>input1
                <Input/>input2
            </div>
            <div>
                <Button title={'set?'}/>

            </div>
        </div>

    )
}