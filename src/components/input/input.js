import React from "react";
import classes from './input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <input ref={ref} {...props.input}></input>
        </div>
    )


});

export default Input;