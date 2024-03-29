import React from "react";
import InputItem from "../inputItem/inputItem";
import { Link } from "react-router-dom";
import Button from "../button/button";

const Card = props => {
    return (
        
        <div key={props.keyName} className="card bg-white col col-md-6 col-sm-12">
            { /*<img src="..." className="card-img-top" alt="..." /> */ }
            <div className="card-body">
                { props.subProduct && <h5 className="card-title">{props.title}</h5> }
                { props.subProduct && props.activateAddItem && <InputItem item={props.title} activateButtons={true}></InputItem> }
                { !props.subProduct && <Link className="btn btn-primary" to={props.href}>{props.title}</Link> }
                { props.activateButton && <Button content={props.buttonContent} />}
            </div>       
        </div>
    )
}

export default Card;