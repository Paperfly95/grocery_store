import React from "react";
import classes from './input.module.css';

const Input = props => {
    return (
        <div className={classes.input}>
            <input {...props.input}></input>
        </div>
    )


};

export default Input;