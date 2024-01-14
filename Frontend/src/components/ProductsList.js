import React from 'react'
import Card from './card/card'

export default function ProductsList({ subProducts, outputHandler }) {
  return (
    <>
        { subProducts.map(product => {
            return (
                <Card outputHandler={outputHandler} subProduct={true} key={product.id} title={product.name} />
            )
            })
        }
    </>
  )
}
