import React from 'react'
import { json, useLoaderData, useLocation } from 'react-router';
import { Outlet } from 'react-router-dom'
import Card from '../components/card/card';

export const Product = () => {

    const { pathname } = useLocation();
    let { items } = useLoaderData("product-overview-loader");

    return (
        <>
        { 
            pathname === "/products" && items.map(item => {
                return (
                    <Card key={Object.keys(item)[0]} href={Object.keys(item)[0]} title={Object.keys(item)[0]}></Card>
                )
            })
        }
            <Outlet />
        </>
    )
}

export async function loader() {
    const response = await fetch("http://localhost:8080/");

    if(!response.ok) {
        return json({message: 'Could not fetch items.'}, { status: 500});
    } else {
        return response;
    }
}