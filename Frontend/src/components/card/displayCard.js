import Button from "../button/button";

const DisplayCard = props => {
    return (
        <div key={props.keyName} className="card bg-white col col-md-6 col-sm-12">
            { /*<img src="..." className="card-img-top" alt="..." /> */ }
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5> 
                <Button content={props.buttonContent} handler={props.buttonHandler} />
            </div>       
        </div>
    )
}

export default DisplayCard;