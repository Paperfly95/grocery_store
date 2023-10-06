import React from "react";
import InputItem from "../inputItem/inputItem";

const Card = props => {
    return (
        <div key={props.keyName} className="card bg-white col col-md-6 col-sm-12">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <InputItem activateButtons={true}></InputItem>
            </div>       
        </div>
    )
}

export default Card;