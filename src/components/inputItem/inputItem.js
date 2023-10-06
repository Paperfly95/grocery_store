import { useRef, useReducer, useCallback } from "react";
import Button from "../button/button";
import Input from "../input/input";

const handleInputValue = (state, action) => {
    if(action.type == "add") {
        action.ref.current.value = state + 1;
        console.log(action.ref)
        return state + 1;
    } else {
        return state - 1;
    }
}

const InputItem = props => {

    const inputRef = useRef(0);
    const [inputValue, dispatchInputValue] = useReducer(handleInputValue, 1)

    const validateForm = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={validateForm}>
        { props.activateButtons && 
            <Button content={"+"} handler={() => dispatchInputValue({type: "add", ref: inputRef})}/> 
        }
        <Input ref={inputRef} input={{
            type: 'number',
            min: '1',
            max: '15',
            defaultValue: inputValue
        }} />
        { props.activateButtons && 
            <Button content={"-"} handler={() => dispatchInputValue({type: "substract"})}/>
        }
        <Input input={{
            type: 'submit',
            value: "Hinzufügen",
        }} />
        </form>
    )
}

export default InputItem;