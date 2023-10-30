import { useRef, useReducer, useCallback } from "react";
import Button from "../button/button";
import Input from "../input/input";
import { Form } from "react-router-dom";

const handleInputValue = (state, action) => {
    if(action.type == "add") {
        action.ref.current.value = state + 1;
        return state + 1;
    } else {
        action.ref.current.value = state <= 1 ? state : state - 1;
        return state <= 1 ? state : state - 1;
    }
}

const InputItem = props => {

    const inputRef = useRef(0);
    const [inputValue, dispatchInputValue] = useReducer(handleInputValue, 1)

    const validateForm = (e) => {
        e.preventDefault();
    }

    return (
        <Form method="post" className="d-flex flex-wrap gap-2">
            <Input ref={inputRef} input={{
                type: 'number',
                min: '1',
                max: '15',
                defaultValue: inputValue,
                name: "value"
            }} />
            { props.activateButtons && 
                <>
                    <Button content={"+"} handler={() => dispatchInputValue({type: "add", ref: inputRef})}/> 
                    <Button content={"-"} handler={() => dispatchInputValue({type: "substract", ref: inputRef})}/>
                </>
            }
            <Input input={{
                type: 'submit',
                value: "Hinzufügen",
            }} />
        </Form>
    )
}

export default InputItem;