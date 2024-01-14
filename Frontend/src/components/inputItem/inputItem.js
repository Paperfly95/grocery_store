import { useState, useContext } from "react";
import Button from "../button/button";
import Input from "../input/input";
import { OutputContext } from "../../pages/ProductDetail";

const InputItem = props => {
    const [value, setValue] = useState(1);
    const outputHandler = useContext(OutputContext);

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

    const buttonInputHandler = (e) => {
        e.preventDefault();
        outputHandler("");

        const itemValue = value;
        const itemName = e.target.closest(".card-body").querySelector("h5").innerText;

        // Update Local storage by its new value if the item was already set
        if(localStorage.getItem(itemName)) {
            const localValue = +localStorage.getItem(itemName);
            localStorage.setItem(itemName, localValue + itemValue);
            outputHandler(`Weitere ${itemName} wurden ${value}x hinzugefügt. Insgesamt nun ${value + localValue} Stück`);

        } else {
            localStorage.setItem(itemName, value);
                outputHandler(`${itemName}
                 wurde ${value}x hinzugefügt`);
        }
    }

    return (
        <div className="d-flex flex-wrap gap-2">
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
            <Button content="Hinzufügen" handler={(e) => buttonInputHandler(e)}/>
        </div>
    );
};

export default InputItem;
