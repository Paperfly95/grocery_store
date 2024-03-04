import React from 'react'
import { useState, useEffect } from 'react';

import DisplayCard from '../components/card/displayCard'
import { useLoaderData, json } from 'react-router';

export default function Abrufen() {

  const data = useLoaderData("basket-loader");
  const [localStorageItems, setLocalStorageItems] = useState([]); 
  
  const buttonHandler = (e) => {
    const deleteItem =  e.target.closest(".card-body").querySelector("h5").innerText;

    localStorage.removeItem(deleteItem);
    setLocalStorageItems({ ...localStorage });
  }

  useEffect(() => {
    console.log(data);
    setLocalStorageItems([...localStorageItems, ...data]);
  }, [data])

  return (
    <div>
      <h1>Folgender Einkauf befindet sich in Ihrer Einkaufsliste:</h1>
      { localStorageItems.length === 0 && <p>Kein Einkauf im Warenkorb vorhanden.</p> }
      { 
      localStorageItems.map(obj => {
        const [key, value] = Object.entries(obj);
        return <DisplayCard key={key} title={key[0]} amount={key[1]} buttonContent="Entfernen" buttonHandler={buttonHandler} />
      })
      }
    </div>
  )
}

export async function loader ({ request }) {
   const response = await fetch("http://localhost:8080/basket");
   if(!response.ok) {
    return json({message: 'Could not fetch items.'}, { status: 500});
    } else {
      const data = await response.json();
      return json(data);
    }
}
