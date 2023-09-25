const Container = props => {
    return (
    <div className={props.containerSize}>
        { props.children }    
    </div>)
}

export default Container;