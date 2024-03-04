import React, { useState, useEffect } from 'react'
import Card from '../components/card/card';

export default function Uebertragen() {

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const items = {...localStorage};
    console.log(items);
    setBasket(Object.entries(items).map(([key, val]) => {
      return {[key]: val}
    }));
  }, [])

  const handleClick = async (url) => {
   const response = await fetch(url, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(basket)
   });
  }

  return (
    <>
    <div className="d-flex flex-column w-50">
      <div>
      <h1>Folgende Artikel befinden sich nun bereit zum übertragen:</h1>
      { basket.length > 0 && (
        basket.map(item => {
          const [key, val] = Object.entries(item)[0];
          return (
           <Card subProduct={true} keyName={key} activateButton={true} title={key} buttonContent="Entfernen" />
        )})
        )}
      </div>
      <button className="btn btn-primary" onClick={() => handleClick("http://localhost:8080/submit")}>Übertragung starten</button>
    </div>
    </>
  )
}
