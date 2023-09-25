import logo from './logo.svg';
import './App.css';
import Card from './components/card/card.js';
import Container from './components/container/container';
import { useState, useEffect } from 'react';
import Row from './components/row/row';


function App() {

  const [items, setItems] = useState({});
  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    fetch("../items.json").then(response => response.json()).then(data => {
      setItems(data);
      setActiveItem(items["Früchte"])
    });
  }, [])

  const callItem = () => {
    console.log(activeItem)
  }

  return (
    <div className="menu container-xxl vh-100 p-0">
      <Row classes="h-100">
        <div className="col-3 bg-primary">
          <ul>
          { Object.keys(items).map(el => {
            return ( 
              <li key={items[el][0].id} className="" onClick={callItem}>{el}</li>
            )
          }) }
          </ul>
        </div>
        <div className="col-9 bg-secondary">
          { activeItem.map(el => {
            return (
              <Card title={el.name} btnText={el.unit}></Card>
            )
          })}
        </div>
      </Row>
    </div>
  )
}

export default App;
