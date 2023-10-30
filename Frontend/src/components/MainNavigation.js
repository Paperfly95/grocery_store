import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

export const MainNavigation = () => {

    const data = useLoaderData();
    const items = data.items;


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 vh-100">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav flex-column d-flex">
                    <li className="nav-item">
                        <Link className="nav-link my-3" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link my-3" to="/checkout">Übertragen</Link>
                    </li>

                    { items.map(item => {
                        return (
                            <li key={Object.keys(item)[0]} className="nav-item">
                                <Link className="nav-link" product={item} to={`products/${Object.keys(item)[0]}`}> {Object.keys(item)[0]} </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}
