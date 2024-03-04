import React from 'react'
import { useState } from 'react';

import DisplayCard from '../components/card/displayCard'

export default function Abrufen() {

  const [localStorageItems, setLocalStorageItems] = useState(localStorage); 
  
  const buttonHandler = (e) => {
    const deleteItem =  e.target.closest(".card-body").querySelector("h5").innerText;

    localStorage.removeItem(deleteItem);
    setLocalStorageItems({ ...localStorage });
  }

  return (
    <>
      <h1>Folgender Einkauf befindet sich in Ihrer Einkaufsliste:</h1>
      { 
      Object.entries(localStorageItems).map((key, value) => {
        return <DisplayCard key={key} title={key[0]} buttonContent="Entfernen" buttonHandler={buttonHandler} />
      })
      }
    </>
  )
}
