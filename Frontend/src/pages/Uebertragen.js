import React from 'react'
import ShoppingCart from './ShoppingCart'

export default function Uebertragen() {
  return (
    <>
    <h1>Folgende Artikel befinden sich in Ihrer Einkaufsliste: </h1>
    <ShoppingCart />
    <button className="btn btn-primary">Übertragen</button>
    </>
  )
}
