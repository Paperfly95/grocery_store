import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
        <h1>Hallo, was möchtest du tun?</h1>
        <Link to="/products">Zu den Produkten</Link>
    </>
  )
}
