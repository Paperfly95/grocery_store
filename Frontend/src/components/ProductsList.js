import React from 'react'
import Card from './card/card'

export default function ProductsList({ subProducts }) {
  return (
    <>
        { subProducts.map(product => {
            return (
                <Card subProduct={true} key={product.id} title={product.name} />
            )
            })
        }
    </>
  )
}
