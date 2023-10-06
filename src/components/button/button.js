import styles from "./button.module.css";

const Button = props => {
    return <button className={`btn btn-primary ${props?.classes == undefined ? "" : props.classes} ${styles.shoppingcart}`} onClick={props.handler}>{props.content}</button>
}

export default Button;