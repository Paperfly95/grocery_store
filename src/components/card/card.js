import React from "react";
import InputItem from "../inputItem/inputItem";

const Card = props => {
    return (
        <div className="card bg-white">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <InputItem activateButtons={true}></InputItem>
            </div>       
        </div>
    )
}

export default Card;