import { useState } from "react";
import Button from "../button/button";
import Input from "../input/input";
import { Form } from "react-router-dom";

const InputItem = props => {
    const [value, setValue] = useState(1);

    const buttonHandler = (e, type) => {
        e.preventDefault();
        setValue(prevValue => {
            if (type === "increase" && prevValue < 15) {
                return prevValue + 1;
            } else if (type === "decrease" && prevValue > 1) {
                return prevValue - 1;
            } else {
                return prevValue;
            }
        });
    };

    return (
        <Form method="post" className="d-flex flex-wrap gap-2">
            <input type="hidden" id={props.item} name="item" defaultValue={props.item} />
            <Input
                input={{
                    type: 'number',
                    min: '1',
                    max: '15',
                    value: value,
                    name: "value",
                    onChange: (e) => setValue(e.target.value) // Hinzugefügter onChange-Handler
                }}
            />
            {props.activateButtons && (
                <>
                    <button className="btn btn-primary" onClick={(e) => buttonHandler(e, "increase")}>+</button>
                    <button className="btn btn-primary" onClick={(e) => buttonHandler(e, "decrease")}>-</button>
                </>
            )}
            <Input
                input={{
                    type: 'submit',
                    value: "Hinzufügen",
                }}
            />
        </Form>
    );
};

export default InputItem;
