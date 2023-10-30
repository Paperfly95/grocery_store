import React from 'react'
import ProductsList from '../components/ProductsList'
import { useRouteLoaderData } from "react-router-dom"
import { useActionData } from 'react-router-dom'
import { json } from 'react-router-dom'

export const ProductDetail = () => {
  const { item } = useRouteLoaderData("product-loader")
  const data = useActionData();

  return (
    <>
        <ProductsList subProducts={Object.values(item)[0]}/>
    </>

  )
}

export async function loader({ request, params}) {
    const id = params.id;

    const response = await fetch("http://localhost:8080/items/" + id);
    console.log(response);
    return response;
}

export async function action({request, params}) {
  const id = params.id;
  const data = await request.formData();
  console.log(id, data)

  const enteredValue = {
    value: data.get('value')
  }

  const response = await fetch("http://localhost:8080/items/" + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(enteredValue)
  });

  if(!response.ok) {
    throw json({message: "Could not save event"}, { status: 500 })
  }
  console.log(response, enteredValue);
}