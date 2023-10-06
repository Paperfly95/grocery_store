import logo from './logo.svg';
import './App.css';
import Card from './components/card/card.js';
import Container from './components/container/container';
import { useState, useEffect } from 'react';
import Row from './components/row/row';
import Shoppingcart from './components/shoppingCart/shoppingCart';


function App() {

  const [items, setItems] = useState({});
  const [activeItem, setActiveItem] = useState({Früchte: []});


  useEffect(() => {
    fetch("../items.json").then(response => response.json()).then(data => {
      setItems(data);
      setActiveItem({"Früchte": data["Früchte"]});
    });
  }, []);

  const callItem = (e) => {
    const item = e.target.textContent;
    setActiveItem({ [item]: items[item]});
  }

  return (
    <div className="menu container-xxl p-0">
      <Row classes="h-100">
        <div className="col-3 vh-100 position-sticky top-0 d-flex bg-light d-flex justify-content-center align-items-center">
          <ul className="list-group cursor-pointer">
          { Object.keys(items).map(el => {
            return ( 
              <li key={items[el][0].id} className={`list-group-item list-group-item-secondary${el === Object.keys(activeItem)[0] ? "active" : ""}`} onClick={callItem}>{el}</li>
            )
          }) }
          </ul>
        </div>
        <div className="col-9 bg-secondary d-flex flex-wrap gap-2 p-2">
          <div className="container m-0">
            <div className="row">
            { activeItem[Object.keys(activeItem)].map(el => {
              return (
                <Card title={el.name} keyName={el.id}></Card>
              )
            })}
            </div>
          </div>
        </div>
      </Row>
      <Shoppingcart/>
    </div>
  )
}

export default App;
