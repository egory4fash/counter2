import {Button} from "./Button";

export const Settings = () => {
    return (
        <div>
            <div className='Box'>
                <select />
                <select placeholder={'max'}/>
            </div>
            <div>
                <Button title={'set?'}/>

            </div>
        </div>

    )
}