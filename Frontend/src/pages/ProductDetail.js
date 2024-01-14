import React, { useState, createContext, useEffect } from 'react'
import ProductsList from '../components/ProductsList'
import { useRouteLoaderData } from "react-router-dom"
import { useActionData } from 'react-router-dom'
import { json } from 'react-router-dom'

export const OutputContext = createContext();

export const ProductDetail = () => {
  const { item } = useRouteLoaderData("product-loader")
  const data = useActionData();
  const [output, setOutput] = useState("");

  const outputTimeout = () => {

    setOutput("");
  }

  useEffect(() => {
    
    const timeOut = setTimeout(() => setOutput(""), 5000);
    
    return () => {
      clearTimeout(timeOut);
    }
  }, [output])

  return (
    <>
        { output && <div className={`banner`}>{output}</div> }
        <OutputContext.Provider value={(output) => setOutput(output)}>
          <ProductsList subProducts={Object.values(item)[0]}/>
        </OutputContext.Provider>
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
  console.log(data)

  const enteredValue = {
    item: data.get('item'),
    amount: data.get('value')
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
}